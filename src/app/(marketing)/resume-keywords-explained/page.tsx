import Link from "next/link";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { resumeKeywordsExplainedEntry } from "@/lib/content/search-intent/resume-keywords-explained";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";

export const metadata = createSearchIntentMetadata(resumeKeywordsExplainedEntry);

export default function ResumeKeywordsExplainedPage() {
  return (
    <SearchIntentPage
      entry={resumeKeywordsExplainedEntry}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Resume keywords explained</strong>—types,
          placement, before/after examples, and how keywords drive{" "}
          <Link href="/resume-job-description-match" className="font-semibold text-[#16a34a] underline">
            job description match
          </Link>{" "}
          scores without stuffing.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Find missing keywords vs your posting"
          description="Paste the job description—see which terms are missing from your resume and where to add honest proof."
          href="/resume-job-description-match"
          buttonLabel="Check keyword match"
        />
      }
    />
  );
}
