import type { ReactNode } from "react";
import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

export function createSearchIntentMetadata(entry: CareerLandingEntry) {
  return buildCtrMetadata(entry.ctr, {
    canonical: entry.path,
    keywords: [
      entry.ctr.primaryKeyword,
      "resume not getting interviews",
      "ATS Resume Checker",
      "resume checker",
    ],
    ogType: "article",
  });
}

export function SearchIntentPage({
  entry,
  intro,
  toolCta,
}: {
  entry: CareerLandingEntry;
  intro: ReactNode;
  toolCta?: ReactNode;
}) {
  return (
    <CareerLandingPage
      entry={entry}
      intro={intro}
      faqHeading={`FAQ: ${entry.ctr.h1}`}
      toolCta={toolCta}
    />
  );
}
