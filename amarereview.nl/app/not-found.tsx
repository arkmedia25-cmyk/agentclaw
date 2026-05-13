import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 | Pagina niet gevonden | AmareReview.nl',
}

export default function NotFound() {
  return (
    <div className="container-max section-padding text-center">
      <div className="max-w-lg mx-auto">
        <p className="text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="text-primary mb-4">Pagina niet gevonden</h1>
        <p className="text-text-muted mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst. Misschien vind je wat je zoekt via een van onderstaande links.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Home
          </Link>
          <Link href="/reviews" className="btn-secondary">
            Alle reviews
          </Link>
          <Link href="/categorieen" className="btn-secondary">
            Categorieën
          </Link>
        </div>
      </div>
    </div>
  )
}
