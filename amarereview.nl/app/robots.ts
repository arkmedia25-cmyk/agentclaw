import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/.well-known/'],
      },
    ],
    sitemap: 'https://amarereview.nl/sitemap.xml',
  }
}
