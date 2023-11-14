import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PageTransition } from '@/components/PageTransition';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Nagaraj Pandith - Portfolio',
  description: 'Personal Website of Nagaraj Pandith',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export { metadata };

export default function RootLayout({
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
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
