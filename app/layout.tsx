import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.faslax.in'),
  title: {
    default: 'FasLax Digital Solutions — Web, AI & Digital Marketing Agency',
    template: '%s — FasLax Digital Solutions'
  },
  description: 'FasLax builds high-performance web applications, intelligent WhatsApp/AI chatbots, and regional SEO systems for ambitious businesses.',
  icons: {
    icon: '/images/faslax-logo.png',
    shortcut: '/images/faslax-logo.png',
    apple: '/images/faslax-logo.png'
  },
  openGraph: {
    title: 'FasLax Digital Solutions — Web, AI & Digital Growth',
    description: 'High-speed web platforms, intelligent automation, and data-driven marketing engineered from Kannur, Kerala.',
    url: 'https://www.faslax.in',
    siteName: 'FasLax Digital Solutions',
    images: [
      {
        url: '/images/faslax-logo.png',
        width: 1200,
        height: 630,
        alt: 'FasLax Digital Solutions'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FasLax Digital Solutions',
    description: 'High-speed web platforms, intelligent automation, and data-driven marketing engineered from Kannur, Kerala.',
    images: ['/images/faslax-logo.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}