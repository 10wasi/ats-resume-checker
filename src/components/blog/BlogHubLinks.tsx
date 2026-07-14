import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const hubs = [
  { href: "/", label: "Homepage" },
  { href: RESUME_CHECKER_PATH, label: "Resume Checker" },
  { href: "/career-success-hub", label: "Career Success Hub" },
  { href: "/resume-review", label: "Resume Review" },
];

export function BlogHubLinks() {
  return (
    <nav
      className="not-prose mt-10 rounded-2xl border border-slate-200 bg-slate-50/60 px-5 py-4"
      aria-label="Resume platform hubs"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        Resume tools
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
        {hubs.map((h) => (
          <li key={h.href}>
            <Link href={h.href} className="text-[#16a34a] underline underline-offset-2">
              {h.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
