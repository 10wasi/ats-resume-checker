import { CareerToolCta } from "@/components/career/CareerToolCta";
import { freeAtsScoreCheckerEntry } from "@/lib/content/search-intent/free-ats-score-checker";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(freeAtsScoreCheckerEntry);

export default function FreeAtsScoreCheckerPage() {
  return (
    <SearchIntentPage
      entry={freeAtsScoreCheckerEntry}
      intro={
        <>
          Get your <strong className="font-semibold text-slate-800">free ATS score</strong> in
          seconds—compatibility %, missing keywords, and format flags from the same engine as our{" "}
          <strong className="font-semibold text-slate-800">resume score checker</strong>.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Get your free ATS score now"
          description="Upload PDF or paste text—see compatibility %, keyword gaps, and what to fix first."
          href={RESUME_CHECKER_PATH}
          buttonLabel="Check ATS score free"
        />
      }
    />
  );
}
