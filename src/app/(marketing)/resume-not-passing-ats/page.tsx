import Link from "next/link";
import { resumeNotPassingAtsEntry } from "@/lib/content/search-intent/resume-not-passing-ats";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(resumeNotPassingAtsEntry);

export default function ResumeNotPassingAtsPage() {
  return (
    <SearchIntentPage
      entry={resumeNotPassingAtsEntry}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Resume not passing ATS</strong> usually means parse failure or missing searchable proof—not that you are unqualified. Test your PDF free with the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            ATS Resume Checker
          </Link>.
        </>
      }
    />
  );
}
