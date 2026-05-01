/** Strip null bytes and trim; cap UTF-16 length (defense in depth). */
export function sanitizeMultilineInput(input: string, maxChars: number): string {
  const cleaned = input.replace(/\u0000/g, "").trim();
  if (cleaned.length <= maxChars) return cleaned;
  return cleaned.slice(0, maxChars);
}

/** Safe display name for uploads (no path segments). */
export function sanitizeFileName(name: string): string {
  const base = name
    .replace(/[/\\?%*:|"<>]/g, "")
    .replace(/\.\./g, "")
    .trim()
    .slice(0, 240);
  return base || "document";
}

/**
 * Lightly normalise an email address. Validation is the caller's job —
 * we only strip control characters, trim, and lower-case the domain.
 */
export function sanitizeEmail(input: string): string {
  const cleaned = input.replace(/[\s\u0000-\u001f]+/g, "").slice(0, 254);
  const at = cleaned.lastIndexOf("@");
  if (at <= 0) return cleaned.toLowerCase();
  const local = cleaned.slice(0, at);
  const domain = cleaned.slice(at + 1).toLowerCase();
  return `${local}@${domain}`;
}
