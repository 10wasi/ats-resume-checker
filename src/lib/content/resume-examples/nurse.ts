import type { ResumeExampleEntry } from "./types";

const SLUG = "nurse";

export const nurseExample: ResumeExampleEntry = {
  id: "nurse",
  slug: SLUG,
  path: `/resume-examples/${SLUG}`,
  breadcrumbLabel: "Nurse resume",
  ctr: {
    title: "Nurse Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly nurse resume example with clinical metrics, EMR keywords, and unit scope. Validate parsing in the free ATS Resume Checker before applying.",
    ogTitle: "Nurse Resume Example for Hospital ATS",
    h1: "Nurse Resume Example (ATS-Friendly)",
    primaryKeyword: "nurse resume example",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Nurse Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly nurse resume example with clinical metrics, EMR keywords, and unit scope. Validate parsing in the free ATS Resume Checker before applying.",
  },
  keywords: [
    "nurse resume example",
    "RN resume example",
    "ATS friendly resume",
    "nursing resume keywords",
    "ATS Resume Checker",
  ],
  relatedSlugs: ["teacher", "customer-service", "hr-manager"],
  faqItems: [
    {
      question: "What should a nurse resume include for ATS?",
      answer:
        "RN license state and number, unit type (med-surg, ICU, ED), patient ratios, EMR systems (Epic, Cerner), certifications (BLS, ACLS), and procedure volumes—with honest clinical metrics.",
    },
    {
      question: "Should nurses use a skills checklist on the resume?",
      answer:
        "Use a concise Skills section with posting terms, but prove high-value skills in Experience bullets (e.g., ventilator management, wound care, triage).",
    },
    {
      question: "How do I quantify nursing experience?",
      answer:
        "Patient load, unit bed count, admission volume, quality metrics (fall reduction, infection bundles), and training preceptors supported.",
    },
    {
      question: "Can new grad nurses use this format?",
      answer:
        "Yes—lead with clinical rotations, preceptorship hours, and license status. Match hospital posting keywords for the unit you are targeting.",
    },
    {
      question: "How do I tailor a nursing resume to a hospital posting?",
      answer:
        "Use the Job Description Match tool for unit-specific terms, then confirm Epic/Cerner and certification keywords parse cleanly.",
    },
  ],
  body: `
Hospital ATS systems search for **license**, **unit type**, and **EMR** terms before a nurse manager reads your file. This **nurse resume example** keeps those signals in plain text bullets.

[ATS Resume Checker](/resume-checker) · [Job Description Match](/resume-job-description-match)

## ATS-friendly nurse resume example

**Emily Nguyen, RN, BSN**  
Chicago, IL · (312) 555-0174 · emily.nguyen@email.com · linkedin.com/in/emilynguyen-rn

**Professional Summary**  
Registered nurse with 5 years on 28-bed med-surg units. Illinois RN license; Epic eMAR experience; BLS and ACLS certified.

**Experience**

**Northwestern Memorial · Staff RN, Med-Surg** · Mar 2021 – Present  
- Managed care for 5–6 patients per shift on 28-bed unit; maintained patient satisfaction scores at 92nd percentile unit average.  
- Administered medications via Epic eMAR with zero Category A med errors over 12-month review period.  
- Precepted 4 new graduate nurses on admission workflows and discharge teaching protocols.

**Advocate Aurora · Staff RN, Telemetry** · Jul 2019 – Feb 2021  
- Monitored cardiac telemetry patients; responded to rapid response calls with ACLS protocols.  
- Documented assessments in Cerner within 30 minutes of admission per unit policy.

**Licenses & Certifications**  
Illinois RN License · BLS (AHA) · ACLS (AHA)

**Skills**  
Patient assessment, medication administration, Epic, Cerner, wound care, IV therapy, discharge planning, patient education, care coordination

**Education**  
BSN, University of Illinois Chicago, 2019

## Why this resume works

- **License and credentials** in header and dedicated section.  
- **Unit type and ratios** show acute-care scope.  
- **EMR named** in bullets — common hospital filters.  
- **Preceptor experience** signals seniority without inflating title.  
- **Standard headings** — no clinical icon graphics.

## ATS optimization tips for nurses

1. Match unit keywords (ICU, ED, med-surg, oncology) per posting.  
2. Spell certifications fully (BLS, ACLS, CCRN if held).  
3. Include EMR and monitoring equipment terms you use daily.  
4. Quantify patient load and quality initiatives when accurate.  
5. Re-scan after PDF export from Word or Google Docs.

## Common mistakes on nurse resumes

- License buried in footer or image banner.  
- Duty lists without unit context or tools.  
- Same resume for ICU and clinic roles without tailoring.  
- Abbreviating license state inconsistently.  
- Colorful template PDFs that scramble parser order.

## Test your nurse resume

[ATS Resume Checker](/resume-checker) · [Job Description Match](/resume-job-description-match) · [Resume Examples Library](/resume-examples)
`,
};
