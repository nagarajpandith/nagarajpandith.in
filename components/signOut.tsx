'use client';

import { signOut } from 'next-auth/react';
import { IoLogOutOutline } from 'react-icons/io5';

export default function SignOutButton() {
  return (
    <button
      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => signOut()}
    >
      <IoLogOutOutline />
    </button>
  );
}
