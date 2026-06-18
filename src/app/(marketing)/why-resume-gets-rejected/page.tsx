import Link from "next/link";
import { whyResumeGetsRejectedEntry } from "@/lib/content/search-intent/why-resume-gets-rejected";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(whyResumeGetsRejectedEntry);

export default function WhyResumeGetsRejectedPage() {
  return (
    <SearchIntentPage
      entry={whyResumeGetsRejectedEntry}
      intro={
        <>
          Understand <strong className="font-semibold text-slate-800">why resume gets rejected</strong> at each filter—parser, keywords, recruiter skim—and fix the layer that failed using the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS Resume Checker
          </Link>.
        </>
      }
    />
  );
}
