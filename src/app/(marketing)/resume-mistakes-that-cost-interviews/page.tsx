import Link from "next/link";
import { resumeMistakesCostInterviewsEntry } from "@/lib/content/search-intent/resume-mistakes-that-cost-interviews";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(resumeMistakesCostInterviewsEntry);

export default function ResumeMistakesCostInterviewsPage() {
  return (
    <SearchIntentPage
      entry={resumeMistakesCostInterviewsEntry}
      intro={
        <>
          These <strong className="font-semibold text-slate-800">resume mistakes that cost interviews</strong> are fixable in one evening—with before/after examples and a free scan in the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS Resume Checker
          </Link>.
        </>
      }
    />
  );
}
