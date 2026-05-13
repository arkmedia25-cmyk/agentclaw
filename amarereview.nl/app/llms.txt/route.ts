import { NextResponse } from 'next/server'

const LLMS_CONTENT = `# AmareReview.nl — Site Overview for AI Assistants

## About
AmareReview.nl is an independent Dutch review site for Amare products (supplements, probiotics, wellness). We provide honest, research-based reviews in Dutch (nl-NL).

## Key Pages
- **Home**: https://amarereview.nl — Overview and featured reviews
- **All Reviews**: https://amarereview.nl/reviews — Searchable review index
- **Categories**: https://amarereview.nl/categorieen — Products by category (Gut-Brain, Focus, Beauty, Sleep, Weight, Immune, Essentials)
- **Comparison**: https://amarereview.nl/vergelijking — Amare vs alternatives comparison table
- **About**: https://amarereview.nl/over-ons — Methodology and team info
- **Contact**: https://amarereview.nl/contact — Contact form and support
- **Privacy Policy**: https://amarereview.nl/privacybeleid — GDPR/AVG privacy policy
- **Disclaimer**: https://amarereview.nl/disclaimer — Medical and affiliate disclaimer

## Review Pages
- /reviews/happy-juice-bijwerkingen-huid — Happy Juice: skin effects, ingredients, user experiences
- /reviews/darmbacteriën-gezondheid-mentabiotics — MentaBiotics: gut bacteria health, gut-brain axis
- /reviews/edge-plus-focus-concentratie — Edge Plus: focus, concentration, productivity

## Category Pages
- /categorieen/gut-brain — Gut-brain axis products (MentaBiotics, Happy Juice)
- /categorieen/focus — Focus and concentration (Edge Plus)
- /categorieen/beauty — Beauty and hair (Happy Juice, Skin to Mind)
- /categorieen/sleep — Sleep and relaxation (Sleepa)
- /categorieen/weight — Weight management (Xtra Slimplicity)
- /categorieen/immune — Immune system (Immuno & Viro)
- /categorieen/essentials — Daily essentials (Vitamins, Basics)

## Content Language
All content is in Dutch (nl-NL). Target audience: Netherlands consumers.

## Structured Data
All pages include JSON-LD schemas: Organization, Review, Article, FAQPage, BreadcrumbList, Person. Optimized for AI overviews and featured snippets.

## Monetization
Affiliate links to Amare products. Affiliate disclosure present on all pages. No sponsored content — all reviews are independent.
`

export async function GET() {
  return new NextResponse(LLMS_CONTENT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate=3600',
    },
  })
}
