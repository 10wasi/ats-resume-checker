const BRAND = "ResumeIQ";
export const SEO_YEAR = "2026";

const META_MIN = 145;
const META_MAX = 155;

function ensureMetaSignals(text: string): string {
  let out = text.trim();
  const lower = out.toLowerCase();
  if (!lower.includes("resume")) {
    out = `${out} AI resume tips`;
  }
  if (!out.toLowerCase().includes("ats")) {
    out = `${out} — ATS-ready guidance`;
  }
  if (!out.toLowerCase().includes("ai")) {
    out = `${out} with smart AI insights`;
  }
  return out.endsWith(".") ? out : `${out}.`;
}

function padMetaToMin(text: string): string {
  const suffix = " Free AI-powered scan — instant results, no signup, professional analysis.";
  let out = text;
  if (out.length < META_MIN) {
    out = `${out.replace(/\.$/, "")}${suffix}`;
  }
  return out;
}

/** Meta description — 145–155 chars with CTR signals: Free, AI, Instant, No signup. */
export function ctrMeta(benefit: string): string {
  const trimmed = benefit.trim();
  const base =
    trimmed ||
    "Free AI-powered ATS resume checker — instant results, parser preview & keyword gaps. No signup. Professional analysis.";
  let text = ensureMetaSignals(base);
  text = padMetaToMin(text);
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
