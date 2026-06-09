import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";

export type ResumeExampleEntry = {
  id: string;
  slug: string;
  path: string;
  breadcrumbLabel: string;
  ctr: PageCtrMeta;
  seo: { title: string; description: string };
  body: string;
  faqItems: FaqItem[];
  keywords: string[];
  relatedSlugs: string[];
};
