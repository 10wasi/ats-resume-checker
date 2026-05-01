import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import {
  SITE_COMPANY,
  SITE_LEGAL,
  SITE_TOOLS,
} from "@/lib/site-nav";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-slate-200/80 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block transition opacity-100 hover:opacity-90">
              <Logo wordmarkClassName="text-white" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Free AI resume checker and ATS score analyzer. Built for job seekers,
              students, new grads, and software engineers who need a fast, honest
              resume review — no paywall.
            </p>
            <Link
              href="/resume-checker"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Check resume score free
            </Link>
          </div>
          <FooterColumn title="Tools" links={SITE_TOOLS} />
          <FooterColumn
            title="Company & legal"
            links={[...SITE_COMPANY, ...SITE_LEGAL]}
          />
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} ResumeIQ · Free resume optimization tool
          </p>
          <p>
            <Link
              href="/contact"
              className="font-semibold text-slate-300 transition hover:text-white"
            >
              Contact
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
