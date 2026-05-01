export type { BlogPost } from "./types";
export { blogPosts } from "./posts";

import type { BlogPost } from "./types";
import { blogPosts } from "./posts";

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
