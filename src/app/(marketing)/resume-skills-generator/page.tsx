import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { resumeSkillsGeneratorFaqItems } from "@/lib/seo/resume-skills-generator-faq";
import { buildCtrMetadata, CTR_RESUME_SKILLS_GENERATOR } from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/resume-skills-generator";

export const metadata = buildCtrMetadata(CTR_RESUME_SKILLS_GENERATOR, {
  canonical: PATH,
  keywords: [
    "resume skills generator",
    "resume skills list",
    "ATS skills section",
    "what skills to put on resume",
    "resume skills examples",
  ],
});

const SKILLS_BY_ROLE = [
  {
    role: "Software Engineer",
    technical: ["JavaScript", "TypeScript", "Python", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "GitHub Actions", "REST APIs"],
    tools: ["Git", "Jira", "VS Code", "Datadog", "Figma (basic)"],
    soft: ["Cross-functional collaboration", "Code review", "Technical documentation"],
  },
  {
    role: "Data Analyst",
    technical: ["SQL", "Python", "R", "Tableau", "Power BI", "Excel", "Looker", "Snowflake", "dbt", "BigQuery"],
    tools: ["Google Analytics", "Amplitude", "Metabase", "Notion", "Confluence"],
    soft: ["Data storytelling", "Stakeholder reporting", "Problem framing"],
  },
  {
    role: "Marketing Manager",
    technical: ["SEO", "SEM", "Google Ads", "Meta Ads", "HubSpot", "Salesforce", "Mailchimp", "UTM tracking", "A/B testing", "Conversion optimization"],
    tools: ["Google Analytics", "Semrush", "Canva", "Hootsuite", "Asana"],
    soft: ["Campaign planning", "Cross-channel messaging", "Brand voice"],
  },
  {
    role: "Product Manager",
    technical: ["Product roadmapping", "User story writing", "A/B testing", "Agile/Scrum", "OKR frameworks", "Competitive analysis", "Wireframing"],
    tools: ["Jira", "Notion", "Figma", "Mixpanel", "Amplitude", "ProductBoard"],
    soft: ["Stakeholder alignment", "Prioritization", "Cross-functional leadership"],
  },
  {
    role: "Project Manager",
    technical: ["Project scheduling", "Risk management", "Agile", "Waterfall", "PMP", "Budget tracking", "Gantt charts", "RAID logs"],
    tools: ["MS Project", "Asana", "Jira", "Smartsheet", "Procore", "Notion"],
    soft: ["Stakeholder communication", "Scope management", "Team facilitation"],
  },
  {
    role: "HR Manager",
    technical: ["Talent acquisition", "HRIS management", "Performance management", "Compensation planning", "Employee relations", "Employment law basics", "Onboarding design"],
    tools: ["Workday", "BambooHR", "Greenhouse", "Lever", "LinkedIn Recruiter"],
    soft: ["Conflict resolution", "Empathy-driven leadership", "Change management"],
  },
];

const FORMAT_OPTIONS = [
  {
    format: "Plain comma list (best for ATS)",
    example: "Python, SQL, Tableau, Power BI, AWS, Agile, Stakeholder Reporting",
    atsRating: "Excellent",
    notes: "Simplest and most reliably parsed. Use for the main Skills section.",
  },
  {
    format: "Grouped by category",
    example: "Technical: Python, SQL, AWS | Tools: Tableau, Power BI | Soft: Data storytelling",
    atsRating: "Good",
    notes: "Good for roles requiring diverse skill types. Keep categories short.",
  },
  {
    format: "Skill bars / icons",
    example: "Python ████░ 80%",
    atsRating: "Poor",
    notes: "Stripped by ATS parsers. The text value is not extracted. Avoid entirely.",
  },
  {
    format: "Proficiency labels",
    example: "Python (Advanced), SQL (Advanced), Power BI (Intermediate)",
    atsRating: "Good",
    notes: "Acceptable if the role values transparency about level. Keep the keyword first.",
  },
];

