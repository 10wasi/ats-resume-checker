import Link from "next/link";
import { cvCheckerEntry } from "@/lib/content/search-intent/cv-checker";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(cvCheckerEntry);

export default function CvCheckerPage() {
  return (
    <SearchIntentPage
      entry={cvCheckerEntry}
      intro={
        <>
          Use ResumeIQ as a free <strong className="font-semibold text-slate-800">CV checker online</strong>—upload
          PDF or DOCX and get ATS score, keyword gaps, and format warnings. Same engine as our{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            resume checker
          </Link>{" "}
          for job seekers worldwide.
        </>
      }
      toolCta={<CareerToolCta buttonLabel="Check my CV free" />}
    />
  );
}
