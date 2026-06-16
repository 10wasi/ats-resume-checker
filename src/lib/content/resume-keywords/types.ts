import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";

export type ResumeKeywordsEntry = {
  id: string;
  slug: string;
  path: string;
  breadcrumbLabel: string;
  roleTitle: string;
  /** Resume example slug when different from keywords slug (e.g. business-analyst). */
  exampleSlug?: string;
  ctr: PageCtrMeta;
  seo: { title: string; description: string };
  body: string;
  faqItems: FaqItem[];
  relatedSlugs: string[];
};
