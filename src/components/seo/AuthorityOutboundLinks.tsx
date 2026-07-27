/** Curated authority outbound links — minimum 3 per major guide (Phase 7 EEAT). */
const AUTHORITY_LINKS = [
  {
    href: "https://www.bls.gov/ooh/",
    title: "U.S. Bureau of Labor Statistics — Occupational Outlook",
    desc: "Official employment trends and role definitions.",
  },
  {
    href: "https://en.wikipedia.org/wiki/Applicant_tracking_system",
    title: "Applicant tracking system (Wikipedia)",
    desc: "Background on how ATS technology works.",
  },
  {
    href: "https://www.shrm.org/topics-tools/tools/hr-answers",
    title: "SHRM HR Answers",
    desc: "Society for Human Resource Management resources.",
  },
];

export function AuthorityOutboundLinks() {
  return (
    <aside className="rounded-xl border border-slate-200 bg-slate-50/80 p-5" aria-labelledby="authority-links-heading">
      <h3 id="authority-links-heading" className="text-sm font-bold uppercase tracking-wider text-slate-500">
        External references
      </h3>
      <ul className="mt-3 space-y-3 text-sm">
        {AUTHORITY_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-800 underline decoration-slate-300 hover:text-[#16a34a]"
            >
              {link.title}
            </a>
            <p className="mt-0.5 text-slate-600">{link.desc}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
