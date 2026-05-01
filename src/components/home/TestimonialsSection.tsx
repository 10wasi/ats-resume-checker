"use client";

import { IconQuote } from "@/components/ui/Icons";

const testimonials = [
  {
    quote:
      "I'd been applying for 6 weeks with zero callbacks. ResumeIQ flagged three keyword gaps I'd never have caught. Two interviews the next week.",
    name: "Jordan M.",
    role: "Product Manager · Berlin",
  },
  {
    quote:
      "The bullet rewrites are unbelievably specific — it actually quotes my resume back at me and shows what's weak. Way past generic 'add metrics' advice.",
    name: "Samira K.",
    role: "Software Engineer · Remote",
  },
  {
    quote:
      "I run ResumeIQ on every candidate before I refer them. Cleaner files, fewer parsing surprises, faster offers.",
    name: "Chris L.",
    role: "Talent Partner · NYC",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative border-y border-slate-200/70 bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Loved by job seekers</p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Stories from people who stopped guessing
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Early users who used ResumeIQ to fix the parts of their resume
            they couldn&apos;t see.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="card-elevated flex h-full flex-col p-7 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <IconQuote
                className="h-9 w-9 text-[#4ade80] opacity-[0.35]"
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-100 pt-4 text-sm">
                <span className="font-semibold text-slate-900">{t.name}</span>
                <span className="mt-0.5 block text-slate-500">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
