import { accountantKeywords } from "./accountant";
import { businessAnalystKeywords } from "./business-analyst";
import { customerServiceKeywords } from "./customer-service";
import { dataAnalystKeywords } from "./data-analyst";
import { graphicDesignerKeywords } from "./graphic-designer";
import { hrManagerKeywords } from "./hr-manager";
import { marketingManagerKeywords } from "./marketing-manager";
import { productManagerKeywords } from "./product-manager";
import { projectManagerKeywords } from "./project-manager";
import { softwareEngineerKeywords } from "./software-engineer";
import type { ResumeKeywordsEntry } from "./types";

export const RESUME_KEYWORDS_PATH = "/resume-keywords" as const;

export const RESUME_KEYWORDS: ResumeKeywordsEntry[] = [
  softwareEngineerKeywords,
  dataAnalystKeywords,
  productManagerKeywords,
  projectManagerKeywords,
  marketingManagerKeywords,
  customerServiceKeywords,
  accountantKeywords,
  hrManagerKeywords,
  graphicDesignerKeywords,
  businessAnalystKeywords,
];

export function getResumeKeywordsBySlug(slug: string): ResumeKeywordsEntry | undefined {
  return RESUME_KEYWORDS.find((e) => e.slug === slug);
}

export function getResumeKeywordsSlugs(): string[] {
  return RESUME_KEYWORDS.map((e) => e.slug);
}

export function getRelatedResumeKeywords(
  currentSlug: string,
  limit = 4
): ResumeKeywordsEntry[] {
  const current = getResumeKeywordsBySlug(currentSlug);
  if (current?.relatedSlugs.length) {
    return current.relatedSlugs
      .map((s) => getResumeKeywordsBySlug(s))
      .filter((e): e is ResumeKeywordsEntry => Boolean(e));
  }
  return RESUME_KEYWORDS.filter((e) => e.slug !== currentSlug).slice(0, limit);
}
