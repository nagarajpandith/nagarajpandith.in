'use client';

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

export default function SignInButton() {
  return (
    <button
      className="mb-3 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded"
      onClick={() => signIn('google')}
    >
      <div className="h-5 flex gap-2 items-center">
        <FaGoogle />
        Sign In
      </div>
    </button>
  );
}
