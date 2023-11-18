'use client';

import { Post } from '@/lib/mdx';
import BlogCard from './blogCard';
import { useState } from 'react';

const BlogSearch = ({ posts }: { posts: Post[] }) => {
  const [query, setQuery] = useState('');
  return (
    <>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search"
        className="border border-primary bg-gray-800 text-white rounded-xl px-5 py-2 w-full focus:ring-0 focus:ring-offset-0 ring-0"
      />
      {posts
        .filter(
          (post) =>
            post.meta.title.toLowerCase().includes(query.toLowerCase()) ||
            post.meta.desc.toLowerCase().includes(query.toLowerCase())
        )
        .map((post, i) => (
          <BlogCard
            key={i}
            title={post.meta.title}
            desc={post.meta.desc}
            date={post.meta.publishedDate}
            image={post.meta.coverImage}
            slug={post.meta.slug}
            readingTime={post.readingTime}
          />
        ))}
    </>
  );
};

export default BlogSearch;
