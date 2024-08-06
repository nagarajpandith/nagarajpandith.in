'use client';
import useComment from '@/hooks/useComment';
import CommentBox from '@/components/commentBox';
import CommentList from '@/components/commentList';
import { SessionProvider } from 'next-auth/react';

const CommentSection = () => {
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  return (
    <>
      <SessionProvider>
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
      </SessionProvider>
    </>
  );
};

export default CommentSection;
