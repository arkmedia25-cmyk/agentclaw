'use client'

import Link from 'next/link'
import { Menu, X, Shield } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/reviews', label: 'Reviews' },
  { href: '/categorieen', label: 'Categorieën' },
  { href: '/vergelijking', label: 'Vergelijking' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className="container-max flex justify-between items-center py-3.5">
        <Link href="/" className="flex items-center gap-2 group">
          <Shield size={22} className="text-accent transition group-hover:text-accent" />
          <span className="font-serif font-bold text-primary text-2xl tracking-tight">
            Amare<span className="text-accent">Review</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-text-muted hover:text-primary font-medium text-sm transition px-3 py-1.5"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs text-text-muted font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            Onafhankelijk
          </span>
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
          className="md:hidden p-2 hover:bg-bg-soft rounded transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} className="text-primary" /> : <Menu size={22} className="text-primary" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg-soft border-t border-border animate-in slide-in-from-top-2 duration-200">
          <div className="container-max py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text hover:text-primary font-medium text-sm py-3 px-2 transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://amarenl.com/optin?source=header-mobiel"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="btn-primary w-full text-center text-sm mt-3"
            >
              Gratis Advies
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
