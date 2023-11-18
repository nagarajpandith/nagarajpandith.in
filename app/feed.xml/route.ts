import { getAllPostsMeta } from '@/lib/mdx';
import RSS from 'rss';

export async function GET() {
  const feed = new RSS({
    title: 'Nagaraj Pandith - Blog',
    description:
      'Curated list of my blog posts. Tech, personal, and everything else!',
    site_url: 'https://nagarajpandith.in',
    feed_url: 'https://nagarajpandith.in/api/feed.xml',
    copyright: 'All rights reserved 2022, Nagaraj Pandith',
    language: 'en',
    pubDate: new Date(),
  });

  const posts = await getAllPostsMeta();
  const host = 'https://nagarajpandith.in';

  posts.map((post) => {
    feed.item({
      title: post.meta.title,
      guid: `${host}/blog/${post.meta.slug}`,
      url: `${host}/blog/${post.meta.slug}`,
      date: post.meta.publishedDate,
      description: post.meta.desc,
      author: 'Nagaraj Pandith',
    });
  });
  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
