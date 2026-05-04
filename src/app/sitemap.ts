import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export default function sitemap(): MetadataRoute.Sitemap {
  /** Origin only, no trailing slash — every <loc> is `${base}/path`. */
  const base = getSiteUrl().replace(/\/$/, "");
  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: RESUME_CHECKER_PATH, priority: 0.95, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.65, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.65, changeFrequency: "monthly" },
  ];
  const entries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );
  for (const slug of getPostSlugs()) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  return entries;
}
