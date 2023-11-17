'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

import Image from 'next/image';

const AuthInfo = () => {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <>
          <div className="mb-3 flex flex-col md:flex-row items-center gap-2 text-center">
            <Image
              src={data.user?.image!}
              alt="Profile image"
              width={40}
              height={40}
              className="rounded-full"
            />
            Hello {data?.user?.name}!
          </div>
          <button className="flex gap-2" onClick={() => signOut()}>
            {' '}
            <div className="h-5"> Sign Out</div>
          </button>
        </>
      ) : (
        <>
          <div className="mb-3 text-center">Hello Guest! Please log in.</div>
          <button className="flex gap-2" onClick={() => signIn('google')}>
            <div className="h-5">Sign In</div>
          </button>
        </>
      )}
    </>
  );
};

export default AuthInfo;
