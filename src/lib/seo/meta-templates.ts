const BRAND = "ResumeIQ";

/** Meta description — direct, curiosity-driven, max 155 chars. No duplicate boilerplate. */
export function ctrMeta(benefit: string): string {
  const trimmed = benefit.trim();
  if (!trimmed) {
    return "Upload free — instant ATS score, resume parser test & keyword gaps. Results in 2 min. No signup.";
  }
  const text = trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
  return text.length <= 155 ? text : `${text.slice(0, 152)}…`;
}

/**
 * Title: Keyword (Curiosity Hook) | Brand — max 60 chars.
 * Example: Free ATS Resume Checker (Score in Seconds) | ResumeIQ
 */
export function ctrTitle(keyword: string, hook: string): string {
  const paren = `${keyword} (${hook})`;
  const withBrand = `${paren} | ${BRAND}`;
  if (withBrand.length <= 60) return withBrand;
  if (paren.length <= 60) return paren;
  const shortHook = hook.length > 18 ? `${hook.slice(0, 15)}…` : hook;
  const short = `${keyword} (${shortHook})`;
  if (short.length <= 60) return short;
  return `${keyword.slice(0, 32)}… (${shortHook})`.slice(0, 60);
}
