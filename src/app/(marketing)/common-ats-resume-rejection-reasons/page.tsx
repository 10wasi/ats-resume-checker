import Link from "next/link";
import { commonAtsRejectionReasonsEntry } from "@/lib/content/search-intent/common-ats-resume-rejection-reasons";
import {
  createSearchIntentMetadata,
  SearchIntentPage,
} from "@/lib/content/search-intent/page-shell";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = createSearchIntentMetadata(commonAtsRejectionReasonsEntry);

export default function CommonAtsRejectionReasonsPage() {
  return (
    <SearchIntentPage
      entry={commonAtsRejectionReasonsEntry}
      intro={
        <>
          These <strong className="font-semibold text-slate-800">common ATS resume rejection reasons</strong>{" "}
          cause most silent failures—each with a concrete fix. Test your file in the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            free resume checker online
          </Link>{" "}
          after each change.
        </>
      }
    />
  );
}
