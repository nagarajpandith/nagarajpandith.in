import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nagaraj Pandith - Sanity Studio',
  description: 'Studio for Sanity CMS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
