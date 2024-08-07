'use client';
import * as React from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { formatDistanceToNowStrict } from 'date-fns/formatDistanceToNowStrict';
import { MdDeleteOutline } from 'react-icons/md';

type User = {
  name: string;
  picture: string;
  sub: string;
  email?: string;
};

type Comment = {
  id: string;
  created_at: number;
  url: string;
  text: string;
  user: User;
};

function distanceToNow(dateTime: number | Date) {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
  });
}

type CommentListProps = {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
};

const CommentList = ({ comments, onDelete }: CommentListProps) => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="flex flex-col items-center justify-start w-full">
      {comments?.length === 0 && (
        <div className="shadow-2xl col-span-2 mt-4 text-center bg-gray-800 flex justify-center items-center p-5 flex-col rounded-xl w-full">
          <h1 className="md:text-md text-xs font-thin">
            No comments yet. Be the first to comment.
          </h1>
        </div>
      )}
      {comments &&
        comments.map((comment, i) => {
          const isAuthor = user && user.sub === comment.user.sub;
          const isAdmin = user && user.email === process.env.ADMIN_EMAIL;

          return (
            <Comment
              key={comment.id}
              comment={comment}
              i={i}
              isAuthor={isAuthor}
              isAdmin={isAdmin}
              onDelete={onDelete}
            />
          );
        })}
    </div>
  );
};

export default CommentList;

const Comment = ({
  comment,
  i,
  isAuthor,
  isAdmin,
  onDelete,
}: {
  comment: Comment;
  i: number;
  isAuthor: boolean | undefined;
  isAdmin: boolean | undefined;
  onDelete: (comment: Comment) => Promise<void>;
}) => {
  return (
    <article
      className={`text-base border-gray-700 bg-gray-900 w-full ${
        i === 0 ? '' : 'border-t'
      }`}
    >
      <footer
        className={`flex justify-between items-center mb-2 ${
          i === 0 ? '' : '-mt-8'
        }`}
      >
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-xs md:text-sm text-gray-900 dark:text-white font-semibold">
            <Image
              className="mr-2 w-6 h-6 rounded-full"
              src={comment.user.picture}
              alt={comment.user.name}
              width={24}
              height={24}
            />
            <span className="md:max-w-[300px] max-w-[100px] whitespace-nowrap text-ellipsis overflow-hidden">
              {comment.user.name}
            </span>
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            {distanceToNow(comment.created_at)}
          </p>
        </div>
        {(isAdmin || isAuthor) && (
          <button
            className="inline-flex items-center p-2 text-sm font-medium text-center gap-1 hover:text-red-500 transition-colors duration-300"
            type="button"
            onClick={() => onDelete(comment)}
          >
            <MdDeleteOutline />
            <span className="hidden md:inline">Delete</span>
          </button>
        )}
      </footer>
      <p className="text-sm md:text-md text-gray-500 dark:text-gray-400 -mt-10">
        {comment.text}
      </p>
    </article>
  );
};
