import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alle Amare Product Reviews | AmareReview.nl',
  description: 'Bekijk al onze geverifieerde Amare product reviews. Vergelijk Happy Juice, Edge Plus, MentaBiotics en meer.',
  alternates: { canonical: 'https://amarereview.nl/reviews' },
  openGraph: {
    title: 'Alle Amare Product Reviews',
    description: 'Bekijk al onze geverifieerde Amare product reviews.',
    url: 'https://amarereview.nl/reviews',
    siteName: 'AmareReview.nl',
    locale: 'nl_NL',
  },
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
