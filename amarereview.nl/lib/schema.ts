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
