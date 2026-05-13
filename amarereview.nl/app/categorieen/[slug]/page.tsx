import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ReviewCard from '@/components/ui/ReviewCard'
import JsonLd from '@/components/ui/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/schema'

// Mock product data by category
const categoryProducts: Record<string, any> = {
  'gut-brain': {
    title: 'Gut-Brain Axis Producten',
    description: 'Producten die de connectie tussen je darmen en hersenen ondersteunen. Perfect voor mentale wellness en darmgezondheid.',
    icon: '🧠',
    color: 'from-blue-500 to-purple-600',
    products: [
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
        slug: 'mentabiotics-review-dutch',
        title: 'MentaBiotics Review',
        excerpt: 'Complete review van MentaBiotics: ingrediënten, werking, en ervaringen.',
        rating: 4.5,
        category: 'Health',
        image: '/images/reviews/placeholder-4.svg',
        pros: ['Klinisch ondersteund', 'Goede reviews'],
        cons: ['Niet goedkoop'],
      },
    ],
  },
  'focus': {
    title: 'Focus & Concentratie',
    description: 'Ondersteun je focus en concentratievermogen met deze gericht ontwikkelde producten.',
    icon: '🎯',
    color: 'from-yellow-500 to-orange-600',
    products: [
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
      {
        slug: 'edge-plus-werknemers-productiviteit',
        title: 'Edge Plus voor Werknemers',
        excerpt: 'Boost je productiviteit op het werk met Edge Plus. Perfect voor kantoor en WFH.',
        rating: 4.1,
        category: 'Focus',
        image: '/images/reviews/placeholder-5.svg',
        pros: ['Betaalde focus', 'Moraal boost'],
        cons: ['Effect varieert'],
      },
    ],
  },
  'beauty': {
    title: 'Beauty & Haar',
    description: 'Voor mooier en gezonder haar, huid en nagels van binnenuit.',
    icon: '💇',
    color: 'from-pink-500 to-red-600',
    products: [
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
        slug: 'skin-to-mind-beauty-review',
        title: 'Skin to Mind Beauty Review',
        excerpt: 'Skin to Mind voor mooier huid en gezond haar. Is het echt effectief?',
        rating: 4.4,
        category: 'Beauty',
        image: '/images/reviews/placeholder-6.svg',
        pros: ['Positieve reviews', 'Zichtbare resultaten'],
        cons: ['Lange werkingstijd'],
      },
      {
        slug: 'amare-beauty-complete-gids',
        title: 'Amare Beauty Producten Gids',
        excerpt: 'Complete gids door alle Amare beauty producten. Vind wat voor jou past.',
        rating: 4.3,
        category: 'Beauty',
        image: '/images/reviews/placeholder-7.svg',
        pros: ['Uitgebreide informatie', 'Vergelijkingen'],
        cons: ['Veel keuze'],
      },
    ],
  },
  'sleep': {
    title: 'Slaap & Ontspanning',
    description: 'Producten voor diepere rust, betere slaap en dagelijkse ontspanning.',
    icon: '😴',
    color: 'from-indigo-500 to-blue-600',
    products: [
      {
        slug: 'sleepa-amare-slaap-review',
        title: 'Sleepa Amare Slaap Review',
        excerpt: 'Helpt Sleepa echt om beter te slapen? Complete review met user ervaringen.',
        rating: 4.4,
        category: 'Sleep',
        image: '/images/reviews/placeholder-8.svg',
        pros: ['Natuurlijke slaaphulp', 'Geen nawerking'],
        cons: ['Niet voor iedereen'],
      },
    ],
  },
  'weight': {
    title: 'Gewichtsmanagement',
    description: 'Gezond afvallen en gewicht houden met Amare producten.',
    icon: '⚖️',
    color: 'from-green-500 to-teal-600',
    products: [
      {
        slug: 'xtra-slimplicity-review',
        title: 'Xtra Slimplicity Gewichtsverlies',
        excerpt: 'Review van Amare Xtra Slimplicity. Helpt het echt bij gewichtsverlies?',
        rating: 4.1,
        category: 'Weight',
        image: '/images/reviews/placeholder-9.svg',
        pros: ['Natuurlijke ingrediënten', 'Ondersteunt metabolisme'],
        cons: ['Langzaam resultaten'],
      },
    ],
  },
  'immune': {
    title: 'Immuunsysteem',
    description: 'Versterking van je immuunsysteem met wetenschappelijk onderbouwde producten.',
    icon: '🛡️',
    color: 'from-emerald-500 to-green-600',
    products: [
      {
        slug: 'immuno-viro-amare',
        title: 'Immuno & Viro Protection',
        excerpt: 'Amare immuun ondersteuning producten. Sterker immuunsysteem jaar-rond.',
        rating: 4.2,
        category: 'Immune',
        image: '/images/reviews/placeholder-10.svg',
        pros: ['Ondersteunt immuuniteit', 'Goed onderzocht'],
        cons: ['Preventief niet acuut'],
      },
    ],
  },
  'essentials': {
    title: 'Dagelijkse Essentials',
    description: 'Basis supplementen en vitamine producten voor dagelijks gebruik.',
    icon: '💊',
    color: 'from-purple-500 to-pink-600',
    products: [
      {
        slug: 'amare-essentials-vitaminen',
        title: 'Amare Essentials Vitaminen',
        excerpt: 'Complete vitamine en mineral supplementen van Amare voor dagelijks gebruik.',
        rating: 4.0,
        category: 'Essentials',
        image: '/images/reviews/placeholder-11.svg',
        pros: ['Compleet multivitamine', 'Goede prijs'],
        cons: ['Standaard formule'],
      },
      {
        slug: 'amare-basics-gids',
        title: 'Amare Basis Producten Gids',
        excerpt: 'Gids door Amare basis en essentials. Start je wellness reis hier.',
        rating: 4.1,
        category: 'Essentials',
        image: '/images/reviews/placeholder-12.svg',
        pros: ['Beginners vriendelijk', 'Goed prijs-kwaliteit'],
        cons: ['Veel keuze'],
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(categoryProducts).map((slug) => ({
    slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categoryProducts[params.slug]
  return {
    title: `${category?.title} | AmareReview.nl`,
    description: category?.description,
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryProducts[params.slug] || categoryProducts['gut-brain']

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://amarereview.nl' },
        { name: 'Categorieën', url: 'https://amarereview.nl/categorieen' },
        { name: category.title, url: `https://amarereview.nl/categorieen/${params.slug}` },
      ])} />

      {/* Breadcrumb */}
      <div className="bg-bg-soft border-b border-border">
        <div className="container-max py-4">
          <Link href="/categorieen" className="inline-flex items-center gap-2 text-primary hover:text-accent transition">
            <ArrowLeft size={18} />
            Terug naar categorieën
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className={`bg-gradient-to-r ${category.color}`}>
        <div className="container-max section-padding text-white">
          <div className="text-5xl mb-4">{category.icon}</div>
          <h1 className="text-white mb-4">{category.title}</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Category Info */}
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card">
            <p className="text-primary font-bold mb-2">Producten in deze categorie</p>
            <p className="text-3xl font-bold text-accent">{category.products.length}</p>
          </div>
          <div className="card">
            <p className="text-primary font-bold mb-2">Avg Rating</p>
            <p className="text-3xl font-bold text-accent">
              {(category.products.reduce((sum: number, p: any) => sum + p.rating, 0) / category.products.length).toFixed(1)}
            </p>
          </div>
          <div className="card">
            <p className="text-primary font-bold mb-2">Reviews beschikbaar</p>
            <p className="text-3xl font-bold text-accent">{category.products.length}</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-12">
          <h2 className="mb-8">Alle producten in deze categorie</h2>
          <div className="grid-auto">
            {category.products.map((product: any) => (
              <ReviewCard key={product.slug} {...product} />
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-bg-soft rounded-lg p-8 text-center">
          <h3 className="text-lg font-bold text-primary mb-3">Weet je niet welk product voor jou geschikt is?</h3>
          <p className="text-text-muted mb-6 max-w-2xl mx-auto">
            Lees onze reviews, vergelijk producten, of neem contact op met ons team voor persoonlijk advies.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/vergelijking" className="btn-primary">
              Vergelijk producten <ArrowRight className="inline ml-2" size={18} />
            </Link>
            <Link href="/over-ons" className="btn-secondary">
              Meer over ons
            </Link>
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <section className="bg-bg-soft">
        <div className="container-max section-padding">
          <h2 className="text-center mb-8">Verkennen andere categorieën</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(categoryProducts)
              .filter(([slug]) => slug !== params.slug)
              .slice(0, 6)
              .map(([slug, cat]) => (
                <Link
                  key={slug}
                  href={`/categorieen/${slug}`}
                  className="card text-center hover:bg-white transition"
                >
                  <p className="text-2xl mb-2">{cat.icon}</p>
                  <p className="font-bold text-primary text-sm">{cat.title}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-white mb-4">Klaar om te starten met {category.title.toLowerCase()}?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ontvang gratis advies en ontdek welk product het beste bij jou past.
          </p>
          <Link
            href={`https://amarenl.com/optin?source=categorie&categorie=${encodeURIComponent(category.slug)}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="btn-secondary"
          >
            Ontvang Gratis Advies →
          </Link>
        </div>
      </section>
    </>
  )
}
