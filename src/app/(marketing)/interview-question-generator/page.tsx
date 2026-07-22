import Link from "next/link";
import { BlogResumeCta } from "@/components/blog/BlogExtras";
import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { AdPlaceholder } from "@/components/monetization/AdPlaceholder";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { RelatedResources } from "@/components/seo/RelatedResources";
import { ToolPageSeoEnrichment } from "@/components/seo/ToolPageSeoEnrichment";
import { PageFaqJsonLd } from "@/components/seo/PageFaqJsonLd";
import { ResourceGuideJsonLd } from "@/components/seo/ResourceGuideJsonLd";
import { GuideArticleMeta } from "@/components/seo/GuideArticleMeta";
import { interviewQuestionGeneratorFaqItems } from "@/lib/seo/interview-question-generator-faq";
import {
  buildCtrMetadata,
  CTR_INTERVIEW_QUESTION_GENERATOR,
} from "@/lib/seo/ctr-metadata";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PATH = "/interview-question-generator";

export const metadata = buildCtrMetadata(CTR_INTERVIEW_QUESTION_GENERATOR, {
  canonical: PATH,
  keywords: [
    "interview question generator",
    "interview questions and answers",
    "behavioral interview questions",
    "STAR method interview",
    "job interview preparation",
  ],
});

type QuestionCategory = {
  category: string;
  description: string;
  questions: { q: string; hint: string }[];
};

