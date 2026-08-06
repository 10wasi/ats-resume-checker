import Link from "next/link";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { atsResumeVsJobDescriptionEntry } from "@/lib/content/search-intent/ats-resume-vs-job-description";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";

export const metadata = createSearchIntentMetadata(atsResumeVsJobDescriptionEntry);

export default function AtsResumeVsJobDescriptionPage() {
  return (
    <SearchIntentPage
      entry={atsResumeVsJobDescriptionEntry}
      intro={
        <>
          Understand <strong className="font-semibold text-slate-800">ATS resume vs job description</strong>{" "}
          matching—two layers (parse health + posting overlap) with a worked example and free tools. Start with{" "}
          <Link href="/resume-job-description-match" className="font-semibold text-[#16a34a] underline">
            Job Description Match
          </Link>{" "}
          after your baseline{" "}
          <Link href="/resume-checker" className="font-semibold text-[#16a34a] underline">
            ATS check
          </Link>.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Compare resume to job description"
          description="Paste a posting—get match %, missing keywords, section feedback, and a fix checklist before you apply."
          href="/resume-job-description-match"
          buttonLabel="Run job description match"
        />
      }
    />
  );
}
