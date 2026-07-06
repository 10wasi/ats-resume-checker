import { getSiteUrl } from "@/lib/site-url";

/** Schema.org WebApplication for the homepage primary tool. */
export function HomeWebApplicationJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ResumeIQ ATS Resume Checker",
    alternateName: "Free ATS Resume Checker",
    description:
      "Free ATS resume checker and resume scanner: upload resume or CV, get ATS score, keyword match, format scan, and resume optimization fixes. Built for job seekers worldwide.",
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
      "ATS resume score",
      "Resume keyword analysis",
      "Job description match",
      "Format and parsing scan",
      "AI resume improvements",
      "PDF and DOCX upload",
    ],
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
