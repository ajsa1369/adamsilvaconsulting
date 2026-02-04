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
    default: 'Adam Silva Consulting | Agentic Commerce & AI Authority Architecture',
    template: '%s | Adam Silva Consulting'
  },
  description: 'Enterprise architecture for UCP, ACP, and AP2 protocols. We build SPA + SSR + Heavy Schema infrastructure for the agent-centric web. Integrated Digital Intelligence.',
  keywords: [
    'Agentic Commerce',
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
    'Digital Intelligence'
  ],
  authors: [{ name: 'Adam Silva Consulting' }],
  creator: 'Adam Silva Consulting',
  publisher: 'Adam Silva Consulting',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adamsilvaconsulting.com',
    siteName: 'Adam Silva Consulting',
    title: 'Adam Silva Consulting | Agentic Commerce Architecture',
    description: 'Enterprise architecture for UCP, ACP, and AP2 protocols. Integrated Digital Intelligence for the agent-centric web.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adam Silva Consulting - Integrated Digital Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Silva Consulting | Agentic Commerce Architecture',
    description: 'Enterprise architecture for UCP, ACP, and AP2 protocols.',
    images: ['/og-image.png'],
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
      url: 'https://adamsilvaconsulting.com/logo.png',
      width: 512,
      height: 512,
    },
    description: 'Enterprise architecture for Agentic Commerce protocols (UCP, ACP, AP2). Integrated Digital Intelligence for the agent-centric web.',
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
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://adamsilvaconsulting.com/#website',
    url: 'https://adamsilvaconsulting.com',
    name: 'Adam Silva Consulting',
    description: 'Integrated Digital Intelligence - Agentic Commerce Architecture',
    publisher: {
      '@id': 'https://adamsilvaconsulting.com/#organization',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
