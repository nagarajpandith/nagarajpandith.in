'use client';

import { createMessage } from '@/app/actions';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';

export default function CreateMessage() {
  function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <button
        className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-xl"
        disabled={pending}
        type="submit"
      >
        {pending ? 'Posting...' : 'Post'}
      </button>
    );
  }

  async function create(formData: FormData) {
    if (!formData.get('message')) return;
    await createMessage(formData);
    ref.current?.reset();
  }

  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className='my-5'>
      <form className="flex gap-2" action={create} ref={ref}>
        <input
          className="w-full bg-gray-800 rounded-xl focus:outline-none p-2"
          type="text"
          name="message"
        />
        <SubmitButton />
      </form>
    </div>
  );
}
