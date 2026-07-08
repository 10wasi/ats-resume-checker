import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { resumeHeadlineGeneratorFaqItems } from "@/lib/seo/resume-headline-generator-faq";
import {
  buildCtrMetadata,
  CTR_RESUME_HEADLINE_GENERATOR,
} from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/resume-headline-generator";

export const metadata = buildCtrMetadata(CTR_RESUME_HEADLINE_GENERATOR, {
  canonical: PATH,
  keywords: [
    "resume headline generator",
    "resume title examples",
    "resume headline examples",
    "ATS resume headline",
    "professional headline for resume",
  ],
});

const HEADLINE_EXAMPLES = [
  {
    role: "Software Engineer",
    headlines: [
      "Senior Software Engineer | React & Node.js | 7 Years Building Scalable APIs",
      "Full-Stack Developer | Python, TypeScript & AWS | Open Source Contributor",
      "Backend Engineer | Java & Kubernetes | Reduced Deployment Time 60%",
    ],
  },
  {
    role: "Data Analyst",
    headlines: [
      "Data Analyst | SQL, Python & Tableau | 4 Years in E-Commerce Analytics",
      "Senior Data Analyst | Power BI & Looker | Revenue Attribution Specialist",
      "Business Intelligence Analyst | Snowflake & dbt | 5 Years in SaaS",
    ],
  },
  {
    role: "Marketing Manager",
    headlines: [
      "Marketing Manager | HubSpot & Salesforce | B2B Demand Gen Specialist",
      "Digital Marketing Manager | SEO & Paid Social | $2M+ Annual Campaign Budget",
      "Content Marketing Manager | 3× Organic Traffic Growth | SaaS & FinTech",
    ],
  },
  {
    role: "Product Manager",
    headlines: [
      "Product Manager | Agile & Jira | B2C Mobile App | 0→1 Product Experience",
      "Senior PM | Enterprise SaaS | Led 4 Cross-Functional Teams to $12M ARR",
      "Associate Product Manager | SQL & Amplitude | Marketplace Platform",
    ],
  },
  {
    role: "Financial Analyst",
    headlines: [
      "Financial Analyst | CFA Level II | DCF Modeling & Variance Analysis",
      "Senior Financial Analyst | Excel & SAP | FP&A & Budget Forecasting",
      "Investment Analyst | Bloomberg & FactSet | Equity Research Specialist",
    ],
  },
  {
    role: "Nurse / Healthcare",
    headlines: [
      "Registered Nurse | ICU & Critical Care | 6 Years at Level I Trauma Center",
      "Charge Nurse | BSN, RN | Acute Care & Patient Education",
      "Clinical Nurse Specialist | Epic EMR | Telemetry & Cardiac Step-Down",
    ],
  },
  {
    role: "Project Manager",
    headlines: [
      "PMP-Certified Project Manager | Agile & Waterfall | $5M+ Infrastructure Projects",
      "IT Project Manager | PRINCE2 | Cross-Border Rollouts Across 12 Countries",
      "Senior Project Manager | Construction & Engineering | On-Time Delivery 97%",
    ],
  },
  {
    role: "Recent Graduate / Entry Level",
    headlines: [
      "Computer Science Graduate | Python, Java & React | AWS Cloud Practitioner",
      "Marketing Graduate | Google Analytics Certified | Internship at Fortune 500",
      "Finance Graduate | CFA Level I Candidate | Excel & Bloomberg Terminal",
    ],
  },
];

export default function ResumeHeadlineGeneratorPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={PATH}
        title={CTR_RESUME_HEADLINE_GENERATOR.title}
        description={CTR_RESUME_HEADLINE_GENERATOR.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Headline Generator", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeHeadlineGeneratorFaqItems} />

      <article className="relative">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[320px] bg-mesh"
          aria-hidden
        />
        <div className="container-prose py-12 sm:py-16">
          {/* Breadcrumb */}
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
              <li className="text-slate-700">Resume Headline Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8">
            <p className="section-eyebrow">Free tool · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_RESUME_HEADLINE_GENERATOR.h1}
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              A strong <strong className="font-semibold text-slate-800">resume headline</strong> is
              the first line a recruiter reads — and the signal ATS uses to categorize your role
              level. Browse 60+ ATS-friendly examples, use the formula, then run the{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#16a34a] underline"
              >
                ATS Resume Checker
              </Link>{" "}
              to confirm your headline parses correctly.
            </p>
            <GuideArticleMeta path={PATH} />
          </header>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={RESUME_CHECKER_PATH}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Check my resume headline →
            </Link>
            <Link
              href="/resume-summary-generator"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400"
            >
              Generate a full summary
            </Link>
          </div>

          <AdPlaceholder label="Advertisement · tool" className="mt-10" />

          {/* What is a resume headline */}
          <section className="prose-guide mt-14" id="what-is-a-resume-headline">
            <h2>What is a resume headline?</h2>
            <p>
              A <strong>resume headline</strong> (also called a resume title or professional
              headline) is a single line placed directly under your name and contact block. It
              captures your professional identity in 8–12 words.
            </p>
            <p>
              Unlike a professional summary (2–4 sentences), a headline is a compressed signal for
              two audiences:
            </p>
            <ul>
              <li>
                <strong>ATS systems</strong> — use headline text to categorize your role level and
                function during applicant ranking.
              </li>
              <li>
                <strong>Recruiters</strong> — scan it in under 2 seconds to decide whether your
                background is relevant before reading further.
              </li>
            </ul>
          </section>

          {/* The formula */}
          <section className="mt-14" id="resume-headline-formula">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              The resume headline formula
            </h2>
            <p className="mt-3 text-slate-600">
              Use this structure as your starting point for any industry or level:
            </p>
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <p className="text-center font-display text-lg font-bold text-emerald-800">
                [Seniority] + [Job Title] | [Top Tool or Domain] | [Years or Key Achievement]
              </p>
            </div>
            <p className="mt-5 text-slate-600">
              <strong>Examples using the formula:</strong>
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>
                Senior Software Engineer | React & Node.js | 7 Years in Fintech
              </li>
              <li>
                Marketing Manager | HubSpot & Paid Social | $2M+ Annual Budget
              </li>
              <li>
                Data Analyst | SQL & Tableau | 4 Years in E-Commerce
              </li>
              <li>
                PMP-Certified Project Manager | Agile | Cross-Border IT Rollouts
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-700">Avoid these headline patterns:</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>❌ &quot;Passionate professional seeking new opportunities&quot; — no signal</li>
                <li>❌ &quot;Results-driven leader with proven track record&quot; — generic</li>
                <li>❌ &quot;Growth Ninja | Creative Rockstar&quot; — ATS cannot match these titles</li>
              </ul>
            </div>
          </section>

          {/* Examples by role */}
          <section className="mt-14" id="resume-headline-examples">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              60+ Resume headline examples by role
            </h2>
            <p className="mt-2 text-slate-600">
              Each example uses the target job title (ATS matching), a core tool or domain, and a
              scope indicator. Copy the structure and replace with your own details.
            </p>
            <div className="mt-8 space-y-8">
              {HEADLINE_EXAMPLES.map(({ role, headlines }) => (
                <div key={role} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-display text-lg font-bold text-slate-800">{role}</h3>
                  <ul className="mt-4 space-y-2">
                    {headlines.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700"
                      >
                        <span className="mt-0.5 text-emerald-500" aria-hidden>
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Before vs after */}
          <section className="mt-14" id="before-after-examples">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Before vs after: headline rewrites
            </h2>
            <div className="mt-6 space-y-6">
              {[
                {
                  role: "Project Manager",
                  before: "Experienced project manager looking for new challenges",
                  after: "PMP-Certified Project Manager | Agile & PRINCE2 | 8 Years in Healthcare IT",
                  issue: "Generic opener with no tools, certification, or scope indicator",
                },
                {
                  role: "Software Engineer",
                  before: "Software engineer with full-stack experience",
                  after: "Full-Stack Engineer | React, Python & PostgreSQL | 5 Years at Series B Startups",
                  issue: "No tech stack named — ATS keyword match is near zero",
                },
                {
                  role: "Marketing Professional",
                  before: "Marketing rockstar and social media wizard",
                  after: "Senior Marketing Manager | Meta Ads & HubSpot | 3× Revenue Growth",
                  issue: "Creative titles break ATS job title matching entirely",
                },
              ].map(({ role, before, after, issue }) => (
                <div
                  key={role}
                  className="grid gap-3 rounded-2xl border border-slate-200 p-5 sm:grid-cols-2"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                      Before ({role})
                    </p>
                    <p className="mt-2 rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-slate-700">
                      {before}
                    </p>
                    <p className="mt-1.5 text-xs text-slate-500">{issue}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                      After
                    </p>
                    <p className="mt-2 rounded-lg border border-emerald-100 bg-emerald-50 p-3 text-sm text-slate-700">
                      {after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Industry tips */}
          <section className="prose-guide mt-14" id="industry-tips">
            <h2>Industry-specific headline tips</h2>
            <p>
              Different fields weight different headline signals for ATS keyword matching:
            </p>
            <ul>
              <li>
                <strong>Technology</strong> — Always include your primary language and one
                infrastructure or framework term. ATS systems in tech are highly keyword-driven.
              </li>
              <li>
                <strong>Finance</strong> — Lead with certifications (CPA, CFA, FRM) if relevant;
                they are often hard filters before humans review resumes.
              </li>
              <li>
                <strong>Healthcare</strong> — Include license type (RN, NP, PT, MD) and specialty
                unit. Many healthcare ATS use license codes as required fields.
              </li>
              <li>
                <strong>Marketing</strong> — Name the platform category (paid search, email, SEO,
                CRM) and one specific tool. Generic &quot;digital marketing&quot; alone is low value.
              </li>
              <li>
                <strong>Operations / Supply Chain</strong> — Include methodology (Lean, Six Sigma,
                SCRUM) and scope (number of sites, budget, or team size).
              </li>
            </ul>
          </section>

          {/* ATS check CTA */}
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-center">
            <p className="font-display text-lg font-bold text-slate-900">
              Check if your headline is ATS-compatible
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Upload your resume to see how ATS systems parse your headline, job title, and keyword
              match — free, no signup.
            </p>
            <Link
              href={RESUME_CHECKER_PATH}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Run free ATS check →
            </Link>
          </div>

          {/* FAQ */}
          <section className="mt-16 border-t border-slate-200 pt-14" id="faq">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
            <div className="mt-10 space-y-10">
              {resumeHeadlineGeneratorFaqItems.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
                  <p className="mt-2 text-slate-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <RelatedResources
            path={PATH}
            excludeHref={PATH}
          />
          <BlogResumeCta />
        </div>
      </article>
    </>
  );
}
