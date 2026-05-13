import Link from 'next/link'
import { Heart, Lightbulb, Shield, Users } from 'lucide-react'
import JsonLd from '@/components/ui/JsonLd'
import { generatePersonSchema, generateBreadcrumbSchema } from '@/lib/schema'

export const metadata = {
  title: 'Over AmareReview.nl | Onafhankelijke Reviews',
  description: 'Lees over AmareReview.nl, onze aanpak, en waarom we eerlijke reviews schrijven.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Eerlijkheid',
      description: 'We schrijven wat we echt denken, niet wat verkopers willen horen.',
    },
    {
      icon: Shield,
      title: 'Onafhankelijkheid',
      description: 'We verdienen commissie, maar dit verandert nooit onze mening.',
    },
    {
      icon: Lightbulb,
      title: 'Educatie',
      description: 'We helpen je goed geïnformeerde keuzes te maken.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We luisteren naar echte gebruiker ervaringen en feedback.',
    },
  ]

  return (
    <>
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://amarereview.nl' },
        { name: 'Over Ons', url: 'https://amarereview.nl/over-ons' },
      ])} />

      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <h1 className="text-white mb-4">Over AmareReview.nl</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Een onafhankelijke review site voor Amare producten. Eerlijke meningen van echte gebruikers.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="mb-6">Wie is AmareReview.nl?</h2>
            <p className="text-text-muted mb-4">
              Ik ben Mark, de oprichter van AmareReview.nl. In 2023 begon ik zelf met Amare producten en merkte al snel dat er
              veel onbetrouwbare informatie online rondging. Reviews waren vaak vervalst, gebaseerd op marketing taal in plaats van
              echte ervaringen.
            </p>
            <p className="text-text-muted mb-4">
              Ik begon mijn eigen onderzoeken te doen, ingrediënten te analyseren, en echte gebruikers om hun ervaringen te vragen.
              Wat begon als persoonlijke notitieboek, groeide uit tot AmareReview.nl — een plek voor eerlijke, geverifieerde
              informatie over Amare producten.
            </p>
            <p className="text-text-muted">
              Vandaag helpen we duizenden Nederlanders goed geïnformeerde keuzes te maken over hun gezondheid en welzijn.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg p-8 text-white text-center">
            <p className="text-6xl mb-4">🧑‍💻</p>
            <p className="font-bold text-lg">Mark</p>
            <p className="opacity-75 mb-4">Oprichter & Lead Reviewer</p>
            <p className="text-sm opacity-90">
              Nederlandse zelfstandige, wellness enthousiast, en stickler voor eerlijkheid. 6 jaar onderzoeks ervaring.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-bg-soft">
        <div className="container-max section-padding">
          <h2 className="text-center mb-12">Onze Waarden</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="card text-center">
                  <Icon className="text-accent mx-auto mb-4" size={40} />
                  <h3 className="font-bold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-text-muted">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="container-max section-padding">
        <div className="max-w-3xl">
          <h2 className="mb-8">Hoe we reviews schrijven</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl font-bold text-accent">1</div>
              <div>
                <h3 className="font-bold text-primary mb-2">Onderzoek</h3>
                <p className="text-text-muted">
                  We analyseren alle beschikbare ingrediënten, lezen wetenschappelijke studies, en kijken naar klinische
                  ondersteunende bewijs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl font-bold text-accent">2</div>
              <div>
                <h3 className="font-bold text-primary mb-2">Gebruiker Feedback</h3>
                <p className="text-text-muted">
                  We verzamelen ervaringen van echte gebruikers, incluisief hun voordelen en problemen. Geen geselecteerde testimonials.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl font-bold text-accent">3</div>
              <div>
                <h3 className="font-bold text-primary mb-2">Vergelijking</h3>
                <p className="text-text-muted">
                  We vergelijken met alternatieven zodat je weet hoe Amare producten zich verhouden tot concurrenten.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl font-bold text-accent">4</div>
              <div>
                <h3 className="font-bold text-primary mb-2">Eerlijke Rating</h3>
                <p className="text-text-muted">
                  We geven geen nepscores. Alle ratings zijn gebaseerd op onderzoek, gebruiker feedback, en ons eigen oordeel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-bg-soft">
        <div className="container-max section-padding">
          <h2 className="mb-8">Financiële Transparantie</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            <div className="card border-2 border-accent">
              <h3 className="font-bold text-primary mb-3">Hoe we geld verdienen</h3>
              <p className="text-sm text-text-muted mb-4">
                AmareReview.nl is een affiliate partner van Amare. Dit betekent dat we een commissie krijgen wanneer je via onze
                link koopt.
              </p>
              <p className="text-xs font-bold text-accent">
                💰 Dit verandert NOOIT je prijs — je betaalt hetzelfde als direct kopen.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-3">Waarom we eerlijk zijn</h3>
              <p className="text-sm text-text-muted">
                Ja, we verdienen commissie. Maar onze reputatie is meer waard dan geld. Valse reviews zouden ons vertrouwen
                breken en onze toekomst vernietigen. Daarom zijn we volledig eerlijk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-max section-padding">
        <h2 className="mb-8">Veelgestelde Vragen</h2>

        <div className="space-y-6 max-w-3xl">
          <div className="card">
            <h3 className="font-bold text-primary mb-2">Waarom kan ik AmareReview.nl vertrouwen?</h3>
            <p className="text-text-muted text-sm">
              We zijn onafhankelijk, hebben geen banden met Amare sales team, en publiceren alles wat we vinden — goed en slecht.
              Onze reputatie is onze enige asset.
            </p>
          </div>

          <div className="card">
            <h3 className="font-bold text-primary mb-2">Werken jullie voor Amare?</h3>
            <p className="text-text-muted text-sm">
              Nee. We zijn een onafhankelijk review site. We verdienen commissie, maar schrijven wat we denken, niet wat Amare wil.
            </p>
          </div>

          <div className="card">
            <h3 className="font-bold text-primary mb-2">Zijn al jullie reviews geverifieerd?</h3>
            <p className="text-text-muted text-sm">
              Alle reviews zijn gebaseerd op onderzoek, gebruiker feedback, en persoonlijke ervaring. We voegen geen nep
              testimonials toe of schrijven fantasie verhalen.
            </p>
          </div>

          <div className="card">
            <h3 className="font-bold text-primary mb-2">Geven jullie geld terug als ik tevreden ben?</h3>
            <p className="text-text-muted text-sm">
              Nee, maar Amare geeft een 30-dagen geld-terug garantie als JIJ niet tevreden bent. Lees meer in onze Amare Trust
              section.
            </p>
          </div>

          <div className="card">
            <h3 className="font-bold text-primary mb-2">Kan ik contact opnemen met vragen?</h3>
            <p className="text-text-muted text-sm">
              Ja! Gebruik ons contactformulier of stuur een email. Ik lees alle berichten en antwoord binnen 24 uur.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-white mb-4">Vragen of Feedback?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ik ben hier om te helpen. Stuur een bericht, deel je ervaringen, of vraag advies.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact opnemen
          </Link>
        </div>
      </section>
    </>
  )
}
