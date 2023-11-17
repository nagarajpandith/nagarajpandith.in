import { authOptions } from '@/lib/auth';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/app/context/SessionProvider';

const metadata: Metadata = {
  title: 'Nagaraj Pandith - Guestbook',
  description: 'Personal Website of Nagaraj Pandith',
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export { metadata };

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <main className='text-white'>
      <SessionProvider session={session}>{children}</SessionProvider>
    </main>
  );
}
