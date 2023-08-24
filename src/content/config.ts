import { z, reference, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string().optional(),
    publishedAt: z.date(),
    updatedAt: z.date(),
    author: reference("authors"),
    heroImage: z.string().optional(),
    pinned: z.boolean(),
    published: z.boolean(),
    tags: z.array(z.string()),
    lang: z.enum(["EN", "ES"]),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.date(),
    updatedAt: z.date(),
    author: reference("authors"),
    category: z.string(),
    published: z.boolean(),
    tags: z.array(z.string()),
    lang: z.enum(["EN", "ES"]),
  }),
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    link: z.string().optional(),
    publishedAt: z.date(),
    author: reference("authors"),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    year: z.number(),
    lang: z.enum(["EN", "ES"]),
    color: z.string()
  }),
});

const authors = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    portfolio: z.string().url().optional(),
  }),
});

const talks = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    videoId: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
  }),
});

export const collections = { blog, authors, notes, talks, portfolio };
