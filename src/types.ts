// For blog post

interface FrontMatterBase {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  minutesRead?: string;
  lang?: string;
  tags?: string[];
}
export interface FrontMatter extends FrontMatterBase {
  updatedAt?: string;
  heroImage?: string;
  pinned?: boolean;
  category?: string;
}

export interface NotesFrontMatter extends FrontMatterBase {}

export interface PortfolioFrontMatter extends FrontMatterBase {
  heroImage?: string;
  year?: number;
}

export interface Talk {
  title: string;
  link: string;
  videoId: string;
  date: string;
}