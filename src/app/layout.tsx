import {Inter} from 'next/font/google'

import './app.css'

import type {Metadata, Viewport} from 'next'
import {type ReactNode} from 'react'

import {GoogleAnalytics, WebVitals} from '@/components'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
})

export const viewport: Viewport = {
  themeColor: '#ffffff',
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  appleWebApp: {
    statusBarStyle: 'default',
  },
  authors: [{name: 'Jaroslav Matas', url: 'https://jaroslavmatas.com'}],
  creator: 'Jaroslav Matas',
  description:
    'Portfolio of Jaroslav Matas, a Prague-based 3D and motion designer creating product visuals, brand storytelling, and motion-driven digital experiences.',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      {sizes: '32x32', type: 'image/png', url: '/favicon-32x32.png'},
      {sizes: '16x16', type: 'image/png', url: '/favicon-16x16.png'},
    ],
    shortcut: '/favicon.ico',
  },
  keywords: [
    'Jaroslav Matas',
    'Jaroslav Matas portfolio',
    '3D motion designer',
    'motion designer',
    '3D artist',
    '3D animator',
    'motion design portfolio',
    'product animation',
    'product visualization',
    'brand storytelling',
    'visual design',
    'art direction',
    'Blender',
    'freelance motion designer',
    'Prague',
    'Czechia',
  ],
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://jaroslavmatas.com'),
  openGraph: {
    description:
      'Portfolio of Jaroslav Matas, a Prague-based 3D and motion designer creating product visuals, brand storytelling, and motion-driven digital experiences.',
    images: [
      {
        alt: 'Jaroslav Matas - 3D & Motion Design',
        height: 630,
        url: '/png/og-image.png',
        width: 1200,
      },
    ],
    locale: 'en_US',
    siteName: 'Jaroslav Matas Portfolio',
    title: 'Jaroslav Matas - 3D & Motion Design',
    type: 'website',
    url: 'https://jaroslavmatas.com',
  },
  publisher: 'Jaroslav Matas',
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: {
    default: 'Jaroslav Matas - 3D & Motion Design',
    template: '%s | Jaroslav Matas',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Portfolio of Jaroslav Matas, a Prague-based 3D and motion designer creating product visuals, brand storytelling, and motion-driven digital experiences.',
    images: ['/png/og-image.png'],
    title: 'Jaroslav Matas - 3D & Motion Design',
  },
}

type Props = Readonly<{
  children: ReactNode
}>

export default function RootLayout({children}: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
      addressLocality: 'Prague',
    },
    email: 'jaroslavmatas3090@gmail.com',
    image: 'https://jaroslavmatas.com/png/profile@3x.png',
    jobTitle: '3D Motion Designer',
    knowsAbout: [
      '3D Animation',
      'Motion Design',
      'Product Visualization',
      'Brand Storytelling',
      'Visual Design',
      'Art Direction',
      'Blender',
    ],
    name: 'Jaroslav Matas',
    sameAs: [
      'https://www.linkedin.com/in/jaroslav-matas-4a4b05250/',
      'https://www.instagram.com/jaroslavmatas_/',
    ],
    url: 'https://jaroslavmatas.com',
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
      </head>
      <body className={inter.className}>
        {children}
        <GoogleAnalytics />
        <WebVitals />
      </body>
    </html>
  )
}