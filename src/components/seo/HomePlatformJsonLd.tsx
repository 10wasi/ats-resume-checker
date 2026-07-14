import { getSiteUrl } from "@/lib/site-url";

/** ItemList schema for homepage core tools — supports rich results and site understanding. */
export function HomePlatformJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ResumeIQ Resume Checker Platform",
    description:
      "Free resume checker, resume score checker, ATS score checker, match tool, keywords database, and examples for job seekers worldwide.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Free Resume Checker Online",
        url: `${base}/free-resume-checker-online`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resume Score Checker",
        url: `${base}/resume-score-checker`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Free ATS Score Checker",
        url: `${base}/free-ats-score-checker`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Resume Job Description Match",
        url: `${base}/resume-job-description-match`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Resume Keywords Database",
        url: `${base}/resume-keywords`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Resume Examples Library",
        url: `${base}/resume-examples`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Resume Rejected By ATS Guide",
        url: `${base}/resume-rejected-by-ats`,
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "ATS Resume Checker Free Online",
        url: `${base}/ats-resume-checker`,
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "How To Improve Resume Score",
        url: `${base}/how-to-improve-resume-score`,
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
