'use client';

import useComment from '@/hooks/useComment';

export default function CreateMessage() {
  const { text, setText, onSubmit } = useComment();
  function SubmitButton() {
    return (
      <button
        className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-xl"
        type="submit"
      >
        Post
      </button>
    );
  }

  return (
    <div className="my-5">
      <form className="flex gap-2" onSubmit={onSubmit}>
        <input
          className="w-full bg-gray-800 rounded-xl focus:outline-none p-2"
          type="text"
          name="message"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <SubmitButton />
      </form>
    </div>
  );
}
