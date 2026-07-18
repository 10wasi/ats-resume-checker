import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ResumeCheckerRoleLanding } from "@/components/hub/ResumeCheckerRoleLanding";
import {
  getResumeCheckerRole,
  getResumeCheckerRoleSlugs,
} from "@/lib/content/resume-checker-roles/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

type Props = { params: { role: string } };

export function generateStaticParams() {
  return getResumeCheckerRoleSlugs().map((role) => ({ role }));
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = getResumeCheckerRole(params.role);
  if (!entry) return { robots: { index: false } };
  return buildCtrMetadata(entry.ctr, {
    canonical: entry.path,
    keywords: [entry.ctr.primaryKeyword, "ATS resume checker", "resume score checker"],
    ogType: "article",
  });
}

export default function ResumeCheckerRolePage({ params }: Props) {
  const entry = getResumeCheckerRole(params.role);
  if (!entry) notFound();
  return <ResumeCheckerRoleLanding entry={entry} />;
}