const QUESTION_BANK: QuestionCategory[] = [
  {
    category: "Universal — Every Interview",
    description:
      "These questions appear in nearly every interview regardless of role, level, or industry. Prepare a polished answer for each.",
    questions: [
      {
        q: "Tell me about yourself.",
        hint: "Structure: current role → relevant background → why this opportunity. Keep it under 2 minutes. End with why you are interested in this specific role.",
      },
      {
        q: "Why do you want to work here?",
        hint: "Reference something specific: a product, a team's reputation, the company's mission, or a recent initiative. Generic answers score poorly.",
      },
      {
        q: "What is your greatest strength?",
        hint: "Pick one concrete strength directly relevant to the role. Back it with a brief example or outcome.",
      },
      {
        q: "What is your greatest weakness?",
        hint: "Choose a real developmental area. Explain what you have actively done to improve it. Show progress, not perfection.",
      },
      {
        q: "Where do you see yourself in 3–5 years?",
        hint: "Align your ambition with a realistic growth path at this company. Avoid roles that imply you will leave quickly.",
      },
      {
        q: "Why are you leaving your current position?",
        hint: "Be honest and positive. Focus on growth, new challenges, or better alignment — never badmouth your current employer.",
      },
      {
        q: "What questions do you have for us?",
        hint: "Prepare 3–5 genuine questions about the team, role scope, 90-day expectations, and biggest current challenges.",
      },
    ],
  },
  {
    category: "Behavioral (STAR Format)",
    description:
      "Behavioral questions require specific examples from your past. Use STAR: Situation → Task → Action → Result.",
    questions: [
      {
        q: "Tell me about a time you had to handle a conflict with a colleague.",
        hint: "Focus on resolution, not blame. Show listening, communication, and a constructive outcome.",
      },
      {
        q: "Describe a situation where you had to meet a tight deadline.",
        hint: "Quantify the timeline. Explain your prioritization and what you did differently under pressure.",
      },
      {
        q: "Give an example of a time you failed and what you learned.",
        hint: "Be genuinely reflective. Interviewers want to see self-awareness and growth — not polished spin.",
      },
      {
        q: "Tell me about a time you influenced someone without authority.",
        hint: "Show persuasion through data, relationship-building, or finding shared goals — not coercion or hierarchy.",
      },
      {
        q: "Describe a project where you had to collaborate across teams.",
        hint: "Highlight communication, alignment, and how you managed differing priorities.",
      },
      {
        q: "Tell me about a time you took initiative on something outside your role.",
        hint: "Demonstrate ownership and bias for action. Quantify the impact if possible.",
      },
    ],
  },
  {
    category: "Software Engineering",
    description:
      "Technical and behavioral questions common in software engineering interviews.",
    questions: [
      {
        q: "How do you approach debugging a production issue you have never seen before?",
        hint: "Walk through your systematic process: reproduce, isolate, check logs, form hypotheses, test incrementally.",
      },
      {
        q: "Describe the most complex system you have designed or maintained.",
        hint: "Cover scale, tradeoffs, what you would do differently, and how you handled failure modes.",
      },
      {
        q: "How do you ensure code quality in a fast-moving team?",
        hint: "Mention code review practices, testing philosophy, documentation habits, and how you balance speed vs rigor.",
      },
      {
        q: "Tell me about a technical decision you disagreed with and how you handled it.",
        hint: "Show professional disagreement: raise concerns with data, then commit to the decision once made.",
      },
      {
        q: "How do you approach working with legacy code?",
        hint: "Cover understanding before changing, test coverage before refactoring, and incremental vs big-bang rewrites.",
      },
    ],
  },
  {
    category: "Marketing & Growth",
    description:
      "Questions for marketing managers, growth roles, content, and digital marketing positions.",
    questions: [
      {
        q: "Walk me through a campaign you ran from strategy to execution.",
        hint: "Cover: goal setting, audience targeting, channel selection, creative brief, budget, execution, and results.",
      },
      {
        q: "How do you prioritize marketing channels when budget is limited?",
        hint: "Mention attribution modeling, CAC vs LTV analysis, and testing methodology before scaling spend.",
      },
      {
        q: "Tell me about a time a campaign underperformed and what you did.",
        hint: "Show diagnosis (data analysis), pivot decision, and what you learned for future campaigns.",
      },
      {
        q: "How do you align marketing output with sales pipeline needs?",
        hint: "Discuss SLAs between marketing and sales, MQL definition, feedback loops, and shared metrics.",
      },
    ],
  },
  {
    category: "Data & Analytics",
    description:
      "Questions for data analysts, data scientists, and BI engineers.",
    questions: [
      {
        q: "How do you ensure your analysis is reliable before presenting it?",
        hint: "Cover: data source validation, outlier handling, reproducibility, and peer review / sanity checks.",
      },
      {
        q: "Tell me about a time your analysis changed a business decision.",
        hint: "Quantify the decision and its outcome. Show how you communicated uncertainty alongside findings.",
      },
      {
        q: "How do you explain complex findings to non-technical stakeholders?",
        hint: "Lead with the business implication, not the methodology. Use visuals. Acknowledge limitations clearly.",
      },
      {
        q: "Describe your approach to A/B testing.",
        hint: "Cover: hypothesis formulation, sample size calculation, significance thresholds, and avoiding peeking.",
      },
    ],
  },
  {
    category: "Management & Leadership",
    description:
      "Questions for team leads, managers, and senior IC roles with cross-functional influence.",
    questions: [
      {
        q: "How do you set goals and performance expectations with your team?",
        hint: "Mention OKRs or similar frameworks, regular check-ins, clarity of definition of done, and how you handle underperformance.",
      },
      {
        q: "Tell me about a time you had to give difficult feedback.",
        hint: "Be specific about the situation. Show the feedback was timely, direct, and tied to observable behavior — not personality.",
      },
      {
        q: "How do you build a culture of psychological safety?",
        hint: "Give concrete examples: how you respond to mistakes, how you solicit dissent, how you credit contributions.",
      },
      {
        q: "Describe how you handle competing priorities across multiple projects.",
        hint: "Show a framework: stakeholder alignment, explicit tradeoff communication, regular priority re-evaluation.",
      },
    ],
  },
];

