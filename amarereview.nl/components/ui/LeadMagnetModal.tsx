'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Mail, Gift } from 'lucide-react'
import { storeLeadData, type LeadMagnet } from '@/lib/leadMagnets'

interface LeadMagnetModalProps {
  magnet: LeadMagnet
  articleSlug: string
}

export default function LeadMagnetModal({ magnet, articleSlug }: LeadMagnetModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const dismissedRef = useRef(false)

  const show = () => {
    if (!dismissedRef.current) setIsVisible(true)
  }

  useEffect(() => {
    if (sessionStorage.getItem(`modal_dismissed_${articleSlug}`)) {
      dismissedRef.current = true
      return
    }

    const timer = setTimeout(show, 30000)

    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const handleScroll = () => {
      if (scrollable > 0 && (window.scrollY / scrollable) * 100 >= 50) {
        show()
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [articleSlug])

  const dismiss = () => {
    setIsVisible(false)
    dismissedRef.current = true
    sessionStorage.setItem(`modal_dismissed_${articleSlug}`, '1')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return

    setLoading(true)
    storeLeadData({ email, name: name || undefined, source: articleSlug })

    // Submit to API (fire-and-forget)
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name: name || undefined,
        source: articleSlug,
        keyword: magnet.keyword,
        magnet: magnet.magnetType,
      }),
    }).catch(() => { /* non-blocking */ })

    setSubmitted(true)
    setLoading(false)

    setTimeout(() => {
      window.open(magnet.amareNLUrl, '_blank', 'noopener,noreferrer')
      dismiss()
    }, 1200)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={dismiss} aria-hidden="true" />

      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden">
        <div className="bg-primary px-6 py-4">
          <button
            onClick={dismiss}
            className="absolute top-3 right-3 text-white/70 hover:text-white transition"
            aria-label="Sluiten"
          >
            <X size={20} />
          </button>
          <div className="flex items-center gap-3">
            <Gift size={24} className="text-accent flex-shrink-0" />
            <p className="text-white font-bold text-sm uppercase tracking-wide">Gratis voor jou</p>
          </div>
          <h2 className="text-white text-xl font-bold mt-2 leading-tight">{magnet.offerTitle}</h2>
        </div>

        <div className="px-6 py-5">
          {!submitted ? (
            <>
              <p className="text-text-muted text-sm mb-5 leading-relaxed">{magnet.offerDescription}</p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-text mb-1">Naam</label>
                  <input
                    id="modal-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jouw voornaam"
                    className="w-full border border-border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-text mb-1">
                    Email <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jouw@email.nl"
                      className="w-full border border-border rounded pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-red-700 text-white font-bold py-3 px-4 rounded transition text-sm disabled:opacity-70"
                >
                  {loading ? 'Even geduld...' : magnet.ctaLabel}
                </button>
              </form>

              <p className="text-xs text-text-muted text-center mt-3">
                Geen spam. Uitschrijven kan altijd. Privacy gewaarborgd.
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold text-primary mb-1">Bedankt!</p>
              <p className="text-sm text-text-muted">Je wordt doorgestuurd naar je gratis gids...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
