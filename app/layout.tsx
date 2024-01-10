import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PageTransition } from '@/components/pageTransition';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'https://nagarajpandith.in'
  ),
  title: {
    default: 'Nagaraj Pandith - Portfolio',
    template: '%s | Nagaraj Pandith',
  },
  description: 'Personal Website of Nagaraj Pandith',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Nagaraj Pandith - Portfolio',
    description: 'Personal Website & Blog of Nagaraj Pandith',
    url: 'https://nagarajpandith.in',
    siteName: 'Nagaraj Pandith - Portfolio',
    images: [
      {
        url: 'https://nagarajpandith.in/static/png/portfolio.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export { metadata };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 mx-auto`}>
        <Navbar />
        <main
          className={`flex flex-col mx-auto max-w-6xl justify-center px-4 pt-5`}
        >
          <PageTransition>
            <Providers>{children}</Providers>
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
