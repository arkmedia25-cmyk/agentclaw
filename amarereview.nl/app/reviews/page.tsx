'use client'

import { useState } from 'react'
import Link from 'next/link'
import ReviewCard from '@/components/ui/ReviewCard'
import { Search } from 'lucide-react'

const CATEGORIES = ['Alle', 'Beauty', 'Focus', 'Health', 'Slaap', 'Gewicht'] as const

const allReviews = [
  {
    slug: 'happy-juice-bijwerkingen-huid',
    title: 'Happy Juice Bijwerkingen & Huid',
    excerpt: 'Is Happy Juice veilig voor je huid? We onderzoeken ingrediënten en ervaringen.',
    rating: 4.3,
    category: 'Beauty',
    image: '/images/reviews/placeholder-1.svg',
    pros: ['Natuurlijke ingrediënten', '30 dagen geld-terug'],
    cons: ['Duur'],
  },
  {
    slug: 'darmbacteriën-gezondheid-mentabiotics',
    title: 'Darmbacteriën & MentaBiotics',
    excerpt: 'Gut-brain axis onderzoeken: werkt MentaBiotics echt voor je darmen?',
    rating: 4.6,
    category: 'Health',
    image: '/images/reviews/placeholder-2.svg',
    pros: ['Ondersteunt darmflora', 'Goed onderzocht'],
    cons: ['Prijs'],
  },
  {
    slug: 'edge-plus-focus-concentratie',
    title: 'Edge Plus voor Focus',
    excerpt: 'Helpt Edge Plus echt met concentratie? Review voor professionals.',
    rating: 4.2,
    category: 'Focus',
    image: '/images/reviews/placeholder-3.svg',
    pros: ['Snelle werking', 'Geen bijwerkingen'],
    cons: ['Niet goedkoop'],
  },
]

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Alle')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = allReviews.filter((review) => {
    const matchesCat = activeCategory === 'Alle' || review.category === activeCategory
    const matchesSearch = !searchQuery || review.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <h1 className="text-white mb-4">Alle Amare Reviews</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Duizenden verifieerde reviews van Amare producten. Lees eerlijke opinies van echte klanten.
          </p>
        </div>
      </div>

      <div className="container-max section-padding">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Zoek reviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-primary rounded-lg focus:outline-none focus:border-accent transition"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-bg-soft text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid-auto">
            {filtered.map((review) => (
              <ReviewCard key={review.slug} {...review} />
            ))}
          </div>
        ) : (
          <p className="text-center text-text-muted py-12">
            Geen reviews gevonden voor &quot;{searchQuery || activeCategory}&quot;.
          </p>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-white mb-4">Wil je meer weten over een product?</h2>
          <p className="text-lg opacity-90 mb-6">
            Neem contact op of check onze category gidsen voor meer informatie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/over-ons" className="btn-secondary">
              Over ons
            </Link>
            <Link href="/categorieen" className="btn-secondary">
              Categorieën
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
