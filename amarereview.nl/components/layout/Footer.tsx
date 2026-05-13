'use client'

import Link from 'next/link'
import { Facebook, Youtube, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif font-bold text-xl mb-3">AmareReview.nl</h3>
            <p className="text-sm opacity-85 leading-relaxed">
              Onafhankelijke, transparante reviews van Amare producten. We helpen je goed geïnformeerde keuzes te maken.
            </p>
          </div>

          {/* Navigatie */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/reviews" className="opacity-85 hover:opacity-100 transition">
                  Alle Reviews
                </Link>
              </li>
              <li>
                <Link href="/categorieen" className="opacity-85 hover:opacity-100 transition">
                  Categorieën
                </Link>
              </li>
              <li>
                <Link href="/vergelijking" className="opacity-85 hover:opacity-100 transition">
                  Vergelijking
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-85 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informatie */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Informatie</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/over-ons" className="opacity-85 hover:opacity-100 transition">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/privacybeleid" className="opacity-85 hover:opacity-100 transition">
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="opacity-85 hover:opacity-100 transition">
                  Disclaimer
                </Link>
              </li>
              <li>
                <a href="https://amarenl.com" className="opacity-85 hover:opacity-100 transition">
                  Amare Producten
                </a>
              </li>
            </ul>
          </div>

          {/* Volg ons */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase">Volg Ons</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-85 hover:opacity-100 transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-85 hover:opacity-100 transition" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="opacity-85 hover:opacity-100 transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-white/10 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-75">
          <p>© 2026 AmareReview.nl. Alle rechten voorbehouden.</p>
          <div className="text-center">
            <p>⚠️ <strong>Affiliate Disclosure:</strong> We verdienen commissie wanneer je via onze links koopt. Dit verandert je prijs niet.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
