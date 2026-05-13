interface ReviewSchema {
  name: string
  description: string
  ratingValue: number
  reviewCount: number
  datePublished: string
  authorName: string
  category: string
  slug: string
}

interface ArticleSchema {
  headline: string
  description: string
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl?: string
  slug: string
  imageUrl?: string
  wordCount?: number
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mark',
    jobTitle: 'Lead Reviewer & Oprichter',
    url: 'https://amarereview.nl/over-ons',
    email: 'contact@amarereview.nl',
    affiliation: {
      '@type': 'Organization',
      name: 'AmareReview.nl',
      url: 'https://amarereview.nl',
    },
    knowsAbout: [
      'Amare producten',
      'Supplement reviews',
      'Darmgezondheid',
      'Gut-brain axis',
      'Natuurlijke supplementen',
      'Happy Juice',
      'MentaBiotics',
      'Edge Plus',
    ],
  }
}

export function generateReviewSchema(review: ReviewSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    name: review.name,
    description: review.description,
    itemReviewed: {
      '@type': 'Product',
      name: review.name,
      category: review.category,
    },
    author: {
      '@type': 'Person',
      name: review.authorName,
      url: 'https://amarereview.nl/over-ons',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'AmareReview.nl',
      url: 'https://amarereview.nl',
    },
    url: `https://amarereview.nl/reviews/${review.slug}`,
    inLanguage: 'nl-NL',
  }
}

export function generateArticleSchema(article: ArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.authorName,
      url: article.authorUrl || 'https://amarereview.nl/over-ons',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AmareReview.nl',
      url: 'https://amarereview.nl',
      logo: {
        '@type': 'ImageObject',
        url: 'https://amarereview.nl/images/logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://amarereview.nl/reviews/${article.slug}`,
    },
    image: article.imageUrl || 'https://amarereview.nl/images/reviews/placeholder-1.svg',
    wordCount: article.wordCount,
    inLanguage: 'nl-NL',
    isAccessibleForFree: true,
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AmareReview.nl',
    url: 'https://amarereview.nl',
    description:
      'Onafhankelijke, transparante reviews van Amare producten. Wij helpen Nederlanders goed geïnformeerde keuzes te maken.',
    email: 'contact@amarereview.nl',
    foundingDate: '2023',
    founder: {
      '@type': 'Person',
      name: 'Mark',
      jobTitle: 'Oprichter & Lead Reviewer',
    },
    sameAs: [
      'https://amarereview.nl',
    ],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://amarereview.nl/reviews?zoek={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateSpeakableSchema(headline: string, summary: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SpeakableSpecification',
    headline: {
      '@type': 'SpeakableSpecification',
      xpath: ['/html/head/title'],
    },
    summary: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.speakable-summary'],
    },
  }
}
