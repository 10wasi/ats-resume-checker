import type { Sprint3LandingSpec } from "./landing-factory";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import type { FaqItem } from "@/lib/seo/faq";

type CountryConfig = {
  slug: string;
  label: string;
  regionTerms: string;
  hiringNotes: string;
  formatNotes: string;
  keywordExamples: string[];
};

function countryFaq(label: string, terms: string): FaqItem[] {
  return [
    {
      question: `Does ATS work the same in ${label}?`,
      answer:
        "Core mechanics—parse, index, keyword search—are similar worldwide. Local employers may prefer CV vs resume labels, date formats, or photo conventions. Always match the posting and export a parse-safe PDF.",
    },
    {
      question: `Should I include a photo on my resume for ${label}?`,
      answer:
        "Follow local norms and the employer instructions. Many ATS-first employers in English-speaking markets prefer no photo unless requested. When in doubt, use a text-first PDF without images in the body.",
    },
    {
      question: `Is ResumeIQ free in ${label}?`,
      answer:
        "Yes—the core ATS resume checker is free online. Upload PDF or paste text, see parser output and keyword gaps, without signup for a baseline scan.",
    },
    {
      question: `CV or resume in ${label}?`,
      answer: `${terms} Check the job portal label and use the same word in your file name when possible.`,
    },
  ];
}

function countryBody(c: CountryConfig): string {
  return `# Resume checker ${c.label} — ATS guide for local job seekers

## Why ${c.label} applicants use an ATS resume checker

Hiring in ${c.label} increasingly flows through applicant tracking systems—whether you apply on LinkedIn, a national job board, or a company careers site. Recruiters search parsed fields for role titles, certifications, and tools. If your PDF scrambles text or hides skills in graphics, you can be filtered out before a human reads your experience.

${c.hiringNotes}

## Local conventions that affect ATS

${c.formatNotes}

Common keyword clusters employers filter on in ${c.label}: **${c.keywordExamples.join("**, **")}**.

## Step-by-step: check your resume for ${c.label} roles

1. Export the **exact PDF** you will upload—Word or Google Docs to PDF, not a screenshot.
2. Run the [free ATS resume checker](/resume-checker) and confirm name, email, and recent role extract in order.
3. Paste the job description in the [resume match tool](/resume-job-description-match) for missing terms.
4. Fix [ATS formatting issues](/ats-resume-format)—single column, standard headings, plain bullets.
5. Re-scan until parser output matches what you expect recruiters to search.

## ${c.label} job search resources on ResumeIQ

| Resource | Use when |
|----------|----------|
| [Free ATS resume checker](/) | First scan before any application |
| [Resume keyword checker](/resume-keyword-checker) | Missing terms vs posting |
| [ATS score checker](/ats-score-checker) | Understanding compatibility % |
| [Resume resources hub](/resume-resources) | Skills, verbs, fonts, file types |
| [FAQ Center](/faq-center) | Privacy, scoring, file formats |

## Examples: weak vs ATS-safe bullets

**Weak:** "Responsible for sales and customer work."

**Strong:** "Closed 42 B2B deals in 12 months using CRM pipeline stages; improved win rate 18% vs prior year."

Replace generic duty lines with tools, scope, and metrics—then verify the tools appear in parser text.

## Industry and role checkers

Tailor keywords to your field:

- [Software engineer resume checker](/resume-checker/software-engineer)
- [Marketing resume checker](/resume-checker/marketing-manager)
- [Healthcare resume checker](/resume-checker/healthcare)
- [Student & fresher guides](/resume-checker/students)

## Privacy for international applicants

ResumeIQ processes uploads per request—see [privacy policy](/privacy). We do not require account creation for a baseline scan. Read [scoring methodology](/methodology) to interpret results.

## Related country guides

Browse other regions: [USA](/resume-checker-usa) · [UK](/resume-checker-uk) · [Canada](/resume-checker-canada) · [Australia](/resume-checker-australia) · [Germany](/resume-checker-germany) · [UAE](/resume-checker-uae) · [Pakistan](/resume-checker-pakistan) · [India](/resume-checker-india).

Return to [homepage](/) for the free checker or explore [comparison guides](/jobscan-alternative) if you evaluate multiple tools.`;
}

function toSpec(c: CountryConfig): Sprint3LandingSpec {
  const path = `/resume-checker-${c.slug}`;
  return {
    id: `resume-checker-${c.slug}`,
    path,
    breadcrumbLabel: `Resume Checker ${c.label}`,
    ctr: {
      title: ctrTitle(`Resume Checker ${c.label}`, "Free ATS Scan"),
      description: ctrMeta(
        `Free resume checker ${c.label} — ATS score, parser test & keyword match. ${c.regionTerms} job seeker guide.`
      ),
      h1: `Resume Checker ${c.label} — Free ATS Resume Scan`,
      primaryKeyword: `resume checker ${c.label}`,
      richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization", "WebPage"],
    },
    faqItems: countryFaq(c.label, c.regionTerms),
    body: countryBody(c),
  };
}

