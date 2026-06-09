import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ResumeExamplePage } from "@/components/examples/ResumeExamplePage";
import {
  getAtsResumeRole,
  getAtsResumeRoleSlugs,
  resolveRoleExample,
} from "@/lib/content/ats-resume-roles/registry";
import { KNOWLEDGE_CENTER_PATH } from "@/lib/content/knowledge-center-pages";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = { params: { role: string } };

export function generateStaticParams() {
  return getAtsResumeRoleSlugs().map((role) => ({ role }));
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = getAtsResumeRole(params.role);
  if (!entry) return {};
  return buildCtrMetadata(entry.ctr, {
    canonical: entry.path,
    keywords: [entry.ctr.primaryKeyword, "ATS friendly resume", "ATS Resume Checker"],
    ogType: "article",
  });
}

export default function AtsResumeRolePage({ params }: Props) {
  const role = getAtsResumeRole(params.role);
  if (!role) notFound();
  const example = resolveRoleExample(role);
  if (!example) notFound();

  const mergedExample: typeof example = {
    ...example,
    path: role.path,
    breadcrumbLabel: role.breadcrumbLabel,
    ctr: { ...example.ctr, ...role.ctr, h1: role.ctr.h1 },
    seo: { title: role.ctr.title, description: role.ctr.description },
  };

  return (
    <ResumeExamplePage
      example={mergedExample}
      eyebrow="ATS Resume Guide · ResumeIQ"
      breadcrumbParent={{ label: "Knowledge Center", path: KNOWLEDGE_CENTER_PATH }}
      intro={
        <>
          {role.roleIntro}{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
          >
            ATS Resume Checker
          </Link>{" "}
          ·{" "}
          <Link
            href="/resume-job-description-match"
            className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2"
          >
            Resume Match Analyzer
          </Link>
        </>
      }
      faqHeading={`FAQ: ${role.ctr.h1}`}
      faqIntro={<>Role-specific ATS formatting and keyword questions.</>}
    />
  );
}
