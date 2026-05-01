/** Estimate reading time in minutes (rounded up, min 1). 200 wpm baseline. */
export function readingTimeMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
