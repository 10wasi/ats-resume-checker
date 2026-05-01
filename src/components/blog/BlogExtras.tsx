import Link from "next/link";
import type { ReactNode } from "react";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function InlineContent({ text }: { text: string }) {
  const segments = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {segments.map((seg, i) => {
        const linkMatch = /^\[([^\]]+)\]\(([^)]*)\)$/.exec(seg);
        if (linkMatch) {
          const href = (linkMatch[2] ?? "").trim();
          if (!href) {
            return <span key={i}>{linkMatch[1]}</span>;
          }
          return (
            <Link
              key={i}
              href={href}
              className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 transition visited:text-[#22c55e] hover:text-[#16a34a]"
            >
              {linkMatch[1]}
            </Link>
          );
        }
        const boldParts = seg.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={i}>
            {boldParts.map((bp, j) =>
              bp.startsWith("**") && bp.endsWith("**") ? (
                <strong key={j} className="font-semibold text-slate-900">
                  {bp.slice(2, -2)}
                </strong>
              ) : (
                <span key={j}>{bp}</span>
              )
            )}
          </span>
        );
      })}
    </>
  );
}

export function BlogResumeCta() {
  return (
    <aside className="not-prose mt-14 overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-emerald-50 p-8 text-center shadow-soft">
      <p className="section-eyebrow mx-auto">Try it now</p>
      <h2 className="mt-4 font-display text-xl font-bold text-slate-900 sm:text-2xl">
        Improve your resume with the free checker
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        Upload PDF or DOCX or paste text, optionally add a job post, and get an
        ATS-style score with strengths, gaps, and fixes.
      </p>
      <Link
        href={RESUME_CHECKER_PATH}
        className="btn-gradient mt-6 inline-flex px-7 text-sm"
      >
        Improve Your Resume
      </Link>
    </aside>
  );
}

const coverStyles: Record<string, string> = {
  sky: "from-teal-400 via-brand-400 to-emerald-500",
  indigo: "from-brand-400 via-emerald-500 to-teal-600",
  violet: "from-emerald-300 via-brand-400 to-teal-500",
  emerald: "from-lime-300 via-brand-500 to-emerald-600",
  amber: "from-brand-400 via-teal-500 to-emerald-700",
};

export function BlogCoverPlaceholder({
  variant = "indigo",
  title,
  eyebrow = "ResumeIQ Insights",
}: {
  variant?: keyof typeof coverStyles;
  title: string;
  eyebrow?: string;
}) {
  const grad = coverStyles[variant] ?? coverStyles.indigo;
  return (
    <div
      className={`relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-gradient-to-br shadow-soft-lg ring-1 ring-slate-200/80 ${grad}`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/85">
          {eyebrow}
        </p>
        <p className="mt-2 line-clamp-2 font-display text-lg font-bold leading-snug text-white sm:text-2xl">
          {title}
        </p>
      </div>
    </div>
  );
}

/**
 * Lightweight markdown-ish renderer for our hand-authored blog posts.
 * Supports: # H1, ## H2, ### H3, paragraphs, [-] bullets, [1.] ordered,
 * inline **bold** and [text](url) links, and "---" rules.
 */
export function BlogContent({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);

  const out: ReactNode[] = [];
  blocks.forEach((block, idx) => {
    if (block === "---") {
      out.push(<hr key={idx} className="my-10 border-slate-200" />);
      return;
    }
    if (block.startsWith("### ")) {
      out.push(
        <h3
          key={idx}
          className="mt-10 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl"
        >
          {block.slice(4)}
        </h3>
      );
      return;
    }
    if (block.startsWith("## ")) {
      out.push(
        <h2
          key={idx}
          className="mt-12 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {block.slice(3)}
        </h2>
      );
      return;
    }
    if (block.startsWith("# ")) {
      out.push(
        <h2
          key={idx}
          className="mt-12 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {block.slice(2)}
        </h2>
      );
      return;
    }
    const lines = block.split("\n");
    if (lines.every((l) => l.startsWith("- "))) {
      out.push(
        <ul
          key={idx}
          className="mt-2 list-disc space-y-2 pl-6 marker:text-brand-500"
        >
          {lines.map((line, j) => (
            <li key={j} className="leading-relaxed">
              <InlineContent text={line.replace(/^- /, "")} />
            </li>
          ))}
        </ul>
      );
      return;
    }
    if (lines.every((l) => /^\d+\.\s/.test(l))) {
      out.push(
        <ol
          key={idx}
          className="mt-2 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-accent-500"
        >
          {lines.map((line, j) => (
            <li key={j} className="leading-relaxed">
              <InlineContent text={line.replace(/^\d+\.\s/, "")} />
            </li>
          ))}
        </ol>
      );
      return;
    }
    if (block.startsWith("> ")) {
      out.push(
        <blockquote
          key={idx}
          className="mt-2 border-l-4 border-brand-300 bg-brand-50/50 px-4 py-3 text-base italic leading-relaxed text-slate-700"
        >
          <InlineContent text={block.replace(/^> /, "")} />
        </blockquote>
      );
      return;
    }
    out.push(
      <p key={idx} className="leading-relaxed">
        <InlineContent text={block} />
      </p>
    );
  });

  return (
    <div className="space-y-5 text-base text-slate-700 sm:text-[1.0625rem] sm:leading-[1.75]">
      {out}
    </div>
  );
}
