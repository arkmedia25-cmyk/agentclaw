import Link from 'next/link'
import { AlertCircle, TrendingUp } from 'lucide-react'

export default function ReviewGuarantee() {
  return (
    <div className="bg-white border-l-4 border-accent p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex gap-3 mb-4">
        <TrendingUp size={28} className="text-accent flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-primary text-lg">RISICO-VRIJ GARANTIE</h3>
          <p className="text-sm text-text-muted">Jouw voordelen:</p>
        </div>
      </div>

      <div className="space-y-3 mb-5">
        <div className="flex gap-3">
          <span className="text-accent font-bold text-xl leading-none">💰</span>
          <div>
            <p className="font-bold text-primary text-sm">€8 Korting</p>
            <p className="text-xs text-text-muted">Op je eerste bestelling via onze link</p>
          </div>
        </div>

        <div className="flex gap-3">
          <span className="text-accent font-bold text-xl leading-none">📦</span>
          <div>
            <p className="font-bold text-primary text-sm">30 Dagen Geld Terug</p>
            <p className="text-xs text-text-muted">Geen resultaat? Volledig geld terug</p>
          </div>
        </div>

        <div className="flex gap-3">
          <span className="text-accent font-bold text-xl leading-none">🚚</span>
          <div>
            <p className="font-bold text-primary text-sm">Gratis Retour</p>
            <p className="text-xs text-text-muted">Wij betalen alle retourkosten</p>
          </div>
        </div>
      </div>

      <div className="bg-primary text-white px-4 py-3 rounded mb-4 text-xs">
        <p className="font-bold mb-1">⚠️ BELANGRIJK:</p>
        <p>Stuur je lege verpakkingen terug en ontvang je geld volledig gerestitueerd. Geen verborgen voorwaarden.</p>
      </div>

      <Link
        href="https://amarenl.com/optin?source=review-garantie"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full bg-accent text-white font-bold py-3 px-4 rounded text-center hover:bg-amber-600 transition"
      >
        Bestel Met Garantie →
      </Link>

      <p className="text-xs text-text-muted text-center mt-3">
        ⚠️ We verdienen commissie. Dit verandert je prijs niet.
      </p>
    </div>
  )
}
