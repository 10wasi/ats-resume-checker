import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { TrustPageSeoFooter } from "@/components/seo/TrustPageSeoFooter";
import {
  REVIEW_PROCESS_PATH,
  reviewProcessBody,
} from "@/lib/content/review-process-body";
import { buildCtrMetadata, CTR_REVIEW_PROCESS } from "@/lib/seo/ctr-metadata";
import { reviewProcessFaqItems } from "@/lib/seo/review-process-faq";

export const metadata = buildCtrMetadata(CTR_REVIEW_PROCESS, {
  canonical: REVIEW_PROCESS_PATH,
  keywords: ["review process", "ResumeIQ editorial", "EEAT", "content standards"],
  ogType: "article",
});

export default function ReviewProcessPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={REVIEW_PROCESS_PATH}
        title={CTR_REVIEW_PROCESS.title}
        description={CTR_REVIEW_PROCESS.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Review Process", path: REVIEW_PROCESS_PATH },
        ]}
      />
      <PageFaqJsonLd items={reviewProcessFaqItems} />
      <article className="container-prose py-12 sm:py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Review Process", path: REVIEW_PROCESS_PATH },
          ]}
        />
        <header className="mt-8">
          <p className="section-eyebrow">Trust · ResumeIQ</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {CTR_REVIEW_PROCESS.h1}
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            How the ResumeIQ Editorial Team reviews guides, tool pages, and checker
            claims before publication.
          </p>
        </header>
        <div className="mt-10">
          <BlogContent content={reviewProcessBody} />
        </div>

        <section className="mt-14" aria-labelledby="review-process-faq-heading">
          <h2
            id="review-process-faq-heading"
            className="font-display text-2xl font-bold text-slate-900"
          >
            Review process FAQ
          </h2>
          <dl className="mt-6 space-y-6">
            {reviewProcessFaqItems.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold text-slate-900">{item.question}</dt>
                <dd className="mt-2 text-slate-600">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <RelatedResources path={REVIEW_PROCESS_PATH} excludeHref={REVIEW_PROCESS_PATH} />
        <TrustPageSeoFooter path={REVIEW_PROCESS_PATH} />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/editorial-policy" className="font-semibold text-[#16a34a] underline">
            Editorial policy →
          </Link>
          <Link href="/about" className="font-semibold text-[#16a34a] underline">
            About ResumeIQ →
          </Link>
          <Link href="/privacy" className="font-semibold text-[#16a34a] underline">
            Privacy policy →
          </Link>
        </div>
        <BlogResumeCta />
      </article>
    </>
  );
}
