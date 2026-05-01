import type { Metadata } from "next";
import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const metadata: Metadata = {
  title: "Contact ResumeIQ",
  description:
    "Contact ResumeIQ for feedback on the free resume checker, partnerships, or media inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container-prose py-16 sm:py-20">
      <p className="section-eyebrow">Contact</p>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Say hi — we read thoughtful messages.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Bug reports, SEO ideas, university partnerships, or notes on how the
        free ATS checker could be clearer — we are a small team and we actually
        look at this inbox.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <ContactCard
          title="Product feedback & support"
          email="wasihuxxain01@gmail.com"
          description="Bug reports, feature requests, or stories about how you used the resume tool."
        />
        <ContactCard
          title="Partnerships & press"
          email="wasihuxxain01@gmail.com"
          description="Bootcamps, schools, newsletters, and journalists covering job search tools."
        />
      </div>
      <p className="mt-8 text-sm text-slate-600">
        We aim to reply to product feedback within a few business days. Urgent
        billing or legal notices should reference “ResumeIQ” and the page you
        are writing about.
      </p>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-7">
          Improve Your Resume
        </Link>
        <Link
          href="/blog"
          className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-accent-400 hover:text-accent-500"
        >
          Career blog
        </Link>
      </div>
    </div>
  );
}

function ContactCard({
  title,
  email,
  description,
}: {
  title: string;
  email: string;
  description: string;
}) {
  return (
    <div className="card-elevated p-6">
      <h2 className="font-display text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      <a
        href={`mailto:${email}`}
        className="mt-4 inline-block text-sm font-semibold text-[#4ade80] visited:text-[#22c55e] hover:text-[#16a34a]"
      >
        {email}
      </a>
    </div>
  );
}
