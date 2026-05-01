import { LOCAL_DEV_ORIGIN } from "@/lib/local-dev-url";

/**
 * Canonical site origin for metadata, JSON-LD, sitemap, and robots.
 * Treats blank env as unset so we never emit empty URLs.
 * Must always return a string valid for `new URL(...)` (metadataBase).
 */
export function getSiteUrl(): string {
  let raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "";
  if (raw && !/^https?:\/\//i.test(raw)) {
    raw = `https://${raw}`;
  }
  if (raw) {
    try {
      new URL(raw);
      return raw;
    } catch {
      // fall through to default
    }
  }
  return LOCAL_DEV_ORIGIN;
}
