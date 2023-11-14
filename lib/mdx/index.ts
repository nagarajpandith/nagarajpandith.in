import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const rootDirectory = path.join(process.cwd(), 'app', 'content');

interface Post {
  title: string;
  desc: string;
  publishedDate: string;
  coverImage: string;
  slug: string;
}

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts: Post[] = [];

  for (const file of files) {
    const { meta } = await getPostBySlug(file);
    posts.push(meta as Post);
  }

  return posts;
};
