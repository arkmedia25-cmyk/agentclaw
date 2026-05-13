'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 3000)
    }, 800)
  }

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <h1 className="text-white mb-4">Contact</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Heb je vragen, feedback, of wil je je ervaring delen? Neem contact op.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <section className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <Mail className="text-accent mx-auto mb-3" size={40} />
            <h3 className="font-bold text-primary mb-2">Email</h3>
            <p className="text-sm text-text-muted mb-4">Voor vragen en opmerkingen</p>
            <a href="mailto:contact@amarereview.nl" className="text-accent font-bold hover:underline">
              contact@amarereview.nl
            </a>
          </div>

          <div className="card text-center">
            <MessageSquare className="text-accent mx-auto mb-3" size={40} />
            <h3 className="font-bold text-primary mb-2">Contactformulier</h3>
            <p className="text-sm text-text-muted mb-4">Snelste manier om me te bereiken</p>
            <p className="text-xs text-text-muted">Antwoord binnen 24 uur</p>
          </div>

          <div className="card text-center">
            <Phone className="text-accent mx-auto mb-3" size={40} />
            <h3 className="font-bold text-primary mb-2">Telefonisch</h3>
            <p className="text-sm text-text-muted mb-4">Maandag-vrijdag, 9am-5pm</p>
            <p className="text-xs text-text-muted">Na mail contact</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-bg-soft">
        <div className="container-max section-padding">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-center mb-8">Stuur ons een bericht</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-bold text-primary mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-accent transition"
                  placeholder="Je naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-bold text-primary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-accent transition"
                  placeholder="je@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block font-bold text-primary mb-2">
                  Onderwerp *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-accent transition"
                >
                  <option value="">Kies een onderwerp</option>
                  <option value="product-question">Vraag over product</option>
                  <option value="experience">Deel mijn ervaring</option>
                  <option value="suggestion">Suggestie voor review</option>
                  <option value="correction">Correctie / Fout rapporteren</option>
                  <option value="partnership">Partnership / Samenwerking</option>
                  <option value="other">Overig</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-bold text-primary mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-accent transition resize-none"
                  placeholder="Wat wil je graag vertellen?"
                />
              </div>

              {formStatus === 'success' && (
                <div className="bg-success text-white p-4 rounded-lg">
                  ✓ Bedankt! Je bericht is verzonden. Ik antwoord zo snel mogelijk.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-error text-white p-4 rounded-lg">
                  ✗ Er is een fout opgetreden. Probeer het later opnieuw of mail contact@amarereview.nl
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? 'Verzenden...' : 'Verzend Bericht'}
              </button>

              <p className="text-xs text-text-muted text-center">
                We respecteren je privacy. Je email zal niet gedeeld worden.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-max section-padding">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-lg p-8 text-white text-center">
            <h2 className="mb-4">Wil je updates ontvangen?</h2>
            <p className="opacity-90 mb-6">
              Ontvang nieuwe reviews en tips rechtstreeks in je inbox. Geen spam, uitsluitend waardevolle inhoud.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 mb-4"
              onSubmit={(e) => {
                e.preventDefault()
                const email = (e.currentTarget.elements.namedItem('nl-email') as HTMLInputElement)?.value
                if (email) {
                  // Store PII in sessionStorage, never in URL params
                  sessionStorage.setItem('lead_email', email)
                  sessionStorage.setItem('lead_source', 'nieuwsbrief')
                  window.open('https://amarenl.com/optin?source=nieuwsbrief', '_blank', 'noopener,noreferrer')
                }
              }}
            >
              <input
                type="email"
                name="nl-email"
                placeholder="je@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-secondary">Inschrijven</button>
            </form>

            <p className="text-xs opacity-75">
              Abonneren op de nieuwsbrief betekent je hebt ingestemd met ons privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft">
        <div className="container-max section-padding">
          <h2 className="text-center mb-8">Veelgestelde Vragen</h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="card">
              <h3 className="font-bold text-primary mb-2">Hoe snel antwoord ik?</h3>
              <p className="text-sm text-text-muted">
                Ik probeer alle berichten binnen 24 uur te beantwoorden. Tijdens piekperiodes kan het wat langer duren.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-2">Zal mijn email gedeeld worden?</h3>
              <p className="text-sm text-text-muted">
                Nee, nooit. We respecteren je privacy volledig. Je email wordt alleen gebruikt om je bericht te beantwoorden.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-2">Kan ik mijn product ervaringen delen?</h3>
              <p className="text-sm text-text-muted">
                Ja! Via het contactformulier kun je je ervaring delen. We gebruiken echte feedback voor onze reviews en
                artikelen.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-2">Hoe kan ik een review suggereren?</h3>
              <p className="text-sm text-text-muted">
                Gebruik het contactformulier en kies "Suggestie voor review". Laat me weten welk product je graag reviewed zou
                zien.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-2">Wat als ik een fout vind in een review?</h3>
              <p className="text-sm text-text-muted">
                Laat het me weten! Stuur een bericht via het contactformulier met "Correctie" als onderwerp. We waarderen feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-white mb-4">Meer info over AmareReview.nl?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Lees meer over ons, onze aanpak, en hoe we werken.
          </p>
          <Link href="/over-ons" className="btn-secondary">
            Over ons
          </Link>
        </div>
      </section>
    </>
  )
}
