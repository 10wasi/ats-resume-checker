import Link from "next/link";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ResumeCheckerMoneyGuide } from "@/components/resume/ResumeCheckerMoneyGuide";
import { ResumeCheckerPanel } from "@/components/resume/ResumeCheckerPanel";
import { ResumeCheckerSeoIntro } from "@/components/resume/ResumeCheckerSeoIntro";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { HowToJsonLd } from "@/components/seo/HowToJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResumeCheckerWebApplicationJsonLd } from "@/components/seo/ResumeCheckerWebApplicationJsonLd";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { buildCtrMetadata, CTR_RESUME_CHECKER } from "@/lib/seo/ctr-metadata";
import {
  HOWTO_RESUME_CHECKER,
  HOWTO_URLS,
} from "@/lib/seo/how-to-steps";
import { resumeCheckerFaqItems } from "@/lib/seo/resume-checker-faq";

export const metadata = buildCtrMetadata(CTR_RESUME_CHECKER, {
  canonical: RESUME_CHECKER_PATH,
  absoluteTitle: true,
  keywords: [
    "resume checker",
    "resume score checker",
    "free resume checker online",
    "ATS resume checker",
  ],
});

export default function ResumeCheckerPage() {
  return (
    <>
      <ResumeCheckerWebApplicationJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "ATS Resume Checker", path: RESUME_CHECKER_PATH },
        ]}
      />
      <HowToJsonLd
        name="How to check your resume with the ATS Resume Checker"
        description={CTR_RESUME_CHECKER.description}
        steps={HOWTO_RESUME_CHECKER}
        path={HOWTO_URLS.checker}
      />
      <PageFaqJsonLd items={resumeCheckerFaqItems} />
      <div className="min-h-full w-full">
        <div className="border-b border-zinc-200/90 bg-white/90 px-4 py-3 backdrop-blur sm:px-8">
          <nav
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="font-medium transition hover:text-zinc-900">
              Home
            </Link>
            <span aria-hidden className="text-zinc-300">
              /
            </span>
            <span className="font-semibold text-zinc-800">Resume checker</span>
          </nav>
        </div>
        <ResumeCheckerSeoIntro />
        <ErrorBoundary>
          <ResumeCheckerPanel />
        </ErrorBoundary>
        <ResumeCheckerMoneyGuide />
      </div>
    </>
  );
}
