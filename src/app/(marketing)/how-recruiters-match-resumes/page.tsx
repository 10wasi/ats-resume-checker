import Link from "next/link";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { howRecruitersMatchResumesEntry } from "@/lib/content/search-intent/how-recruiters-match-resumes";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";

export const metadata = createSearchIntentMetadata(howRecruitersMatchResumesEntry);

export default function HowRecruitersMatchResumesPage() {
  return (
    <SearchIntentPage
      entry={howRecruitersMatchResumesEntry}
      intro={
        <>
          Learn <strong className="font-semibold text-slate-800">how recruiters match resumes</strong>{" "}
          to reqs—ATS search, ranking, and the 6-second skim—with examples and a checklist tied to{" "}
          <Link href="/resume-job-description-match" className="font-semibold text-[#16a34a] underline">
            Job Description Match
          </Link>.
        </>
      }
      toolCta={
        <CareerToolCta
          title="See what recruiters' software reads"
          description="Match your resume to the job post—mirror the keyword search recruiters run in ATS."
          href="/resume-job-description-match"
          buttonLabel="Match resume to posting"
        />
      }
    />
  );
}
