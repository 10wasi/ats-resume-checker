"use client";

import { IconQuote } from "@/components/ui/Icons";

const testimonials = [
  {
    quote:
      "I'd been applying for 6 weeks with zero callbacks. ResumeIQ flagged three keyword gaps I'd never have caught. Two interviews the next week.",
    name: "Jordan M.",
    role: "Product Manager",
    location: "Berlin, Germany",
    category: "Job seeker",
  },
  {
    quote:
      "The bullet rewrites are unbelievably specific — it actually quotes my resume back at me and shows what's weak. Way past generic 'add metrics' advice.",
    name: "Samira K.",
    role: "Software Engineer",
    location: "Remote",
    category: "Job seeker",
  },
  {
    quote:
      "I run ResumeIQ on every candidate before I refer them. Cleaner files, fewer parsing surprises, faster offers.",
    name: "Chris L.",
    role: "Talent Partner",
    location: "New York, USA",
    category: "Recruiter",
  },
  {
    quote:
      "My score went from 51 to 88 after fixing the two-column layout and adding the exact tools from the job description. Got a call within 3 days of resubmitting.",
    name: "Priya N.",
    role: "Data Analyst",
    location: "Toronto, Canada",
    category: "Job seeker",
  },
  {
    quote:
      "I coach 20+ clients per month. ResumeIQ is the first tool I share because it shows them WHY the resume fails — not just that it does. That context is everything.",
    name: "Deb R.",
    role: "Certified Career Coach",
    location: "Chicago, USA",
    category: "Career coach",
  },
  {
    quote:
      "We get 400+ applicants per role. Candidates who clearly understand ATS formatting stand out immediately — their resumes are just cleaner to read.",
    name: "Amir F.",
    role: "HR Manager",
    location: "Dubai, UAE",
    category: "HR professional",
  },
  {
    quote:
      "Switched careers from teaching to UX. My resume was buried in skills buzzwords with zero metrics. ResumeIQ helped me restructure it around actual outcomes. Hired in 6 weeks.",
    name: "Mia T.",
    role: "UX Designer (career changer)",
    location: "Melbourne, Australia",
    category: "Career changer",
  },
  {
    quote:
      "I used it before applying to three FAANG companies. It caught that my summary was 6 lines and my top keywords weren't in the experience section — small things that matter enormously.",
    name: "Kwame O.",
    role: "Senior Software Engineer",
    location: "London, UK",
    category: "Job seeker",
  },
  {
    quote:
      "As a marketing director, I thought I knew how to write. My ATS score was 54. Two hours and a file format change later, it was 87. Humbling but extremely useful.",
    name: "Leila S.",
    role: "Marketing Director",
    location: "Paris, France",
    category: "Job seeker",
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="relative border-y border-slate-200/70 bg-white py-20 sm:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Trusted by candidates worldwide</p>
          <h2
            id="testimonials-heading"
            className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Job seekers, recruiters &amp; coaches — same conclusion
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From first-time applicants to HR managers, the feedback is consistent: the specific,
            actionable fixes make the difference.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="card-elevated flex h-full flex-col p-6 animate-fade-in-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <IconQuote
                className="h-8 w-8 text-[#4ade80] opacity-[0.35]"
                aria-hidden
              />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-slate-100 pt-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="block text-sm font-semibold text-slate-900">{t.name}</span>
                    <span className="block text-xs text-slate-600">{t.role}</span>
                    <span className="block text-xs text-slate-400">{t.location}</span>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                    {t.category}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
