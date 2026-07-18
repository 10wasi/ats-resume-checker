import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { GuideEeatSection } from "@/components/seo/GuideEeatSection";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { howResumeAnalysisWorksBody } from "@/lib/content/how-resume-analysis-works-body";
import { buildCtrMetadata, CTR_OUR_ALGORITHM } from "@/lib/seo/ctr-metadata";
import { howResumeAnalysisFaqItems } from "@/lib/seo/how-resume-analysis-faq";
import { HOWTO_RESUME_CHECKER, HOWTO_URLS } from "@/lib/seo/how-to-steps";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const OUR_ALGORITHM_PATH = "/our-algorithm" as const;

export const metadata = buildCtrMetadata(CTR_OUR_ALGORITHM, {
  canonical: OUR_ALGORITHM_PATH,
  keywords: [
    "resume analysis algorithm",
    "how resume analysis works",
    "AI resume checker",
    "resume parser",
  ],
  ogType: "article",
});

export default function OurAlgorithmPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={OUR_ALGORITHM_PATH}
        title={CTR_OUR_ALGORITHM.title}
        description={CTR_OUR_ALGORITHM.description}
      />
      <HowToJsonLd
        name="How ResumeIQ analyzes your resume"
        description={CTR_OUR_ALGORITHM.description}
        steps={HOWTO_RESUME_CHECKER}
        path={HOWTO_URLS.checker}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Our Algorithm", path: OUR_ALGORITHM_PATH },
        ]}
      />
      <PageFaqJsonLd items={howResumeAnalysisFaqItems} />
      <article className="container-prose py-12 sm:py-14">
        <header>
          <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {CTR_OUR_ALGORITHM.h1}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Extraction, format checks, keyword matching, and AI suggestions — the pipeline behind
            every{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              resume analysis
            </Link>
            . Related:{" "}
            <Link href="/how-resume-analysis-works" className="font-semibold text-[#16a34a] underline">
              how resume analysis works
            </Link>
            .
          </p>
        </header>
        <div className="mt-10">
          <BlogContent content={howResumeAnalysisWorksBody} />
        </div>
        <GuideEeatSection path={OUR_ALGORITHM_PATH} />
        <PageFaqSection heading="Algorithm FAQ" items={howResumeAnalysisFaqItems} className="mt-12" />
        <RelatedResources path={OUR_ALGORITHM_PATH} excludeHref={OUR_ALGORITHM_PATH} limit={8} />
        <BlogResumeCta />
      </article>
    </>
  );
}