const COMMON_MISTAKES = [
  {
    mistake: "Listing skills you cannot explain in an interview",
    fix: "Only list skills you could answer a 5-minute technical question on.",
  },
  {
    mistake: "Including 'Microsoft Office' or 'Google Docs' for mid-level roles",
    fix: "Omit baseline tools unless the job explicitly requires them.",
  },
  {
    mistake: "Using vague soft skills like 'hard worker' or 'team player'",
    fix: "Prove soft skills in experience bullets instead. Only list 2–3 role-specific ones.",
  },
  {
    mistake: "Listing 25+ skills to stuff keywords",
    fix: "Limit to 8–15. ATS systems can flag keyword density abuse; recruiters notice padding.",
  },
  {
    mistake: "Skill bars or progress charts",
    fix: "Use plain text. ATS strips graphical elements.",
  },
  {
    mistake: "Not mirroring the job description terminology",
    fix: "Use 'Stakeholder Management' if the posting says it — not 'Working with stakeholders'.",
  },
];

export default function ResumeSkillsGeneratorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resume Skills Generator", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={resumeSkillsGeneratorFaqItems} />

      <main className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
        <GuideArticleMeta path={PATH} />

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {CTR_RESUME_SKILLS_GENERATOR.h1}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          The skills section is often the most under-optimized part of a resume. ATS systems search it first for keyword matches — yet most candidates either include too few skills, list the wrong ones, or format them in a way the parser cannot read. This guide shows you exactly what to include, by role.
        </p>

        <BlogResumeCta />

        {/* Skills by role */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          ATS-ready skills lists by role
        </h2>
        <p className="mt-3 text-slate-600">
          Copy the relevant skills, then cross-check against the job posting to identify gaps. Only include skills you can demonstrate in an interview.
        </p>
        <div className="mt-6 space-y-6">
          {SKILLS_BY_ROLE.map((r) => (
            <div key={r.role} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="font-display text-lg font-bold text-slate-900">{r.role}</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-slate-500 mb-1.5">Technical Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {r.technical.map((s) => (
                      <span key={s} className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-900">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-500 mb-1.5">Tools &amp; Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {r.tools.map((s) => (
                      <span key={s} className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-900">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-500 mb-1.5">Soft Skills (use sparingly)</p>
                  <div className="flex flex-wrap gap-2">
                    {r.soft.map((s) => (
                      <span key={s} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Format comparison */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Skills section format — which is ATS-safe?
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">Format</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700">ATS Rating</th>
                <th className="hidden px-4 py-3 text-left font-semibold text-slate-700 sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {FORMAT_OPTIONS.map((f) => (
                <tr key={f.format}>
                  <td className="px-4 py-3 font-medium text-slate-800">{f.format}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      f.atsRating === "Excellent" ? "bg-emerald-100 text-emerald-800"
                      : f.atsRating === "Good" ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-700"
                    }`}>
                      {f.atsRating}
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 text-slate-600 sm:table-cell">{f.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Common mistakes */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          6 skills section mistakes — and the fix
        </h2>
        <div className="mt-6 space-y-4">
          {COMMON_MISTAKES.map((m) => (
            <div key={m.mistake} className="rounded-xl border border-slate-200 bg-white px-5 py-4">
              <p className="text-sm font-semibold text-rose-600">
                ✗ {m.mistake}
              </p>
              <p className="mt-2 text-sm text-slate-700">
                <span className="font-semibold text-emerald-700">Fix: </span>
                {m.fix}
              </p>
            </div>
          ))}
        </div>

        {/* Checklist */}
        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Skills section checklist
        </h2>
        <ul className="mt-5 space-y-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6">
          {[
            "8–15 skills listed — not padded, not sparse",
            "Plain text comma list or grouped categories — no icons or bars",
            "Technical skills mirror exact terminology from the job description",
            "Each technical skill is something you can explain in an interview",
            "Soft skills kept to 2–3 role-relevant examples",
            "No generic filler: 'Microsoft Office', 'team player', 'hard worker'",
            "Skills proven in experience bullets (list first, prove later)",
            "Verified in ATS checker — keywords match the target posting",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-[11px] font-bold text-emerald-800">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="font-display text-xl font-bold text-slate-900">
            Find your skill gaps vs any job posting
          </p>
          <p className="mt-2 text-slate-600">
            Upload your resume and paste the job description. Our ATS checker shows exactly which skills are missing and which you already have.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-5 inline-flex px-8 text-base">
            Check my skills gap free
          </Link>
          <p className="mt-2 text-sm text-slate-500">No signup · PDF or paste text · Instant results</p>
        </div>

        <h2 className="mt-14 font-display text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <AccordionFaq items={resumeSkillsGeneratorFaqItems} headingId="skills-faq" />

        <RelatedResources path={PATH} heading="Related resume tools" />
      </main>
    </>
  );
}
