import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";
import { CLUSTER_WORKFLOW_APPENDIX } from "@/lib/content/cluster/shared-appendix";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export type Sprint3LandingSpec = {
  id: string;
  path: string;
  breadcrumbLabel: string;
  ctr: PageCtrMeta;
  faqItems: FaqItem[];
  body: string;
  includeClusterAppendix?: boolean;
};

export function toCareerEntry(spec: Sprint3LandingSpec): CareerLandingEntry {
  const appendix = spec.includeClusterAppendix !== false ? CLUSTER_WORKFLOW_APPENDIX : "";
  return {
    id: spec.id,
    path: spec.path,
    breadcrumbLabel: spec.breadcrumbLabel,
    ctr: spec.ctr,
    faqItems: spec.faqItems,
    body: spec.body + appendix,
  };
}

/** Shared intro block linking to checker — used in page components. */
export function sprint3CheckerLink(label = "free ATS resume checker"): string {
  return `[${label}](${RESUME_CHECKER_PATH})`;
}
