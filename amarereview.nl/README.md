# AmareReview.nl

Independent review site for Amare products in Dutch. Built with Next.js 14, TypeScript, and Tailwind CSS.

**Last Updated**: 2026-05-13
**Current Phase**: Phase 1 Complete ✅ | Phase 2 (Lead Generation) Ready 🔄

**Quick Status**: See `PROGRESS.md` for session checkpoint and next steps.

## Project Structure

```
amarereview-nl/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── reviews/
│   │   ├── page.tsx            # Reviews listing
│   │   └── [slug]/page.tsx      # Individual review pages
│   ├── kategoriler/
│   │   ├── page.tsx            # Categories listing
│   │   └── [slug]/page.tsx      # Category detail pages
│   ├── karsilastirma/page.tsx   # Comparison page
│   ├── hakkimizda/page.tsx      # About page
│   ├── contact/page.tsx         # Contact form page
│   └── layout.tsx               # Root layout
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Navigation header
│   │   └── Footer.tsx           # Footer with links
│   └── ui/
│       ├── ReviewCard.tsx       # Review card component
│       ├── RatingStars.tsx      # Rating display
│       ├── AffiliateCTA.tsx     # Affiliate CTA button
│       └── MdxRenderer.tsx      # Markdown renderer
├── content/
│   └── reviews/                 # MDX article files
├── lib/
│   └── reviews.ts              # Review data fetching
├── public/                      # Static assets
├── styles/
│   └── globals.css             # Global styles + Tailwind
├── tailwind.config.js          # Tailwind configuration
├── package.json                # Dependencies
└── tsconfig.json               # TypeScript config
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your values:
- `NEXT_PUBLIC_AMARE_AFFILIATE_LINK`: Your Amare affiliate link
- `NEXT_PUBLIC_GSC_PROPERTY_ID`: Google Search Console property

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

### Adding Reviews

Reviews are stored as MDX files in `content/reviews/`. Each file should have frontmatter with metadata:

```mdx
---
title: "Product Name Review"
date: "2026-05-12"
category: "Beauty"
tags: ["tag1", "tag2"]
metaDescription: "SEO description"
slug: "product-name-review"
rating: 4.3
author: "Mark"
affiliateCtaProduct: "product-id"
schema: "Article"
excerpt: "Short excerpt"
image: "/images/reviews/image.jpg"
---

## Content starts here...
```

The review page will automatically render the MDX content.

### Supported Categories

- Gut-Brain Axis
- Focus & Concentratie
- Beauty & Haar
- Slaap & Ontspanning
- Gewichtsmanagement
- Immuunsysteem
- Dagelijkse Essentials

## Affiliate System

AmareReview.nl is an affiliate partner of Amare. Revenue comes from affiliate commissions when users purchase through our links.

**Important**: All reviews are honest and unbiased. Affiliate status does not influence ratings or recommendations.

### How It Works

1. Users click "Bestel @ Amare" button
2. `AffiliateCTA.tsx` component tracks the click in localStorage
3. User is directed to Amare's official store with affiliate ID
4. Commission is earned on purchase (doesn't change user's price)

## Styling System

### Colors (CSS Variables)

- `--color-primary`: #6B4C8C (Purple)
- `--color-primary-light`: #8B6BA4 (Light Purple)
- `--color-accent`: #C8A951 (Gold)
- `--color-text`: #2C2C2C (Dark text)
- `--color-text-muted`: #666666
- `--color-bg-soft`: #F9F6FF (Light purple background)
- `--color-border`: #E8E0F0
- `--color-success`: #10B981 (Green)
- `--color-error`: #EF4444 (Red)

### Utilities

- `.container-max`: Max width container with padding
- `.section-padding`: Standard section padding (py-12)
- `.grid-auto`: Auto responsive grid
- `.btn-primary`: Primary button (gold background)
- `.btn-secondary`: Secondary button (purple background)
- `.card`: Card component styling

## Key Features

- ✅ SEO Optimized (GEO/AEO)
- ✅ Responsive Design (Mobile-first)
- ✅ Fast Performance (Next.js 14)
- ✅ Type Safe (TypeScript)
- ✅ Accessible (WCAG standards)
- ✅ MDX Content System
- ✅ Affiliate Tracking
- ✅ Dynamic Routing

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

```bash
vercel deploy
```

### Building for Production

```bash
npm run build
npm start
```

## Contributing

All content must follow these guidelines:

1. **Honesty**: Reviews must be genuine and unbiased
2. **Accuracy**: Facts must be verifiable
3. **Transparency**: Affiliate status is always disclosed
4. **Quality**: Minimum 1,200 words per review
5. **SEO**: Include relevant keywords naturally
6. **Internal Links**: Link to related content
7. **Images**: Use descriptive alt text

## License

This project is proprietary. All rights reserved.

## Support

For questions or contributions, contact contact@amarereview.nl
