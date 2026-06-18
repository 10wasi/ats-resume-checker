import Link from "next/link";
import { whyResumeNotGettingInterviewsEntry } from "@/lib/content/search-intent/why-resume-not-getting-interviews";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(whyResumeNotGettingInterviewsEntry);

export default function WhyResumeNotGettingInterviewsPage() {
  return (
    <SearchIntentPage
      entry={whyResumeNotGettingInterviewsEntry}
      intro={
        <>
          If you are asking <strong className="font-semibold text-slate-800">why my resume is not getting interviews</strong>, start with screening—not self-doubt. Run the free{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS Resume Checker
          </Link>{" "}
          and match tool to see what recruiters never see.
        </>
      }
    />
  );
}
