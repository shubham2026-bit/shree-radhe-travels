import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shree Radhe Travels | Best Cab Service in New Delhi - 24x7 Available',
  description:
    'Shree Radhe Travels — Premium taxi, airport transfers, outstation trips and curated tour packages across India. Operated from New Delhi with experienced chauffeurs. Trusted since 2014.',
  keywords:
    'cab service Delhi, taxi Delhi, airport transfer Delhi, tour packages India, outstation cab, Shree Radhe Travels, pilgrimage tour, Golden Triangle tour, Innova Crysta hire',
  authors: [{ name: 'Shree Radhe Travels' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shreeradhetravelsin.vercel.app',
    siteName: 'Shree Radhe Travels',
    title: 'Shree Radhe Travels | Best Cab Service in New Delhi - 24x7 Available',
    description:
      'Premium taxi, airport transfers, outstation trips and curated tour packages across India. Trusted since 2014.',
    images: [
      {
        url: '/images/hero-bg.png',
        width: 1200,
        height: 630,
        alt: 'Shree Radhe Travels - Safe, Comfortable & Reliable Travel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Radhe Travels | Best Cab Service in New Delhi',
    description: 'Premium cab service from New Delhi. Airport transfers, outstation trips, tour packages.',
    images: ['/images/hero-bg.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  metadataBase: new URL('https://shreeradhetravelsin.vercel.app'),
}

export const viewport: Viewport = {
  themeColor: '#1a3a6b',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
