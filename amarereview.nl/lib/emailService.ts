/*
 * Email Service Abstraction
 * Supports: Mailchimp, ConvertKit, Klaviyo
 *
 * Set EMAIL_PROVIDER in .env.local: mailchimp | convertkit | klaviyo
 */

export interface SubscriberData {
  email: string
  name?: string
  source: string
  keyword?: string
  magnet?: string
}

type Provider = 'mailchimp' | 'convertkit' | 'klaviyo'

function getProvider(): Provider {
  return (process.env.EMAIL_PROVIDER as Provider) || 'mailchimp'
}

// ─── MAILCHIMP ──────────────────────────────────────────────────

async function subscribeMailchimp(data: SubscriberData): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.MAILCHIMP_API_KEY
  const listId = process.env.MAILCHIMP_LIST_ID
  const server = process.env.MAILCHIMP_SERVER || apiKey?.split('-')[1]

  if (!apiKey || !listId || !server) {
    return { success: false, error: 'Mailchimp not configured' }
  }

  const tags = [data.source]
  if (data.keyword) tags.push(`kw-${data.keyword}`)
  if (data.magnet) tags.push(`magnet-${data.magnet}`)

  const body = {
    email_address: data.email,
    status: 'subscribed',
    merge_fields: {
      FNAME: data.name || '',
      SOURCE: data.source,
      KEYWORD: data.keyword || '',
      MAGNET: data.magnet || '',
    },
    tags,
  }

  try {
    const res = await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (res.status === 400) {
      const json = await res.json()
      if (json.title === 'Member Exists') {
        // Update existing subscriber tags
        const subscriberHash = Buffer.from(data.email.toLowerCase()).toString('hex')
        await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriberHash}/tags`, {
          method: 'POST',
          headers: {
            Authorization: `apikey ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ tags: tags.map((name) => ({ name, status: 'active' })) }),
        })
        return { success: true }
      }
      return { success: false, error: json.detail || 'Mailchimp error' }
    }

    if (!res.ok) {
      const json = await res.json()
      return { success: false, error: json.detail || `Mailchimp error ${res.status}` }
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Network error' }
  }
}

// ─── CONVERTKIT ─────────────────────────────────────────────────

async function subscribeConvertKit(data: SubscriberData): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.CONVERTKIT_API_KEY
  const formId = process.env.CONVERTKIT_FORM_ID

  if (!apiKey || !formId) {
    return { success: false, error: 'ConvertKit not configured' }
  }

  const body: Record<string, string> = {
    api_key: apiKey,
    email: data.email,
    first_name: data.name || '',
  }

  if (data.source) body.tags = data.source

  try {
    const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const json = await res.json()

    if (!res.ok) {
      return { success: false, error: json.message || `ConvertKit error ${res.status}` }
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Network error' }
  }
}

// ─── KLAVIYO ────────────────────────────────────────────────────

async function subscribeKlaviyo(data: SubscriberData): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.KLAVIYO_API_KEY
  const listId = process.env.KLAVIYO_LIST_ID

  if (!apiKey || !listId) {
    return { success: false, error: 'Klaviyo not configured' }
  }

  const body = {
    data: {
      type: 'subscription',
      attributes: {
        email: data.email,
        properties: {
          first_name: data.name || '',
          source: data.source,
          keyword: data.keyword || '',
          magnet: data.magnet || '',
        },
      },
      relationships: {
        list: {
          data: { type: 'list', id: listId },
        },
      },
    },
  }

  try {
    const res = await fetch('https://a.klaviyo.com/api/subscriptions/', {
      method: 'POST',
      headers: {
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        'Content-Type': 'application/json',
        revision: '2024-06-15',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const json = await res.json()
      return { success: false, error: json.errors?.[0]?.detail || `Klaviyo error ${res.status}` }
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Network error' }
  }
}

// ─── MAIN ───────────────────────────────────────────────────────

export async function subscribe(data: SubscriberData): Promise<{ success: boolean; error?: string }> {
  const provider = getProvider()

  switch (provider) {
    case 'convertkit':
      return subscribeConvertKit(data)
    case 'klaviyo':
      return subscribeKlaviyo(data)
    case 'mailchimp':
    default:
      return subscribeMailchimp(data)
  }
}
