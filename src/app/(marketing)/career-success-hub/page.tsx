import Link from "next/link";
import { CareerSuccessHubGrid } from "@/components/career/CareerSuccessHubGrid";
import { TopicClusterLinks } from "@/components/seo/TopicClusterLinks";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import {
  CAREER_SUCCESS_HUB_PATH,
} from "@/lib/content/career-success-hub/registry";
import { careerSuccessHubFaqItems } from "@/lib/seo/career-success-hub-faq";
import { buildCtrMetadata, CTR_CAREER_SUCCESS_HUB } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_CAREER_SUCCESS_HUB, {
  canonical: CAREER_SUCCESS_HUB_PATH,
  keywords: [
    "resume optimization",
    "resume checker",
    "ATS Resume Checker",
    "resume match score",
    "resume keywords",
  ],
});

export default function CareerSuccessHubPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={CAREER_SUCCESS_HUB_PATH}
        title={CTR_CAREER_SUCCESS_HUB.title}
        description={CTR_CAREER_SUCCESS_HUB.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Career Success Hub", path: CAREER_SUCCESS_HUB_PATH },
        ]}
      />
      <PageFaqJsonLd items={careerSuccessHubFaqItems} />
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">Career Success Hub</li>
            </ol>
          </nav>
          <header className="mt-8">
            <p className="section-eyebrow">ResumeIQ · Free platform</p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {CTR_CAREER_SUCCESS_HUB.h1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Every tool and guide you need for{" "}
              <strong className="font-semibold text-slate-800">
                resume optimization
              </strong>
              —checker, match score, keywords, examples, and checklists—linked in
              one workflow. Start with the{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
              >
                ATS Resume Checker
              </Link>{" "}
              or pick a resource below.
            </p>
            <Link
              href={RESUME_CHECKER_PATH}
              className="btn-gradient mt-8 inline-flex px-6 text-sm"
            >
              Run free resume check →
            </Link>
          </header>
          <CareerSuccessHubGrid />
          <TopicClusterLinks heading="Core topic cluster" />
          <section className="mt-16 border-t border-slate-200 pt-14">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              FAQ: Career Success Hub
            </h2>
            <div className="mt-10 space-y-10">
              {careerSuccessHubFaqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-700">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
