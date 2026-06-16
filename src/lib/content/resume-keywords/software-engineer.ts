import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "software-engineer";
const ROLE = "Software Engineer";

export const softwareEngineerKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Software engineer keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Software Engineer Resume Keywords — ATS List (2026)",
    description:
      "Software engineer resume keywords for ATS: languages, frameworks, cloud, CI/CD & action verbs. Copy-ready lists + mistakes to avoid—free checker included.",
    h1: "Software Engineer Resume Keywords for ATS",
    primaryKeyword: "software engineer resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Software Engineer Resume Keywords — ATS List (2026)",
    description:
      "Software engineer resume keywords for ATS: languages, frameworks, cloud, CI/CD & action verbs. Copy-ready lists + mistakes to avoid—free checker included.",
  },
  relatedSlugs: ["data-analyst", "product-manager", "business-analyst"],
  faqItems: [
    {
      question: "What keywords should a software engineer resume include?",
      answer:
        "Prioritize languages and frameworks from the job post (e.g. Python, React, AWS), plus delivery terms like CI/CD, APIs, microservices, and unit testing—placed inside experience bullets with metrics.",
    },
    {
      question: "How many technical skills should I list?",
      answer:
        "Cover must-haves from the posting in recent roles. A focused skills section of 8–12 defensible tools beats a 40-item cloud with no proof.",
    },
    {
      question: "Should I list every language I have touched?",
      answer:
        "Only languages and frameworks you can discuss in a technical interview. ATS filters on terms, but humans verify depth.",
    },
    {
      question: "How do I match keywords to a specific job?",
      answer:
        "Extract terms with the ATS Keywords Finder, then run Resume Match Analyzer on the same posting. Mirror exact spellings (JavaScript vs JS) when accurate.",
    },
    {
      question: "Do software engineers need soft skills on a resume?",
      answer:
        "Yes—collaboration, code review, mentoring, and cross-functional delivery belong in bullets alongside stack terms, especially for senior roles.",
    },
  ],
  body: `
Use this **software engineer resume keywords** database when tailoring for ATS filters and technical recruiter searches. Keywords work when they appear in **experience bullets with proof**—not in invisible lists.

## Most common ATS keywords for software engineers

| Category | High-frequency terms |
|----------|---------------------|
| Languages | Python, JavaScript, TypeScript, Java, Go, C++, SQL |
| Frontend | React, Angular, Vue.js, HTML, CSS, responsive design |
| Backend | Node.js, REST APIs, GraphQL, microservices, serverless |
| Cloud | AWS, Azure, GCP, Docker, Kubernetes, Terraform |
| Data | PostgreSQL, MongoDB, Redis, Elasticsearch, data pipelines |
| Delivery | CI/CD, Git, GitHub Actions, Jenkins, Agile, Scrum, SDLC |
| Quality | unit testing, integration tests, TDD, code review, observability |

## Technical skills keywords

Group by what you actually shipped:

- **Languages & runtimes** — Python 3, Java 17, Node.js, TypeScript
- **Frameworks** — React, Next.js, Spring Boot, Django, FastAPI
- **Infrastructure** — AWS (EC2, S3, Lambda), Kubernetes, Docker, Helm
- **Practices** — microservices, event-driven architecture, API design, caching
- **Monitoring** — Datadog, Prometheus, Grafana, logging, on-call

Spell tool names exactly as the employer writes them in the job description.

## Soft skills keywords

Weave into bullets—not a separate fluff paragraph:

- cross-functional collaboration
- technical mentorship
- code review culture
- stakeholder communication
- incident response / on-call ownership
- documentation and runbooks
- pair programming
- sprint planning and estimation

## Action verbs for software engineers

Led · Built · Designed · Implemented · Optimized · Deployed · Automated · Refactored · Scaled · Reduced · Architected · Integrated · Shipped · Debugged · Migrated · Secured

Pair each verb with scope and a metric: latency, uptime, deploy frequency, test coverage, cost reduction.

## Industry-specific phrases

- "Reduced p99 latency by 35% after optimizing PostgreSQL queries and caching layer"
- "Built CI/CD pipeline (GitHub Actions) cutting release cycle from weekly to daily"
- "Designed REST and GraphQL APIs serving 2M+ requests/day with 99.9% uptime"
- "Led migration from monolith to microservices on AWS ECS"
- "Improved test coverage from 42% to 88% across core payment services"

## Common keyword mistakes

- **Skills dump** — 30 technologies with no context in Experience
- **Buzzwords without metrics** — "cloud-native synergies" instead of "migrated 12 services to AWS Lambda"
- **Wrong title** — "Code Ninja" instead of "Software Engineer" or "Backend Developer"
- **Synonym mismatch** — resume says "JS" but posting requires "JavaScript"
- **Design-heavy PDF** — keywords trapped in graphics parsers cannot read

## Example resume section (keywords in context)

**Experience — Stripe · Software Engineer** · Jun 2021 – Present

- Built payment reconciliation service in **Python** and **PostgreSQL**, processing 1.2M transactions/day with 99.95% accuracy.
- Implemented **CI/CD** with **GitHub Actions** and **Docker**, reducing deploy time from 45 min to 8 min.
- Designed **REST APIs** consumed by 14 internal teams; added **Redis** caching cutting average latency 28%.
- Led **code reviews** and mentored 3 junior engineers on **React** and **TypeScript** frontend patterns.

**Skills:** Python · TypeScript · React · AWS · Docker · Kubernetes · PostgreSQL · CI/CD · REST APIs · Agile

${keywordsPageFooter(SLUG, ROLE)}
`,
};
