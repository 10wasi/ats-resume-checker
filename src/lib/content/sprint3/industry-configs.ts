import { expandIndustryBody } from "./industry-body-builder";

type IndustryConfig = {
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

function cfg(c: IndustryConfig) {
  return {
    ...c,
    body: expandIndustryBody(c),
  };
}

export const INDUSTRY_ROLE_CONFIGS = [
  cfg({
    slug: "software-engineer",
    roleLabel: "Software Engineer",
    ctrHook: "Dev Stack Keywords",
    intro:
      "Run a free ATS resume checker tuned for software engineering roles — parser test, stack keywords, and bullet strength before you apply.",
    keywordFocus: ["React", "Python", "AWS", "CI/CD", "system design"],
    parseFailures: [
      "Two-column Canva exports scramble skills and project order",
      "Icons replace plain-text stack names (React, Node, PostgreSQL)",
      "GitHub links without stack proof in bullet text",
      "Skills sidebar parsed after unrelated sections",
    ],
    checklist: [
      "Parser preview shows languages and frameworks in experience order",
      "Posting keywords mirrored exactly (React vs ReactJS)",
      "Each recent role includes one metric: scale, latency, users, or cost",
      "Certifications spelled out: AWS Solutions Architect, not icon row",
    ],
    keywordClusters: [
      {
        title: "Backend & platform",
        terms: "API design, microservices, PostgreSQL, Docker, Kubernetes, REST, gRPC, event-driven architecture.",
      },
      {
        title: "Frontend & product",
        terms: "TypeScript, React, accessibility (WCAG), performance budgets, design systems, unit testing.",
      },
      {
        title: "Delivery & quality",
        terms: "CI/CD, code review, Agile, on-call, incident response, observability, SLOs.",
      },
    ],
    examples: [
      {
        weak: "Worked on backend services using various technologies.",
        strong:
          "Built Node.js microservices on AWS ECS handling 2.1M daily requests; cut p95 latency 34% via query tuning and Redis cache.",
      },
      {
        weak: "Experience with React and frontend development.",
        strong:
          "Shipped React 18 dashboard used by 8K internal users; improved Lighthouse performance score from 61 to 89.",
      },
    ],
    mistakes: [
      "Listing 40 skills without project context",
      "Using PDF exported from design tools with hidden text layers",
      "Burying internships below unrelated older jobs",
      "Omitting CI/CD and testing terms when posting requires them",
    ],
  }),
  cfg({
    slug: "marketing-manager",
    roleLabel: "Marketing",
    ctrHook: "Campaign Metrics",
    intro:
      "Check marketing resumes for ATS keyword match — channel proof, ROI metrics, and MarTech tools recruiters filter on.",
    keywordFocus: ["SEO", "SEM", "ROI", "CRM", "content strategy"],
    parseFailures: [
      "Campaign metrics trapped in infographic blocks",
      "Channel acronyms only in logos, not text",
      "Generic 'managed campaigns' without CAC or ROAS",
      "CRM tool names missing from experience bullets",
    ],
    checklist: [
      "Channel names (SEO, paid social, email) appear in recent bullets",
      "At least two quantified outcomes: ROAS, MQL, pipeline, or revenue",
      "MarTech stack matches posting: HubSpot, Salesforce, GA4, etc.",
      "Brand vs performance roles use correct keyword emphasis",
    ],
    keywordClusters: [
      { title: "Demand gen", terms: "MQL, SQL, CAC, ROAS, funnel, attribution, A/B testing, landing pages." },
      { title: "Content & brand", terms: "Content strategy, editorial calendar, brand voice, thought leadership, SEO." },
      { title: "Analytics", terms: "GA4, Looker, cohort analysis, marketing mix modeling, CRM hygiene." },
    ],
    examples: [
      {
        weak: "Managed digital marketing campaigns for the company.",
        strong:
          "Ran paid social and SEM programs with $420K annual budget; lowered CAC 22% while growing MQL volume 31% YoY.",
      },
      {
        weak: "Responsible for SEO and content.",
        strong:
          "Led SEO roadmap for 180+ pages; increased organic sessions 48% in 9 months using technical fixes and keyword clusters.",
      },
    ],
    mistakes: [
      "Vanity metrics without business outcome",
      "Listing every channel without depth on the posting's focus",
      "Hiding tools inside image-based skill bars",
      "Using 'we' without clarifying your scope",
    ],
  }),
  cfg({
    slug: "finance",
    roleLabel: "Finance",
    ctrHook: "Modeling & Compliance",
    intro:
      "Finance resume ATS scan — modeling, FP&A, and compliance keywords with parse-safe formatting for banking and corporate roles.",
    keywordFocus: ["FP&A", "Excel", "GAAP", "forecasting", "variance analysis"],
    parseFailures: [
      "Financial models referenced but tools not in text (Excel, Anaplan)",
      "Compliance terms abbreviated without full spelling once",
      "Tables for certifications that parsers skip",
      "Deal values buried in prose without currency and scale",
    ],
    checklist: [
      "FP&A, treasury, or accounting keywords match posting title",
      "GAAP/IFRS mentioned when required; spell out once",
      "Excel advanced functions or BI tools in bullets with outcomes",
      "Budget or revenue scope stated with $ or % variance",
    ],
    keywordClusters: [
      { title: "Corporate finance", terms: "FP&A, budgeting, forecasting, variance analysis, board reporting, scenario modeling." },
      { title: "Accounting & close", terms: "GAAP, reconciliation, month-end close, audit support, internal controls." },
      { title: "Tools", terms: "Excel, SQL, Power BI, NetSuite, SAP, Anaplan, Hyperion." },
    ],
    examples: [
      {
        weak: "Prepared financial reports for leadership.",
        strong:
          "Built rolling 13-week cash forecast in Excel for $90M business unit; improved forecast accuracy to within 3% of actuals.",
      },
      {
        weak: "Supported audit and compliance activities.",
        strong:
          "Led SOX testing for revenue cycle; remediated 4 control gaps ahead of external audit with zero material findings.",
      },
    ],
    mistakes: [
      "Confidential deal details without anonymized scale",
      "Listing CFA/CPA only as acronyms",
      "Multi-column CV templates from non-US markets without text-first export",
      "Soft skills without analytical proof",
    ],
  }),
  cfg({
    slug: "accountant",
    roleLabel: "Accounting",
    ctrHook: "GAAP & ERP Terms",
    intro:
      "Accounting resume ATS scan — GAAP, ERP systems, and close-process keywords with parse-safe formatting.",
    keywordFocus: ["GAAP", "SAP", "QuickBooks", "reconciliation", "audit"],
    parseFailures: [
      "ERP names only in a logo strip",
      "Certifications in tables parsers ignore",
      "Reconciliation work without account types or volume",
      "Tax vs audit vs industry accounting keywords mixed without focus",
    ],
    checklist: [
      "ERP and GL systems in experience bullets",
      "CPA or equivalent spelled out in full once",
      "Close cycle language: month-end, journal entries, reconciliations",
      "Industry context when posting specifies (public, nonprofit, SaaS)",
    ],
    keywordClusters: [
      { title: "Core accounting", terms: "General ledger, AP/AR, reconciliations, accruals, fixed assets, payroll." },
      { title: "Compliance", terms: "GAAP, SOX, audit support, internal controls, tax provision coordination." },
      { title: "Systems", terms: "SAP, Oracle, NetSuite, QuickBooks, BlackLine, Excel pivot models." },
    ],
    examples: [
      {
        weak: "Handled accounts payable and receivable.",
        strong:
          "Managed AP/AR for 120 vendors; reduced DSO from 48 to 36 days through automated dunning and reconciliation controls.",
      },
      {
        weak: "CPA with audit experience.",
        strong:
          "Certified Public Accountant (CPA); led external audit PBC for $40M revenue entity with zero adjusted entries.",
      },
    ],
    mistakes: [
      "Duty lists without close-cycle metrics",
      "Mixing bookkeeping and controller keywords without targeting role level",
      "Scanned PDFs from paper documents",
      "Omitting software version or module names when posting lists them",
    ],
  }),
  cfg({
    slug: "healthcare",
    roleLabel: "Healthcare",
    ctrHook: "Clinical & Compliance",
    intro:
      "Healthcare resume checker — clinical credentials, EMR systems, and compliance keywords for hospital and clinic ATS filters.",
    keywordFocus: ["EMR", "HIPAA", "patient care", "RN", "clinical"],
    parseFailures: [
      "License numbers in headers parsers misread",
      "Clinical acronyms without spelled-out credentials once",
      "Shift volume and unit type missing from nursing bullets",
      "HIPAA/compliance mentioned without process context",
    ],
    checklist: [
      "License and certification spelled out: Registered Nurse (RN), BLS, ACLS",
      "EMR names in text: Epic, Cerner, Meditech",
      "Patient population and unit type when relevant",
      "Compliance terms tied to workflows you performed",
    ],
    keywordClusters: [
      { title: "Clinical", terms: "Patient assessment, care plans, interdisciplinary team, evidence-based practice, bedside manner." },
      { title: "Systems & compliance", terms: "Epic, Cerner, HIPAA, infection control, Joint Commission, quality improvement." },
      { title: "Administration", terms: "Staff scheduling, budget, throughput, patient satisfaction (HCAHPS), utilization review." },
    ],
    examples: [
      {
        weak: "Provided patient care on medical-surgical unit.",
        strong:
          "Staff RN on 32-bed med-surg unit; managed caseload of 5–6 patients using Epic documentation with 96% chart-completion compliance.",
      },
      {
        weak: "Ensured HIPAA compliance.",
        strong:
          "Trained 18 staff on HIPAA privacy workflows; reduced PHI-related incidents to zero over 14-month period.",
      },
    ],
    mistakes: [
      "Photo headers that break parser order",
      "Listing every rotation without targeting specialty posting",
      "Using only abbreviations for licenses",
      "Omitting EMR name when posting requires Epic experience",
    ],
  }),
  cfg({
    slug: "students",
    roleLabel: "Students",
    ctrHook: "Projects & Internships",
    intro:
      "Student resume ATS check — projects, internships, and coursework keywords when work history is limited.",
    keywordFocus: ["internship", "project", "GPA", "coursework", "leadership"],
    parseFailures: [
      "Course titles without skills extracted (Data Structures → Python, algorithms)",
      "Club leadership without scope or outcomes",
      "Infographic resumes from university templates",
      "Skills section without project proof",
    ],
    checklist: [
      "Projects section with tools and measurable outcomes",
      "Internships treated like jobs with verb-led bullets",
      "GPA included only if strong and posting allows",
      "Coursework keywords mirror posting stack",
    ],
    keywordClusters: [
      { title: "Experience substitutes", terms: "Capstone, hackathon, research assistant, teaching assistant, volunteer leadership." },
      { title: "Technical students", terms: "Git, Python, Java, SQL, cloud labs, open-source contributions." },
      { title: "Business students", terms: "Case competition, Excel modeling, market research, presentation, stakeholder." },
    ],
    examples: [
      {
        weak: "Worked on a group project for class.",
        strong:
          "Built Python Flask app for campus event booking; deployed on AWS EC2 serving 200+ monthly active users for student org.",
      },
      {
        weak: "Member of finance club.",
        strong:
          "Vice President, Finance Club — organized 4 employer panels; grew membership 60% and secured $3K sponsorship for case competition.",
      },
    ],
    mistakes: [
      "High school content crowding out college projects",
      "Objective paragraphs instead of keyword-rich summary",
      "Unparseable Canva layouts",
      "Applying to senior titles without internship evidence",
    ],
  }),
  cfg({
    slug: "freshers",
    roleLabel: "Freshers",
    ctrHook: "Entry-Level Keywords",
    intro:
      "Fresher resume ATS test — entry-level keywords, training, and project proof for first-job applications.",
    keywordFocus: ["entry level", "training", "internship", "certification", "communication"],
    parseFailures: [
      "Empty experience section with no project substitute",
      "Training programs listed without skills gained",
      "Regional degree titles not matched to posting language",
      "Generic 'quick learner' without tool evidence",
    ],
    checklist: [
      "Education section includes relevant coursework and tools",
      "Internships, apprenticeships, or bootcamps with outcomes",
      "Certifications spelled out (Google IT Support, AWS Cloud Practitioner)",
      "Soft skills paired with tool or project proof",
    ],
    keywordClusters: [
      { title: "IT freshers", terms: "Java, .NET, SQL, manual testing, SDLC, Agile basics, Git." },
      { title: "Business freshers", terms: "Customer service, CRM, Excel, reporting, KPO/BPO process terms." },
      { title: "Graduate programs", terms: "Rotational program, trainee, associate, campus hire, onboarding." },
    ],
    examples: [
      {
        weak: "Fresher looking for opportunity to learn.",
        strong:
          "Completed 6-month Java full-stack bootcamp; capstone inventory API using Spring Boot and MySQL with JWT auth deployed on Render.",
      },
      {
        weak: "Good communication and team skills.",
        strong:
          "Resolved 40+ customer tickets daily in internship using Zendesk; maintained 4.8/5 CSAT over 3-month period.",
      },
    ],
    mistakes: [
      "Multiple unrelated career targets in one resume file",
      "Length over one page without substance",
      "Copy-paste summaries from online templates",
      "Wrong file type for portal (image PDF)",
    ],
  }),
  cfg({
    slug: "manager",
    roleLabel: "Manager",
    ctrHook: "Team & P&L Scope",
    intro:
      "Manager resume ATS check — team size, budget scope, and leadership keywords general managers and line managers need.",
    keywordFocus: ["P&L", "headcount", "performance reviews", "OKRs", "cross-functional"],
    parseFailures: [
      "Leadership clichés without team size or budget",
      "Promotions not clear in title progression",
      "Cross-functional work without naming partner functions",
      "Metrics only in interview stories, not resume text",
    ],
    checklist: [
      "Team size and reporting structure in recent role",
      "Budget, revenue, or cost scope when applicable",
      "Performance management and hiring keywords if posting lists them",
      "OKR or KPI language matching employer methodology",
    ],
    keywordClusters: [
      { title: "People leadership", terms: "Hiring, coaching, performance reviews, succession planning, engagement." },
      { title: "Operations", terms: "P&L, forecasting, process improvement, SLA, vendor management." },
      { title: "Strategy", terms: "OKRs, roadmap, stakeholder alignment, change management, executive communication." },
    ],
    examples: [
      {
        weak: "Managed team and delivered results.",
        strong:
          "Led 12-person operations team across 3 sites; improved on-time delivery from 91% to 97% while reducing overtime 15%.",
      },
      {
        weak: "Responsible for budget.",
        strong:
          "Owned $2.4M OPEX budget; renegotiated vendor contracts saving $180K annually without service-level regression.",
      },
    ],
    mistakes: [
      "Individual contributor bullets after manager title",
      "No evidence of developing others",
      "Hiding employment gaps without concise context",
      "Using internal codenames recruiters cannot search",
    ],
  }),
  cfg({
    slug: "project-manager",
    roleLabel: "Project Manager",
    ctrHook: "Agile & Scope Proof",
    intro:
      "Free ATS check for project managers — Agile terms, budget scope, and cross-functional proof parsed cleanly.",
    keywordFocus: ["Agile", "Scrum", "stakeholder", "budget", "risk"],
    parseFailures: [
      "Methodology buzzwords without squad size or release cadence",
      "Budget and timeline missing from delivery bullets",
      "Jira/MS Project only in skills cloud",
      "Risk register work not described in searchable terms",
    ],
    checklist: [
      "Agile, Scrum, SAFe, or Waterfall terms match posting",
      "Tools in bullets: Jira, MS Project, Smartsheet, Confluence",
      "Scope: budget, team size, geography, or user count",
      "PMP or PRINCE2 spelled out when held",
    ],
    keywordClusters: [
      { title: "Delivery", terms: "Sprint planning, backlog grooming, release train, milestone, critical path, RAID log." },
      { title: "Stakeholders", terms: "Executive steering, change control, communication plan, vendor governance." },
      { title: "Outcomes", terms: "On-time delivery, budget variance, scope creep reduction, NPS, adoption." },
    ],
    examples: [
      {
        weak: "Managed Agile projects with cross-functional teams.",
        strong:
          "Scrum Master for 9-person squad; delivered 4 releases on schedule for $1.2M platform migration with 99.2% uptime cutover.",
      },
      {
        weak: "Tracked risks and issues.",
        strong:
          "Maintained RAID log for 18-month ERP rollout; escalated 3 critical risks early, avoiding $400K projected delay cost.",
      },
    ],
    mistakes: [
      "Confusing project manager with product manager keywords",
      "Listing every methodology without depth",
      "No numeric scope on largest project",
      "Certifications omitted when posting requires PMP",
    ],
  }),
  cfg({
    slug: "teachers",
    roleLabel: "Teachers",
    ctrHook: "Curriculum & Standards",
    intro:
      "Teacher resume ATS scan — certification, grade level, and curriculum keywords for school district applicant systems.",
    keywordFocus: ["lesson plan", "classroom management", "state standards", "IEP", "differentiation"],
    parseFailures: [
      "State certification not spelled out in full",
      "Grade levels buried in narrative paragraphs",
      "IEP/504 experience without compliance-safe wording",
      "Technology tools (Google Classroom) only as icons",
    ],
    checklist: [
      "Teaching license state and subject area in header or summary",
      "Grade levels and class sizes in experience bullets",
      "Assessment and differentiation keywords from posting",
      "Student outcome metrics when ethical and available",
    ],
    keywordClusters: [
      { title: "Instruction", terms: "Differentiated instruction, formative assessment, lesson planning, literacy, STEM." },
      { title: "Compliance", terms: "IEP, 504, MTSS, PBIS, parent communication, state standards alignment." },
      { title: "Technology", terms: "Google Classroom, Canvas, LMS, educational software, data-driven instruction." },
    ],
    examples: [
      {
        weak: "Taught math to middle school students.",
        strong:
          "Taught 7th-grade math to 120 students across 5 sections; raised state assessment proficiency 12 points using data-driven small groups.",
      },
      {
        weak: "Worked with special education students.",
        strong:
          "Co-taught inclusion Algebra I; implemented IEP accommodations for 18 students while maintaining 92% assignment completion rate.",
      },
    ],
    mistakes: [
      "Philosophy paragraphs replacing keyword-rich summary",
      "Omitting certification number field when district portal expects it",
      "Using decorative borders that break parsers",
      "Listing unrelated part-time jobs before teaching experience",
    ],
  }),
  cfg({
    slug: "graphic-designer",
    roleLabel: "Graphic Designer",
    ctrHook: "Tools in Plain Text",
    intro:
      "Graphic designer resume parser test — portfolio links plus Adobe and Figma tools in selectable ATS text.",
    keywordFocus: ["Adobe Creative Suite", "Figma", "brand guidelines", "UI", "print"],
    parseFailures: [
      "Portfolio-only PDF with minimal selectable text",
      "Tool names as icons in skill grid",
      "Print vs digital specialties not tagged in bullets",
      "Brand project names without deliverable type",
    ],
    checklist: [
      "Illustrator, Photoshop, InDesign, Figma in bullet text",
      "Deliverable types: packaging, social, UI, motion",
      "Brand guidelines or design system keywords when relevant",
      "Web portfolio URL plus repeated tool names in body",
    ],
    keywordClusters: [
      { title: "Brand & marketing", terms: "Brand identity, style guide, campaign assets, typography, color systems." },
      { title: "Digital product", terms: "UI design, Figma components, responsive layout, handoff to engineering." },
      { title: "Production", terms: "Print-ready files, prepress, CMYK, accessibility contrast, asset management." },
    ],
    examples: [
      {
        weak: "Created graphics for social media.",
        strong:
          "Designed 40+ Instagram and LinkedIn assets in Figma for B2B SaaS rebrand; improved engagement rate 26% over 8-week campaign.",
      },
      {
        weak: "Proficient in Adobe Suite.",
        strong:
          "Delivered print and digital packaging in Illustrator and InDesign for 3 SKU lines; reduced prepress revision cycles by 30%.",
      },
    ],
    mistakes: [
      "Image-heavy resume without text-first export",
      "Only linking Behance without tool keywords in body",
      "Mixing UX research terms without evidence",
      "Omitting file format expertise when posting mentions it",
    ],
  }),
  cfg({
    slug: "hr-manager",
    roleLabel: "HR Professional",
    ctrHook: "HRIS & Compliance",
    intro:
      "HR professional resume checker — HRIS tools, employee relations, and compliance keywords for applicant tracking filters.",
    keywordFocus: ["HRIS", "Workday", "employee relations", "compliance", "talent acquisition"],
    parseFailures: [
      "HRIS names only in vendor logos",
      "Employee relations cases without scale or policy context",
      "Talent acquisition metrics missing time-to-fill",
      "Compliance training not tied to outcomes",
    ],
    checklist: [
      "HRIS systems match posting: Workday, BambooHR, ADP",
      "Headcount supported or reqs filled quantified",
      "ER and compliance terms when role requires them",
      "DEI initiatives with measurable participation or hiring outcomes",
    ],
    keywordClusters: [
      { title: "Talent acquisition", terms: "Full-cycle recruiting, sourcing, offer negotiation, employer branding, ATS admin." },
      { title: "HR operations", terms: "Onboarding, benefits administration, HRIS, payroll liaison, policy documentation." },
      { title: "Employee relations", terms: "Investigations, performance improvement, labor relations, compliance training." },
    ],
    examples: [
      {
        weak: "Handled employee relations issues.",
        strong:
          "Advised managers on 25+ ER cases; partnered with legal on 3 investigations while maintaining 94% employee survey trust score.",
      },
      {
        weak: "Used Workday for HR tasks.",
        strong:
          "Administered Workday HCM for 850-employee site; cut onboarding cycle time from 12 to 7 days via workflow automation.",
      },
    ],
    mistakes: [
      "Confidential case details without anonymized scale",
      "Generalist keyword dump for specialist posting",
      "No ATS/admin experience when role requires it",
      "Soft HR language without systems and metrics",
    ],
  }),
  cfg({
    slug: "data-analyst",
    roleLabel: "Data Analyst",
    ctrHook: "SQL & BI Keywords",
    intro:
      "Score your data analyst resume for ATS — SQL, Python, Tableau, and stakeholder language extracted the way hiring filters search.",
    keywordFocus: ["SQL", "Python", "Tableau", "Power BI", "stakeholder"],
    parseFailures: [
      "Skills trapped in chart graphics",
      "SQL mentioned without dialect or dataset scale",
      "Dashboards listed without business questions answered",
      "Stakeholder audience omitted from analytics bullets",
    ],
    checklist: [
      "SQL, Python, and BI tools in experience bullets",
      "Dataset size or row volume when ethical",
      "Executive or product stakeholder named when posting requires",
      "ETL or pipeline terms for engineering-adjacent roles",
    ],
    keywordClusters: [
      { title: "Analytics core", terms: "SQL, Python, R, statistics, A/B testing, cohort analysis, forecasting." },
      { title: "Visualization", terms: "Tableau, Power BI, Looker, dashboards, self-serve analytics, data storytelling." },
      { title: "Domain", terms: "Product analytics, marketing funnel, finance reporting, operations KPIs." },
    ],
    examples: [
      {
        weak: "Created dashboards for leadership.",
        strong:
          "Built Power BI executive dashboard tracking 12 KPIs across $50M product line; reduced monthly reporting time 20 hours.",
      },
      {
        weak: "Used SQL for analysis.",
        strong:
          "Wrote PostgreSQL queries on 80M-row events table; identified checkout drop-off driving 9% conversion lift after fix.",
      },
    ],
    mistakes: [
      "Tool list without business outcomes",
      "Claiming ML without project depth",
      "Screenshot dashboards embedded as images only",
      "Not tailoring domain keywords to posting industry",
    ],
  }),
  cfg({
    slug: "ux-designer",
    roleLabel: "UX Designer",
    ctrHook: "Research & Prototype",
    intro:
      "UX designer resume ATS check — research methods, Figma, and accessibility keywords product teams filter on.",
    keywordFocus: ["user research", "Figma", "wireframes", "usability testing", "accessibility"],
    parseFailures: [
      "Case study PDFs with minimal extractable text",
      "Research methods listed without sample size or outcome",
      "UI-only deliverables without UX process keywords",
      "Accessibility (WCAG) missing when posting requires it",
    ],
    checklist: [
      "Research methods in bullets: interviews, usability tests, surveys",
      "Figma or Sketch named with handoff or design system context",
      "Metrics: task success, SUS, conversion, support tickets",
      "Accessibility and inclusive design terms when relevant",
    ],
    keywordClusters: [
      { title: "Discovery", terms: "User interviews, journey mapping, personas, problem framing, competitive analysis." },
      { title: "Design", terms: "Wireframes, prototypes, design systems, Figma, interaction design, information architecture." },
      { title: "Validation", terms: "Usability testing, A/B tests, analytics, heuristic evaluation, WCAG 2.1." },
    ],
    examples: [
      {
        weak: "Conducted user research for mobile app.",
        strong:
          "Ran 14 moderated usability sessions on checkout flow; prioritized 6 fixes that raised mobile conversion 11% in 6 weeks.",
      },
      {
        weak: "Created wireframes in Figma.",
        strong:
          "Built Figma design system with 40+ components used by 3 product squads; cut design-dev handoff questions 35%.",
      },
    ],
    mistakes: [
      "Portfolio link without process keywords in resume body",
      "Visual resume exports parsers cannot read",
      "Calling UI work UX without research evidence",
      "Omitting collaboration with PM/engineering when posting stresses it",
    ],
  }),
  cfg({
    slug: "business-analyst",
    roleLabel: "Business Analyst",
    ctrHook: "Requirements & UAT",
    intro:
      "Business analyst resume ATS score — requirements, UAT, and stakeholder terms with parse-safe structure.",
    keywordFocus: ["requirements", "UAT", "SQL", "Jira", "stakeholder"],
    parseFailures: [
      "User stories listed without tool or delivery context",
      "SQL mentioned without business question answered",
      "UAT work without defect or acceptance metrics",
      "Agile terms without squad or release cadence",
    ],
    checklist: [
      "Requirements elicitation methods in recent bullets",
      "Jira or Azure DevOps named with backlog scope",
      "UAT coordination with outcome metrics",
      "SQL or data validation when posting requires it",
    ],
    keywordClusters: [
      { title: "Discovery", terms: "Stakeholder interviews, process mapping, gap analysis, BRD, user stories." },
      { title: "Delivery", terms: "UAT, acceptance criteria, change control, sprint demos, release notes." },
      { title: "Analysis", terms: "SQL, Excel, KPI dashboards, root cause analysis, cost-benefit." },
    ],
    examples: [
      {
        weak: "Gathered requirements from stakeholders.",
        strong:
          "Elicited 45 user stories for billing module with 12 stakeholders; reduced change requests 30% via prototype reviews in Figma.",
      },
      {
        weak: "Supported UAT testing.",
        strong:
          "Coordinated UAT for ERP upgrade with 25 testers; logged 89 defects and achieved 98% critical-path sign-off before go-live.",
      },
    ],
    mistakes: [
      "BA vs PM keyword confusion",
      "Tool list without domain context",
      "No link between analysis and shipped outcome",
      "Hiding certifications in graphics",
    ],
  }),
  cfg({
    slug: "customer-service",
    roleLabel: "Customer Service",
    ctrHook: "CSAT & CRM Proof",
    intro:
      "Customer service resume ATS test — CRM tools, CSAT metrics, and resolution-time proof recruiters search.",
    keywordFocus: ["CRM", "Zendesk", "CSAT", "resolution time", "escalation"],
    parseFailures: [
      "CRM tool names missing from bullets",
      "Volume handled not quantified",
      "CSAT or NPS only in interview talking points",
      "Channel mix (phone, chat, email) not searchable",
    ],
    checklist: [
      "CRM platform named: Zendesk, Salesforce Service Cloud, etc.",
      "Daily or weekly ticket volume when ethical",
      "CSAT, FCR, or AHT metrics in recent role",
      "Escalation and de-escalation keywords from posting",
    ],
    keywordClusters: [
      { title: "Operations", terms: "Ticket queue, SLA, escalation, knowledge base, workforce management." },
      { title: "Quality", terms: "CSAT, NPS, QA scores, call monitoring, coaching, FCR." },
      { title: "Tools", terms: "Zendesk, Intercom, Salesforce, LiveChat, CRM, help desk." },
    ],
    examples: [
      {
        weak: "Helped customers with questions.",
        strong:
          "Resolved 55+ Zendesk tickets daily across chat and email; maintained 4.7/5 CSAT over 6-month period.",
      },
      {
        weak: "Handled escalations.",
        strong:
          "Managed tier-2 escalations for billing disputes; reduced repeat contacts 18% through root-cause tagging in CRM.",
      },
    ],
    mistakes: [
      "Soft skills without tool or metric pairing",
      "Omitting channel specialization",
      "Generic duty lists",
      "Unparseable colorful resume templates",
    ],
  }),
  cfg({
    slug: "product-manager",
    roleLabel: "Product Manager",
    ctrHook: "Roadmap & Metrics",
    intro:
      "Product manager resume checker — roadmap, discovery, and KPI language aligned to each posting.",
    keywordFocus: ["roadmap", "discovery", "KPI", "Agile", "stakeholder"],
    parseFailures: [
      "Feature lists without user or revenue outcome",
      "Roadmap work without prioritization framework terms",
      "Agile mentioned without squad context",
      "B2B vs B2C keywords mixed without targeting",
    ],
    checklist: [
      "Discovery and prioritization methods: RICE, JTBD, opportunity solution tree",
      "KPIs: activation, retention, ARR, NPS tied to launches",
      "Cross-functional partners named: engineering, design, sales",
      "Agile delivery terms when posting requires Scrum experience",
    ],
    keywordClusters: [
      { title: "Strategy", terms: "Roadmap, OKRs, market sizing, competitive analysis, vision, PRD." },
      { title: "Discovery", terms: "Customer interviews, prototypes, experiments, beta programs, feedback loops." },
      { title: "Delivery", terms: "Backlog grooming, sprint goals, release notes, GTM alignment, adoption metrics." },
    ],
    examples: [
      {
        weak: "Owned product roadmap for SaaS platform.",
        strong:
          "Owned B2B analytics roadmap for 3 squads; shipped billing self-serve feature driving $1.1M ARR in first two quarters.",
      },
      {
        weak: "Worked with engineers and designers.",
        strong:
          "Led discovery with 22 customer interviews; prioritized MVP scope that cut time-to-value from 14 to 5 days for new accounts.",
      },
    ],
    mistakes: [
      "Project manager language without product outcomes",
      "Vanity feature launches without metrics",
      "No mention of data or experimentation when posting requires it",
      "Generic 'stakeholder management' without executive audience",
    ],
  }),
];

export function getIndustryConfig(slug: string) {
  return INDUSTRY_ROLE_CONFIGS.find((c) => c.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return INDUSTRY_ROLE_CONFIGS.map((c) => c.slug);
}
