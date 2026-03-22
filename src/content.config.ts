import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    publishedDate: z.string(),
    coverImage: z.string(),
    tags: z.string(),
    nextSlug: z.string().optional(),
    isPersonal: z.boolean().optional().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['short', 'long']),
    updatedAt: z.string(),
  }),
});

export const collections = {
  blog,
  notes,
};