export default function InterviewQuestionGeneratorPage() {
  return (
    <>
      <ResourceGuideJsonLd
        path={PATH}
        title={CTR_INTERVIEW_QUESTION_GENERATOR.title}
        description={CTR_INTERVIEW_QUESTION_GENERATOR.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Interview Question Generator", path: PATH },
        ]}
      />
      <PageFaqJsonLd items={interviewQuestionGeneratorFaqItems} />

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
              <li className="text-slate-700">Interview Question Generator</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mt-8">
            <p className="section-eyebrow">Free guide · ResumeIQ</p>
            <h1 className="mt-4 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              {CTR_INTERVIEW_QUESTION_GENERATOR.h1}
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              100+ interview questions organized by category, seniority, and role type — each with
              answering guidance. Use this alongside the{" "}
              <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
                ATS Resume Checker
              </Link>{" "}
              to ensure your resume supports every claim you make in the interview room.
            </p>
            <GuideArticleMeta path={PATH} />
          </header>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={RESUME_CHECKER_PATH}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Check my resume first →
            </Link>
            <Link
              href="/resume-bullet-generator"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-400"
            >
              Strengthen resume bullets
            </Link>
          </div>

          <AdPlaceholder label="Advertisement · guide" className="mt-10" />

          {/* Why resume matters for interview */}
          <section className="prose-guide mt-14" id="resume-and-interview">
            <h2>Why your resume directly affects your interview</h2>
            <p>
              Every claim on your resume is an interview data point. When a recruiter or hiring
              manager reads your resume before the interview, they build a list of follow-up
              questions — often mentally circling achievements, dates, or role changes that need
              context.
            </p>
            <p>Key implications:</p>
            <ul>
              <li>
                <strong>Every bullet with a metric</strong> will likely be probed: &ldquo;How did you
                measure that 40% improvement?&rdquo; Know the full story behind every number.
              </li>
              <li>
                <strong>Career gaps or short tenures</strong> will be asked about. Prepare a clear,
                honest one-sentence explanation for each.
              </li>
              <li>
                <strong>Skills listed but not evidenced</strong> in experience are risk points.
                Interviewers may test claimed skills directly.
              </li>
              <li>
                <strong>A higher ATS score = higher interview probability.</strong> Before
                preparing answers, make sure your resume passes the ATS filter in the first place.
              </li>
            </ul>
          </section>

          {/* STAR method */}
          <section className="mt-14" id="star-method">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              The STAR method — how to structure any behavioral answer
            </h2>
            <p className="mt-2 text-slate-600">
              Most behavioral interview questions expect a structured narrative. STAR gives you a
              framework that is clear, complete, and concise.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  letter: "S",
                  label: "Situation",
                  desc: "Set the scene briefly. 1–2 sentences. Give enough context for the interviewer to understand what you were dealing with.",
                  example: '"We were 3 weeks from a major product launch and our lead engineer gave notice."',
                },
                {
                  letter: "T",
                  label: "Task",
                  desc: "Clarify your specific responsibility in that situation — not what the team did, but what you were accountable for.",
                  example: '"I was responsible for finding and onboarding a contractor within 5 days to cover critical features."',
                },
                {
                  letter: "A",
                  label: "Action",
                  desc: "Describe the specific steps you took. Use 'I' not 'we'. This is the core of your answer — be specific.",
                  example: '"I reached out to 6 contractors from my network, screened 3 same-day, and hired one who had the exact TypeScript background needed."',
                },
                {
                  letter: "R",
                  label: "Result",
                  desc: "Quantify the outcome where possible. What changed, improved, or was saved? What did you learn?",
                  example: '"We launched on schedule. The feature shipped with zero critical bugs and received a 4.7 rating in beta testing."',
                },
              ].map(({ letter, label, desc, example }) => (
                <div key={letter} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 font-display text-lg font-bold text-emerald-700">
                      {letter}
                    </span>
                    <span className="font-semibold text-slate-900">{label}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">{desc}</p>
                  <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs italic text-slate-500">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Question bank */}
          <section className="mt-14" id="question-bank">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              100+ interview questions by category
            </h2>
            <p className="mt-2 text-slate-600">
              Each question includes an answering hint. Use these to structure your STAR stories
              before the interview — do not memorize scripts.
            </p>
            <div className="mt-8 space-y-10">
              {QUESTION_BANK.map(({ category, description, questions }) => (
                <div key={category} className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="font-display text-lg font-bold text-slate-800">{category}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{description}</p>
                  <div className="mt-5 space-y-4">
                    {questions.map(({ q, hint }, i) => (
                      <div
                        key={q}
                        className="rounded-xl border border-slate-100 bg-slate-50/70 p-4"
                      >
                        <p className="text-sm font-semibold text-slate-800">
                          <span className="mr-2 text-emerald-600">Q{i + 1}.</span>
                          {q}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-500">
                          <span className="font-semibold text-slate-600">How to answer: </span>
                          {hint}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section className="mt-14" id="common-mistakes">
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Common interview preparation mistakes
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  mistake: "Memorizing scripted answers",
                  fix: "Prepare bullet points and key outcomes, not word-for-word scripts. Scripted answers sound rehearsed and lose energy.",
                },
                {
                  mistake: "Not practicing out loud",
                  fix: "Reading answers is not the same as speaking them. Record yourself or practice with someone. Timing matters.",
                },
                {
                  mistake: "Vague answers without metrics",
                  fix: "Interviewers need to calibrate your scope and impact. 'I led a team' is weaker than 'I led a 6-person team that shipped 3 features in Q3.'",
                },
                {
                  mistake: "Skipping company research",
                  fix: "Read the company's product page, recent news, Glassdoor reviews, and the job description in detail. Generic enthusiasm is obvious.",
                },
                {
                  mistake: "Not preparing questions to ask",
                  fix: "Candidates who ask zero questions consistently score lower. Prepare 4–5 genuine questions.",
                },
                {
                  mistake: "Resume claims you cannot defend",
                  fix: "Every metric on your resume must be something you can explain fully. Vague numbers under questioning signal inflation.",
                },
              ].map(({ mistake, fix }) => (
                <div key={mistake} className="rounded-2xl border border-red-100 bg-red-50/60 p-4">
                  <p className="text-sm font-semibold text-red-700">❌ {mistake}</p>
                  <p className="mt-1.5 text-sm text-slate-700">
                    <strong>Fix:</strong> {fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 48-hour prep plan */}
          <section className="prose-guide mt-14" id="prep-plan">
            <h2>48-hour interview preparation plan</h2>
            <p>
              This schedule works for most interview types. Adjust depth based on seniority and
              technical requirements.
            </p>
            <p>
              <strong>48 hours before:</strong> Research the company (product, recent news, mission,
              known challenges). Re-read the job description and identify the 5 most important
              requirements. Prepare 5–6 STAR stories that demonstrate the top competencies.
            </p>
            <p>
              <strong>24 hours before:</strong> Practice your answers aloud for all universal
              questions. Record yourself for the &ldquo;Tell me about yourself&rdquo; question and review for
              length and clarity. Prepare 4&ndash;5 questions to ask the interviewer.
            </p>
            <p>
              <strong>Morning of:</strong> Re-read your resume. Review the company&apos;s latest news or
              blog posts. Confirm logistics (location, video link, interviewer name). Avoid cramming
              new content — trust your preparation.
            </p>

            <h2>Make sure your resume supports your interview</h2>
            <p>
              A strong interview cannot overcome a resume that did not pass ATS screening. Before
              your interview prep, confirm your resume has a high ATS score, accurate keyword
              coverage, and no parse errors — especially if you applied online.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-center">
            <p className="font-display text-lg font-bold text-slate-900">
              Confirm your resume got you the interview for the right reasons
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Run a free ATS check to verify keyword match, parse quality, and formatting before
              your interview — so you know exactly what the recruiter saw.
            </p>
            <Link
              href={RESUME_CHECKER_PATH}
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Run free ATS resume check →
            </Link>
          </div>

          <AccordionFaq
            items={interviewQuestionGeneratorFaqItems}
            heading="Frequently asked questions"
            headingId="faq"
          />

          <RelatedResources path={PATH} excludeHref={PATH} />
          <BlogResumeCta />
        </div>
      </article>
      <ToolPageSeoEnrichment path={PATH} pageTitle="interview question generator" />
    </>
  );
}
