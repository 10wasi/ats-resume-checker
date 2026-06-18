import Link from "next/link";
import { resumeScreeningExplainedEntry } from "@/lib/content/search-intent/resume-screening-explained";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(resumeScreeningExplainedEntry);

export default function ResumeScreeningExplainedPage() {
  return (
    <SearchIntentPage
      entry={resumeScreeningExplainedEntry}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Resume screening explained</strong> from parser to recruiter skim—so you fix the right layer. Test parse and match signals free with the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS Resume Checker
          </Link>.
        </>
      }
    />
  );
}
