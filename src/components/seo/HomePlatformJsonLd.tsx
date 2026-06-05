import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** ItemList schema for homepage core tools — supports rich results and site understanding. */
export function HomePlatformJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Resume Optimization Platform Tools",
    description:
      "Free tools for ATS resume checking, job match scoring, keyword finding, examples, checklists, and AI resume rewrites.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ATS Resume Checker",
        url: `${base}${RESUME_CHECKER_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resume Match Analyzer",
        url: `${base}/resume-job-description-match`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "ATS Resume Examples",
        url: `${base}/blog/best-ats-friendly-resume-examples-2026`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "ATS Resume Checklist",
        url: `${base}/ats-resume-checklist-2026`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Resume Keywords Finder",
        url: `${base}/blog/best-ats-resume-keywords-improve-visibility-2026`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "AI Resume Rewrite",
        url: `${base}/ai-resume-rewrite`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
