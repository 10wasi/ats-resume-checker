import Link from "next/link";
import { aiResumeReviewEntry } from "@/lib/content/search-intent/ai-resume-review";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(aiResumeReviewEntry);

export default function AiResumeReviewPage() {
  return (
    <SearchIntentPage
      entry={aiResumeReviewEntry}
      intro={
        <>
          <strong className="font-semibold text-slate-800">AI resume review</strong> scores your
          file in seconds—parse health, keywords, format flags, and bullet suggestions. Start the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            free AI resume checker
          </Link>{" "}
          now; no signup for standard use.
        </>
      }
      toolCta={<CareerToolCta buttonLabel="Run free AI resume review" />}
    />
  );
}
