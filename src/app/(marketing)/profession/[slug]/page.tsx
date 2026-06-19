import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProfessionHubPage } from "@/components/hub/ProfessionHubPage";
import {
  getProfessionHub,
  getProfessionHubSlugs,
} from "@/lib/content/profession-hubs/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getProfessionHubSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const entry = getProfessionHub(params.slug);
  if (!entry) return {};
  return buildCtrMetadata(entry.ctr, {
    canonical: entry.path,
    keywords: [entry.ctr.primaryKeyword, "ATS resume", "resume optimization"],
    ogType: "article",
  });
}

export default function ProfessionHubRoutePage({ params }: Props) {
  const entry = getProfessionHub(params.slug);
  if (!entry) notFound();
  return <ProfessionHubPage entry={entry} />;
}
