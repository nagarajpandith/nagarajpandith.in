import BlogSearch from '@/components/blogSearch';
import { getAllPostsMeta } from '@/lib/mdx';
import redis from '@/lib/redis';

export default async function Blog() {
  const posts = await getAllPostsMeta();
  const keys = posts.map((post) =>
    ['pageviews', 'blogs', post.meta.slug].join(':')
  );

  const viewCounts = await redis.mget<number[]>(...keys);

  const views = viewCounts.reduce((acc, viewCount, index) => {
    acc[posts[index].meta.slug] = viewCount ?? 0;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="my-10 flex gap-5 flex-col">
      <h1 className="text-primary lg:text-5xl text-3xl font-bold">Blog</h1>
      <BlogSearch posts={posts} views={views} />
    </div>
  );
}
