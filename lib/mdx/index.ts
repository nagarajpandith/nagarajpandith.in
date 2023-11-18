import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime, { ReadTimeResults } from 'reading-time';

const rootDirectory = path.join(process.cwd(), 'app', 'content');

interface Meta {
  title: string;
  desc: string;
  publishedDate: string;
  coverImage: string;
  tags: string;
  slug: string;
}

export interface Post {
  meta: Meta;
  readingTime: ReadTimeResults;
}

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    meta: { ...frontmatter, slug: realSlug } as Meta,
    content,
    readingTime: readingTime(fileContent),
  };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts: Post[] = [];

  for (const file of files) {
    const { meta, readingTime } = await getPostBySlug(file);
    posts.push({
      meta: { ...(meta as Meta) },
      readingTime,
    });
  }

  return posts;
};
