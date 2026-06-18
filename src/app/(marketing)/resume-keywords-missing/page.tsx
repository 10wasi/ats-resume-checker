import Link from "next/link";
import { resumeKeywordsMissingEntry } from "@/lib/content/search-intent/resume-keywords-missing";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";

export const metadata = createSearchIntentMetadata(resumeKeywordsMissingEntry);

export default function ResumeKeywordsMissingPage() {
  return (
    <SearchIntentPage
      entry={resumeKeywordsMissingEntry}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Resume keywords missing</strong> from your file lower match score and recruiter interest. Find gaps vs any job post with the{" "}
          <Link href="/resume-job-description-match" className="font-semibold text-[#16a34a] underline">
            Resume Match Analyzer
          </Link>{" "}
          and fix them ethically in bullets—not keyword dumps.
        </>
      }
    />
  );
}
