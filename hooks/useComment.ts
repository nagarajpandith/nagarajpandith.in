'use client';

import { useState } from 'react';
import useSWR from 'swr';

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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useComment = () => {
  const [text, setText] = useState('');
  const { data: comments, mutate } = useSWR<Comment[]>(
    '/api/comment/get',
    fetcher,
    {
      fallbackData: [],
    }
  );
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('/api/comment/post', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setText('');
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };
  const onDelete = async (comment: Comment) => {
    try {
      await fetch('/api/comment/delete', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      await mutate();
    } catch (error) {
      console.log(error);
    }
  };
  return { text, setText, comments, onSubmit, onDelete };
};

export default useComment;
