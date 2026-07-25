import Link from "next/link";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const GLOSSARY_PATH = "/glossary";

export const metadata = buildCtrMetadata(
  {
    title: ctrTitle("ATS Glossary", "Resume & Hiring Terms"),
    description: ctrMeta(
      "ATS glossary — applicant tracking system, parse rate, keyword match & score terms explained. Linked to free checker."
    ),
    h1: "ATS & Resume Glossary",
    primaryKeyword: "ATS glossary",
    richSnippets: ["DefinedTermSet", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
  },
  { canonical: GLOSSARY_PATH, ogType: "article" }
);

const TERMS = [
  {
    term: "Applicant Tracking System (ATS)",
    def: "Software employers use to collect applications, parse resumes into fields, and search candidates by keywords.",
    link: "/how-ats-works",
  },
  {
    term: "Parse rate / parse health",
    def: "How cleanly a resume extracts into text fields—broken order or missing sections lower effective keyword match.",
    link: "/resume-parser",
  },
  {
    term: "Keyword match",
    def: "Overlap between resume text and job posting terms recruiters or filters search for.",
    link: "/resume-keyword-checker",
  },
  {
    term: "ATS score",
    def: "Estimated compatibility based on parse health, keywords, and structure—not a universal employer grade.",
    link: "/ats-score-checker",
  },
  {
    term: "Boolean search",
    def: "Recruiter queries combining AND/OR/NOT on skills and titles inside ATS talent pools.",
    link: "/resume-keywords",
  },
  {
    term: "Resume parser",
    def: "Component that converts PDF/DOCX into plain text and structured fields.",
    link: "/resume-parser",
  },
  {
    term: "Knockout question",
    def: "Application screening question that auto-rejects candidates who answer incorrectly.",
    link: "/faq-center",
  },
  {
    term: "Plain-text resume",
    def: "Minimal formatting for legacy portals—headings must still be obvious without styling.",
    link: "/ats-resume-format",
  },
];

const FAQ = [
  {
    question: "Does every company use the same ATS?",
    answer:
      "No. Workday, Greenhouse, Taleo, Lever, and others behave differently—but parse-safe formatting and posting keywords help across systems.",
  },
  {
    question: "Where should I learn scoring details?",
    answer: "Read how we score resumes and our algorithm pages for transparent methodology.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={GLOSSARY_PATH}
        title="ATS Glossary"
        description="Definitions for ATS, parsing, and resume optimization terms."
        schemaType="WebPage"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Glossary", path: GLOSSARY_PATH },
        ]}
      />
      <PageFaqJsonLd items={FAQ} />
      <article className="container-prose py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
          <Link href="/" className="font-semibold text-[#16a34a] underline">
            Home
          </Link>
          {" / "}
          <span className="text-slate-700">Glossary</span>
        </nav>
        <header className="mt-6">
          <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            ATS &amp; Resume Glossary
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Definitions linked to guides and the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free ATS resume checker
            </Link>
            . Browse{" "}
            <Link href="/resume-resources" className="underline">
              resume resources
            </Link>{" "}
            and{" "}
            <Link href="/blog" className="underline">
              blog
            </Link>{" "}
            for deeper workflows.
          </p>
        </header>
        <dl className="mt-10 space-y-6">
          {TERMS.map((t) => (
            <div key={t.term} className="rounded-xl border border-slate-200 bg-white p-5">
              <dt className="font-display text-lg font-bold text-slate-900">{t.term}</dt>
              <dd className="mt-2 text-slate-600">{t.def}</dd>
              <dd className="mt-2">
                <Link href={t.link} className="text-sm font-semibold text-[#16a34a] underline">
                  Read guide →
                </Link>
              </dd>
            </div>
          ))}
        </dl>
        <AccordionFaq items={FAQ} heading="Glossary FAQ" headingId="glossary-faq" />
      </article>
    </>
  );
}
