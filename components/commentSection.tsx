'use client';
import useComment from '@/hooks/useComment';
import CommentBox from '@/components/commentBox';
import CommentList from '@/components/commentList';
import { SessionProvider } from 'next-auth/react';

const CommentSection = () => {
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  return (
    <div className="overflow-hidden">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white border-t border-gray-700 pt-5">
        Discussion {comments?.length ? `(${comments.length})` : ''}
      </h2>
      <SessionProvider>
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
      </SessionProvider>
    </div>
  );
};

export default CommentSection;
