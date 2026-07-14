import type { MetadataRoute } from "next";

/** Canonical production sitemap — must match Google Search Console submission. */
export const SITEMAP_ABSOLUTE_URL =
  "https://ats-resume-checker-pearl.vercel.app/sitemap.xml";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: SITEMAP_ABSOLUTE_URL,
  };
}
