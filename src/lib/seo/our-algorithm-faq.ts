import type { FaqItem } from "./faq";

/** FAQ for /our-algorithm — pipeline and reproducibility; not duplicated on /how-resume-analysis-works. */
export const ourAlgorithmFaqItems: FaqItem[] = [
  {
    question: "What steps does the ResumeIQ algorithm run?",
    answer:
      "Upload → text extraction → format and section checks → keyword and skills signals → optional job-description match → scored report with priority fixes. Each stage is documented on our analysis pipeline page.",
  },
  {
    question: "Is scoring fully rule-based or AI-generated?",
    answer:
      "Baseline scores come from published rules applied to your extracted text. AI may suggest rewrites afterward—it does not invent experience or silently change the core score.",
  },
  {
    question: "Will I get the same score if I re-upload the same file?",
    answer:
      "The same unchanged file should produce consistent baseline results. Edits, a new export, or a different job description will change match-related signals.",
  },
  {
    question: "Does this algorithm match my target employer's ATS?",
    answer:
      "No employer publishes their internal configuration. We mirror common parser and keyword patterns so you can fix issues before applying—not to predict their private ranking.",
  },
];
