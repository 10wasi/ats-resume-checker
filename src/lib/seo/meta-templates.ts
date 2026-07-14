const BRAND = "ResumeIQ";

/** CTR meta with required elements: score, keywords, format, recruiter tips, free scan. */
export function ctrMeta(benefit: string): string {
  const base =
    "Free scan: instant ATS score, keyword analysis, formatting check & recruiter suggestions.";
  const trimmed = benefit.trim();
  if (!trimmed) return `${base} No signup.`;
  const sep = trimmed.endsWith(".") ? " " : ". ";
  const text = `${base}${sep}${trimmed}`;
  return text.length <= 160 ? `${text} No signup.` : text.slice(0, 157) + "…";
}

/** Title: primary keyword — benefit | brand (≤60 chars). */
export function ctrTitle(keyword: string, benefit: string): string {
  const raw = `${keyword} — ${benefit} | ${BRAND}`;
  if (raw.length <= 60) return raw;
  const shorter = `${keyword} — ${benefit}`;
  if (shorter.length <= 60) return shorter;
  return `${keyword.slice(0, 40)}… | ${BRAND}`;
}
