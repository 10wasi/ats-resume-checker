import { accountantExample } from "./accountant";
import { businessAnalystExample } from "./business-analyst";
import { cashierExample } from "./cashier";
import { civilEngineerExample } from "./civil-engineer";
import { customerServiceExample } from "./customer-service";
import { dataAnalystExample } from "./data-analyst";
import { electricalEngineerExample } from "./electrical-engineer";
import { graphicDesignerExample } from "./graphic-designer";
import { hrManagerExample } from "./hr-manager";
import { marketingManagerExample } from "./marketing-manager";
import { mechanicalEngineerExample } from "./mechanical-engineer";
import { medicalAssistantExample } from "./medical-assistant";
import { nurseExample } from "./nurse";
import { officeAssistantExample } from "./office-assistant";
import { productManagerExample } from "./product-manager";
import { projectManagerExample } from "./project-manager";
import { receptionistExample } from "./receptionist";
import { salesExecutiveExample } from "./sales-executive";
import { softwareEngineerExample } from "./software-engineer";
import { teacherExample } from "./teacher";
import { warehouseWorkerExample } from "./warehouse-worker";
import type { ResumeExampleEntry } from "./types";

export const RESUME_EXAMPLES_LIBRARY_PATH = "/resume-examples" as const;

/** Featured 10 roles (Week 2 Sprint 1) — additional examples appended. */
export const RESUME_EXAMPLES: ResumeExampleEntry[] = [
  softwareEngineerExample,
  marketingManagerExample,
  accountantExample,
  hrManagerExample,
  teacherExample,
  nurseExample,
  customerServiceExample,
  salesExecutiveExample,
  projectManagerExample,
  graphicDesignerExample,
  dataAnalystExample,
  productManagerExample,
  businessAnalystExample,
  civilEngineerExample,
  mechanicalEngineerExample,
  electricalEngineerExample,
  receptionistExample,
  cashierExample,
  warehouseWorkerExample,
  officeAssistantExample,
  medicalAssistantExample,
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
