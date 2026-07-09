import Link from "next/link";
import dynamic from "next/dynamic";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { atsKeywordsFinderBody } from "@/lib/content/ats-keywords-finder-body";
import { atsKeywordsFinderFaqItems } from "@/lib/seo/ats-keywords-finder-faq";
import { buildCtrMetadata, CTR_ATS_KEYWORDS_FINDER } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const AtsKeywordsFinderTool = dynamic(
  () =>
    import("@/components/tools/AtsKeywordsFinderTool").then((m) => ({
      default: m.AtsKeywordsFinderTool,
    })),
  { loading: () => <div className="h-64 animate-pulse rounded-2xl bg-slate-100" /> }
);

const PATH = "/ats-keywords-finder";

export const metadata = buildCtrMetadata(CTR_ATS_KEYWORDS_FINDER, {
  canonical: PATH,
  keywords: [
    "ATS keywords finder",
    "resume keywords from job description",
    "ATS keywords",
    "ATS Resume Checker",
    "resume match score",
  ],
});

export default function AtsKeywordsFinderPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={PATH}
        title={CTR_ATS_KEYWORDS_FINDER.title}
        description={CTR_ATS_KEYWORDS_FINDER.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "ATS Keywords Finder", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={atsKeywordsFinderFaqItems} />
      <article className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-mesh" aria-hidden />
        <div className="container-prose py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <ol className="flex flex-wrap gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="font-semibold text-[#4ade80] underline underline-offset-2">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-slate-700">ATS Keywords Finder</li>
            </ol>
          </nav>
          <header className="mt-8">
            <p className="section-eyebrow">Free tool · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_ATS_KEYWORDS_FINDER.h1}
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Paste any job posting to extract{" "}
              <strong className="font-semibold text-slate-800">ATS keywords</strong>
              —then compare overlap in the{" "}
              <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
                ATS Resume Checker
              </Link>{" "}
              or{" "}
              <Link href="/resume-job-description-match" className="font-semibold text-slate-800 underline">
                Resume Match Analyzer
              </Link>
              .
            </p>
          </header>
          <div className="mt-10">
            <AtsKeywordsFinderTool />
          </div>
          <AdPlaceholder label="Advertisement · tool" className="mt-10" />
          <div className="mt-10">
            <BlogContent content={atsKeywordsFinderBody} />
          </div>
          <AccordionFaq items={atsKeywordsFinderFaqItems} heading="FAQ" />
          <RelatedResources path={PATH} excludeHref={PATH} />
          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
