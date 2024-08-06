'use client';

import { useSession, signIn } from 'next-auth/react';
import * as React from 'react';

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function CommentBox({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { data: session } = useSession();
  if (session) {
    return (
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center mt-10">
          <textarea
            placeholder="Let us know what you think!"
            className="px-4 text-black resize"
            onChange={(e) => setText(() => e.target.value)}
            value={text}
          ></textarea>
          <button className="border mt-6 rounded px-3">Post!</button>
        </div>
      </form>
    );
  }
  return (
    <div className="flex flex-col items-center mt-10">
      <textarea
        placeholder="Please SignIn to comment"
        className="px-4 text-black resize"
        disabled
      ></textarea>
      <button className="border mt-6 rounded px-3" onClick={() => signIn()}>
        SignIn
      </button>
    </div>
  );
}
