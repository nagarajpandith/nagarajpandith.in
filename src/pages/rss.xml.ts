import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blogs = await getCollection('blog');
  
  // Sort by date
  const sortedBlogs = blogs.sort((a, b) => 
    new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );

  return rss({
    title: 'nagaraj pandith - blog',
    description: 'thoughts on tech, development, and building things. curated list of my blog posts.',
    site: context.site || 'https://nagarajpandith.in',
    items: sortedBlogs.map((blog) => ({
      title: blog.data.title,
      description: blog.data.desc,
      pubDate: new Date(blog.data.publishedDate),
      link: `/blog/${blog.slug}/`,
      author: 'Nagaraj Pandith',
      categories: blog.data.tags.split(',').map(tag => tag.trim()),
    })),
    customData: `<language>en-us</language>`,
    stylesheet: '/rss-styles.xsl', // Optional: pretty RSS styling
  });
}