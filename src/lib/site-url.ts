import { LOCAL_DEV_ORIGIN } from "@/lib/local-dev-url";

/** Primary Vercel host when env is unset (avoids localhost in production SEO output). */
const PRODUCTION_DEFAULT_ORIGIN =
  "https://ats-resume-checker-pearl.vercel.app";

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

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const withProto = /^https?:\/\//i.test(vercel)
      ? vercel.replace(/\/$/, "")
      : `https://${vercel.replace(/\/$/, "")}`;
    try {
      return new URL(withProto).origin;
    } catch {
      // fall through
    }
  }

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_DEFAULT_ORIGIN;
  }

  return LOCAL_DEV_ORIGIN;
}
