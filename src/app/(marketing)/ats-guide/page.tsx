import { CareerLandingPage } from "@/components/career/CareerLandingPage";
import { atsGuideEntry } from "@/lib/content/career-success-hub/ats-guide";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(atsGuideEntry.ctr, {
  canonical: atsGuideEntry.path,
  keywords: [
    "ATS optimization guide",
    "resume optimization",
    "ATS Resume Checker",
    "resume guide",
  ],
  ogType: "article",
});

export default function AtsGuidePage() {
  return (
    <CareerLandingPage
      entry={atsGuideEntry}
      intro={
        <>
          The <strong className="font-semibold text-slate-800">ATS Guide Hub</strong> maps every
          pillar guide, blog cluster, and free tool—so{" "}
          <strong className="font-semibold text-slate-800">professional resume optimization</strong>{" "}
          is one connected path, worldwide.
        </>
      }
      toolCta={
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-8 inline-flex px-7">
          Check Resume Score Free
        </Link>
      }
      faqHeading="FAQ: ATS guide hub"
    />
  );
}
