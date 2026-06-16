import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ResumeKeywordsPage } from "@/components/keywords/ResumeKeywordsPage";
import {
  getResumeKeywordsBySlug,
  getResumeKeywordsSlugs,
} from "@/lib/content/resume-keywords/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getResumeKeywordsSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = getResumeKeywordsBySlug(params.slug);
  if (!entry) return {};
  return buildCtrMetadata(entry.ctr, {
    canonical: entry.path,
    keywords: [
      entry.ctr.primaryKeyword,
      "resume keywords",
      "ATS keywords",
      "ATS Resume Checker",
    ],
    ogType: "article",
  });
}

export default function ResumeKeywordsRolePage({ params }: Props) {
  const entry = getResumeKeywordsBySlug(params.slug);
  if (!entry) notFound();

  return (
    <ResumeKeywordsPage
      entry={entry}
      intro={
        <>
          Copy-ready <strong className="font-semibold text-slate-800">resume keywords</strong>{" "}
          for {entry.roleTitle.toLowerCase()} roles—what ATS filters search, how to place terms
          ethically, and how to test your file in the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
          >
            ATS Resume Checker
          </Link>
          .
        </>
      }
      faqHeading={`FAQ: ${entry.roleTitle} resume keywords`}
      faqIntro={
        <>
          Placement, tailoring, and how to match keywords to real job postings without stuffing.
        </>
      }
    />
  );
}
