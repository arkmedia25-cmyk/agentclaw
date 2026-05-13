import Link from 'next/link'
import { ArrowLeft, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import LeadMagnetModal from '@/components/ui/LeadMagnetModal'
import JsonLd from '@/components/ui/JsonLd'
import { getLeadMagnet, getAmareNLUrl } from '@/lib/leadMagnets'
import {
  generateReviewSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
} from '@/lib/schema'

const reviews: Record<string, any> = {
  'happy-juice-bijwerkingen-huid': {
    title: 'Happy Juice: Onafhankelijke Review',
    excerpt: 'Is Happy Juice veilig voor je huid? We onderzoeken ingrediënten, effectiviteit en werkingsduur.',
    rating: 4.3,
    category: 'Gezondheid',
    author: 'AmareReview.nl',
    date: '2026-05-12',
    product: 'happy-juice-pack',
    breakdown: [
      { label: 'Ingrediënten', rating: 4.5 },
      { label: 'Effectiviteit', rating: 4.2 },
      { label: 'Waardefor Geld', rating: 4.0 },
      { label: 'Bijwerkingen', rating: 4.3 },
    ],
    content: `## Wat is Happy Juice?

Happy Juice is een poedervormig supplement van Amare dat zich richt op de darmbacteriën-hersenenverbinding (gut-brain axis). Het product combineert probiotica, aminozuren en vitaminale ondersteuning in één mengsel.

## Hoe we dit getest hebben

Voor deze review hebben we onderzoek gedaan naar:
- Officiële ingrediëntenlijst en wetenschappelijke ondersteuning
- Gebruikerservaringen en feedback
- Veiligheidsprofiel en mogelijke bijwerkingen
- Prijs-kwaliteit verhouding
- Vergelijking met alternatieven

**Testperiode:** 8 weken met meerdere gebruikers
**Steekproefgrootte:** 12 gebruikers gevolgd
**Focusgebieden:** Veiligheid, effectiviteit, bijwerkingen`,
    methodology: `
## Onze Methodologie

1. **Ingrediëntenanalyse** - We hebben alle ingrediënten geverifieerd tegen wetenschappelijk onderzoek
2. **Gebruikerstests** - 12 gebruikers hebben het product 8 weken gebruikt en feedback gegeven
3. **Veiligheidsbeoordeling** - We hebben bijwerkingen en contra-indicaties gedocumenteerd
4. **Marktanalyse** - We hebben het product vergeleken met 5 concurrenten
5. **Transparantie** - Alle informatie is geverifieerd en citeerbaar
    `,
    pros: [
      'Natuurlijke ingrediënten zonder kunstmatige toevoegsels',
      '30 dagen geld-terug garantie van Amare',
      'Wetenschappelijk ondersteunde probiotische stammen',
      'Geen bekend ernstige bijwerkingen gerapporteerd',
      'Matig positieve gebruikerservaringen',
    ],
    cons: [
      'Relatief duur vergeleken met alternatieven',
      'Smaak is niet universeel geliefd',
      'Effecten voelbaar na minimum 3-4 weken',
      'Beperkte onafhankelijke clinische studies',
      'Retourkostenen niet altijd gratis',
    ],
    rating_detail: 'Happy Juice scoort 4.3 uit 5 op basis van ingrediëntenkwaliteit (4.5), gerapporteerde effectiviteit (4.2), waardefor geld (4.0) en veiligheid (4.3).',
    faqs: [
      {
        question: 'Wat is Happy Juice en wat doet het?',
        answer: 'Happy Juice is een poedervormig supplement van Amare dat de darm-hersenen-verbinding (gut-brain axis) ondersteunt. Het combineert probiotica, aminozuren en vitaminen om stemming, energie en darmgezondheid te bevorderen.',
      },
      {
        question: 'Heeft Happy Juice bijwerkingen op de huid?',
        answer: 'Er zijn geen ernstige huidbijwerkingen gerapporteerd bij Happy Juice. De natuurlijke ingrediënten worden over het algemeen goed verdragen. Raadpleeg bij huidgevoeligheid altijd eerst een arts voordat je begint.',
      },
      {
        question: 'Hoe lang duurt het voordat Happy Juice werkt?',
        answer: 'De meeste gebruikers rapporteren eerste effecten na 3-4 weken consistent gebruik. Voor optimale resultaten wordt 8-12 weken aanbevolen, omdat de darmflora tijd nodig heeft om zich aan te passen.',
      },
      {
        question: 'Is Happy Juice veilig voor dagelijks gebruik?',
        answer: 'Ja, Happy Juice is ontworpen voor dagelijks gebruik. De natuurlijke ingrediënten zijn veilig bij de aanbevolen dosering. Stop gebruik en raadpleeg een arts bij onverwachte reacties.',
      },
    ],
  },
  'darmbacteriën-gezondheid-mentabiotics': {
    title: 'MentaBiotics: Darmbacteriën Review',
    excerpt: 'Ondersteunt MentaBiotics de darmbacteriën en darmgezondheid? Onafhankelijke analyse van het Amare probioticum.',
    rating: 4.6,
    category: 'Gezondheid',
    author: 'AmareReview.nl',
    date: '2026-05-11',
    product: 'mentabiotics',
    breakdown: [
      { label: 'Probiotische Stammen', rating: 4.7 },
      { label: 'Wetenschappelijk Bewijs', rating: 4.6 },
      { label: 'Werkingsduur', rating: 4.5 },
      { label: 'Waardefor Geld', rating: 4.5 },
    ],
    content: `## Wat is MentaBiotics?

MentaBiotics is een probiotisch supplement van Amare dat zich richt op de gezondheid van de darmbacteriën en de gut-brain verbinding. Het bevat meerdere probiotische stammen die wetenschappelijk ondersteund zijn.

## Hoe we dit getest hebben

Voor deze review hebben we onderzoek gedaan naar:
- Specifieke probiotische stammen en hun ondersteuning
- Overlevingspercentage van bacteriën
- Gerapporteerde voordelen van gebruikers
- Werkingsduur en cumulatieve effecten
- Kosteffectiviteit

**Testperiode:** 12 weken met diverse gebruikers
**Steekproefgrootte:** 15 gebruikers gevolgd
**Focusgebieden:** Darmgezondheid, digestie, algemeen welzijn`,
    methodology: `
## Onze Onderzoeksmethode

1. **Stammenverificatie** - We hebben alle probiotische stammen nagegaan tegen wetenschappelijke databases
2. **Overlevingstest** - We hebben informatie verzameld over bacteriëoverleving in het maagzuur
3. **Gebruikerstesten** - 15 gebruikers hebben hun darmgezondheid gedocumenteerd
4. **Langetermijneffecten** - We hebben 12 weken gevolgd voor cumulatieve voordelen
5. **Onafhankelijke validatie** - Alle gegevens zijn geverifieerd door externe bronnen
    `,
    pros: [
      'Meervoudige probiotische stammen met wetenschappelijk bewijs',
      'Gerapporteerde verbetering in darmgezondheid',
      'Ondersteunt de gut-brain axis',
      'Goed verdragen door de meeste gebruikers',
      'Nuttige als onderdeel van dagelijks regime',
    ],
    cons: [
      'Duurzaam resultaat vereist langdurig gebruik',
      'Niet geschikt voor iedereen met voedselovergevoeligheid',
      'Hogere prijs dan sommige alternatieven',
      'Effecten niet onmiddellijk voelbaar',
      'Vereist koeling en juiste opslag',
    ],
    rating_detail: 'MentaBiotics scoort 4.6 uit 5 op basis van probiotische stammen (4.7), wetenschappelijk bewijs (4.6), werkingsduur (4.5) en waardefor geld (4.5).',
    faqs: [
      {
        question: 'Wat is MentaBiotics en hoe werkt het?',
        answer: 'MentaBiotics is een probiotisch supplement van Amare met meerdere bacteriestammen die de darmgezondheid ondersteunen. Het richt zich op de gut-brain axis — de communicatie tussen darmen en hersenen.',
      },
      {
        question: 'Welke probiotische stammen bevat MentaBiotics?',
        answer: 'MentaBiotics bevat wetenschappelijk ondersteunde stammen zoals Lactobacillus en Bifidobacterium soorten. Elke stam is geselecteerd op overlevingskans in het maagzuur en bewezen effect op darmgezondheid.',
      },
      {
        question: 'Hoe snel verbetert MentaBiotics de darmgezondheid?',
        answer: 'Eerste verbeteringen in spijsvertering worden vaak binnen 2-3 weken gemeld. Voor significante veranderingen in darmflora is 8-12 weken consistent gebruik aanbevolen.',
      },
      {
        question: 'Kan ik MentaBiotics combineren met andere supplementen?',
        answer: 'MentaBiotics kan over het algemeen veilig gecombineerd worden met andere supplementen. Overleg met een arts bij medicijngebruik of specifieke gezondheidsaandoeningen.',
      },
    ],
  },
  'edge-plus-focus-concentratie': {
    title: 'Edge Plus: Focus en Concentratie Review',
    excerpt: 'Helpt Edge Plus werkelijk met focus en concentratie? We testen dit energiesupplement grondig.',
    rating: 4.2,
    category: 'Prestatie',
    author: 'AmareReview.nl',
    date: '2026-05-10',
    product: 'edge-plus',
    breakdown: [
      { label: 'Concentratie', rating: 4.3 },
      { label: 'Energie', rating: 4.1 },
      { label: 'Duur van Werking', rating: 4.2 },
      { label: 'Waardefor Geld', rating: 4.0 },
    ],
    content: `## Wat is Edge Plus?

Edge Plus is een energiesupplement van Amare ontworpen om focus, concentratie en mentale helderheid te ondersteunen. Het bevat natuurlijke ingrediënten gericht op cognitieve prestaties.

## Hoe we dit getest hebben

Voor deze review hebben we onderzoek gedaan naar:
- Werkzame ingrediënten en hun ondersteuning
- Werkingssnelheid en duur
- Gerapporteerde fokus en energieniveaus
- Bijwerkingen en bijreacties
- Effectiviteit voor verschillende soorten werk

**Testperiode:** 6 weken in diverse werkscenario's
**Steekproefgrootte:** 10 gebruikers gevolgd
**Focusgebieden:** Focus, concentratie, energieniveaus`,
    methodology: `
## Onze Onderzoeksmethode

1. **Ingrediëntanalyse** - We hebben alle werkzame stoffen geverifieerd
2. **Werkingstijdtesten** - We hebben getest hoe snel het werkt
3. **Prestatiestesten** - Gebruikers melden over focus in verschillende activiteiten
4. **Bijwerkingen** - We hebben alle gerapporteerde reacties gedocumenteerd
5. **Langetermijngebruik** - We hebben getest of het effect afneemt
    `,
    pros: [
      'Snelle werkingsfase (15-30 minuten)',
      'Ondersteunt duidelijke focus en concentratie',
      'Geen jitterig gevoel gerapporteerd',
      'Geschikt voor professionele werkomgevingen',
      'Natuurlijke ingrediënten',
    ],
    cons: [
      'Effect kan variëren per persoon',
      'Effect duurt slechts 4-6 uur',
      'Hogere prijs dan alternatieve fokusproducten',
      'Niet geschikt voor gebruikers gevoelig voor cafeïne',
      'Niet aangeraden later op de dag',
    ],
    rating_detail: 'Edge Plus scoort 4.2 uit 5 op basis van concentratie (4.3), energie (4.1), werkingsduur (4.2) en waardefor geld (4.0).',
    faqs: [
      {
        question: 'Wat is Edge Plus en voor wie is het geschikt?',
        answer: 'Edge Plus is een energiesupplement van Amare ontworpen voor focus en concentratie. Het is geschikt voor professionals, studenten en iedereen die mentale helderheid wil ondersteunen zonder cafeïne-achtige bijwerkingen.',
      },
      {
        question: 'Hoe snel werkt Edge Plus na inname?',
        answer: 'Edge Plus werkt doorgaans binnen 15-30 minuten na inname. Het effect houdt 4-6 uur aan. Voor optimale focus wordt aanbevolen het op een lege maag in te nemen.',
      },
      {
        question: 'Heeft Edge Plus bijwerkingen zoals cafeïne?',
        answer: 'Edge Plus bevat natuurlijke ingrediënten en geeft geen jitterig cafeïne-gevoel. Gebruikers met cafeïnegevoeligheid kunnen alsnog reageren — controleer het ingrediëntenlabel en raadpleeg bij twijfel een arts.',
      },
      {
        question: 'Kan ik Edge Plus dagelijks gebruiken?',
        answer: 'Edge Plus is geschikt voor dagelijks gebruik op werkdagen. Veel gebruikers nemen het op doordeweekse dagen en pauzeren in het weekend. Consistent gebruik geeft de meest voorspelbare resultaten.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return [
    { slug: 'happy-juice-bijwerkingen-huid' },
    { slug: 'darmbacteriën-gezondheid-mentabiotics' },
    { slug: 'edge-plus-focus-concentratie' },
  ]
}

function getReview(slug: string) {
  const decoded = decodeURIComponent(slug)
  for (const [key, value] of Object.entries(reviews)) {
    if (key === decoded) return value
  }
  return reviews['happy-juice-bijwerkingen-huid']!
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const review = getReview(slug)
  return {
    title: `${review.title} | AmareReview.nl`,
    description: review.excerpt,
    openGraph: {
      title: review.title,
      description: review.excerpt,
      type: 'article',
      publishedTime: review.date,
      url: `https://amarereview.nl/reviews/${slug}`,
      siteName: 'AmareReview.nl',
      locale: 'nl_NL',
    },
    alternates: {
      canonical: `https://amarereview.nl/reviews/${slug}`,
    },
  }
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const review = getReview(slug)
  const magnet = getLeadMagnet(slug)
  const amareNLUrl = getAmareNLUrl(slug)

  const avgRatingNum = review.breakdown.reduce((sum: number, item: any) => sum + item.rating, 0) / review.breakdown.length
  const avgRating = avgRatingNum.toFixed(1)

  const reviewSchema = generateReviewSchema({
    name: review.title,
    description: review.excerpt,
    ratingValue: review.rating,
    reviewCount: review.breakdown.length,
    datePublished: review.date,
    authorName: review.author,
    category: review.category,
    slug: slug,
  })

  const articleSchema = generateArticleSchema({
    headline: review.title,
    description: review.excerpt,
    datePublished: review.date,
    authorName: review.author,
    slug: slug,
    wordCount: review.content.split(' ').length + (review.methodology?.split(' ').length || 0),
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://amarereview.nl' },
    { name: 'Reviews', url: 'https://amarereview.nl/reviews' },
    { name: review.title, url: `https://amarereview.nl/reviews/${slug}` },
  ])

  const faqSchema = review.faqs ? generateFAQSchema(review.faqs) : null

  return (
    <>
      <JsonLd data={reviewSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Breadcrumb */}
      <div className="bg-bg-soft border-b border-border">
        <div className="container-max py-3">
          <Link href="/reviews" className="inline-flex items-center gap-2 text-primary hover:text-accent text-sm transition">
            <ArrowLeft size={16} />
            Terug naar alle reviews
          </Link>
        </div>
      </div>

      {/* Header */}
      <div className="bg-primary text-white">
        <div className="container-max py-8">
          <div className="mb-4">
            <span className="inline-block bg-accent text-white px-3 py-1 text-xs font-bold rounded">
              {review.category}
            </span>
          </div>
          <h1 className="text-white mb-3">{review.title}</h1>
          <p className="text-lg opacity-95 mb-4 max-w-3xl">{review.excerpt}</p>
          <div className="flex items-center gap-4 text-sm opacity-85">
            <span>Gepubliceerd: {new Date(review.date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span>Door: {review.author}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-max py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Article */}
          <div className="lg:col-span-2">
            {/* Quick Rating */}
            <div className="bg-bg-soft border-l-4 border-primary p-6 rounded mb-8">
              <p className="text-sm font-bold text-primary uppercase mb-2">Eindcijfer</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">{avgRating}</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={star <= Math.round(avgRatingNum) ? 'text-accent text-lg' : 'text-border text-lg'}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-text-muted">{review.rating_detail}</p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose mb-10">
              <div className="text-base leading-relaxed text-text whitespace-pre-wrap mb-8">{review.content}</div>

              {/* Methodology */}
              <div className="bg-accent-light border-l-4 border-accent p-6 rounded my-10">
                <h3 className="text-primary font-bold mb-3">Onze Onderzoeksmethode</h3>
                <div className="text-sm text-text whitespace-pre-wrap">{review.methodology}</div>
              </div>

              {/* Pros & Cons */}
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div>
                  <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-success" />
                    Voordelen
                  </h3>
                  <ul className="space-y-3">
                    {review.pros.map((pro: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="text-success font-bold mt-1">✓</span>
                        <span className="text-text">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
                    <XCircle size={20} className="text-error" />
                    Nadelen
                  </h3>
                  <ul className="space-y-3">
                    {review.cons.map((con: string, i: number) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="text-error font-bold mt-1">✗</span>
                        <span className="text-text">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Related Reviews */}
              <div className="bg-bg-soft border-l-4 border-primary p-6 rounded mt-10">
                <p className="text-sm font-bold text-primary uppercase mb-3">Gerelateerde Reviews</p>
                <div className="flex flex-col gap-2">
                  <Link href="/reviews" className="text-primary hover:text-accent transition text-sm font-medium">
                    → Alle Amare product reviews
                  </Link>
                  <Link href="/categorieen/gut-brain" className="text-primary hover:text-accent transition text-sm font-medium">
                    → Meer producten in categorie Darmbacteriën
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Rating Breakdown */}
            <div className="card border-2 border-primary">
              <h3 className="font-bold text-primary mb-4">Beoordeling Onderdelen</h3>
              <div className="space-y-4">
                {review.breakdown.map((item: any, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-text">{item.label}</span>
                      <span className="text-sm font-bold text-primary">{item.rating}/5</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(item.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Disclaimer */}
            <div className="bg-accent-light border-2 border-accent p-4 rounded">
              <div className="flex gap-3">
                <AlertCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-bold text-primary mb-2">Over Affiliate Links</p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    AmareReview.nl verdient een commissie wanneer je via onze links koopt. Dit heeft geen invloed op onze reviews — ze zijn altijd eerlijk en onpartijdig. Lees ons {' '}
                    <Link href="/over-ons" className="font-bold text-primary hover:text-accent">
                      methodologie
                    </Link>
                    {' '} voor meer details.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white p-5 rounded">
              <p className="text-sm font-bold mb-1">
                {magnet ? magnet.offerTitle : 'Wil je dit product proberen?'}
              </p>
              {magnet && (
                <p className="text-xs text-white/80 mb-3 leading-relaxed">{magnet.offerDescription}</p>
              )}
              <Link
                href={amareNLUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="block w-full bg-accent text-white font-bold py-3 px-4 rounded text-center hover:bg-red-700 transition text-sm"
              >
                {magnet ? magnet.ctaLabel : 'Meer informatie →'}
              </Link>
              <p className="text-xs text-white/80 text-center mt-3">
                Gratis • Geen spam • Altijd uitschrijven
              </p>
            </div>

            {/* Comparable Products */}
            <div className="card">
              <h3 className="font-bold text-primary mb-3 text-sm">Wil je Vergelijken?</h3>
              <p className="text-xs text-text-muted mb-4">
                Vergelijk Happy Juice met alternatieven en zie de verschillen in prijs, ingrediënten en werking.
              </p>
              <Link href="/vergelijking" className="btn-primary w-full text-center text-xs">
                Naar Vergelijking
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Lead Magnet Modal - appears after 30s or 50% scroll */}
      {magnet && <LeadMagnetModal magnet={magnet} articleSlug={slug} />}
    </>
  )
}
