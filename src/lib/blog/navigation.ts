import type { BlogPost } from "./types";
import { blogPosts } from "./posts";

export type BlogPostMeta = Omit<BlogPost, "content">;

function sorted(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPopularPosts(limit = 4): BlogPostMeta[] {
  return sorted()
    .slice(0, limit)
    .map(({ content: _c, ...meta }) => meta);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
} {
  const posts = sorted();
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const toMeta = (p: BlogPost): BlogPostMeta => {
    const { content: _c, ...meta } = p;
    return meta;
  };
  return {
    prev: idx > 0 ? toMeta(posts[idx - 1]) : null,
    next: idx < posts.length - 1 ? toMeta(posts[idx + 1]) : null,
  };
}

/** Tag overlap + recency — better than arbitrary slice. */
export function getSmartRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const current = blogPosts.find((p) => p.slug === slug);
  if (!current) return getPopularPosts(limit);

  const currentTags = [...(current.tags ?? []), ...(current.keywords ?? [])];
  const scored = blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const tags = [...(p.tags ?? []), ...(p.keywords ?? [])];
      const overlap = tags.filter((t) =>
        currentTags.some((ct) => ct.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(ct.toLowerCase()))
      ).length;
      return { p, overlap };
    })
    .sort((a, b) => b.overlap - a.overlap || new Date(b.p.date).getTime() - new Date(a.p.date).getTime());

  const picked = scored.filter((s) => s.overlap > 0).slice(0, limit);
  const pool = picked.length >= limit ? picked : scored;
  return pool.slice(0, limit).map(({ p }) => {
    const { content: _c, ...meta } = p;
    return meta;
  });
}
