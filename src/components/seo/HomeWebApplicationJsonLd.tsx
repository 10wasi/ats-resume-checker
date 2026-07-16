import { getSiteUrl } from "@/lib/site-url";

/** Schema.org SoftwareApplication for the homepage primary tool. */
export function HomeWebApplicationJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ATS Resume Checker",
    alternateName: ["ResumeIQ", "ATS Score Checker", "Free ATS Resume Checker"],
    description:
      "Free ATS resume checker: upload resume, get instant ATS score, keyword analysis, formatting check, and recruiter suggestions.",
    url: `${base}/`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    inLanguage: "en",
    isAccessibleForFree: true,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    featureList: [
      "Resume parser test",
      "Resume score checker",
      "Keyword gap analysis",
      "Formatting check",
      "Recruiter suggestions",
      "Job description match score",
      "Priority fix recommendations",
      "PDF and DOCX upload",
      "Paste text mode",
    ],
    potentialAction: {
      "@type": "Action",
      name: "Run free ATS resume scan",
      target: `${base}/resume-checker`,
    },
    provider: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: base,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
