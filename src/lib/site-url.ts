import { LOCAL_DEV_ORIGIN } from "@/lib/local-dev-url";

/**
 * Canonical public origin for sitemap, robots, JSON-LD, and metadataBase.
 * Always https://ats-resume-checker-pearl.vercel.app when env is not explicitly set in production.
 *
 * Never uses VERCEL_URL — it points at preview/deployment hosts (e.g. *-git-* or hashed URLs)
 * and breaks sitemap loc URLs after deploy.
 */
const PRODUCTION_DEFAULT_ORIGIN =
  "https://ats-resume-checker-pearl.vercel.app";

export function getSiteUrl(): string {
  let raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";
  if (raw && !/^https?:\/\//i.test(raw)) {
    raw = `https://${raw}`;
  }
  raw = raw.replace(/\/$/, "");

  if (raw) {
    try {
      return new URL(raw).origin;
    } catch {
      /* invalid URL — fall through */
    }
  }

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_DEFAULT_ORIGIN;
  }

  return LOCAL_DEV_ORIGIN;
}
