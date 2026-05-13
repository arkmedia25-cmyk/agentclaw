import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/ui/JsonLd'
import { generateOrganizationSchema } from '@/lib/schema'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || ''
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://amarereview.nl'),
  title: {
    default: 'AmareReview.nl | Onafhankelijke Amare Product Reviews',
    template: '%s | AmareReview.nl',
  },
  description: 'Eerlijke, onafhankelijke reviews van Amare producten. Lees betrouwbare beoordelingen van echte gebruikers in Nederland.',
  keywords: 'Amare review, Happy Juice review, Amare producten, onafhankelijke reviews, Amare Nederland',
  authors: [{ name: 'AmareReview.nl', url: 'https://amarereview.nl' }],
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://amarereview.nl',
    siteName: 'AmareReview.nl',
    title: 'AmareReview.nl | Onafhankelijke Amare Product Reviews',
    description: 'Eerlijke, onafhankelijke reviews van Amare producten. Lees betrouwbare beoordelingen van echte gebruikers in Nederland.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: GSC_VERIFICATION ? {
    google: GSC_VERIFICATION,
  } : {},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a3564" />
      </head>
      <body className="flex flex-col min-h-screen bg-white font-sans text-text">
        <JsonLd data={generateOrganizationSchema()} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
      </body>
    </html>
  )
}
