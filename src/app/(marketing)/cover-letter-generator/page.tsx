import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { coverLetterGeneratorFaqItems } from "@/lib/seo/cover-letter-generator-faq";
import {
  buildCtrMetadata,
  CTR_COVER_LETTER_GENERATOR,
} from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/cover-letter-generator";

export const metadata = buildCtrMetadata(CTR_COVER_LETTER_GENERATOR, {
  canonical: PATH,
  keywords: [
    "cover letter generator",
    "ATS friendly cover letter",
    "cover letter template",
    "cover letter examples",
    "how to write a cover letter",
  ],
});

const COVER_LETTER_EXAMPLES = [
  {
    role: "Software Engineer",
    opening:
      "I am applying for the Senior Software Engineer role at [Company]. With 7 years building scalable REST APIs in Python and Node.js and a recent migration from monolith to microservices that reduced deployment time by 60%, I am confident I can contribute immediately to your platform team.",
    body:
      "In my current role at [Current Company], I led the rewrite of the core API gateway serving 2.4M daily requests. I introduced Redis caching that dropped average response latency from 340ms to 82ms — a change that directly correlated with a 12% improvement in checkout conversion. I also mentored three junior engineers through their first production deployments.",
    close:
      "I would welcome the chance to discuss how my experience with distributed systems and team leadership can support [Company]'s infrastructure goals. I am available for a call at any time this week.",
  },
  {
    role: "Marketing Manager",
    opening:
      "I am writing to apply for the Marketing Manager position at [Company]. Having spent five years managing $1.5M+ annual digital budgets across B2B SaaS products, I understand both the data-driven and creative demands of a high-performing marketing function.",
    body:
      "At [Current Company], I rebuilt our demand generation program from the ground up: migrated from a legacy CRM to HubSpot, introduced a content calendar that increased organic sessions 3× in 14 months, and launched a paid social program on LinkedIn and Meta that generated $2.4M in attributed pipeline. I work closely with sales to ensure our campaigns convert beyond the click.",
    close:
      "I am excited about [Company]'s recent expansion into enterprise accounts and believe my experience in aligning marketing with enterprise sales cycles is directly relevant. I look forward to speaking with you.",
  },
  {
    role: "Entry-Level / Graduate",
    opening:
      "I am a recent Computer Science graduate from [University] applying for the Junior Developer role at [Company]. During my final year, I completed a Google Data Analytics Certificate and built a full-stack inventory management app using React and PostgreSQL that reduced manual stocktaking time by 45% for a local retailer.",
    body:
      "My internship at [Company Name] introduced me to production-level Python development and agile sprints. I contributed to a data pipeline that processed 200K records daily and wrote unit tests that caught three critical bugs before release. I am comfortable working with GitHub, Jira, and AWS basics.",
    close:
      "I am a fast learner with genuine enthusiasm for clean code and collaborative problem-solving. I would love the opportunity to grow with your team. Thank you for considering my application.",
  },
];

