'use client'

import { ExternalLink } from 'lucide-react'
import { AMARE_OPTIN_URL } from '@/lib/leadMagnets'

interface AffiliateCTAProps {
  label?: string
  product?: string
  keyword?: string
  variant?: 'primary' | 'secondary'
}

export default function AffiliateCTA({
  label = 'Meer Informatie →',
  product = '',
  keyword = '',
  variant = 'primary',
}: AffiliateCTAProps) {
  const params = new URLSearchParams({ source: 'amarereview-cta' })
  if (product) params.set('product', product)
  if (keyword) params.set('keyword', keyword)
  const href = `${AMARE_OPTIN_URL}?${params.toString()}`

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`inline-flex items-center gap-2 font-bold transition-all duration-300 ${
        variant === 'primary' ? 'btn-primary' : 'btn-secondary'
      }`}
    >
      {label}
      <ExternalLink size={18} />
    </a>
  )
}
