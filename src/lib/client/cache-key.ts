/** FNV-1a–style hash for cache keys (browser-safe). */
export function hashString(s: string): string {
  let h = 2166136261;
  const len = Math.min(s.length, 500_000);
  for (let i = 0; i < len; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0).toString(36);
}

export function scoreRequestKey(resumeText: string, jobDescription: string): string {
  return `v2-${hashString(resumeText)}-${hashString(jobDescription)}`;
}
