import Link from "next/link";
import type { ReactNode } from "react";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { createSearchIntentMetadata, SearchIntentPage } from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function clusterPageMetadata(entry: CareerLandingEntry) {
  return createSearchIntentMetadata(entry);
}

export function ClusterLandingPage({
  entry,
  intro,
}: {
  entry: CareerLandingEntry;
  intro: ReactNode;
}) {
  return (
    <SearchIntentPage
      entry={entry}
      intro={intro}
      toolCta={
        <CareerToolCta
          title={`Run ${entry.ctr.primaryKeyword}`}
          description="Instant ATS score, parser preview, keyword gaps, and priority fixes—free in your browser."
          href={RESUME_CHECKER_PATH}
          buttonLabel="Check resume free"
        />
      }
    />
  );
}

export function clusterIntro(keyword: string) {
  return (
    <>
      This guide covers <strong className="font-semibold text-slate-800">{keyword}</strong>{" "}
      with a measurable workflow—run the{" "}
      <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
        free ATS resume checker
      </Link>
      , fix parser and keyword gaps, then re-check before you apply.
    </>
  );
}
