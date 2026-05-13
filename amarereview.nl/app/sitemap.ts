import { MetadataRoute } from 'next'

const BASE_URL = 'https://amarereview.nl'

const reviews = [
  'happy-juice-bijwerkingen-huid',
  'darmbacteriën-gezondheid-mentabiotics',
  'edge-plus-focus-concentratie',
]

const categories = [
  'gut-brain',
  'focus',
  'beauty',
  'sleep',
  'weight',
  'immune',
  'essentials',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/categorieen`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vergelijking`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/over-ons`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  const reviewPages: MetadataRoute.Sitemap = reviews.map((slug) => ({
    url: `${BASE_URL}/reviews/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const categoryPages: MetadataRoute.Sitemap = categories.map((slug) => ({
    url: `${BASE_URL}/categorieen/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...reviewPages, ...categoryPages]
}
