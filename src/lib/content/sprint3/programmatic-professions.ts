import { expandIndustryBody } from "./industry-body-builder";

type ProfessionTemplate = {
  slug: string;
  roleLabel: string;
  ctrHook: string;
  intro: string;
  keywordFocus: string[];
  parseFailures: string[];
  checklist: string[];
  keywordClusters: { title: string; terms: string }[];
  examples: { weak: string; strong: string }[];
  mistakes: string[];
};

function p(t: ProfessionTemplate) {
  return { ...t, body: expandIndustryBody(t) };
}

/** Programmatic profession expansion — Phase 3 major roles beyond core industry configs. */
export const PROGRAMMATIC_PROFESSION_CONFIGS = [
  p({
    slug: "nurse",
    roleLabel: "Nurse",
    ctrHook: "RN & EMR Keywords",
    intro:
      "ATS resume checker for nurses — license, unit type, EMR systems, and patient population keywords recruiters filter on.",
    keywordFocus: ["RN", "BSN", "Epic", "patient care", "ACLS"],
    parseFailures: [
      "License number breaking parser order in header graphics",
      "Unit experience without patient acuity or bed count",
      "EMR names missing from clinical bullets",
      "Certifications listed as icons only",
    ],
    checklist: [
      "Registered Nurse (RN) or BSN spelled out in full once",
      "Recent unit type: ICU, med-surg, ER, pediatrics",
      "Epic, Cerner, or Meditech in experience bullets",
      "Patient ratio or census when ethical and relevant",
    ],
    keywordClusters: [
      { title: "Clinical", terms: "Patient assessment, care plans, medication administration, IV therapy, wound care." },
      { title: "Credentials", terms: "RN, BSN, ACLS, BLS, PALS, state license, compact license." },
      { title: "Systems", terms: "Epic, Cerner, Meditech, eMAR, charting compliance, interdisciplinary rounds." },
    ],
    examples: [
      {
        weak: "Provided nursing care on busy unit.",
        strong:
          "Staff RN on 28-bed med-surg unit; managed 5–6 patients using Epic eMAR with 98% medication administration accuracy audits.",
      },
      {
        weak: "Experienced in ICU settings.",
        strong:
          "ICU RN supporting 2:1 critical care ratio; monitored ventilated patients and titrated drips per protocol with zero sentinel events in 18 months.",
      },
    ],
    mistakes: [
      "Photo-heavy nursing resume templates",
      "Listing every rotation without targeting specialty posting",
      "Omitting EMR when posting requires Epic",
      "Using only abbreviations for credentials",
    ],
  }),
  p({
    slug: "doctor",
    roleLabel: "Doctor",
    ctrHook: "MD & Board Keywords",
    intro:
      "Physician resume ATS check — board certification, specialty, procedures, and hospital privilege language parsed cleanly.",
    keywordFocus: ["MD", "board certified", "patient outcomes", "EHR", "specialty"],
    parseFailures: [
      "CV format with publications breaking experience order",
      "Board status abbreviated without full specialty name",
      "Procedure volumes not in searchable text",
      "Fellowship dates in tables parsers skip",
    ],
    checklist: [
      "MD/DO and specialty spelled out: Internal Medicine, Family Medicine, etc.",
      "Board certification status with year when applicable",
      "EHR: Epic, Cerner in recent practice bullets",
      "Procedure or patient panel volume when posting emphasizes scale",
    ],
    keywordClusters: [
      { title: "Credentials", terms: "MD, DO, board certified, fellowship, DEA, state medical license, ABMS." },
      { title: "Clinical", terms: "Diagnosis, treatment plans, procedures, patient panel, quality metrics, readmission." },
      { title: "Leadership", terms: "Department chair, committee, CME, peer review, clinical trials, EHR optimization." },
    ],
    examples: [
      {
        weak: "Managed patients in outpatient clinic.",
        strong:
          "Board-certified Family Medicine physician; panel of 1,800 patients with 4.6/5 Press Ganey scores and 12% reduction in no-show rate via outreach protocol.",
      },
      {
        weak: "Performed surgical procedures.",
        strong:
          "General surgeon performing 180+ laparoscopic cholecystectomies annually; maintained <1% bile duct injury rate over 4-year period.",
      },
    ],
    mistakes: [
      "Academic CV length without targeting employer type",
      "Research-first layout for community hospital roles",
      "Hiding board eligibility status ambiguously",
      "Image-based procedure logos instead of text",
    ],
  }),
  p({
    slug: "developer",
    roleLabel: "Developer",
    ctrHook: "Stack & Git Keywords",
    intro:
      "Developer resume ATS scan — languages, frameworks, and shipping proof extracted the way engineering filters search.",
    keywordFocus: ["JavaScript", "Python", "Git", "API", "Agile"],
    parseFailures: [
      "Portfolio link without stack in bullet text",
      "Job title 'Developer' without language names",
      "Agile mentioned without squad or release proof",
      "Skills cloud with 50 tools, zero project context",
    ],
    checklist: [
      "Languages and frameworks in recent role bullets",
      "Git, CI/CD, code review in delivery bullets",
      "One quantified outcome per recent role",
      "Parser shows stack order matching job timeline",
    ],
    keywordClusters: [
      { title: "Web", terms: "JavaScript, TypeScript, React, Node.js, REST, GraphQL, HTML, CSS." },
      { title: "Data & backend", terms: "Python, Java, SQL, PostgreSQL, Docker, AWS, microservices." },
      { title: "Practice", terms: "Agile, Scrum, unit tests, code review, debugging, deployment." },
    ],
    examples: [
      {
        weak: "Developed features for web application.",
        strong:
          "Shipped 14 React features for SaaS billing portal; reduced checkout errors 23% through API validation and Jest test coverage to 82%.",
      },
      {
        weak: "Worked in Agile team.",
        strong:
          "Developer on 8-person Scrum team; delivered biweekly releases to 40K users with zero Sev-1 incidents over 9 months.",
      },
    ],
    mistakes: [
      "Generic 'full stack developer' without stack names",
      "Canva resume for backend roles",
      "Outdated tech listed before current stack",
      "No link between commits and business outcomes",
    ],
  }),
  p({
    slug: "designer",
    roleLabel: "Designer",
    ctrHook: "Figma & Brand Keywords",
    intro:
      "Designer resume parser test — Figma, Adobe, and deliverable types in plain text ATS can index.",
    keywordFocus: ["Figma", "Adobe Illustrator", "UI", "brand", "design system"],
    parseFailures: [
      "Behance-only proof without tool names in body",
      "Image portfolio PDF with no selectable text",
      "UI vs graphic specialty mixed without focus",
      "Design thinking buzzwords without deliverables",
    ],
    checklist: [
      "Figma, Sketch, or Adobe tools in bullets with deliverable type",
      "Brand, marketing, or product design focus matches posting",
      "Metrics: engagement lift, revision cycles, component reuse",
      "Portfolio URL plus repeated tool keywords in text",
    ],
    keywordClusters: [
      { title: "Visual", terms: "Brand identity, typography, layout, illustration, print, campaign assets." },
      { title: "Product", terms: "UI design, design systems, components, handoff, responsive, accessibility." },
      { title: "Process", terms: "Critique, iteration, stakeholder review, style guide, asset library." },
    ],
    examples: [
      {
        weak: "Created designs for clients.",
        strong:
          "Led Figma design system with 55 components adopted by 3 product teams; cut design-dev handoff questions 40% quarter over quarter.",
      },
      {
        weak: "Skilled in Adobe Creative Suite.",
        strong:
          "Delivered retail packaging in Illustrator for 6 SKU lines; reduced prepress revisions 28% through standardized dieline templates.",
      },
    ],
    mistakes: [
      "Visual resume exports parsers cannot read",
      "No distinction between UX and graphic deliverables",
      "Missing file format expertise when posting requires it",
      "Only Dribbble link, no bullet proof",
    ],
  }),
  p({
    slug: "engineer",
    roleLabel: "Engineer",
    ctrHook: "Technical Scope Proof",
    intro:
      "Engineer resume ATS checker — discipline keywords, tools, and project outcomes for mechanical, civil, and software contexts.",
    keywordFocus: ["engineering", "CAD", "project delivery", "compliance", "design"],
    parseFailures: [
      "PE license not spelled out in full",
      "CAD tools in graphics not text",
      "Project scope without budget or team size",
      "Generic 'engineer' title without discipline",
    ],
    checklist: [
      "Discipline clear in summary: software, mechanical, civil, electrical",
      "Tools: AutoCAD, SolidWorks, MATLAB, or stack names in bullets",
      "Standards and compliance terms when posting requires",
      "Quantified delivery: schedule, cost, safety, performance",
    ],
    keywordClusters: [
      { title: "Delivery", terms: "Design review, specification, testing, commissioning, root cause, FMEA." },
      { title: "Tools", terms: "AutoCAD, SolidWorks, ANSYS, MATLAB, PLC, BIM, Revit." },
      { title: "Compliance", terms: "ISO, OSHA, ASME, IEEE, quality assurance, documentation." },
    ],
    examples: [
      {
        weak: "Worked on engineering projects.",
        strong:
          "Mechanical engineer on $4.2M HVAC retrofit; delivered design 2 weeks ahead of schedule with 6% under-budget material spend.",
      },
      {
        weak: "Used CAD for drawings.",
        strong:
          "Produced SolidWorks assemblies for 12 custom fixtures; reduced shop rework hours 15% through GD&T standardization.",
      },
    ],
    mistakes: [
      "One generic resume for unrelated engineering disciplines",
      "Patent lists without role contribution context",
      "Omitting PE/EIT status when required",
      "Scanned legacy PDFs from paper portfolios",
    ],
  }),
  p({
    slug: "pharmacist",
    roleLabel: "Pharmacist",
    ctrHook: "PharmD & Compliance",
    intro:
      "Pharmacist resume ATS scan — PharmD, state license, MTM, and dispensing volume keywords for hospital and retail roles.",
    keywordFocus: ["PharmD", "MTM", "dispensing", "Epic Willow", "patient counseling"],
    parseFailures: [
      "PharmD abbreviated without full degree once",
      "Retail vs clinical keywords mixed randomly",
      "Epic Willow or pharmacy system missing from bullets",
      "Immunization credentials not in text",
    ],
    checklist: [
      "Doctor of Pharmacy (PharmD) spelled out",
      "State pharmacist license and NPI when relevant",
      "Clinical or retail setting aligned to posting",
      "MTM, formulary, or inventory metrics in recent role",
    ],
    keywordClusters: [
      { title: "Clinical", terms: "Medication therapy management, anticoagulation, renal dosing, stewardship, rounds." },
      { title: "Operations", terms: "Inventory, workflow, accuracy rate, immunizations, compounding, USP 797." },
      { title: "Systems", terms: "Epic Willow, Pyxis, QS/1, PioneerRx, e-prescribing, prior authorization." },
    ],
    examples: [
      {
        weak: "Filled prescriptions accurately.",
        strong:
          "Retail pharmacist processing 350+ scripts weekly with 99.8% accuracy audits; expanded immunization program to 420 doses/month.",
      },
      {
        weak: "Collaborated with medical team.",
        strong:
          "Clinical pharmacist on anticoagulation service; reduced adverse events 20% through protocol education and Epic order-set updates.",
      },
    ],
    mistakes: [
      "Duty lists without volume or compliance metrics",
      "Wrong setting keywords for hospital posting",
      "License info only in unscannable header image",
      "Omitting MTM when ambulatory posting requires it",
    ],
  }),
  p({
    slug: "sales-representative",
    roleLabel: "Sales Representative",
    ctrHook: "Quota & CRM Proof",
    intro:
      "Sales rep resume ATS check — quota attainment, CRM tools, and pipeline keywords inside sales org filters.",
    keywordFocus: ["quota", "CRM", "Salesforce", "pipeline", "B2B"],
    parseFailures: [
      "Quota numbers missing from recent roles",
      "CRM name not in bullet text",
      "B2B vs B2C language mixed without focus",
      "'Exceeded expectations' without percentage",
    ],
    checklist: [
      "Quota attainment % or rank in recent years",
      "Salesforce, HubSpot, or CRM named in bullets",
      "Deal size, cycle length, or territory scope",
      "Industry vertical matching posting",
    ],
    keywordClusters: [
      { title: "Execution", terms: "Prospecting, discovery, demo, negotiation, close, upsell, cross-sell." },
      { title: "Metrics", terms: "Quota attainment, ARR, MRR, win rate, pipeline coverage, CAC payback." },
      { title: "Tools", terms: "Salesforce, HubSpot, Outreach, LinkedIn Sales Navigator, forecasting." },
    ],
    examples: [
      {
        weak: "Managed client relationships.",
        strong:
          "Enterprise AE at 118% quota ($1.4M ARR) selling HR SaaS; shortened average sales cycle from 90 to 62 days using MEDDPICC discovery.",
      },
      {
        weak: "Used Salesforce daily.",
        strong:
          "Maintained 3.2x pipeline coverage in Salesforce for $800K territory; improved forecast accuracy to 94% over 4 quarters.",
      },
    ],
    mistakes: [
      "Vanity titles without searchable industry terms",
      "No numbers in last 3 years of sales roles",
      "Listing every CRM ever touched without depth",
      "Generic 'communication skills' without deal proof",
    ],
  }),
  p({
    slug: "lawyer",
    roleLabel: "Lawyer",
    ctrHook: "Bar & Practice Area",
    intro:
      "Attorney resume ATS scan — bar admission, practice area, and matter types in parse-safe format for law firm filters.",
    keywordFocus: ["JD", "bar admission", "litigation", "contract", "compliance"],
    parseFailures: [
      "Bar states not listed in plain text",
      "Practice area buried in prose paragraphs",
      "Confidential matter names without anonymized scale",
      "Legal resume templates with text boxes",
    ],
    checklist: [
      "Juris Doctor (JD) and bar states spelled out",
      "Practice area keywords match posting: M&A, IP, employment",
      "Matter scale anonymized: deal size, case volume, team role",
      "Westlaw, Relativity, or legal tech when relevant",
    ],
    keywordClusters: [
      { title: "Litigation", terms: "Discovery, depositions, motion practice, trial, settlement, e-discovery." },
      { title: "Transactional", terms: "Due diligence, drafting, negotiation, closing, SEC, compliance." },
      { title: "Credentials", terms: "JD, bar admission, LL.M., clerkship, pro bono, CLE." },
    ],
    examples: [
      {
        weak: "Handled various legal matters.",
        strong:
          "Associate supporting 25+ commercial lease transactions ($500K–$12M); drafted and negotiated LOIs through closing with  zero post-close defaults.",
      },
      {
        weak: "Experienced litigator.",
        strong:
          "Litigation associate managing discovery for 8 employment cases; drafted dispositive motions resulting in 2 summary judgments granted.",
      },
    ],
    mistakes: [
      "Multi-page list of cases without role clarity",
      "Missing bar status for target jurisdiction",
      "Using internal matter codenames recruiters cannot search",
      "Academic formatting for in-house corporate roles",
    ],
  }),
  p({
    slug: "data-scientist",
    roleLabel: "Data Scientist",
    ctrHook: "ML & Python Keywords",
    intro:
      "Data scientist resume ATS check — Python, ML, experimentation, and model impact language product teams filter on.",
    keywordFocus: ["Python", "machine learning", "SQL", "experimentation", "scikit-learn"],
    parseFailures: [
      "ML buzzwords without model or metric context",
      "PhD publications without applied project bullets",
      "Notebook screenshots embedded as images",
      "SQL missing when posting requires feature engineering",
    ],
    checklist: [
      "Python, R, or Julia in bullets with library names",
      "Model outcomes: AUC, lift, revenue, error rate",
      "Experiment design and A/B testing when relevant",
      "Cloud: AWS SageMaker, GCP Vertex, or Azure ML if used",
    ],
    keywordClusters: [
      { title: "Modeling", terms: "Regression, classification, NLP, forecasting, clustering, deep learning, XGBoost." },
      { title: "Engineering", terms: "Feature engineering, pipelines, Airflow, Spark, MLOps, deployment." },
      { title: "Impact", terms: "A/B test, uplift, ROI, precision-recall, monitoring, drift detection." },
    ],
    examples: [
      {
        weak: "Built machine learning models.",
        strong:
          "Deployed churn model (XGBoost) lifting retention campaigns 11% incremental save rate; monitored weekly drift with 0.92 validation AUC.",
      },
      {
        weak: "Analyzed large datasets.",
        strong:
          "Built Spark pipeline on 120M-row clickstream; surfaced 6 product features driving 9% activation lift in experiment.",
      },
    ],
    mistakes: [
      "Research-only CV for industry DS roles",
      "Listing every Kaggle badge without work proof",
      "No business metric tied to models",
      "Omitting SQL for analytics-heavy postings",
    ],
  }),
  p({
    slug: "web-developer",
    roleLabel: "Web Developer",
    ctrHook: "HTML CSS JS Stack",
    intro:
      "Web developer resume ATS scan — HTML, CSS, JavaScript, frameworks, and accessibility keywords recruiters search.",
    keywordFocus: ["HTML", "CSS", "JavaScript", "React", "accessibility"],
    parseFailures: [
      "Frontend stack only in skills icons",
      "No lighthouse or performance metrics",
      "Accessibility (WCAG) missing when posting requires",
      "WordPress vs custom dev unclear",
    ],
    checklist: [
      "HTML, CSS, JavaScript in recent project bullets",
      "Framework names: React, Vue, Next.js as applicable",
      "Responsive and accessibility terms when relevant",
      "Performance or Core Web Vitals improvements quantified",
    ],
    keywordClusters: [
      { title: "Frontend", terms: "HTML5, CSS3, JavaScript, TypeScript, React, Vue, responsive design." },
      { title: "Quality", terms: "WCAG, Lighthouse, cross-browser, unit tests, ESLint, performance." },
      { title: "Delivery", terms: "CMS, WordPress, API integration, Git, deployment, CI/CD." },
    ],
    examples: [
      {
        weak: "Built responsive websites.",
        strong:
          "Developed 12 marketing sites in Next.js; improved average Lighthouse performance score from 58 to 91 and cut LCP 1.4s.",
      },
      {
        weak: "Maintained client websites.",
        strong:
          "Maintained WordPress + custom JS for 8 client properties; reduced plugin-related downtime to <0.1% over 12 months.",
      },
    ],
    mistakes: [
      "Listing WordPress only for React engineer posting",
      "No live project outcomes—only course certificates",
      "Embedding site screenshots without text stack proof",
      "Ignoring mobile-first keywords in posting",
    ],
  }),
];

export function getProgrammaticProfessionSlugs(): string[] {
  return PROGRAMMATIC_PROFESSION_CONFIGS.map((c) => c.slug);
}
