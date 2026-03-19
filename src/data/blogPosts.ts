export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

// Re-export the loader so components can use it
export { loadBlogPosts } from "./loadBlogPosts";
