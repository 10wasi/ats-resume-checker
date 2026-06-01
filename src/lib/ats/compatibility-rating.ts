/** Human-readable ATS compatibility band from overall score. */
export function deriveAtsCompatibilityRating(score: number): {
  label: string;
  description: string;
  tone: "excellent" | "good" | "fair" | "needs-work";
} {
  const s = Math.round(Math.max(0, Math.min(100, score)));
  if (s >= 82) {
    return {
      label: "Excellent",
      description:
        "Your file is well structured for most applicant tracking systems and recruiter skims.",
      tone: "excellent",
    };
  }
  if (s >= 65) {
    return {
      label: "Good",
      description:
        "Strong foundation—targeted keyword and bullet tweaks can improve visibility further.",
      tone: "good",
    };
  }
  if (s >= 45) {
    return {
      label: "Fair",
      description:
        "Fixable gaps remain in format, keywords, or proof—work through priority fixes below.",
      tone: "fair",
    };
  }
  return {
    label: "Needs work",
    description:
      "Layout or content signals may block ATS extraction—start with formatting and the copy-paste test.",
    tone: "needs-work",
  };
}
