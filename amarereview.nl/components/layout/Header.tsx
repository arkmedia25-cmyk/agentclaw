'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <nav className="container-max flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-serif font-bold text-primary text-2xl">AmareReview</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/reviews" className="text-text hover:text-primary font-medium text-sm transition">
            Reviews
          </Link>
          <Link href="/categorieen" className="text-text hover:text-primary font-medium text-sm transition">
            Categorieën
          </Link>
          <Link href="/vergelijking" className="text-text hover:text-primary font-medium text-sm transition">
            Vergelijking
          </Link>
          <Link href="/over-ons" className="text-text hover:text-primary font-medium text-sm transition">
            Over ons
          </Link>
          <Link href="/contact" className="text-text hover:text-primary font-medium text-sm transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="https://amarenl.com/optin?source=header"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-primary text-sm"
          >
            Gratis Advies
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-bg-soft transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-soft border-t border-border">
          <div className="container-max py-4 flex flex-col gap-3">
            <Link href="/reviews" className="text-text hover:text-primary font-medium text-sm py-2">
              Reviews
            </Link>
            <Link href="/categorieen" className="text-text hover:text-primary font-medium text-sm py-2">
              Categorieën
            </Link>
            <Link href="/vergelijking" className="text-text hover:text-primary font-medium text-sm py-2">
              Vergelijking
            </Link>
            <Link href="/over-ons" className="text-text hover:text-primary font-medium text-sm py-2">
              Over ons
            </Link>
            <Link href="/contact" className="text-text hover:text-primary font-medium text-sm py-2">
              Contact
            </Link>
            <Link
              href="https://amarenl.com/optin?source=header-mobiel"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-primary w-full text-center text-sm mt-2"
            >
              Gratis Advies
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
