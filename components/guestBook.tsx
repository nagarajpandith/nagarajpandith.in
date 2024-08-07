'use client';

import useComment from '@/hooks/useComment';
import Image from 'next/image';
import { formatDistanceToNowStrict } from 'date-fns/formatDistanceToNowStrict';

export default function Messages() {
  const { comments } = useComment();

  function distanceToNow(dateTime: number | Date) {
    return formatDistanceToNowStrict(dateTime, {
      addSuffix: true,
    });
  }

  return (
    <div className="h-screen overflow-scroll flex gap-5 flex-col">
      {comments?.map((comment, i) => (
        <div
          key={i}
          className="animate-fade-up p-3 md:p-5 bg-gray-800 rounded-xl"
        >
          <div className="md:flex md:flex-row items-center gap-2 text-gray-300">
            {comment.user.picture && (
              <Image
                src={comment.user.picture}
                alt="Profile image"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <p className="text-sm md:text-md">{comment.user.name}</p>
            <p className="hidden md:block">•</p>
            <div className="font-thin text-gray-300 text-sm md:text-md">
              {distanceToNow(comment.created_at)}
            </div>
          </div>
          <p className="mt-2 md:mt-5">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
