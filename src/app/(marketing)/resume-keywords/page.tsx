import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { ResumeKeywordsGrid } from "@/components/keywords/ResumeKeywordsGrid";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { ResumeKeywordsItemListJsonLd } from "@/components/seo/ResumeKeywordsItemListJsonLd";
import { TopicClusterLinks } from "@/components/seo/TopicClusterLinks";
import { resumeKeywordsIndexBody } from "@/lib/content/resume-keywords/index-body";
import { RESUME_KEYWORDS_PATH } from "@/lib/content/resume-keywords/registry";
import { resumeKeywordsDatabaseFaqItems } from "@/lib/seo/resume-keywords-database-faq";
import { buildCtrMetadata, CTR_RESUME_KEYWORDS_DATABASE } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_RESUME_KEYWORDS_DATABASE, {
  canonical: RESUME_KEYWORDS_PATH,
  keywords: [
    "resume keywords",
    "ATS keywords",
    "resume keywords by profession",
    "ATS Resume Checker",
    "resume optimization",
  ],
  ogType: "article",
});

export default function ResumeKeywordsIndexPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={RESUME_KEYWORDS_PATH}
        title={CTR_RESUME_KEYWORDS_DATABASE.title}
        description={CTR_RESUME_KEYWORDS_DATABASE.description}
      />
      <ResumeKeywordsItemListJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Keywords", path: RESUME_KEYWORDS_PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeKeywordsDatabaseFaqItems} />
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
              <li className="text-slate-700">Resume Keywords</li>
            </ol>
          </nav>

          <header className="mt-8">
            <p className="section-eyebrow">Searchable database · ResumeIQ</p>
            <h1 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-tight lg:text-5xl">
              {CTR_RESUME_KEYWORDS_DATABASE.h1}
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-600">
              Discover <strong className="font-semibold text-slate-800">ATS-friendly resume keywords</strong>{" "}
              for your profession—technical skills, soft skills, action verbs, and example bullets.
              Pick your role below, then validate gaps in our free{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
              >
                ATS Resume Checker
              </Link>{" "}
              and{" "}
              <Link
                href="/resume-job-description-match"
                className="font-semibold text-[#16a34a] underline decoration-emerald-300 underline-offset-2"
              >
                Resume Match Analyzer
              </Link>
              .
            </p>
          </header>

          <ResumeKeywordsGrid />

          <AdPlaceholder label="Advertisement · resource" className="mt-10" />

          <div className="mt-10">
            <BlogContent content={resumeKeywordsIndexBody} />
          </div>

          <TopicClusterLinks path={RESUME_KEYWORDS_PATH} />

          <section className="mt-16 border-t border-slate-200 pt-14">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              FAQ: Resume Keywords Database
            </h2>
            <div className="mt-10 space-y-10">
              {resumeKeywordsDatabaseFaqItems.map((item) => (
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
