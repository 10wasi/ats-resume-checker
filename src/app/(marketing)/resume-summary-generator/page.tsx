import Link from "next/link";
import dynamic from "next/dynamic";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ToolPageSeoEnrichment } from "@/components/seo/ToolPageSeoEnrichment";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { resumeSummaryGeneratorBody } from "@/lib/content/resume-summary-generator-body";
import {
  buildCtrMetadata,
  CTR_RESUME_SUMMARY_GENERATOR,
} from "@/lib/seo/ctr-metadata";
import { resumeSummaryGeneratorFaqItems } from "@/lib/seo/resume-summary-generator-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const ResumeSummaryGeneratorTool = dynamic(
  () =>
    import("@/components/tools/ResumeSummaryGeneratorTool").then((m) => ({
      default: m.ResumeSummaryGeneratorTool,
    })),
  { loading: () => <div className="h-64 animate-pulse rounded-2xl bg-slate-100" /> }
);

const PATH = "/resume-summary-generator";

export const metadata = buildCtrMetadata(CTR_RESUME_SUMMARY_GENERATOR, {
  canonical: PATH,
  keywords: [
    "resume summary generator",
    "professional summary resume",
    "ATS resume summary",
    "ATS Resume Checker",
    "resume optimization",
  ],
});

export default function ResumeSummaryGeneratorPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={PATH}
        title={CTR_RESUME_SUMMARY_GENERATOR.title}
        description={CTR_RESUME_SUMMARY_GENERATOR.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Summary Generator", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeSummaryGeneratorFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-[#4ade80] underline underline-offset-2"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">Resume Summary Generator</li>
            </ol>
          </nav>
          <header className="mt-8">
            <p className="section-eyebrow">Free tool · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_RESUME_SUMMARY_GENERATOR.h1}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Enter your role, years, and highlights to draft{" "}
              <strong className="font-semibold text-slate-800">
                professional summary
              </strong>{" "}
              lines—then tailor against a posting in the{" "}
              <Link
                href="/resume-job-description-match"
                className="font-semibold text-slate-800 underline"
              >
                Resume Match Analyzer
              </Link>{" "}
              or{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#16a34a] underline"
              >
                ATS Resume Checker
              </Link>
              .
            </p>
          </header>
          <div className="mt-10">
            <ResumeSummaryGeneratorTool />
          </div>
          <AdPlaceholder label="Advertisement · tool" className="mt-10" />
          <div className="mt-10">
            <BlogContent content={resumeSummaryGeneratorBody} />
          </div>
          <section className="mt-16 border-t border-slate-200 pt-14">
            <h2 className="font-display text-2xl font-bold text-slate-900">FAQ</h2>
            <div className="mt-10 space-y-10">
              {resumeSummaryGeneratorFaqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
          <RelatedResources path={PATH} excludeHref={PATH} />
          <BlogResumeCta />
        </div>
      </article>
      <ToolPageSeoEnrichment path={PATH} pageTitle="resume summary generator" />
    </>
  );
}
