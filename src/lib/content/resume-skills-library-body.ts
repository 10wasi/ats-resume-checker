export const RESUME_SKILLS_LIBRARY_PATH = "/resume-skills-library" as const;

export const resumeSkillsLibrarySeo = {
  title: "Resume Skills Library — ATS Keyword Lists by Function",
  description:
    "Resume skills library for ATS: hard skills, tools, and phrases by function. Build a searchable skills section—then test with the free checker.",
} as const;

export const resumeSkillsLibraryBody = `
The **resume skills library** is a practical index of hard skills, tools, and phrases applicant tracking systems index when recruiters search talent pools. Skills belong in **experience bullets first**—a cloud of terms without context scores lower than the same words tied to outcomes.

After editing, run the [ATS Resume Checker](/resume-checker) and confirm tools appear in parser text—not only in a sidebar graphic.

## How to use this library

1. Copy terms that honestly match your background and the target posting.
2. Place each tool in a bullet with scope: users, revenue, volume, or time saved.
3. Mirror spelling from the job description (Power BI vs PowerBI).
4. Re-scan with the [resume keyword checker](/resume-keyword-checker).

## Technical skills clusters

**Software engineering:** Python, Java, TypeScript, React, Node.js, AWS, Azure, GCP, Docker, Kubernetes, CI/CD, PostgreSQL, MongoDB, REST APIs, microservices, system design, Agile, Git.

**Data & analytics:** SQL, Python, R, Excel, Tableau, Power BI, Looker, ETL, data modeling, A/B testing, forecasting, stakeholder reporting.

**Product & UX:** Roadmap, discovery, user research, Figma, wireframes, usability testing, PRD, OKRs, activation, retention, WCAG accessibility.

**Marketing:** SEO, SEM, content strategy, GA4, HubSpot, Salesforce, email automation, CRO, brand management, campaign analytics, ROAS, MQL.

**Finance & accounting:** FP&A, budgeting, forecasting, variance analysis, GAAP, reconciliation, SAP, NetSuite, Excel modeling, audit support.

**Operations & PM:** Agile, Scrum, Jira, MS Project, risk management, stakeholder management, process improvement, Lean, Six Sigma.

## Soft skills (pair with proof)

Communication, cross-functional leadership, problem solving, and adaptability matter—but ATS filters rarely search them alone. Pair each with a tool, metric, or deliverable:

- **Communication** → "Presented weekly KPI reviews to C-suite stakeholders"
- **Leadership** → "Mentored 4 junior analysts on SQL QA standards"

See [resume action verbs](/resume-action-verbs) for stronger bullet openers.

## Industry-specific skill pages

- [Software engineer checker](/resume-checker/software-engineer)
- [Data analyst checker](/resume-checker/data-analyst)
- [Marketing checker](/resume-checker/marketing-manager)
- [Healthcare checker](/resume-checker/healthcare)
- [Resume keywords database](/resume-keywords)

## Skills section formatting for ATS

Use a simple **Skills** heading with comma-separated plain text or short category lines—not rating bars or icons. Details: [ATS resume format](/ats-resume-format) and [ATS-friendly fonts](/ats-friendly-fonts).

## FAQ workflow

Questions about skills vs experience order? Visit [FAQ Center](/faq-center). For end-to-end optimization: [resume resources hub](/resume-resources) and [complete ATS guide](/complete-guide-ats-resume-optimization).
`;

export const RESUME_SKILLS_LIBRARY_FAQ = [
  {
    question: "Should skills be a separate section for ATS?",
    answer:
      "Yes—a plain-text Skills section helps, but tools must also appear in experience bullets with context. Parsers and recruiters both weight recent role proof higher than isolated lists.",
  },
  {
    question: "How many skills should I list?",
    answer:
      "Prioritize 8–15 core tools and methodologies that match the posting. Long unverified lists trigger skepticism in human review and dilute keyword focus.",
  },
  {
    question: "Do ATS systems rank soft skills?",
    answer:
      "Occasionally, but hard skills and certifications drive most automated filters. Embed soft skills inside bullets that name tools, stakeholders, and metrics.",
  },
];
