import type { ResumeExampleEntry } from "./types";

const SLUG = "teacher";

export const teacherExample: ResumeExampleEntry = {
  id: "teacher",
  slug: SLUG,
  path: `/resume-examples/${SLUG}`,
  breadcrumbLabel: "Teacher resume",
  ctr: {
    title: "Teacher Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly teacher resume example with classroom metrics, curriculum keywords, and certification terms. Test your file in the free ATS Resume Checker.",
    ogTitle: "Teacher Resume Example That Parses in ATS",
    h1: "Teacher Resume Example (ATS-Friendly)",
    primaryKeyword: "teacher resume example",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Teacher Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly teacher resume example with classroom metrics, curriculum keywords, and certification terms. Test your file in the free ATS Resume Checker.",
  },
  keywords: [
    "teacher resume example",
    "education resume example",
    "ATS friendly resume",
    "teaching resume keywords",
    "ATS Resume Checker",
  ],
  relatedSlugs: ["nurse", "customer-service", "project-manager"],
  faqItems: [
    {
      question: "What should a teacher resume include for ATS?",
      answer:
        "State certification, grade levels taught, subjects, classroom size, assessment tools, and curriculum frameworks (Common Core, IB, state standards)—with metrics on student growth or program outcomes where accurate.",
    },
    {
      question: "Should teachers list every lesson plan skill?",
      answer:
        "Focus on posting terms: differentiation, IEP/504 collaboration, classroom management systems, LMS tools (Google Classroom, Canvas), and data-driven instruction—not generic 'passion for teaching' alone.",
    },
    {
      question: "How long should a teacher resume be?",
      answer:
        "One page for early-career teachers; two pages is acceptable for veterans with leadership, coaching, or department head roles. Lead with recent classroom impact.",
    },
    {
      question: "Do teacher resumes need a certification line?",
      answer:
        "Yes—spell out license type and state (e.g., 'Illinois Professional Educator License, K–9'). Many district ATS filters search certification fields.",
    },
    {
      question: "How do I match a teacher resume to a job posting?",
      answer:
        "Paste the district job description into the Resume Match Analyzer, align subject and grade-level keywords, then verify parsing in the ATS Resume Checker.",
    },
  ],
  body: `
This **teacher resume example** shows how to combine **certification**, **grade-level scope**, and **classroom metrics** in a parser-friendly layout.

[ATS Resume Checker](/resume-checker) · [Job Description Match](/resume-job-description-match)

## ATS-friendly teacher resume example

**Maria Santos, M.Ed.**  
Austin, TX · (512) 555-0198 · maria.santos@email.com · linkedin.com/in/mariasantos

**Professional Summary**  
Elementary teacher with 6 years in Title I schools. Texas-certified EC–6; experienced in differentiated literacy instruction, Google Classroom, and NWEA MAP growth tracking.

**Experience**

**Austin ISD · 4th Grade Teacher** · Aug 2020 – Present  
- Taught reading and math to 24 students; raised NWEA reading growth from 42nd to 58th percentile cohort-wide over one year.  
- Implemented small-group literacy blocks aligned to TEKS; reduced behavioral referrals 18% using PBIS routines.  
- Collaborated with SPED team on 8 IEP accommodations documented in district SIS.

**Round Rock ISD · Student Teacher, 2nd Grade** · Jan – May 2020  
- Co-planned weekly units in Google Classroom for 22 students during clinical placement.  
- Led parent conferences for 15 families with translated materials for ESL households.

**Certifications**  
Texas EC–6 Generalist Certification, 2020 · ESL Supplemental, 2021

**Skills**  
Differentiated instruction, classroom management, lesson planning, Google Classroom, NWEA MAP, PBIS, IEP collaboration, formative assessment, parent communication

**Education**  
M.Ed. Curriculum & Instruction, University of Texas at Austin, 2020  
B.A. Elementary Education, Texas State University, 2019

## Why this resume works

- **Certification and grade band** appear early for district filters.  
- **Assessment tools named** — NWEA, TEKS, PBIS.  
- **Quantified classroom outcomes** without inflated claims.  
- **SPED collaboration** keyword for inclusive classrooms.  
- **Single-column structure** with standard headings.

## ATS optimization tips for teachers

1. Mirror district posting language for subject, grade, and certification.  
2. Include LMS and SIS tools you actually use.  
3. Quantify growth, engagement, or program participation when possible.  
4. List endorsements (ESL, SPED) as separate credential lines.  
5. Run [job description match](/resume-job-description-match) per district posting.

## Common mistakes on teacher resumes

- Generic summaries without grade level or certification state.  
- Listing duties without assessment or curriculum terms.  
- Hiding credentials in a sidebar ATS cannot read.  
- One resume for instructional coach and classroom teacher roles without tailoring.  
- Uploading Canva exports with icons instead of plain text skills.

## Test your teacher resume

[ATS Resume Checker](/resume-checker) · [Job Description Match](/resume-job-description-match) · [Resume Examples Library](/resume-examples)
`,
};