export default function CoverLetterGeneratorPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={PATH}
        title={CTR_COVER_LETTER_GENERATOR.title}
        description={CTR_COVER_LETTER_GENERATOR.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Cover Letter Generator", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={coverLetterGeneratorFaqItems} />

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
              <li className="text-slate-700">Cover Letter Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8">
            <p className="section-eyebrow">Free guide · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_COVER_LETTER_GENERATOR.h1}
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              A well-structured{" "}
              <strong className="font-semibold text-slate-800">cover letter</strong> works
              alongside your resume — not instead of it. This guide covers ATS-friendly structure,
              paragraph formulas, role-specific examples, and common mistakes. Pair it with the{" "}
              <Link
                href={RESUME_CHECKER_PATH}
                className="font-semibold text-[#16a34a] underline"
              >
                ATS Resume Checker
              </Link>{" "}
              to optimize both documents before applying.
            </p>
            <GuideArticleMeta path={PATH} />
          </header>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={RESUME_CHECKER_PATH}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Check my resume first →
            </Link>
            <Link
              href="/resume-summary-generator"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400"
            >
              Generate a resume summary
            </Link>
          </div>

          <AdPlaceholder label="Advertisement · tool" className="mt-10" />

          {/* What is a cover letter */}
          <section className="prose-guide mt-14" id="what-is-a-cover-letter">
            <h2>What is a cover letter — and does it still matter?</h2>
            <p>
              A cover letter is a short document (250–400 words) submitted with your resume that
              provides context your resume cannot: why you want this specific role, one concrete
              example of relevant impact, and a clear reason this employer matters to you.
            </p>
            <p>
              Does it still matter in 2026? For most applications, yes — with caveats:
            </p>
            <ul>
              <li>
                About 40% of hiring managers say a strong cover letter influences their decision to
                interview candidates who are borderline on resume alone.
              </li>
              <li>
                A weak or generic cover letter can actively hurt your application — it signals
                copy-paste behavior and low interest.
              </li>
              <li>
                For senior and executive roles, a cover letter that demonstrates strategic thinking
                is often expected, not optional.
              </li>
            </ul>
          </section>

          {/* Structure */}
          <section className="mt-14" id="cover-letter-structure">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              ATS-friendly cover letter structure
            </h2>
            <p className="mt-2 text-slate-600">
              Cover letters should use plain text formatting. Tables, text boxes, and decorative
              borders can break ATS parsing.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  section: "Header",
                  content:
                    "Your name, email, phone, city. Date. Hiring manager name (if known), company name, company address.",
                  tip: "Use plain text — not a designed header from a Word template. ATS often skips styled header regions.",
                },
                {
                  section: "Opening paragraph",
                  content:
                    "State the exact job title, how you found it, and one sentence that anchors your credibility for this specific role.",
                  tip: "Mirror the job title from the posting exactly — this creates ATS keyword alignment from line one.",
                },
                {
                  section: "Body paragraph 1 — key achievement",
                  content:
                    "Describe your most relevant accomplishment with a metric or scope indicator. One thing done well beats three claims without proof.",
                  tip: "Use the STAR structure: Situation (brief context) → Action (what you did) → Result (quantified outcome).",
                },
                {
                  section: "Body paragraph 2 — skills or culture fit",
                  content:
                    "Connect a second relevant skill or perspective to what the employer needs. Reference the job description or the company's known priorities.",
                  tip: "This paragraph is where you naturally include 2–3 keywords from the job posting — not as a list, but in context.",
                },
                {
                  section: "Closing",
                  content:
                    "Thank the reader, state your availability, and include a clear call to action.",
                  tip: "Avoid 'I look forward to hearing from you' alone. Add specificity: 'I am available for a call any day this week between 9am–6pm.'",
                },
              ].map(({ section, content, tip }) => (
                <div
                  key={section}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <p className="font-semibold text-slate-900">{section}</p>
                  <p className="mt-1.5 text-sm text-slate-600">{content}</p>
                  <p className="mt-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-800">
                    <strong>ATS tip:</strong> {tip}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Role examples */}
          <section className="mt-14" id="cover-letter-examples">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Cover letter examples by role
            </h2>
            <p className="mt-2 text-slate-600">
              These are paragraph-level templates. Replace bracketed placeholders with your real
              company names, metrics, and role details before submitting.
            </p>
            <div className="mt-8 space-y-8">
              {COVER_LETTER_EXAMPLES.map(({ role, opening, body, close }) => (
                <div key={role} className="rounded-2xl border border-slate-200 p-6">
                  <p className="font-display text-lg font-bold text-emerald-700">{role}</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-700">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Opening paragraph
                      </p>
                      <p className="mt-1 leading-relaxed">{opening}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key achievement paragraph
                      </p>
                      <p className="mt-1 leading-relaxed">{body}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Closing
                      </p>
                      <p className="mt-1 leading-relaxed">{close}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mt-14" id="common-mistakes">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Common cover letter mistakes to avoid
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  mistake: "Summarizing your resume",
                  fix: "Your cover letter should tell the story behind one key achievement, not repeat what is already on the resume.",
                },
                {
                  mistake: "Using the same letter for every job",
                  fix: "Change at minimum the opening line, one employer-specific reference, and 2–3 keywords to match each posting.",
                },
                {
                  mistake: "Starting with 'I am writing to apply'",
                  fix: "Lead with the role name and your strongest credential in the same sentence to hook the reader immediately.",
                },
                {
                  mistake: "No metrics or proof",
                  fix: "At least one quantified result (revenue, time saved, team size, growth %) significantly increases letter quality.",
                },
                {
                  mistake: "Decorative formatting",
                  fix: "Plain text only. Headers, colored lines, and tables can prevent ATS from reading your letter content.",
                },
                {
                  mistake: "Too long",
                  fix: "400 words is the upper limit. Cut anything that does not directly support your candidacy for this specific role.",
                },
              ].map(({ mistake, fix }) => (
                <div
                  key={mistake}
                  className="rounded-2xl border border-red-100 bg-red-50/60 p-4"
                >
                  <p className="text-sm font-semibold text-red-700">❌ {mistake}</p>
                  <p className="mt-1.5 text-sm text-slate-700">
                    <strong>Fix:</strong> {fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Keyword checklist */}
          <section className="prose-guide mt-14" id="keyword-checklist">
            <h2>Cover letter keyword checklist</h2>
            <p>
              If your employer&apos;s ATS indexes cover letters, keyword overlap improves your
              overall match signal. Before submitting, confirm:
            </p>
            <ul>
              <li>The exact job title from the posting appears in your opening paragraph</li>
              <li>
                At least 3 hard skills or tools from the requirements appear naturally in your body
                paragraphs
              </li>
              <li>
                The company name is spelled correctly (mismatch is a common copy-paste error that
                reads as careless)
              </li>
              <li>No tables, text boxes, or designed headers</li>
              <li>
                The file format is plain .docx or PDF — check the application portal instructions
              </li>
            </ul>
          </section>

          {/* Resume link */}
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-center">
            <p className="font-display text-lg font-bold text-slate-900">
              Make sure your resume passes ATS first
            </p>
            <p className="mt-2 text-sm text-slate-600">
              A strong cover letter cannot save a resume that fails ATS parsing or keyword matching.
              Check both before every application.
            </p>
            <Link
              href={RESUME_CHECKER_PATH}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Run free ATS resume check →
            </Link>
          </div>

          {/* FAQ */}
          <section className="mt-16 border-t border-slate-200 pt-14" id="faq">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
            <div className="mt-10 space-y-10">
              {coverLetterGeneratorFaqItems.map((item) => (
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
