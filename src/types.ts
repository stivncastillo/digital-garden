// For blog post
export interface FrontMatter {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  minutesRead: string;
  updatedAt?: string;
  heroImage?: string;
  pinned?: boolean;
  lang?: string;
  tags?: string[];
}

// For notes
export interface NotesFrontMatter {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  minutesRead: string;
}

export interface Talk {
  title: string;
  link: string;
  videoId: string;
  date: string;
}
