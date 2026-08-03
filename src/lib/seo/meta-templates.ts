const BRAND = "ResumeIQ";
export const SEO_YEAR = "2026";

const META_MAX = 160;

/** Meta description — use the provided copy as-is; trim only when over limit. */
export function ctrMeta(benefit: string): string {
  const trimmed = benefit.trim();
  const base =
    trimmed ||
    "Upload your resume PDF free—get ATS score, parser preview, keyword gaps, and fix list. No signup.";
  const text = base.endsWith(".") ? base : `${base}.`;
  if (text.length <= META_MAX) return text;
  return `${text.slice(0, META_MAX - 1)}…`;
}

/**
 * Title: Keyword 2026 (Emotional Hook) | Brand — max 60 chars.
 * Human, curiosity-driven, year-aware for freshness signals.
 */
export function ctrTitle(keyword: string, hook: string): string {
  const withYear = keyword.includes(SEO_YEAR) ? keyword : `${keyword} ${SEO_YEAR}`;
  const paren = `${withYear} (${hook})`;
  const withBrand = `${paren} | ${BRAND}`;
  if (withBrand.length <= 60) return withBrand;
  if (paren.length <= 60) return paren;
  const shortHook = hook.length > 16 ? `${hook.slice(0, 13)}…` : hook;
  const short = `${withYear} (${shortHook})`;
  if (short.length <= 60) return short;
  const kw = withYear.length > 28 ? `${withYear.slice(0, 25)}…` : withYear;
  return `${kw} (${shortHook})`.slice(0, 60);
}
