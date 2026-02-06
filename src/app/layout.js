import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chat from '@/components/Chat';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  metadataBase: new URL('https://adamsilvaconsulting.com'),
  title: {
    default: 'Adam Silva Consulting | Global Infrastructure for Agentic Commerce',
    template: '%s | Adam Silva Consulting'
  },
  description: 'Global infrastructure for agentic commerce. Enterprise architecture for UCP, ACP, and AP2 protocols. We build SPA + SSR + Heavy Schema infrastructure for the agent-centric web.',
  keywords: [
    'Agentic Commerce',
    'Global Infrastructure for Agentic Commerce',
    'UCP Universal Commerce Protocol',
    'ACP Agentic Commerce Protocol',
    'AP2 Agent Payments Protocol',
    'AI Authority',
    'AEO Agent Engine Optimization',
    'GEO Generative Engine Optimization',
    'SPA SSR Architecture',
    'Schema Markup',
    'JSON-LD',
    'AI SEO',
    'Digital Intelligence',
    'Adam Silva Consulting'
  ],
  authors: [{ name: 'Adam Silva', url: 'https://adamsilvaconsulting.com' }],
  creator: 'Adam Silva Consulting',
  publisher: 'Adam Silva Consulting',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adamsilvaconsulting.com',
    siteName: 'Adam Silva Consulting',
    title: 'Adam Silva Consulting | Global Infrastructure for Agentic Commerce',
    description: 'Global infrastructure for agentic commerce. Enterprise architecture for UCP, ACP, and AP2 protocols powering the agent-centric web.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adam Silva Consulting - Global Infrastructure for Agentic Commerce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Silva Consulting | Global Infrastructure for Agentic Commerce',
    description: 'Enterprise architecture for UCP, ACP, and AP2 protocols powering the agent-centric web.',
    images: ['/og-image.png'],
    creator: '@adamsilvaconsulting',
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
  alternates: {
    canonical: 'https://adamsilvaconsulting.com',
  },
  other: {
    'application-name': 'Adam Silva Consulting',
    'apple-mobile-web-app-title': 'Adam Silva Consulting',
    'msapplication-TileColor': '#085DA0',
    'theme-color': '#085DA0',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://adamsilvaconsulting.com/#organization',
    name: 'Adam Silva Consulting',
    alternateName: 'ASC',
    url: 'https://adamsilvaconsulting.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://adamsilvaconsulting.com/assets/logo.png',
      width: 512,
      height: 512,
    },
    description: 'Global Infrastructure for Agentic Commerce. Enterprise architecture for UCP, ACP, and AP2 protocols powering the agent-centric web.',
    slogan: 'Global Infrastructure for Agentic Commerce',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Port Saint Lucie',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@adamsilvaconsulting.com',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/adam-silva-consulting',
    ],
    knowsAbout: [
      'Universal Commerce Protocol (UCP)',
      'Agentic Commerce Protocol (ACP)',
      'Agent Payments Protocol (AP2)',
      'AI Authority Building',
      'Agent Engine Optimization (AEO)',
      'Generative Engine Optimization (GEO)',
      'SPA + SSR Architecture',
      'Schema Markup',
      'JSON-LD',
      'Agentic Commerce',
      'Global Infrastructure',
      'Digital Transformation'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide'
    },
    serviceType: [
      'Agentic Commerce Architecture',
      'AI Marketing Intelligence',
      'SEO/AEO/GEO Services',
      'Lead Generation',
      'Authority Building'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://adamsilvaconsulting.com/#website',
    url: 'https://adamsilvaconsulting.com',
    name: 'Adam Silva Consulting',
    description: 'Global Infrastructure for Agentic Commerce',
    publisher: {
      '@id': 'https://adamsilvaconsulting.com/#organization',
    },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://adamsilvaconsulting.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  };

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://adamsilvaconsulting.com/#founder',
    name: 'Adam Silva',
    givenName: 'Adam',
    familyName: 'Silva',
    jobTitle: 'Founder & Principal Consultant',
    worksFor: {
      '@id': 'https://adamsilvaconsulting.com/#organization'
    },
    email: 'info@adamsilvaconsulting.com',
    knowsAbout: [
      'Agentic Commerce',
      'AI Marketing Intelligence',
      'Digital Transformation',
      'Authority Building',
      'SEO/AEO/GEO'
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://adamsilvaconsulting.com" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chat />
      </body>
    </html>
  );
}
