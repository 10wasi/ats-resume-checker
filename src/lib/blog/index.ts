export type { BlogPost } from "./types";
export { blogPosts } from "./posts";

import type { BlogPost } from "./types";
import { blogPosts } from "./posts";

export type BlogPostMeta = Omit<BlogPost, "content">;

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Lightweight listing — returns post metadata without body content. */
export function getPostMeta(): BlogPostMeta[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
