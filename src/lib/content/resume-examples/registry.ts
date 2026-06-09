import { accountantExample } from "./accountant";
import { customerServiceExample } from "./customer-service";
import { dataAnalystExample } from "./data-analyst";
import { graphicDesignerExample } from "./graphic-designer";
import { hrManagerExample } from "./hr-manager";
import { marketingManagerExample } from "./marketing-manager";
import { projectManagerExample } from "./project-manager";
import { softwareEngineerExample } from "./software-engineer";
import type { ResumeExampleEntry } from "./types";

export const RESUME_EXAMPLES_LIBRARY_PATH = "/resume-examples" as const;

export const RESUME_EXAMPLES: ResumeExampleEntry[] = [
  softwareEngineerExample,
  dataAnalystExample,
  projectManagerExample,
  marketingManagerExample,
  customerServiceExample,
  accountantExample,
  graphicDesignerExample,
  hrManagerExample,
];

export function getResumeExampleBySlug(
  slug: string
): ResumeExampleEntry | undefined {
  return RESUME_EXAMPLES.find((e) => e.slug === slug);
}

export function getResumeExampleSlugs(): string[] {
  return RESUME_EXAMPLES.map((e) => e.slug);
}

export function getRelatedResumeExamples(
  currentSlug: string,
  limit = 4
): ResumeExampleEntry[] {
  const current = getResumeExampleBySlug(currentSlug);
  if (current?.relatedSlugs.length) {
    return current.relatedSlugs
      .map((s) => getResumeExampleBySlug(s))
      .filter((e): e is ResumeExampleEntry => Boolean(e));
  }
  return RESUME_EXAMPLES.filter((e) => e.slug !== currentSlug).slice(0, limit);
}
