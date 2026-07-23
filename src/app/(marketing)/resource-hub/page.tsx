import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { PROFESSION_HUBS } from "@/lib/content/profession-hubs/registry";
import {
  RESOURCE_HUB_GUIDES,
  RESOURCE_HUB_PATH,
  RESOURCE_HUB_TOOLS,
  RESOURCE_HUB_TRUST,
} from "@/lib/content/resource-hub";
import { buildCtrMetadata, CTR_RESOURCE_HUB } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_RESOURCE_HUB, {
  canonical: RESOURCE_HUB_PATH,
  keywords: [
    "ATS resume resources",
    "resume optimization guide",
    "ATS resume checklist",
    "resume keywords database",
    "resume match tool",
  ],
  ogType: "article",
});

const RESOURCE_HUB_FAQ = [
  {
    question: "What is the ResumeIQ Resource Hub?",
    answer:
      "A centralized library of ATS guides, free tools, profession hubs, and trust docs—interconnected so you can move from learning to checking your resume in one workflow.",
  },
  {
    question: "Where should I start?",
    answer:
      "Run the free ATS resume checker, then use the checklist and keyword database for your role. Add a job description in the match tool before you apply.",
  },
  {
    question: "Is this for job seekers worldwide?",
    answer:
      "Yes—format and keyword guidance applies globally. Mirror employer language from each posting regardless of country.",
  },
];

export default function ResourceHubPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={RESOURCE_HUB_PATH}
        title={CTR_RESOURCE_HUB.title}
        description={CTR_RESOURCE_HUB.description}
        schemaType="CollectionPage"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resource Hub", path: RESOURCE_HUB_PATH },
        ]}
      />
      <PageFaqJsonLd items={RESOURCE_HUB_FAQ} />
      <div className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Resource Hub", path: RESOURCE_HUB_PATH },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Authority hub · ResumeIQ</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            {CTR_RESOURCE_HUB.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Every guide, tool, and profession hub in one place—built to rank, convert, and
            keep job seekers improving after the first scan.
          </p>
        </header>

        <div className="not-prose mt-10 flex flex-wrap gap-3">
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-6">
            Free ATS resume checker
          </Link>
          <Link
            href="/resume-job-description-match"
            className="inline-flex h-11 items-center rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-800"
          >
            Resume match tool
          </Link>
        </div>

        <section className="not-prose mt-14">
          <h2 className="font-display text-2xl font-bold text-slate-900">Core guides</h2>
          <p className="mt-2 text-sm text-slate-600">
            Pillar content competitors scatter across blogs—we keep it linked and actionable.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {RESOURCE_HUB_GUIDES.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300"
                >
                  <span className="font-display text-lg font-bold text-slate-900">
                    {g.title}
                  </span>
                  <span className="mt-1 text-sm text-slate-600">{g.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="not-prose mt-14">
          <h2 className="font-display text-2xl font-bold text-slate-900">Free tools</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {RESOURCE_HUB_TOOLS.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-100"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="not-prose mt-14">
          <h2 className="font-display text-2xl font-bold text-slate-900">
            Profession hubs
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Example + keywords + ATS guide + mistakes + FAQ—one page per role.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROFESSION_HUBS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.path}
                  className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="not-prose mt-14">
          <h2 className="font-display text-2xl font-bold text-slate-900">Trust & methodology</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {RESOURCE_HUB_TRUST.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="text-sm font-semibold text-[#16a34a] underline underline-offset-2"
                >
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <PageFaqSection heading="Resource Hub FAQ" items={RESOURCE_HUB_FAQ} />
        <RelatedResources path={RESOURCE_HUB_PATH} excludeHref={RESOURCE_HUB_PATH} />
      </div>
    </>
  );
}
