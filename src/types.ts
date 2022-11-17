// For blog post
export interface FrontMatter {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage?: string;
  pinned?: boolean;
  lang?: string;
  tags?: string[]
}

// For notes
export interface NotesFrontMatter {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
}