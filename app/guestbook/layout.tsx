import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/app/context/SessionProvider';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <main className="text-white">
      <SessionProvider session={session}>{children}</SessionProvider>
    </main>
  );
}
