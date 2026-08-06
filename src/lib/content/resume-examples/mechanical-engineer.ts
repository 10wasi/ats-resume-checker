import type { ResumeExampleEntry } from "./types";

const SLUG = "mechanical-engineer";

export const mechanicalEngineerExample: ResumeExampleEntry = {
  id: "mechanical-engineer",
  slug: SLUG,
  path: `/resume-examples/${SLUG}`,
  breadcrumbLabel: "Mechanical engineer resume",
  ctr: {
    title: "Mechanical Engineer Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly mechanical engineer resume example with CAD, FEA, and manufacturing keywords. Validate parsing in the free ATS Resume Checker before applying.",
    ogTitle: "Mechanical Engineer Resume Example for ATS in 2026",
    h1: "Mechanical Engineer Resume Example (ATS-Friendly)",
    primaryKeyword: "mechanical engineer resume example",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Mechanical Engineer Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly mechanical engineer resume example with CAD, FEA, and manufacturing keywords. Validate parsing in the free ATS Resume Checker before applying.",
  },
  keywords: [
    "mechanical engineer resume example",
    "CAD resume example",
    "ATS friendly resume",
    "mechanical engineering resume keywords",
    "ATS Resume Checker",
  ],
  relatedSlugs: ["project-manager", "software-engineer", "product-manager"],
  faqItems: [
    {
      question: "What should a mechanical engineer resume include for ATS?",
      answer:
        "CAD tools (SolidWorks, Creo, AutoCAD), analysis methods (FEA, CFD), manufacturing processes, GD&T, and product or system scope—with quantified design outcomes.",
    },
    {
      question: "Should mechanical engineers include a portfolio link?",
      answer:
        "Yes—a plain-text link to CAD renders or project summaries helps humans. Ensure tool names and project titles also appear in searchable body text.",
    },
    {
      question: "How do I quantify mechanical engineering experience?",
      answer:
        "Parts designed, cost reduction achieved, test cycles completed, failure rate improved, tooling lead time cut, and units shipped—when accurate.",
    },
    {
      question: "Can new grad mechanical engineers use this format?",
      answer:
        "Yes—lead with capstone projects, internships, and software proficiency. Match posting keywords for design vs manufacturing vs HVAC roles.",
    },
    {
      question: "How do I tailor a mechanical engineer resume to a posting?",
      answer:
        "Use the Job Description Match tool for industry-specific terms, then confirm CAD and analysis keywords parse cleanly in the ATS Resume Checker.",
    },
  ],
  body: `
Manufacturing and product ATS systems search for **CAD**, **FEA**, and **DFM** terms before an engineering manager reads your file. This **mechanical engineer resume example** keeps those signals in plain text bullets.

[ATS Resume Checker](/resume-checker) · [Job Description Match](/resume-job-description-match)

## ATS-friendly mechanical engineer resume example

**Priya Sharma**  
Detroit, MI · (313) 555-0165 · priya.sharma@email.com · linkedin.com/in/priyasharma-me

**Professional Summary**  
Mechanical engineer with 6 years designing automotive and industrial components. SolidWorks and ANSYS FEA experience; strong in DFM, GD&T, and cross-functional NPI.

**Experience**

**Ford Motor Company · Mechanical Engineer, Powertrain** · Apr 2021 – Present  
- Designed bracket assemblies in SolidWorks for 2.7L engine platform; reduced mass 18% while meeting NVH targets.  
- Ran ANSYS FEA on 24 load cases; cut physical prototype iterations from 5 to 2 per component.  
- Partnered with suppliers on DFM reviews; lowered tooling cost $140K on intake manifold revision.

**Bosch · Design Engineer, Industrial** · Jul 2018 – Mar 2021  
- Developed hydraulic valve housings per ASME Y14.5 GD&T; achieved 99.2% first-pass inspection rate.  
- Supported PPAP documentation for 8 OEM customers; zero major audit findings in 2020.  
- Led tolerance stack analysis reducing assembly rework 22% on production line.

**Skills**  
SolidWorks, Creo, ANSYS FEA, GD&T, DFM, PPAP, tolerance analysis, thermodynamics, HVAC fundamentals, manufacturing processes, NPI

**Education**  
B.S. Mechanical Engineering, University of Michigan, 2018

## Why this resume works

- **CAD and FEA in context** — SolidWorks and ANSYS appear where work happened.  
- **Quantified outcomes** — mass reduction, cost savings, inspection rate.  
- **Manufacturing terms** — DFM, PPAP, GD&T match common posting filters.  
- **Parser-safe layout** — no 3D render images or multi-column design.  
- **Clear progression** — Design Engineer to ME title shows growth.

## ATS optimization tips for mechanical engineers

1. Copy exact CAD tool names from the job post (SolidWorks vs Creo vs Inventor).  
2. Include **FEA**, **CFD**, or **thermal analysis** if the role uses them.  
3. Quantify: parts designed, cost saved, test cycles reduced.  
4. Spell standards in full once—"ASME Y14.5 GD&T."  
5. Re-scan after PDF export from Word or Google Docs.

## Common mistakes on mechanical engineer resumes

- Listing "AutoCAD" but omitting the primary 3D CAD the posting requires.  
- Bullets that describe duties without numbers or tools.  
- Embedding CAD screenshots as images—ATS cannot read them.  
- One generic resume for design vs HVAC vs manufacturing roles.  
- Creative section names like "Engineering Portfolio" instead of Experience.

## Test your mechanical engineer resume

[ATS Resume Checker](/resume-checker) · [Job Description Match](/resume-job-description-match) · [Resume Examples Library](/resume-examples)
`,
};
