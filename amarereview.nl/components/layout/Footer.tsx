import Link from 'next/link'
import { Facebook, Youtube, Twitter, Shield } from 'lucide-react'

const footerLinks = {
  navigatie: [
    { href: '/reviews', label: 'Alle Reviews' },
    { href: '/categorieen', label: 'Categorieën' },
    { href: '/vergelijking', label: 'Vergelijking' },
    { href: '/contact', label: 'Contact' },
  ],
  informatie: [
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/privacybeleid', label: 'Privacybeleid' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: 'https://amarenl.com', label: 'Amare Producten' },
  ],
}

export default function Footer() {
  return (
    <footer>
      <div className="container-max">
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Shield size={20} className="text-accent" />
                <span className="font-serif font-bold text-white text-xl">
                  Amare<span className="text-accent">Review</span>
                </span>
              </Link>
              <p className="text-sm opacity-75 leading-relaxed">
                Onafhankelijke, transparante reviews van Amare producten. We helpen Nederlanders goed geïnformeerde keuzes te maken.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="opacity-60 hover:opacity-100 transition" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="opacity-60 hover:opacity-100 transition" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
                <a href="#" className="opacity-60 hover:opacity-100 transition" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Navigatie */}
            <div>
              <h6 className="text-white/60 text-xs uppercase tracking-wider mb-4">Navigatie</h6>
              <ul className="space-y-3 text-sm">
                {footerLinks.navigatie.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="opacity-65 hover:opacity-100 transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informatie */}
            <div>
              <h6 className="text-white/60 text-xs uppercase tracking-wider mb-4">Informatie</h6>
              <ul className="space-y-3 text-sm">
                {footerLinks.informatie.map(link => (
                  <li key={link.href}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} className="opacity-65 hover:opacity-100 transition">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="opacity-65 hover:opacity-100 transition">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust */}
            <div>
              <h6 className="text-white/60 text-xs uppercase tracking-wider mb-4">Waarom Ons</h6>
              <ul className="space-y-3 text-sm opacity-65">
                <li className="flex items-start gap-2">
                  <span className="text-success text-sm mt-0.5">✓</span>
                  <span>Onafhankelijke testmethodologie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success text-sm mt-0.5">✓</span>
                  <span>Transparante affiliate disclosure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success text-sm mt-0.5">✓</span>
                  <span>E-E-A-T conforme medische disclaimers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success text-sm mt-0.5">✓</span>
                  <span>Gebaseerd op wetenschappelijk bewijs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-white/8 mb-6" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs opacity-50">
            <p>© 2026 AmareReview.nl. Alle rechten voorbehouden.</p>
            <p>
              <strong>Affiliate Disclosure:</strong> We verdienen commissie via links. Dit beïnvloedt onze reviews niet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
