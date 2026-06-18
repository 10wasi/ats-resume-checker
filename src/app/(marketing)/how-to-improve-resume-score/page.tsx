import Link from "next/link";
import { howToImproveResumeScoreEntry } from "@/lib/content/search-intent/how-to-improve-resume-score";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(howToImproveResumeScoreEntry);

export default function HowToImproveResumeScorePage() {
  return (
    <SearchIntentPage
      entry={howToImproveResumeScoreEntry}
      intro={
        <>
          <strong className="font-semibold text-slate-800">How to improve resume score</strong> without stuffing keywords: fix layout, add honest proof, re-test the exact PDF. Baseline free in the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS Resume Checker
          </Link>.
        </>
      }
    />
  );
}
