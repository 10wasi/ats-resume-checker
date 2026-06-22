import { CareerToolCta } from "@/components/career/CareerToolCta";
import { resumeRejectedByAtsEntry } from "@/lib/content/search-intent/resume-rejected-by-ats";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";

export const metadata = createSearchIntentMetadata(resumeRejectedByAtsEntry);

export default function ResumeRejectedByAtsPage() {
  return (
    <SearchIntentPage
      entry={resumeRejectedByAtsEntry}
      intro={
        <>
          If your <strong className="font-semibold text-slate-800">resume rejected by ATS</strong>{" "}
          after every apply, the fix is usually format or keywords—not your qualifications. Run the{" "}
          <strong className="font-semibold text-slate-800">free resume checker</strong> on the
          exact PDF you submit before you rewrite again.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Diagnose ATS rejection free"
          description="Upload the same PDF you applied with—see parse health, resume score, and keyword gaps in 60 seconds."
          buttonLabel="Run free resume checker →"
        />
      }
    />
  );
}
