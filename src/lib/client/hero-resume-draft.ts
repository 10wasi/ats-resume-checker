export const HERO_RESUME_DRAFT_KEY = "resumeiq:hero-resume-draft" as const;

export function saveHeroResumeDraft(text: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(HERO_RESUME_DRAFT_KEY, text.trim());
  } catch {
    /* quota / private mode */
  }
}

export function consumeHeroResumeDraft(): string {
  if (typeof window === "undefined") return "";
  try {
    const text = sessionStorage.getItem(HERO_RESUME_DRAFT_KEY) ?? "";
    sessionStorage.removeItem(HERO_RESUME_DRAFT_KEY);
    return text;
  } catch {
    return "";
  }
}
