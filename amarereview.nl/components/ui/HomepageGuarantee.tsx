import Link from 'next/link'
import { Shield } from 'lucide-react'
import { AMARE_OPTIN_URL } from '@/lib/leadMagnets'

export default function HomepageGuarantee() {
  return (
    <div className="bg-gradient-to-r from-accent to-primary text-white py-8">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Icon + Main message */}
          <div className="flex items-start gap-4 flex-1">
            <Shield size={48} className="flex-shrink-0 text-white" />
            <div>
              <h3 className="text-2xl font-bold mb-2">⭐ 30 DAGEN GELD TERUG GARANTIE</h3>
              <p className="text-lg opacity-95">
                Bestel vandaag en ontvang direct <strong>€8 korting</strong>. Geen resultaat? Stuur je lege verpakkingen terug — <strong>wij betalen de retourkosten</strong>.
              </p>
              <p className="text-sm opacity-85 mt-2">✓ Geen vragen gesteld • ✓ Volledige restitutie • ✓ Gratis retour</p>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="flex-shrink-0">
            <Link
              href={`${AMARE_OPTIN_URL}?source=garantie-banner`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-block bg-white text-primary font-bold px-8 py-4 rounded hover:shadow-lg transition transform hover:scale-105"
            >
              Ontvang Gratis Gids →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
