import Link from "next/link";
import { BlogContent } from "@/components/blog/BlogExtras";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageBreadcrumbs } from "@/components/seo/PageBreadcrumbs";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { PageFaqSection } from "@/components/seo/PageFaqSection";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { TrustPageSeoFooter } from "@/components/seo/TrustPageSeoFooter";
import {
  DISCLAIMER_PATH,
  disclaimerBody,
} from "@/lib/content/disclaimer-body";
import { buildCtrMetadata, CTR_DISCLAIMER } from "@/lib/seo/ctr-metadata";
import { disclaimerFaqItems } from "@/lib/seo/disclaimer-faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata = buildCtrMetadata(CTR_DISCLAIMER, {
  canonical: DISCLAIMER_PATH,
});

export default function DisclaimerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Disclaimer", path: DISCLAIMER_PATH },
        ]}
      />
      <PageFaqJsonLd items={disclaimerFaqItems} />
      <div className="container-prose py-16">
        <PageBreadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Disclaimer", path: DISCLAIMER_PATH },
          ]}
        />
        <p className="section-eyebrow mt-8">Legal · Trust</p>
        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {CTR_DISCLAIMER.h1}
        </h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: July 30, 2026</p>
        <p className="mt-6 text-lg text-slate-600">
          ResumeIQ provides ATS-style analysis for job seekers—not employment guarantees.
          Test your file in the{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            free resume checker
          </Link>
          , then read how scores are calculated on our{" "}
          <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
            methodology
          </Link>{" "}
          page.
        </p>
        <div className="mt-10">
          <BlogContent content={disclaimerBody} />
        </div>
        <PageFaqSection heading="Disclaimer FAQ" items={disclaimerFaqItems} className="mt-12" />
        <p className="mt-10 text-sm text-slate-500">
          See also{" "}
          <Link href="/privacy" className="font-semibold text-[#16a34a] underline underline-offset-2">
            Privacy Policy
          </Link>
          ,{" "}
          <Link href="/terms" className="font-semibold text-[#16a34a] underline underline-offset-2">
            Terms of Service
          </Link>
          , and{" "}
          <Link href="/about" className="font-semibold text-[#16a34a] underline underline-offset-2">
            About
          </Link>
          .
        </p>
        <RelatedResources path={DISCLAIMER_PATH} excludeHref={DISCLAIMER_PATH} />
        <TrustPageSeoFooter path={DISCLAIMER_PATH} />
      </div>
    </>
  );
}
