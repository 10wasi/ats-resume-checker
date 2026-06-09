import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { ResumeExamplesLibraryGrid } from "@/components/examples/ResumeExamplesLibraryGrid";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { ResumeExamplesItemListJsonLd } from "@/components/seo/ResumeExamplesItemListJsonLd";
import { resumeExamplesLibraryIndexBody } from "@/lib/content/resume-examples/library-index-body";
import { RESUME_EXAMPLES_LIBRARY_PATH } from "@/lib/content/resume-examples/registry";
import { resumeExamplesLibraryFaqItems } from "@/lib/seo/resume-examples-library-faq";
import {
  buildCtrMetadata,
  CTR_RESUME_EXAMPLES_LIBRARY,
} from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const KEYWORDS = [
  "resume examples",
  "ATS friendly resume example",
  "software engineer resume example",
  "data analyst resume example",
  "ATS Resume Checker",
  "resume optimization",
];

export const metadata = buildCtrMetadata(CTR_RESUME_EXAMPLES_LIBRARY, {
  canonical: RESUME_EXAMPLES_LIBRARY_PATH,
  keywords: KEYWORDS,
  ogType: "article",
});

export default function ResumeExamplesLibraryPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={RESUME_EXAMPLES_LIBRARY_PATH}
        title={CTR_RESUME_EXAMPLES_LIBRARY.title}
        description={CTR_RESUME_EXAMPLES_LIBRARY.description}
      />
      <ResumeExamplesItemListJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Examples", path: RESUME_EXAMPLES_LIBRARY_PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeExamplesLibraryFaqItems} />
      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[380px] bg-mesh"
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
              <li className="text-slate-700">Resume Examples</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Free library · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_RESUME_EXAMPLES_LIBRARY.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Role-specific{" "}
              <strong className="font-semibold text-slate-800">resume examples</strong>{" "}
              built for ATS parsing—software
              engineer, data analyst, project manager, and five more. Study the
              structure, adapt your proof, then test in our{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 hover:text-[#16a34a]"
              >
                ATS Resume Checker
              </Link>{" "}
              and{" "}
              <Link
                href="/resume-job-description-match"
                className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-2 hover:text-slate-950"
              >
                Resume Match Analyzer
              </Link>
              .
            </p>
          </header>

          <div className="mt-10">
            <ResumeExamplesLibraryGrid />
          </div>

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={resumeExamplesLibraryIndexBody} />
          </div>

          <section
            className="mt-16 border-t border-slate-200 pt-14"
            aria-labelledby="resume-library-faq-heading"
          >
            <h2
              id="resume-library-faq-heading"
              className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              FAQ: using the Resume Examples Library
            </h2>
            <div className="mt-10 space-y-10">
              {resumeExamplesLibraryFaqItems.map((item) => (
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

          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
