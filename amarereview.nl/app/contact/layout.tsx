import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Stuur ons een bericht | AmareReview.nl',
  description: 'Heb je vragen over Amare producten of onze reviews? Neem contact op via ons formulier of stuur een e-mail.',
  alternates: { canonical: 'https://amarereview.nl/contact' },
  openGraph: {
    title: 'Contact — AmareReview.nl',
    description: 'Neem contact op met AmareReview.nl voor vragen, feedback, of product ervaringen.',
    url: 'https://amarereview.nl/contact',
    siteName: 'AmareReview.nl',
    locale: 'nl_NL',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
