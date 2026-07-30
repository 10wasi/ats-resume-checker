import type { FaqItem } from "@/lib/seo/faq";
import { NO_PAYMENT_FOR_CORE_CHECKER_ANSWER } from "@/lib/seo/trust-copy";

/** People Also Ask–style Q&A blocks mapped by path prefix. Must not duplicate on-page FAQ questions. */
const PAA_BY_PREFIX: Record<string, FaqItem[]> = {
  "/resume-checker": [
    {
      question: "How do I run my first resume check?",
      answer:
        "Upload PDF or DOCX (or paste text), optionally add a job description, then review parse preview, score, and priority fixes. No account required.",
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
      question: "What should I fix first on my resume?",
      answer:
        "Parse and layout first—single column, standard headings, selectable text. Then tailor keywords per posting and strengthen bullets with proof.",
    },
    {
      question: "Do I need an account to use ResumeIQ?",
      answer:
        "No. Upload or paste for standard checks without signup. See our privacy policy for how files are handled per request.",
    },
    {
      question: "Do I need to pay for an ATS checker?",
      answer: NO_PAYMENT_FOR_CORE_CHECKER_ANSWER,
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
