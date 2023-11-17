'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { IoLogOutOutline } from 'react-icons/io5';
import Image from 'next/image';
import CreateMessage from './createMessage';
import { FaGoogle } from 'react-icons/fa';

const AuthInfo = () => {
  const { data } = useSession();

  return (
    <>
      {data?.user ? (
        <>
          <div className="mt-5 mb-3 flex md:flex-row items-center gap-2 text-center">
            <Image
              src={data.user?.image!}
              alt="Profile image"
              width={40}
              height={40}
              className="rounded-full"
            />
            <a className="text-sm md:text-md lg:text-lg">
              Posting as{' '}
              <span className="font-semibold">{data?.user?.name}</span>
            </a>
            <button
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => signOut()}
            >
              <IoLogOutOutline />
            </button>
          </div>
          <CreateMessage />
        </>
      ) : (
        <>
          <div className='mt-3 mb-3'>Hello Guest! Please log in.</div>
          <button
            className="mb-3 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
            onClick={() => signIn('google')}
          >
            <div className="h-5 flex gap-2 items-center">
              <FaGoogle />
              Sign In
            </div>
          </button>
        </>
      )}
    </>
  );
};

export default AuthInfo;
