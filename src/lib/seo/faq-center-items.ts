import type { FaqItem } from "./faq";
import { aboutFaqItems } from "./about-faq";
import { methodologyFaqItems } from "./methodology-faq";
import { howAtsWorksFaqItems } from "./how-ats-works-faq";
import { careerSuccessHubFaqItems } from "./career-success-hub-faq";

export const FAQ_CENTER_PATH = "/faq-center" as const;

export type FaqCenterSection = {
  id: string;
  title: string;
  href: string;
  items: FaqItem[];
};

/** Curated FAQ hub — links to deeper guides per topic. */
export const FAQ_CENTER_SECTIONS: FaqCenterSection[] = [
  {
    id: "platform",
    title: "Platform & trust",
    href: "/about",
    items: aboutFaqItems,
  },
  {
    id: "methodology",
    title: "Scoring methodology",
    href: "/methodology",
    items: methodologyFaqItems,
  },
  {
    id: "how-ats",
    title: "How ATS works",
    href: "/how-ats-works",
    items: howAtsWorksFaqItems,
  },
  {
    id: "workflow",
    title: "Tools & workflow",
    href: "/career-success-hub",
    items: careerSuccessHubFaqItems,
  },
  {
    id: "interviews",
    title: "Interviews & rejection",
    href: "/why-resume-not-getting-interviews",
    items: [
      {
        question: "Why am I not getting interviews?",
        answer:
          "Often screening fails before humans read your file—parse errors, missing keywords, or weak bullets. Start with the ATS Resume Checker and Resume Match Analyzer.",
      },
      {
        question: "Is my resume rejected by ATS or recruiters?",
        answer:
          "Both layers matter. Software may filter first; recruiters skim survivors in seconds. Fix parse and keywords, then improve bullet proof.",
      },
      {
        question: "Does this work for remote jobs worldwide?",
        answer:
          "Yes. Remote employers use the same ATS patterns. Tailor keywords to each posting regardless of your location.",
      },
    ],
  },
];

export const faqCenterAllItems: FaqItem[] = FAQ_CENTER_SECTIONS.flatMap(
  (s) => s.items
);
