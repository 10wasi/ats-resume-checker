import Link from "next/link";
import { resumeRejectedByAtsEntry } from "@/lib/content/search-intent/resume-rejected-by-ats";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(resumeRejectedByAtsEntry);

export default function ResumeRejectedByAtsPage() {
  return (
    <SearchIntentPage
      entry={resumeRejectedByAtsEntry}
      intro={
        <>
          If your <strong className="font-semibold text-slate-800">resume rejected by ATS</strong>{" "}
          after every apply, the fix is usually format or keywords—not your qualifications. Diagnose
          with the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            free ATS resume checker
          </Link>{" "}
          before you rewrite again.
        </>
      }
    />
  );
}
