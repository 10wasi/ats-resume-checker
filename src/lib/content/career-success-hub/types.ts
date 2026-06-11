import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";

export type CareerLandingEntry = {
  id: string;
  path: string;
  breadcrumbLabel: string;
  ctr: PageCtrMeta;
  body: string;
  faqItems: FaqItem[];
};

export type CareerHubIndexItem = {
  id: string;
  title: string;
  description: string;
  path: string;
  badge: "Tool" | "Guide" | "Examples";
};
