import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  CORNERSTONE_GUIDES,
  PLATFORM_HUBS,
  PLATFORM_HUBS_PATH,
} from "@/lib/content/platform-hubs/registry";
import { buildCtrMetadata, CTR_PLATFORM_HUB_INDEX } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_PLATFORM_HUB_INDEX, {
  canonical: PLATFORM_HUBS_PATH,
  keywords: [
    "resume optimization platform",
    "resume checker",
    "resume review",
    "ATS resume checker",
    "resume keywords",
  ],
  ogType: "article",
});

const PLATFORM_FAQ = [
  {
    question: "What is the ResumeIQ resume optimization platform?",
    answer:
      "Nine interconnected hubs—checker, review, score, keywords, match, optimization, ATS tools, and CV checker—plus cornerstone rejection guides and free tools.",
  },
  {
    question: "Is this only an ATS resume checker?",
    answer:
      "No. The checker is one hub. The platform includes review rubrics, keyword databases, match analyzers, examples, and optimization workflows.",
  },
  {
    question: "Where should I start?",
    answer:
      "Run the free resume checker, then use the hub for your next step—review, keywords, or match depending on your gap.",
  },
];

export default function ResumeOptimizationPlatformPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={PLATFORM_HUBS_PATH}
        title={CTR_PLATFORM_HUB_INDEX.title}
        description={CTR_PLATFORM_HUB_INDEX.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Platform", path: PLATFORM_HUBS_PATH },
        ]}
      />
      <PageFaqJsonLd items={PLATFORM_FAQ} />
      <div className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Resume Optimization Platform", path: PLATFORM_HUBS_PATH },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">ResumeIQ platform</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            {CTR_PLATFORM_HUB_INDEX.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Not just an ATS checker—a complete resume optimization platform with nine content
            hubs, cornerstone guides, and free tools for job seekers worldwide.
          </p>
        </header>

        <div className="not-prose mt-10 flex flex-wrap gap-3">
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-6">
            Free resume checker
          </Link>
          <Link
            href="/complete-guide-ats-resume-optimization"
            className="inline-flex h-11 items-center rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-800"
          >
            Complete ATS guide
          </Link>
        </div>

        <section className="not-prose mt-14">
          <h2 className="font-display text-2xl font-bold text-slate-900">Platform hubs</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_HUBS.map((hub) => (
              <li key={hub.slug}>
                <Link
                  href={hub.path}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-emerald-300"
                >
                  <span className="font-display text-lg font-bold text-slate-900">
                    {hub.title}
                  </span>
                  <span className="mt-2 flex-1 text-sm text-slate-600">{hub.intro}</span>
                  <span className="mt-3 text-sm font-semibold text-[#16a34a]">Open hub →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="not-prose mt-14">
          <h2 className="font-display text-2xl font-bold text-slate-900">Cornerstone content</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {CORNERSTONE_GUIDES.map((g) => (
              <li key={g.href}>
                <Link
                  href={g.href}
                  className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
                >
                  {g.title} →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <PageFaqSection heading="Platform FAQ" items={PLATFORM_FAQ} />
        <RelatedResources path={PLATFORM_HUBS_PATH} excludeHref={PLATFORM_HUBS_PATH} />
      </div>
    </>
  );
}
