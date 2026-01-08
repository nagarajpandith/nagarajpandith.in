import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const baseUrl = context.site?.toString() || 'https://nagarajpandith.in';
  
  // Get all blogs
  const blogs = await getCollection('blog');
  
  // Get all notes
  const notes = await getCollection('notes');

  // Static pages with priorities
  const staticPages = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/work', changefreq: 'weekly', priority: 0.9 },
    { url: '/blog', changefreq: 'daily', priority: 0.9 },
    { url: '/blog/personal', changefreq: 'weekly', priority: 0.7 },
    { url: '/notes', changefreq: 'weekly', priority: 0.8 },
    { url: '/tools', changefreq: 'monthly', priority: 0.6 },
    { url: '/recommendations', changefreq: 'weekly', priority: 0.7 },
    { url: '/freelance', changefreq: 'monthly', priority: 0.8 },
    { url: '/guestbook', changefreq: 'daily', priority: 0.5 },
  ];

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${blogs.map(blog => `
  <url>
    <loc>${baseUrl}/blog/${blog.slug}</loc>
    <lastmod>${new Date(blog.data.publishedDate).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${notes.map(note => `
  <url>
    <loc>${baseUrl}/notes/${note.slug}</loc>
    <lastmod>${new Date(note.data.updatedAt).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}