export interface FrontMatter {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage?: string;
  pinned?: boolean;
  lang?: string;
}