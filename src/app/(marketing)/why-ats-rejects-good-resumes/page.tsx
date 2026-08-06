import Link from "next/link";
import { CareerToolCta } from "@/components/career/CareerToolCta";
import { whyAtsRejectsGoodResumesEntry } from "@/lib/content/search-intent/why-ats-rejects-good-resumes";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";

export const metadata = createSearchIntentMetadata(whyAtsRejectsGoodResumesEntry);

export default function WhyAtsRejectsGoodResumesPage() {
  return (
    <SearchIntentPage
      entry={whyAtsRejectsGoodResumesEntry}
      intro={
        <>
          <strong className="font-semibold text-slate-800">Why ATS rejects good resumes</strong>—parse
          failure, filters, and keyword gaps with a nurse worked example and a 20-minute diagnostic tied to{" "}
          <Link href="/resume-checker" className="font-semibold text-[#16a34a] underline">
            ATS check
          </Link>{" "}
          +{" "}
          <Link href="/resume-job-description-match" className="font-semibold text-[#16a34a] underline">
            job match
          </Link>.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Diagnose before you reapply"
          description="Upload the exact PDF you submitted—parser preview plus match % vs the job description."
          href="/resume-job-description-match"
          buttonLabel="Run match diagnosis"
        />
      }
    />
  );
}
