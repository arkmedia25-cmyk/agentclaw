import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import JsonLd from '@/components/ui/JsonLd'
import { generateBreadcrumbSchema } from '@/lib/schema'

export const metadata = {
  title: 'Amare Product Categorieën | AmareReview.nl',
  description: 'Ontdek Amare producten per categorie. Gut-Brain, Focus, Beauty, Sleep en meer.',
}

const categories = [
  {
    slug: 'gut-brain',
    title: 'Gut-Brain Axis',
    description: 'Producten voor darmgezondheid en mentale wellness',
    products: 3,
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
  },
  {
    slug: 'focus',
    title: 'Focus & Concentratie',
    description: 'Ondersteun je focus met deze producten',
    products: 2,
    color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
  },
  {
    slug: 'beauty',
    title: 'Beauty & Haar',
    description: 'Voor mooier haar en huid',
    products: 3,
    color: 'bg-gradient-to-br from-pink-500 to-red-600',
  },
  {
    slug: 'sleep',
    title: 'Slaap & Ontspanning',
    description: 'Beter slapen en ontspannen',
    products: 1,
    color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
  },
  {
    slug: 'weight',
    title: 'Gewichtsmanagement',
    description: 'Gezond afvallen en gewicht houden',
    products: 1,
    color: 'bg-gradient-to-br from-green-500 to-teal-600',
  },
  {
    slug: 'immune',
    title: 'Immuunsysteem',
    description: 'Sterker immuunsysteem',
    products: 1,
    color: 'bg-gradient-to-br from-emerald-500 to-green-600',
  },
  {
    slug: 'essentials',
    title: 'Dagelijkse Essentials',
    description: 'Basis supplementen voor dagelijks gebruik',
    products: 2,
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
]

export default function CategoriesPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://amarereview.nl' },
        { name: 'Categorieën', url: 'https://amarereview.nl/categorieen' },
      ])} />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <h1 className="text-white mb-4">Product Categorieën</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Ontdek Amare producten per categorie. Vind wat voor jou past.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link key={cat.slug} href={`/categorieen/${cat.slug}`}>
              <div className={`${cat.color} rounded-lg p-8 text-white h-full flex flex-col justify-between hover:shadow-lg transition-shadow cursor-pointer`}>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                  <p className="opacity-90 mb-4">{cat.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white border-opacity-20">
                  <span className="text-sm font-medium opacity-75">
                    {cat.products} product{cat.products !== 1 ? 'en' : ''}
                  </span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <section className="bg-bg-soft">
        <div className="container-max section-padding">
          <h2 className="text-center mb-8">Niet zeker welke categorie?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <p className="text-primary font-bold mb-2">Lees reviews</p>
              <p className="text-text-muted text-sm">Zie wat andere klanten zeggen over producten</p>
            </div>
            <div className="card text-center">
              <p className="text-primary font-bold mb-2">Vergelijk</p>
              <p className="text-text-muted text-sm">
                Check onze{' '}
                <Link href="/vergelijking" className="text-accent font-bold hover:underline">
                  Amare vs alternatieven
                </Link>
              </p>
            </div>
            <div className="card text-center">
              <p className="text-primary font-bold mb-2">Contact</p>
              <p className="text-text-muted text-sm">Stel vragen aan ons team</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
