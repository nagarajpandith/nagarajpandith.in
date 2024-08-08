import Image from 'next/image';
import CreateMessage from './createMessage';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import SignOutButton from './signOut';
import SignInButton from './signIn';

async function AuthInfo() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session?.user ? (
        <>
          <div className="mt-5 mb-3 flex md:flex-row items-center gap-2 text-center">
            <Image
              src={session.user?.image!}
              alt="Profile image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <a className="text-sm md:text-md lg:text-lg">
              Posting as{' '}
              <span className="font-semibold md:max-w-[300px] max-w-[100px] whitespace-nowrap text-ellipsis overflow-hidden">
                {session?.user?.name}
              </span>
            </a>
            <SignOutButton />
          </div>
          <CreateMessage />
        </>
      ) : (
        <>
          <div className="mt-3 mb-3">Hello Guest! Please log in.</div>
          <SignInButton />
        </>
      )}
    </>
  );
}

export default AuthInfo;
