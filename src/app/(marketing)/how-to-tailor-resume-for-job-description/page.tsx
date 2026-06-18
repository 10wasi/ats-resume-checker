import Link from "next/link";
import { howToTailorResumeEntry } from "@/lib/content/search-intent/how-to-tailor-resume-for-job-description";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";

export const metadata = createSearchIntentMetadata(howToTailorResumeEntry);

export default function HowToTailorResumePage() {
  return (
    <SearchIntentPage
      entry={howToTailorResumeEntry}
      intro={
        <>
          Learn <strong className="font-semibold text-slate-800">how to tailor resume for job description</strong> in ~15 minutes per application—using the posting as a checklist, not a copy-paste script. Start with the{" "}
          <Link href="/resume-job-description-match" className="font-semibold text-[#16a34a] underline">
            Resume Match Tool
          </Link>.
        </>
      }
    />
  );
}
