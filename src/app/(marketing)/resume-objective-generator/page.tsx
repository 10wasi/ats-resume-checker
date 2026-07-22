import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ToolPageSeoEnrichment } from "@/components/seo/ToolPageSeoEnrichment";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { resumeObjectiveGeneratorFaqItems } from "@/lib/seo/resume-objective-generator-faq";
import { buildCtrMetadata, CTR_RESUME_OBJECTIVE_GENERATOR } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/resume-objective-generator";

export const metadata = buildCtrMetadata(CTR_RESUME_OBJECTIVE_GENERATOR, {
  canonical: PATH,
  keywords: [
    "resume objective generator",
    "resume objective examples",
    "resume objective statement",
    "entry level resume objective",
    "career change resume objective",
  ],
});

const OBJECTIVE_FORMULA = {
  parts: [
    { label: "Your background", example: "Recent Computer Science graduate" },
    { label: "Relevant skill or credential", example: "with Python and SQL skills" },
    { label: "Target role", example: "seeking a junior data analyst role" },
    { label: "What you will contribute", example: "where I can improve reporting efficiency" },
  ],
  result:
    "Recent Computer Science graduate with Python and SQL skills seeking a junior data analyst role where I can improve reporting efficiency for data-driven teams.",
};

const EXAMPLES_BY_SITUATION = [
  {
    situation: "Entry-Level / New Graduate",
    examples: [
      {
        role: "Software Engineer",
        text: "Computer Science graduate with Java and React experience seeking a junior software engineer role to build scalable web applications and contribute to agile development teams.",
      },
      {
        role: "Marketing Coordinator",
        text: "Marketing graduate with HubSpot and Google Analytics certification seeking a coordinator role to support digital campaign performance and content strategy.",
      },
      {
        role: "Data Analyst",
        text: "Recent Statistics graduate with Python, SQL, and Tableau skills seeking an entry-level data analyst position to support business reporting and data-driven decisions.",
      },
    ],
  },
  {
    situation: "Career Changer",
    examples: [
      {
        role: "From Teaching to UX Design",
        text: "Former educator with 4 years of curriculum design and a Google UX Design certificate transitioning into a junior UX designer role to apply user-centered thinking in product development.",
      },
      {
        role: "From Finance to Product Management",
        text: "Financial analyst with 5 years of stakeholder reporting and data modeling experience transitioning to product management to bridge business strategy and technical execution.",
      },
      {
        role: "From Sales to Data Analytics",
        text: "Sales professional with 3 years of CRM and pipeline data analysis experience transitioning to a data analyst role after completing a SQL and Power BI bootcamp.",
      },
    ],
  },
  {
    situation: "Internship",
    examples: [
      {
        role: "Software Engineering Intern",
        text: "Third-year Computer Science student proficient in Python and Git seeking a summer software engineering internship to contribute to real-world backend projects.",
      },
      {
        role: "Marketing Intern",
        text: "Junior studying Marketing with hands-on experience in social media content creation and SEO basics seeking a digital marketing internship to apply skills in a professional environment.",
      },
    ],
  },
  {
    situation: "Returning to Work / Gap Year",
    examples: [
      {
        role: "Project Manager",
        text: "PMP-certified project manager returning after a 2-year career break seeking a mid-level PM role to apply Agile and cross-functional team leadership in a technology environment.",
      },
      {
        role: "Accountant",
        text: "CPA with 6 years of financial reporting experience returning after a family leave period seeking a senior accountant role where I can contribute to close cycle improvement.",
      },
    ],
  },
];

const WEAK_VS_STRONG = [
  {
    weak: "Seeking a challenging position where I can grow and utilize my skills in a dynamic company.",
    strong: "Marketing graduate with Google Ads and HubSpot skills seeking a digital marketing coordinator role to drive campaign performance.",
    whyWeak: "Vague, self-focused, no skill or role named. Could apply to any job at any company.",
  },
  {
    weak: "Hardworking and motivated team player looking for a great opportunity to contribute.",
    strong: "Recent Accounting graduate seeking a junior accountant role to apply QuickBooks and Excel skills in a mid-size professional services firm.",
    whyWeak: "Clichés with zero specificity. 'Team player' and 'motivated' add no ATS or recruiter value.",
  },
  {
    weak: "To obtain a full-time position that allows me to develop my career.",
    strong: "Computer Science student with Python and React experience seeking a software engineering internship to build production web features.",
    whyWeak: "Generic filler. Says nothing about what you offer the employer.",
  },
];

export default function ResumeObjectiveGeneratorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Objective Generator", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeObjectiveGeneratorFaqItems} />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <GuideArticleMeta path={PATH} />

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {CTR_RESUME_OBJECTIVE_GENERATOR.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          A resume objective belongs at the top of your resume when you lack the work history for a full summary. This page gives you a proven formula, 40+ examples by situation, and the exact mistakes that make objectives look generic to recruiters.
        </p>

        <BlogResumeCta />

        {/* Objective vs Summary */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Objective vs summary — which one do you need?
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-emerald-700">Use an Objective if you are:</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "New graduate with under 1 year of experience",
                "Career changer moving into a new field",
                "Student applying for an internship",
                "Returning to work after a gap",
                "Applying for your first professional role",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 text-emerald-500 shrink-0">✓</span>{i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-blue-700">Use a Summary if you are:</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {[
                "2+ years of relevant professional experience",
                "Mid-career professional with proven results",
                "Applying for a role in the same industry",
                "Have quantifiable achievements to lead with",
                "Senior or specialist candidates",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-0.5 text-blue-500 shrink-0">✓</span>{i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Formula */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          The resume objective formula
        </h2>
        <p className="mt-3 text-slate-600">
          Every strong objective follows this 4-part structure. Fill in each part with your own information:
        </p>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
          <div className="divide-y divide-slate-100">
            {OBJECTIVE_FORMULA.parts.map((p, i) => (
              <div key={p.label} className="flex items-start gap-4 px-5 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-sm text-emerald-800">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{p.label}</p>
                  <p className="mt-0.5 text-sm text-slate-500 italic">{p.example}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-emerald-200 bg-emerald-50/60 px-5 py-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 mb-2">Result</p>
            <p className="text-sm leading-relaxed text-slate-700 italic">
              &ldquo;{OBJECTIVE_FORMULA.result}&rdquo;
            </p>
          </div>
        </div>

        {/* Weak vs Strong */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Weak vs strong — 3 rewrites explained
        </h2>
        <div className="mt-6 space-y-5">
          {WEAK_VS_STRONG.map((item, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="rounded-lg bg-red-50 px-3 py-2.5 text-sm italic text-slate-700 ring-1 ring-red-100">
                <span className="font-semibold not-italic text-red-600">Weak: </span>
                &ldquo;{item.weak}&rdquo;
              </p>
              <p className="mt-1 px-3 text-xs text-slate-500">
                <span className="font-semibold">Why it fails: </span>{item.whyWeak}
              </p>
              <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2.5 text-sm italic text-slate-700 ring-1 ring-emerald-100">
                <span className="font-semibold not-italic text-emerald-700">Strong: </span>
                &ldquo;{item.strong}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Examples by situation */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          40+ resume objective examples by situation
        </h2>
        <div className="mt-6 space-y-8">
          {EXAMPLES_BY_SITUATION.map((group) => (
            <div key={group.situation}>
              <h3 className="font-display text-lg font-bold text-slate-900">{group.situation}</h3>
              <div className="mt-4 space-y-3">
                {group.examples.map((ex) => (
                  <div key={ex.role} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">
                      {ex.role}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700 italic">
                      &ldquo;{ex.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick checklist */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Resume objective checklist
        </h2>
        <ul className="mt-5 space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          {[
            "Names the specific role or field you are applying to",
            "Mentions at least one concrete skill, tool, or credential",
            "Explains what you will contribute (not just what you want)",
            "Mirrors exact terminology from the job description",
            "Under 50 words — fits in 1–2 sentences",
            "No clichés: no 'team player', 'hard worker', 'dynamic'",
            "No first-person 'I' — starts with your background descriptor",
            "Tailored for each application (role name changed at minimum)",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-[11px] font-bold text-emerald-800">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="font-display text-xl font-bold text-slate-900">
            Check if your objective passes ATS
          </p>
          <p className="mt-2 text-slate-600">
            Paste your resume and get an ATS score, keyword gaps, and feedback on every section including your objective.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-5 inline-flex px-8 text-base">
            Check my resume free
          </Link>
          <p className="mt-2 text-sm text-slate-500">No signup · PDF or paste text · Instant results</p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <AccordionFaq items={resumeObjectiveGeneratorFaqItems} headingId="objective-faq" />

        <RelatedResources path={PATH} heading="Related resume tools" />
      </main>
      <ToolPageSeoEnrichment path={PATH} pageTitle="resume objective generator" />
    </>
  );
}
