import {
  SITEMAP_DEFAULT_LAST_MODIFIED,
  SITEMAP_PATH_LAST_MODIFIED,
} from "@/lib/seo/sitemap-dates";

/** Visible + schema freshness date for a route (YYYY-MM-DD). */
export function getContentLastUpdated(path: string): string {
  const normalized = path === "/" ? "" : path.replace(/\/$/, "");
  return (
    SITEMAP_PATH_LAST_MODIFIED[normalized] ?? SITEMAP_DEFAULT_LAST_MODIFIED
  );
}

export function formatContentLastUpdated(iso: string): string {
  const d = new Date(`${iso}T00:00:00.000Z`);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
