import BlogSearch from '@/components/blogSearch';
import { getAllPostsMeta } from '@/lib/mdx';

export default async function Blog() {
  const posts = await getAllPostsMeta();
  return (
    <div className="my-10 flex gap-5 flex-col">
      <h1 className="text-primary lg:text-5xl text-3xl font-bold">Blog</h1>
      <BlogSearch posts={posts} />
    </div>
  );
}
