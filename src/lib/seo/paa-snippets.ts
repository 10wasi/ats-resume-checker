import type { FaqItem } from "@/lib/seo/faq";

/** People Also Ask–style Q&A blocks mapped by path prefix. */
const PAA_BY_PREFIX: Record<string, FaqItem[]> = {
  "/resume-checker": [
    {
      question: "Is ResumeIQ ATS checker really free?",
      answer:
        "Yes—you can upload or paste a resume and get an ATS score, parser preview, and priority fixes without creating an account.",
    },
    {
      question: "What file types work with the resume parser?",
      answer:
        "PDF and DOCX are supported. Export from Word or Google Docs when possible—design-tool PDFs often scramble text order.",
    },
    {
      question: "How long does a resume check take?",
      answer:
        "Most checks finish in under two minutes, depending on file size and whether you paste a job description for match scoring.",
    },
  ],
  "/resume-review": [
    {
      question: "What is the difference between resume review and ATS checker?",
      answer:
        "The checker scores parser health, keywords, and format. Resume review adds section-level AI feedback and a human-readable improvement plan.",
    },
    {
      question: "Can AI resume review replace a career coach?",
      answer:
        "It accelerates formatting and keyword fixes; coaches still help with narrative, branding, and interview strategy.",
    },
  ],
  "/career-success-hub": [
    {
      question: "Where should I start on Career Success Hub?",
      answer:
        "Run the free ATS resume checker first, then match your top posting, fix keywords, and re-check before batch applying.",
    },
  ],
  "/": [
    {
      question: "What is a good ATS resume score?",
      answer:
        "Aim for 75+ after tailoring to a specific job. Scores below 60 often indicate parse issues or missing posting keywords—not always lack of experience.",
    },
    {
      question: "Can ATS read PDF resumes?",
      answer:
        "Most can, if text is selectable. Run a copy-paste test: if order scrambles, switch to a single-column Word export.",
    },
    {
      question: "Do I need to pay for an ATS checker?",
      answer:
        "No—ResumeIQ offers a free first check with score, parser test, and keyword gaps. Paid tiers are optional for power users.",
    },
  ],
};

const DEFAULT_PAA: FaqItem[] = [
  {
    question: "How do I improve my ATS score fast?",
    answer:
      "Fix parsing first (single column, standard headings), mirror posting keywords in recent bullets, then re-run the checker on the exact file you will upload.",
  },
  {
    question: "Does keyword stuffing help ATS?",
    answer:
      "No—recruiters reject obvious stuffing. Place honest skills with proof in experience bullets and summary.",
  },
];

export function getPaaItemsForPath(path: string): FaqItem[] {
  if (PAA_BY_PREFIX[path]) return PAA_BY_PREFIX[path];
  for (const [prefix, items] of Object.entries(PAA_BY_PREFIX)) {
    if (prefix !== "/" && path.startsWith(prefix)) return items;
  }
  return DEFAULT_PAA;
}
