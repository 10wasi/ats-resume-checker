import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Schema.org SoftwareApplication for the unified resume / ATS checker. */
export function ResumeCheckerWebApplicationJsonLd() {
  const base = getSiteUrl();
  const url = `${base}${RESUME_CHECKER_PATH}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ATS Resume Checker",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript.",
    url,
    description:
      "ATS resume checker: instant ATS score, keyword analysis, formatting check, and recruiter suggestions. Upload PDF or paste text.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isAccessibleForFree: true,
    featureList: [
      "Instant ATS score (0–100)",
      "Keyword gap analysis",
      "Formatting check",
      "Recruiter suggestions",
      "Job description match analyzer",
    ],
    potentialAction: {
      "@type": "UseAction",
      target: url,
    },
    publisher: {
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
