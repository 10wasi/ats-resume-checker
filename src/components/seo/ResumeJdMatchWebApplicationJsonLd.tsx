import { getSiteUrl } from "@/lib/site-url";
import { RESUME_JD_MATCH_PATH } from "@/lib/content/resume-job-description-match-body";

export function ResumeJdMatchWebApplicationJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Resume vs Job Description Match Analyzer",
    description:
      "Free tool to match resume to job description. Get resume match score, ATS keyword checker results, missing keywords, and ATS friendly resume fixes.",
    url: `${base}${RESUME_JD_MATCH_PATH}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
