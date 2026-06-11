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
      "Free tools for ATS resume checking, job match scoring, keyword finding, bullet generation, examples, checklists, and AI resume rewrites.",
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
        name: "ATS Keywords Finder",
        url: `${base}/ats-keywords-finder`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Resume Bullet Generator",
        url: `${base}/resume-bullet-generator`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Resume Examples Library",
        url: `${base}/resume-examples`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "ATS Resume Checklist",
        url: `${base}/ats-resume-checklist-2026`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Career Success Hub",
        url: `${base}/career-success-hub`,
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "ATS Knowledge Center",
        url: `${base}/knowledge-center`,
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Resume Optimization Guide",
        url: `${base}/resume-optimization`,
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
