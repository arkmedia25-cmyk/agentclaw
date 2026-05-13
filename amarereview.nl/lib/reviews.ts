import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const reviewsDir = path.join(process.cwd(), 'content', 'reviews')

export interface ReviewMetadata {
  title: string
  date: string
  category: string
  tags: string[]
  metaDescription: string
  slug: string
  rating: number
  author: string
  affiliateCtaProduct: string
  schema: string
  excerpt: string
  image: string
}

export interface Review {
  metadata: ReviewMetadata
  content: string
  slug: string
}

export async function getAllReviews(): Promise<Review[]> {
  // Ensure content/reviews directory exists
  if (!fs.existsSync(reviewsDir)) {
    return []
  }

  const files = fs.readdirSync(reviewsDir)
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  const reviews = mdxFiles.map((file) => {
    const slug = file.replace('.mdx', '')
    return getReviewBySlug(slug)
  })

  // Sort by date, newest first
  return reviews.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
}

export function getReviewBySlug(slug: string): Review {
  const filePath = path.join(reviewsDir, `${slug}.mdx`)

  // Return mock data if file doesn't exist
  if (!fs.existsSync(filePath)) {
    return getMockReview(slug)
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    metadata: data as ReviewMetadata,
    content,
    slug,
  }
}

export function generateStaticParams(): { slug: string }[] {
  if (!fs.existsSync(reviewsDir)) {
    return []
  }

  const files = fs.readdirSync(reviewsDir)
  return files.filter((file) => file.endsWith('.mdx')).map((file) => ({
    slug: file.replace('.mdx', ''),
  }))
}

// Fallback mock data for development/missing files
function getMockReview(slug: string): Review {
  const mockReviews: Record<string, Review> = {
    'happy-juice-bijwerkingen-huid': {
      slug: 'happy-juice-bijwerkingen-huid',
      metadata: {
        title: 'Happy Juice Bijwerkingen & Huid',
        date: '2026-05-12',
        category: 'Beauty',
        tags: ['happy-juice', 'huid', 'bijwerkingen'],
        metaDescription: 'Is Happy Juice veilig voor je huid? We onderzoeken bijwerkingen en ingrediënten.',
        slug: 'happy-juice-bijwerkingen-huid',
        rating: 4.3,
        author: 'Mark',
        affiliateCtaProduct: 'happy-juice-pack',
        schema: 'Article',
        excerpt: 'Is Happy Juice veilig voor je huid? We onderzoeken ingrediënten en ervaringen.',
        image: '/images/reviews/placeholder-1.jpg',
      },
      content: `## Wat is Happy Juice?

Happy Juice is Amare's populairste product - een powdered drink mix die de gut-brain axis ondersteunt. Het combineert drie producten (MentaBiotics, Energy+, EDGE) in één formule.

## Bijwerkingen op je huid

Voor de meeste gebruikers zijn er geen bijwerkingen. Happy Juice bevat natuurlijke ingrediënten en veroorzaakt zelden allergische reacties. Echter, zeer gevoelige huid kan soms roodheid ervaren in de eerste week.

### Gebruikers met gevoelige huid rapporteren:
- Lichte roodheid (voorbijgaand)
- Geen itching of irritatie
- Resultaten na acclimatisatie

## Ingrediënten analyse

- MentaBiotics: Probiotica voor gut health
- L-theanine: Voor rust en focus
- B vitamines: Voor energie

## Veelgestelde Vragen

**Vraag: Veroorzaakt Happy Juice huidproblemen?**
Nee, niet voor de meeste gebruikers. De natuurlijke formulering is goed verdragen.

**Vraag: Hoe lang tot je resultaten ziet?**
Gebruikers rapporteren meestal resulaten na 3-4 weken regelmatig gebruik.

**Vraag: Is het geschikt voor gevoelige huid?**
Ja, maar start met halve dosis en test allergie eerst.

## Conclusie

Happy Juice is een goed product met minimale bijwerkingen. Voor huidgevoeligheid is het verantwoord en veilig.`,
    },
  }

  return mockReviews[slug] || mockReviews['happy-juice-bijwerkingen-huid']
}
