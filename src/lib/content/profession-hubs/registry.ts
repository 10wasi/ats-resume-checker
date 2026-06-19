import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";

export const PROFESSION_HUBS_PATH = "/profession" as const;

export type ProfessionHubEntry = {
  slug: string;
  path: string;
  title: string;
  breadcrumbLabel: string;
  ctr: PageCtrMeta;
  intro: string;
  examplePath: string;
  keywordsPath: string;
  guidePath: string;
  mistakes: string[];
  faqItems: FaqItem[];
};

export const PROFESSION_HUBS: ProfessionHubEntry[] = [
  {
    slug: "software-engineer",
    path: "/profession/software-engineer",
    title: "Software Engineer",
    breadcrumbLabel: "Software engineers",
    ctr: {
      title: "Software Engineer Resume Hub — ATS Guide & Tools",
      description:
        "Software engineer resume hub: ATS example, keywords, mistakes & optimization guide. Free resume checker + match tool for global dev roles.",
      h1: "Software Engineer Resume Hub: ATS Optimization",
      primaryKeyword: "software engineer resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Everything for developer resumes—example, keyword lists, ATS guide, and free tools—in one interconnected hub.",
    examplePath: "/resume-examples/software-engineer",
    keywordsPath: "/resume-keywords/software-engineer",
    guidePath: "/ats-resume/software-engineer",
    mistakes: [
      "Two-column Canva templates that scramble code skills on parse",
      "Skills only in icons or charts—not plain-text bullets",
      "Missing stack terms from the job post in experience lines",
    ],
    faqItems: [
      {
        question: "What ATS keywords matter for software engineers?",
        answer:
          "Languages, frameworks, cloud tools, and delivery practices named in the posting—placed in recent bullets where you used them.",
      },
      {
        question: "One or two pages for a developer resume?",
        answer:
          "One page under ~5 years; two pages is normal for senior engineers with relevant depth.",
      },
    ],
  },
  {
    slug: "data-analyst",
    path: "/profession/data-analyst",
    title: "Data Analyst",
    breadcrumbLabel: "Data analysts",
    ctr: {
      title: "Data Analyst Resume Hub — ATS Keywords & Example",
      description:
        "Data analyst resume hub: SQL, Python, BI tools, ATS example & keyword database. Free resume match tool for analytics roles worldwide.",
      h1: "Data Analyst Resume Hub: ATS Optimization",
      primaryKeyword: "data analyst resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Analytics roles filter on SQL, Python, and dashboard proof. Connect example, keywords, and guides here.",
    examplePath: "/resume-examples/data-analyst",
    keywordsPath: "/resume-keywords/data-analyst",
    guidePath: "/ats-resume/data-analyst",
    mistakes: [
      "Listing tools without project context in bullets",
      "Burying SQL/Python below unrelated experience",
      "No measurable outcomes on dashboards or analyses",
    ],
    faqItems: [
      {
        question: "Should data analysts put SQL in skills or bullets?",
        answer: "Both—but proof belongs in experience bullets with outcomes, not a tool dump alone.",
      },
    ],
  },
  {
    slug: "product-manager",
    path: "/profession/product-manager",
    title: "Product Manager",
    breadcrumbLabel: "Product managers",
    ctr: {
      title: "Product Manager Resume Hub — ATS Example & Guide",
      description:
        "Product manager resume hub: roadmap, OKRs, discovery keywords, ATS example & optimization guide. Free checker included.",
      h1: "Product Manager Resume Hub: ATS Optimization",
      primaryKeyword: "product manager resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "PM resumes need shipping proof and metrics—not vision decks. Use example, keywords, and ATS guide together.",
    examplePath: "/resume-examples/product-manager",
    keywordsPath: "/resume-keywords/product-manager",
    guidePath: "/ats-resume/product-manager",
    mistakes: [
      "Buzzword summaries without shipped outcomes",
      "Confusing PM with project manager titles casually",
      "Missing experimentation or analytics terms from the posting",
    ],
    faqItems: [
      {
        question: "PM vs project manager on a resume?",
        answer:
          "Use the title that matches the posting. PM emphasizes product outcomes; project manager emphasizes delivery methodology.",
      },
    ],
  },
  {
    slug: "project-manager",
    path: "/profession/project-manager",
    title: "Project Manager",
    breadcrumbLabel: "Project managers",
    ctr: {
      title: "Project Manager Resume Hub — ATS Guide & Keywords",
      description:
        "Project manager resume hub: Agile, budget, stakeholder keywords, ATS example & mistakes guide. Free resume optimization tools.",
      h1: "Project Manager Resume Hub: ATS Optimization",
      primaryKeyword: "project manager resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Delivery roles search methodology, scale, and tools. This hub links your example, keywords, and optimization path.",
    examplePath: "/resume-examples/project-manager",
    keywordsPath: "/resume-keywords/project-manager",
    guidePath: "/ats-resume/project-manager",
    mistakes: [
      "Task lists without budget, timeline, or team scale",
      "Agile terms listed but not shown in bullets",
      "Non-standard section titles parsers cannot map",
    ],
    faqItems: [
      {
        question: "Which certifications help PM resumes in ATS?",
        answer:
          "Spell certifications fully if the job post uses long form (e.g., Project Management Professional).",
      },
    ],
  },
  {
    slug: "hr-manager",
    path: "/profession/hr-manager",
    title: "HR Professional",
    breadcrumbLabel: "HR professionals",
    ctr: {
      title: "HR Resume Hub — ATS Example & Keywords",
      description:
        "HR manager resume hub: talent acquisition, HRIS, employee relations keywords & ATS example. Free resume checker worldwide.",
      h1: "HR Professional Resume Hub: ATS Optimization",
      primaryKeyword: "HR resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "HR resumes must show hiring volume, systems, and policy work with parse-friendly structure.",
    examplePath: "/resume-examples/hr-manager",
    keywordsPath: "/resume-keywords/hr-manager",
    guidePath: "/ats-resume/hr-manager",
    mistakes: [
      "Generic people skills without HRIS or recruiting metrics",
      "Missing compliance or onboarding keywords from postings",
      "Creative layouts that hide contact details",
    ],
    faqItems: [
      {
        question: "Should HR resumes include metrics?",
        answer:
          "Yes—time-to-fill, retention, training completion, and requisition volume where accurate.",
      },
    ],
  },
  {
    slug: "marketing-manager",
    path: "/profession/marketing-manager",
    title: "Marketing Professional",
    breadcrumbLabel: "Marketing professionals",
    ctr: {
      title: "Marketing Resume Hub — ATS Keywords & Example",
      description:
        "Marketing manager resume hub: SEO, campaigns, ROI keywords, ATS example & optimization guide. Free match analyzer.",
      h1: "Marketing Professional Resume Hub: ATS Optimization",
      primaryKeyword: "marketing resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Marketing resumes need channel proof and numbers in plain text—not portfolio-only PDFs for ATS uploads.",
    examplePath: "/resume-examples/marketing-manager",
    keywordsPath: "/resume-keywords/marketing-manager",
    guidePath: "/ats-resume/marketing-manager",
    mistakes: [
      "Campaign results trapped in image headers",
      "Channel buzzwords without ROI or conversion metrics",
      "Omitting CRM/automation tools named in the job post",
    ],
    faqItems: [
      {
        question: "Do marketing resumes need a portfolio link?",
        answer:
          "Helpful for humans; ATS still needs plain-text skills and outcomes in the upload file.",
      },
    ],
  },
  {
    slug: "accountant",
    path: "/profession/accountant",
    title: "Accountant",
    breadcrumbLabel: "Accountants",
    ctr: {
      title: "Accountant Resume Hub — ATS Example & Keywords",
      description:
        "Accountant resume hub: GAAP, reconciliations, ERP keywords & ATS-friendly example. Free resume score checker.",
      h1: "Accountant Resume Hub: ATS Optimization",
      primaryKeyword: "accountant resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Finance postings search credentials, close cycles, and ERP systems—structured for parsers and recruiters.",
    examplePath: "/resume-examples/accountant",
    keywordsPath: "/resume-keywords/accountant",
    guidePath: "/ats-resume/accountant",
    mistakes: [
      "Credentials abbreviated differently than the posting",
      "Dense paragraph blocks instead of scannable bullets",
      "Missing ERP or compliance terms with real context",
    ],
    faqItems: [
      {
        question: "How long should an accountant resume be?",
        answer:
          "One page for early career; two pages acceptable with audit or multi-entity experience.",
      },
    ],
  },
  {
    slug: "customer-service",
    path: "/profession/customer-service",
    title: "Customer Service",
    breadcrumbLabel: "Customer service",
    ctr: {
      title: "Customer Service Resume Hub — ATS Guide",
      description:
        "Customer service resume hub: CSAT, CRM, ticket metrics, ATS example & keywords. Free resume optimization for support roles.",
      h1: "Customer Service Resume Hub: ATS Optimization",
      primaryKeyword: "customer service resume ATS",
      richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList"],
    },
    intro:
      "Support roles filter on CRM tools, CSAT, and handle time—show proof in ATS-readable bullets.",
    examplePath: "/resume-examples/customer-service",
    keywordsPath: "/resume-keywords/customer-service",
    guidePath: "/ats-resume/customer-service",
    mistakes: [
      "Soft-skill bullets without CRM or volume metrics",
      "Missing multilingual or channel keywords from postings",
      "Non-selectable PDF exports from design tools",
    ],
    faqItems: [
      {
        question: "What metrics help customer service resumes?",
        answer:
          "CSAT, first-contact resolution, average handle time, and ticket volume—when accurate.",
      },
    ],
  },
];

export function getProfessionHub(slug: string): ProfessionHubEntry | undefined {
  return PROFESSION_HUBS.find((p) => p.slug === slug);
}

export function getProfessionHubSlugs(): string[] {
  return PROFESSION_HUBS.map((p) => p.slug);
}
