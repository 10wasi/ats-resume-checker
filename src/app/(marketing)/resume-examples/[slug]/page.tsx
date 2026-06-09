import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ResumeExamplePage } from "@/components/examples/ResumeExamplePage";
import {
  getResumeExampleBySlug,
  getResumeExampleSlugs,
} from "@/lib/content/resume-examples/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getResumeExampleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const example = getResumeExampleBySlug(params.slug);
  if (!example) return {};
  return buildCtrMetadata(example.ctr, {
    canonical: example.path,
    keywords: example.keywords,
    ogType: "article",
  });
}

export default function ResumeExampleRolePage({ params }: Props) {
  const example = getResumeExampleBySlug(params.slug);
  if (!example) notFound();

  return (
    <ResumeExamplePage
      example={example}
      intro={
        <>
          A practical <strong className="font-semibold text-slate-800">{example.ctr.primaryKeyword}</strong>{" "}
          you can adapt—not copy. Includes a full ATS-friendly sample, why it
          works, optimization tips, and mistakes to skip. Test your file in the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          and match a posting in the{" "}
          <Link
            href="/resume-job-description-match"
            className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
          >
            Resume Match Analyzer
          </Link>
          .
        </>
      }
      faqHeading={`FAQ: ${example.breadcrumbLabel}`}
      faqIntro={
        <>
          Common questions on ATS formatting, metrics, and tailoring for this
          role.
        </>
      }
    />
  );
}
