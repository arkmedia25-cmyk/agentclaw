export interface LeadMagnet {
  keyword: string
  problem: string
  offerTitle: string
  offerDescription: string
  magnetType: 'pdf' | 'checklist' | 'email-series' | 'quiz'
  ctaLabel: string
  amareNLUrl: string
}

export interface LeadData {
  email: string
  name?: string
  source: string
}

export const AMARE_OPTIN_URL = 'https://amarenl.com/optin'

export function buildAmareUrl(source: string, extra?: Record<string, string>): string {
  const params = new URLSearchParams({ source: encodeURIComponent(source), ...extra })
  return `${AMARE_OPTIN_URL}?${params.toString()}`
}

export function storeLeadData({ email, name, source }: LeadData): void {
  sessionStorage.setItem('lead_email', email)
  sessionStorage.setItem('lead_source', source)
  if (name) sessionStorage.setItem('lead_name', name)
}

export const leadMagnets: Record<string, LeadMagnet> = {
  'happy-juice-bijwerkingen-huid': {
    keyword: 'bijwerkingen-huid',
    problem: 'Huidgevoeligheid en bijwerkingen',
    offerTitle: 'Gratis Gids: Amare & Huidveiligheid',
    offerDescription:
      "Ontdek welke ingrediënten veilig zijn voor jouw huid en hoe je bijwerkingen kunt voorkomen. 5 pagina's, direct beschikbaar.",
    magnetType: 'pdf',
    ctaLabel: 'Ontvang Gratis Huidgids →',
    amareNLUrl: `${AMARE_OPTIN_URL}?source=review&keyword=bijwerkingen-huid&product=happy-juice&magnet=huidgids`,
  },
  'darmbacteriën-gezondheid-mentabiotics': {
    keyword: 'darmbacteriën-gezondheid',
    problem: 'Darmgezondheid en probiotica',
    offerTitle: 'Gratis: Darmgezondheid Checklist + 7 Tips',
    offerDescription:
      'Praktische checklist met 7 bewezen tips om je darmbacteriën te verbeteren. Inclusief voedingsadvies en supplementen gids.',
    magnetType: 'checklist',
    ctaLabel: 'Ontvang Gratis Checklist →',
    amareNLUrl: `${AMARE_OPTIN_URL}?source=review&keyword=darmbacteriën-gezondheid&product=mentabiotics&magnet=darmchecklist`,
  },
  'edge-plus-focus-concentratie': {
    keyword: 'focus-concentratie',
    problem: 'Focus en productiviteit',
    offerTitle: 'Gratis Email Serie: 10 Natuurlijke Focus Hacks',
    offerDescription:
      '7-daagse email serie met wetenschappelijk onderbouwde technieken voor betere focus en concentratie. Geen supplements nodig.',
    magnetType: 'email-series',
    ctaLabel: 'Start Gratis Email Serie →',
    amareNLUrl: `${AMARE_OPTIN_URL}?source=review&keyword=focus-concentratie&product=edge-plus&magnet=focushacks`,
  },
}

export function getLeadMagnet(slug: string): LeadMagnet | null {
  return leadMagnets[slug] ?? null
}

export function getAmareNLUrl(slug: string, source = 'review'): string {
  return leadMagnets[slug]?.amareNLUrl ?? buildAmareUrl(source)
}
