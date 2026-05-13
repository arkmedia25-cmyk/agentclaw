import Link from 'next/link'
import type { Metadata } from 'next'
import ReviewCard from '@/components/ui/ReviewCard'
import AffiliateCTA from '@/components/ui/AffiliateCTA'
import HomepageGuarantee from '@/components/ui/HomepageGuarantee'
import JsonLd from '@/components/ui/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { ArrowRight, Shield, Gift, Truck, Leaf, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AmareReview.nl | Onafhankelijke Amare Product Reviews',
  description: 'Eerlijke, onafhankelijke reviews van Amare producten. Lees betrouwbare beoordelingen van echte gebruikers in Nederland.',
  alternates: { canonical: 'https://amarereview.nl' },
  openGraph: {
    title: 'AmareReview.nl | Onafhankelijke Amare Product Reviews',
    description: 'Eerlijke, onafhankelijke reviews van Amare producten.',
    url: 'https://amarereview.nl',
    siteName: 'AmareReview.nl',
    locale: 'nl_NL',
  },
}

export default function Home() {
  const featuredReviews = [
    {
      slug: 'happy-juice-bijwerkingen-huid',
      title: 'Happy Juice Bijwerkingen & Huid',
      excerpt: 'Is Happy Juice veilig voor je huid? We onderzoeken ingrediënten en ervaringen.',
      rating: 4.3,
      category: 'Beauty',
      image: '/images/reviews/placeholder-1.svg',
      pros: ['Natuurlijke ingrediënten', '30 dagen geld-terug', 'Veel testimonials'],
      cons: ['Duur', 'Smaak niet voor iedereen'],
    },
    {
      slug: 'darmbacteriën-gezondheid-mentabiotics',
      title: 'Darmbacteriën & MentaBiotics',
      excerpt: 'Gut-brain axis onderzoeken: werkt MentaBiotics echt voor je darmen?',
      rating: 4.6,
      category: 'Health',
      image: '/images/reviews/placeholder-2.svg',
      pros: ['Ondersteunt darmflora', 'Goed onderzocht', 'Hoge reviews'],
      cons: ['Prijs', 'Effecten voelbaar na weken'],
    },
    {
      slug: 'edge-plus-focus-concentratie',
      title: 'Edge Plus voor Focus',
      excerpt: 'Helpt Edge Plus echt met concentratie? Review voor professionals.',
      rating: 4.2,
      category: 'Focus',
      image: '/images/reviews/placeholder-3.svg',
      pros: ['Snelle werking', 'Geen bijwerkingen', 'Geschikt voor WFH'],
      cons: ['Niet goedkoop', 'Variabel effect'],
    },
  ]

  const trustPoints = [
    { icon: Shield, label: '30 dagen geld-terug', desc: 'Amare garanderen kwaliteit' },
    { icon: Gift, label: '€8 korting', desc: 'Op je eerste bestelling' },
    { icon: Truck, label: 'Gratis verzending', desc: 'Vanaf €175' },
    { icon: Leaf, label: '100% natuurlijk', desc: 'Geen schadelijke stoffen' },
    { icon: Users, label: '10.000+ tevreden', desc: 'Klanten in Nederland' },
  ]

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://amarereview.nl' },
      ])} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-light">
        <div className="container-max section-padding">
          <div className="flex flex-col items-center text-center text-white">
            <h1 className="text-white mb-4">
              Eerlijke Amare Reviews
            </h1>
            <p className="text-xl opacity-90 mb-6 max-w-2xl">
              Onafhankelijke, geverifieerde reviews van Amare producten. Ontdek wat users echt zeggen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/reviews" className="btn-primary">
                Bekijk alle reviews
              </Link>
              <AffiliateCTA label="Ontvang Gratis Advies →" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-bg-soft border-b-2 border-primary">
        <div className="container-max py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {trustPoints.map((point, i) => {
              const Icon = point.icon
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <Icon className="text-accent mb-3" size={32} />
                  <p className="font-bold text-primary text-sm">{point.label}</p>
                  <p className="text-xs text-text-muted">{point.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guarantee Banner */}
      <HomepageGuarantee />

      {/* Featured Reviews */}
      <section className="container-max section-padding">
        <div className="mb-12">
          <h2 className="text-center">Uitgelichte Reviews</h2>
          <p className="text-center text-text-muted mt-4 max-w-2xl mx-auto">
            Lees onze meest populaire en geverifieerde product reviews.
          </p>
        </div>

        <div className="grid-auto mb-8">
          {featuredReviews.map((review) => (
            <ReviewCard key={review.slug} {...review} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/reviews" className="btn-primary">
            Alle reviews bekijken <ArrowRight className="inline ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-bg-soft">
        <div className="container-max section-padding">
          <h2 className="text-center mb-8">Winkel per Categorie</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { label: 'Darm & Brein', slug: 'gut-brain', icon: '🧠' },
              { label: 'Focus', slug: 'focus', icon: '🎯' },
              { label: 'Schoonheid', slug: 'beauty', icon: '✨' },
              { label: 'Slaap', slug: 'sleep', icon: '🌙' },
              { label: 'Gewicht', slug: 'weight', icon: '⚖️' },
              { label: 'Immuniteit', slug: 'immune', icon: '🛡️' },
              { label: 'Energie', slug: 'essentials', icon: '⚡' },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorieen/${cat.slug}`}
                className="card text-center hover:bg-white transition"
              >
                <p className="text-2xl mb-2">{cat.icon}</p>
                <p className="font-bold text-primary text-sm">{cat.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-white mb-4">Klaar om te bestellen?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Koop direct van Amare met onze gecontroleerde affiliate link. Veilig, verzekerd, en met volle transparantie.
          </p>
          <AffiliateCTA label="Bekijk Amare Producten →" />
          <p className="text-sm opacity-75 mt-6">
            ⚠️ We verdienen commissie wanneer je via onze link koopt. Dit verandert je prijs niet.
          </p>
        </div>
      </section>
    </>
  )
}
