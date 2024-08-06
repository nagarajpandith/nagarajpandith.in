import Link from 'next/link';
import BlogCard from './blogCard';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { getAllPostsMeta } from '@/lib/mdx';
import redis from '@/lib/redis';

export default async function Blogs() {
  const posts = await getAllPostsMeta();

  const keys = posts
    .slice(0, 2)
    .map((post) => ['pageviews', 'blogs', post.meta.slug].join(':'));

  const viewCounts = await redis.mget<number[]>(...keys);

  const views = viewCounts.reduce((acc, viewCount, index) => {
    acc[posts[index].meta.slug] = viewCount ?? 0;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="my-20 bg-gray-800 rounded-xl p-5 flex gap-5 flex-col">
      <h1 className="text-white text-xl md:text-2xl font-bold text-center">
        Things I&apos;ve written
      </h1>
      {posts.slice(0, 2).map((post, i) => (
        <BlogCard
          key={i}
          tags={post.meta.tags.split(',')}
          title={post.meta.title}
          desc={post.meta.desc}
          date={post.meta.publishedDate}
          image={post.meta.coverImage}
          slug={post.meta.slug}
          readingTime={post.readingTime}
          views={views[post.meta.slug]}
        />
      ))}
      <div className="flex items-center justify-center">
        <Link
          href="/blog"
          className="bg-primary w-fit text-sm text-white px-5 py-2 rounded-full mt-5 hover:opacity-80 transition duration-300 ease-in-out group"
        >
          Checkout more blogs
          <HiChevronDoubleRight className="inline transform translate-x-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
