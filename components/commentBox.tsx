'use client';

import * as React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { IoLogOutOutline, IoSendSharp } from 'react-icons/io5';
import Image from 'next/image';
import { FaGoogle } from 'react-icons/fa';

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const CHARACTER_LIMIT = 500;

export default function CommentBox({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div className="mt-5 flex md:flex-row items-center gap-2 text-center">
          <a className="text-sm no-underline">
            Posting as{' '}
            <span className="font-semibold truncate">
              {session?.user?.name}
            </span>
          </a>
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => signOut()}
          >
            <IoLogOutOutline />
          </button>
        </div>
        <div className="my-1">
          <form className="flex gap-2" onSubmit={onSubmit}>
            <textarea
              value={text}
              onChange={(e) => {
                if (e.target.value.length <= CHARACTER_LIMIT) {
                  setText(e.target.value);
                }
              }}
              className="w-full bg-gray-800 rounded-xl focus:outline-none p-1 px-3 resize-none"
              name="message"
              placeholder="Post a comment..."
            />
            <button
              className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-xl"
              type="submit"
              disabled={text.length > CHARACTER_LIMIT}
            >
              <IoSendSharp />
            </button>
          </form>
          <div className="flex flex-col items-start md:flex-row justify-between my-1">
            <div
              className={`text-right text-sm text-gray-400 ${
                text.length >= CHARACTER_LIMIT && 'text-red-500'
              }`}
            >
              {text.length}/{CHARACTER_LIMIT}
            </div>
            {text.length >= CHARACTER_LIMIT && (
              <div className="text-red-500 text-sm md:block hidden">
                Hold up, Shakespeare! Character limit reached.
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="mt-3 mb-3">
        Hello! Please <b>Sign in</b> to comment.
      </div>
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
  );
}
