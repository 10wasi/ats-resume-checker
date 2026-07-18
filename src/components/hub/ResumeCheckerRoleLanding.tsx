import Link from "next/link";
import { BlogContent, BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { CheckerFunnelWebApplicationJsonLd } from "@/components/seo/CheckerFunnelWebApplicationJsonLd";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { GuideAuthorBlock } from "@/components/seo/GuideAuthorBlock";
import { PaaAnswersSection } from "@/components/seo/PaaAnswersSection";
import { SemanticEntitySection } from "@/components/seo/SemanticEntitySection";
import { TrustBadgesStrip } from "@/components/seo/TrustBadgesStrip";
import { StickyCheckerCta } from "@/components/seo/StickyCheckerCta";
import type { ResumeCheckerRoleEntry } from "@/lib/content/resume-checker-roles/registry";
import { HOWTO_RESUME_CHECKER, HOWTO_URLS } from "@/lib/seo/how-to-steps";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function ResumeCheckerRoleLanding({ entry }: { entry: ResumeCheckerRoleEntry }) {
  return (
    <>
      <CheckerFunnelWebApplicationJsonLd
        pageName={entry.ctr.title}
        pageDescription={entry.ctr.description}
      />
      <HowToJsonLd
        name={`How to check a ${entry.roleLabel.toLowerCase()} resume for ATS`}
        description={entry.ctr.description}
        steps={HOWTO_RESUME_CHECKER}
        path={HOWTO_URLS.checker}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Checker", path: RESUME_CHECKER_PATH },
          { name: entry.roleLabel, path: entry.path },
        ]}
      />
      <PageFaqJsonLd items={entry.faqItems} />
      <article className="container-prose py-12 sm:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-semibold text-[#16a34a] underline">
            Home
          </Link>
          {" / "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            Resume Checker
          </Link>
          {" / "}
          <span className="text-slate-700">{entry.roleLabel}</span>
        </nav>
        <header className="mt-6">
          <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            {entry.ctr.h1}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{entry.intro}</p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-6 inline-flex px-7 text-sm">
            Check my {entry.roleLabel.toLowerCase()} resume free
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Focus keywords: {entry.keywordFocus.join(" · ")}
          </p>
        </header>
        <div className="mt-10">
          <BlogContent content={entry.body} />
        </div>
        <AccordionFaq
          items={entry.faqItems}
          heading={`${entry.roleLabel} resume checker FAQ`}
          headingId="role-checker-faq"
        />
        <SemanticEntitySection path={entry.path} />
        <TrustBadgesStrip className="mt-10" />
        <GuideAuthorBlock />
        <PaaAnswersSection path={entry.path} />
        <RelatedResources path={entry.path} excludeHref={entry.path} limit={8} />
        <BlogResumeCta />
      </article>
      <StickyCheckerCta />
    </>
  );
}
