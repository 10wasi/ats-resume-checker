import { CareerToolCta } from "@/components/career/CareerToolCta";
import { freeResumeCheckerOnlineEntry } from "@/lib/content/search-intent/free-resume-checker-online";
import { createSearchIntentMetadata, SearchIntentPage } from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(freeResumeCheckerOnlineEntry);

export default function FreeResumeCheckerOnlinePage() {
  return (
    <SearchIntentPage
      entry={freeResumeCheckerOnlineEntry}
      intro={
        <>
          The <strong className="font-semibold text-slate-800">free resume checker online</strong>{" "}
          built for real applications—upload PDF, get ATS score, keyword gaps, and format fixes in
          seconds. No signup, no paywall on core analysis.
        </>
      }
      toolCta={
        <CareerToolCta
          title="Run free resume checker online"
          description="Instant ATS score, keyword analysis, and format warnings—upload the exact PDF you will submit."
          href={RESUME_CHECKER_PATH}
          buttonLabel="Check resume free"
        />
      }
    />
  );
}