const COUNTRIES: CountryConfig[] = [
  {
    slug: "usa",
    label: "USA",
    regionTerms: "US employers often use Workday, Greenhouse, or Taleo",
    hiringNotes:
      "US employers often use Workday, Greenhouse, Lever, or Taleo. Federal and enterprise postings may require plain-text skills and clearance keywords spelled out in full.",
    formatNotes:
      "Use month/year dates, US phone format, and state abbreviations only when standard. Avoid tables for skills; one-page norm for early career, two pages acceptable for senior roles with depth.",
    keywordExamples: ["P&L", "GAAP", "HIPAA", "SOC 2", "Agile", "SQL"],
  },
  {
    slug: "uk",
    label: "UK",
    regionTerms: "CV is common; A-Level and GCSE labels may appear",
    hiringNotes:
      "UK hiring mixes CV conventions with US-style ATS on multinational employers. Right-to-work and visa sponsorship keywords appear frequently on job boards.",
    formatNotes:
      "CV length often two pages for experienced candidates. Use DD/MM/YYYY if the posting shows UK date style. British spelling when the employer is UK-based (organisation, programme).",
    keywordExamples: ["GCSE", "A-Level", "right to work", "Agile", "stakeholder"],
  },
  {
    slug: "canada",
    label: "Canada",
    regionTerms: "Bilingual FR/EN postings may require both language keywords",
    hiringNotes:
      "Canadian employers use similar ATS stacks to the US with bilingual FR/EN requirements in Quebec and federal roles.",
    formatNotes:
      "Include city and province. Metric and imperial both appear—mirror the posting. Permanent resident / work authorization terms when listed.",
    keywordExamples: ["bilingual", "French", "PIPEDA", "CPA", "PMP"],
  },
  {
    slug: "australia",
    label: "Australia",
    regionTerms: "Résumé/CV hybrid; ABN for contractors",
    hiringNotes:
      "Australian postings emphasize safety certifications in trades and AHPRA registration in healthcare. Contract roles may ask for ABN context.",
    formatNotes:
      "Résumé or CV label both appear—follow the portal. Referees available on request rather than full contact blocks unless requested.",
    keywordExamples: ["White Card", "AHPRA", "stakeholder", "Excel", "Agile"],
  },
  {
    slug: "germany",
    label: "Germany",
    regionTerms: "Lebenslauf conventions; photo optional by company",
    hiringNotes:
      "German employers may expect Lebenslauf structure while international teams use English ATS. Certificates and exact degree titles matter for regulated fields.",
    formatNotes:
      "Photo optional—follow company culture. Include language levels (CEFR). Spell out degree equivalents when applying in English.",
    keywordExamples: ["Lebenslauf", "SAP", "ISO", "Fluent German", "B2 English"],
  },
  {
    slug: "uae",
    label: "UAE",
    regionTerms: "Visa status and notice period keywords are common",
    hiringNotes:
      "UAE postings often list visa status, notice period, and Arabic/English bilingual preferences. Multinational hubs in Dubai and Abu Dhabi use global ATS vendors.",
    formatNotes:
      "Include nationality or visa status only when the posting requests it. Mobile number with country code. Avoid heavy design templates for banking and aviation roles.",
    keywordExamples: ["visit visa", "notice period", "Arabic", "Dubai", "stakeholder"],
  },
  {
    slug: "pakistan",
    label: "Pakistan",
    regionTerms: "Remote and offshore roles often test English + tool keywords",
    hiringNotes:
      "Pakistan has strong remote hiring for tech, BPO, and finance. Local employers and offshore teams both filter on English proficiency and tool keywords in plain text.",
    formatNotes:
      "Use international phone format. LinkedIn URL in header is common. Single-column PDF exports parse best on Rozee, Mustakbil, and LinkedIn Easy Apply.",
    keywordExamples: ["remote", "MS Office", "SQL", "communication", "Excel"],
  },
  {
    slug: "india",
    label: "India",
    regionTerms: "Naukri and LinkedIn dominate; CGPA fields appear",
    hiringNotes:
      "India's high-volume hiring uses Naukri, LinkedIn, and company portals. Service companies filter on graduation year, percentage/CGPA fields, and tech stack keywords.",
    formatNotes:
      "Include city and state. CGPA when recent graduate. Avoid infographic resumes for IT services ATS; use standard Experience / Education headings.",
    keywordExamples: ["CGPA", "Java", "Spring Boot", "AWS", "agile"],
  },
];

export const COUNTRY_PAGES: Sprint3LandingSpec[] = COUNTRIES.map(toSpec);

export function getCountryBySlug(slug: string): Sprint3LandingSpec | undefined {
  return COUNTRY_PAGES.find((p) => p.id === `resume-checker-${slug}`);
}

export function getCountrySlugs(): string[] {
  return COUNTRIES.map((c) => c.slug);
}
