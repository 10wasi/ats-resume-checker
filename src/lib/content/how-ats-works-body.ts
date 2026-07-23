export const HOW_ATS_WORKS_PATH = "/how-ats-works" as const;

export const howAtsWorksBody = `
Applicant tracking systems (ATS) are the **HR technology** layer between your application and a human recruiter. Understanding how **resume screening** works—globally, not just in one country—helps you **improve resume score** signals and avoid silent rejections after apply.

This guide answers **what** ATS does, **why** resumes fail parsing, **how** to fix it, and **what to do next**. For the full master reference, see the [Complete ATS Resume Optimization Guide](/complete-guide-ats-resume-optimization).

[Run the free ATS resume checker →](/resume-checker)

## Who this page is for

Job seekers applying through employer portals, LinkedIn Easy Apply, and job boards where **hiring software** parses uploads before humans read them. Especially useful if you get impressions in search but no interview callbacks.

## Who should not rely on this alone

If you fail hard filters (visa, clearance, required degree), ATS optimization cannot override them. Pair this with role-specific advice from [profession hubs](/resource-hub) for executive or career-change pivots.

---

## What is an ATS?

An **ATS** (applicant tracking system) stores job applications, runs a **resume parser**, indexes searchable text, and helps recruiters filter candidates. Common platforms include Workday, Greenhouse, Lever, Taleo, SAP SuccessFactors, iCIMS, and regional equivalents used by employers worldwide.

ATS is not a single national system. Multinational companies, remote-first teams, and local employers all use similar **candidate screening** patterns: parse → index → search → skim.

### Related entities (plain language)

| Term | Meaning |
|------|---------|
| Resume parser | Software that extracts text into fields (employer, title, dates) |
| Resume screening | Automated and human review before interviews |
| Keyword optimization | Placing posting terms where parsers and recruiters search |
| Resume score | Estimate of parse health and keyword coverage |
| Job description matching | Overlap between one posting and your resume text |

---

## Why resumes fail ATS (benefits of fixing vs drawbacks of ignoring)

| Ignoring ATS | Fixing parse + keywords |
|--------------|-------------------------|
| Strong experience stays invisible to search | Recruiters find you for tool/title queries |
| High apply volume, low interview rate | Better conversion per application |
| Frustration and false "I'm not qualified" narrative | Data-driven fixes you can verify |

**Drawback of over-optimizing:** Keyword stuffing without proof hurts recruiter trust. Optimize with integrity.

Common failure paths: [Resume rejected by ATS](/resume-rejected-by-ats) · [Why resume gets rejected](/why-resume-gets-rejected) · [Resume not passing ATS](/resume-not-passing-ats)

---

## How ATS checks your resume (5 layers)

\`\`\`
Upload → Parse → Index → Match/Filter → Recruiter skim → Interview
\`\`\`

1. **Parse** — Can text be extracted from PDF or Word in logical order?
2. **Index** — Are skills, titles, employers, and dates stored as searchable fields?
3. **Match** — Does resume language overlap with the job posting's requirements?
4. **Filter** — Do minimum criteria (years, certifications, location) pass automated rules?
5. **Human skim** — Recruiters review survivors in ~6 seconds—often searching the same keywords.

ResumeIQ focuses on steps 1–3 because that is where most fixable failures happen before anyone reads your story.

### Mini case study

A data analyst applied with a two-column Canva PDF. The **resume parser** read skills from the sidebar as empty. Recruiter search for "SQL + Tableau" missed them. After rebuilding in Google Docs with the same bullets, the profile matched and they reached a phone screen—same qualifications, different **resume formatting**.

---

## How resume scoring works (simplified)

| Signal | Why it matters |
|--------|----------------|
| Layout & parse health | Broken columns and graphics lose data |
| Keyword proof in bullets | Skills must appear with experience context |
| Standard headings | Experience, Education, Skills map to fields |
| Format flags | Tables, icons, and risky PDF exports |

Your **ATS compatibility score** reflects these signals on your master resume. A separate **resume match score** measures overlap with one job description.

| Score type | Measures | When to use |
|------------|----------|-------------|
| ATS score | File health + baseline keywords | Master resume QA |
| Match score | Overlap with one JD | Before each apply |
| Interview readiness | Composite priority list | Fix ordering |

Read the full [Methodology](/methodology) for weights, disclaimers, and what we do not claim.

---

## How keyword matching works

ATS and recruiters search for concrete terms: job titles, tools, certifications, methodologies. A **resume keyword analyzer** workflow:

1. Extract terms from the posting ([ATS keywords finder](/ats-keywords-finder))
2. Compare to your resume ([Resume Match Analyzer](/resume-job-description-match))
3. Add missing keywords only where you have honest proof
4. Re-run the [ATS Resume Checker](/resume-checker) on your export

### Common keyword mistakes

- Listing tools you cannot discuss in an interview
- Skills section only—no proof in experience bullets
- White-font or footer stuffing (hurts trust)
- Ignoring exact spelling from the posting

Avoid stuffing—unrelated keyword lists can hurt recruiter trust. Guide: [ATS resume keywords](/ats-resume-keywords) · [Resume keywords database](/resume-keywords)

---

## Before vs after: bullet that passes screening

**Before:** "Responsible for managing stakeholder relationships and project deliverables."

**After:** "Managed 12 cross-functional stakeholders across 3 Agile sprints; delivered CRM migration on time using Jira and Salesforce."

The second version gives **resume parsers** and recruiters searchable entities with scope.

---

## How to improve your scores (actionable steps)

1. Fix parse issues first (single column, plain text, standard headings)
2. Upgrade bullets with metrics and posting-aligned language
3. Tailor headline and summary per application
4. Run checklist QA before submit ([ATS Resume Checklist](/ats-resume-checklist-2026))
5. Compare to [Resume Examples Library](/resume-examples) for your role
6. Re-scan the **exact PDF** you will upload—not a draft in the editor

Improvement guide: [How to improve resume score](/how-to-improve-resume-score) · [ATS score explained](/ats-score-explained)

---

## ATS myths vs facts

| Myth | Fact |
|------|------|
| "ATS automatically rejects 75%" | Many failures are fixable parse and keyword gaps |
| "PDF always fails" | Selectable-text PDFs work; image scans fail |
| "One resume for all jobs" | Master resume + per-posting tailoring wins |
| "Cover letter replaces resume keywords" | Most pipelines index the resume file |

---

## Checklist: verify ATS readiness

- [ ] Extracted text order is correct in [checker](/resume-checker)
- [ ] Single column, standard headings
- [ ] Contact in body, not header graphic
- [ ] Five bullets with metrics and tools
- [ ] Match tool run against target posting
- [ ] Same file re-scanned after edits

---

## What the tool cannot detect

Automated **resume analysis** cannot predict recruiter preference, internal referrals, culture fit, or interview performance. It cannot override visa, clearance, or degree hard filters. See [privacy](/privacy) for file handling—we do not sell resume data.

---

## Next steps

1. **[Upload your resume](/resume-checker)** — see parser output and ATS score
2. **Fix format flags** before keywords
3. **Paste job description** into [match tool](/resume-job-description-match)
4. **Read master guide** — [Complete ATS optimization](/complete-guide-ats-resume-optimization)

Questions? See the [FAQ Center](/faq-center) or [ATS Guide Hub](/ats-guide).

---

## The recruiter's actual experience (after ATS)

Once a profile survives parse and keyword filters, a recruiter opens it in the ATS interface — not as a beautifully formatted PDF, but as extracted plain text fields. They are typically searching against specific queries and reviewing 20–50 profiles at once.

What they see in ~6 seconds:
- **Title field** — Does it match what they searched for?
- **Current employer and tenure** — Is it recent, relevant?
- **First bullet of most recent role** — Is there a metric? A recognizable tool?
- **Skills section** — Does it match must-have terms?

If any of those four fail, they click Next. Your 8-page career summary never gets read.

**Implication:** The most impactful resume edits are almost always at the top — title, summary, and the first two bullets of your most recent role. Fixing page 2 is lower priority than tightening page 1's first 6 lines.

---

## ATS by vendor: key differences that matter to you

Not all ATS systems behave identically. Here are known differences for the platforms most job seekers encounter:

| Platform | Used by | Known quirk for applicants |
|----------|---------|----------------------------|
| **Workday** | Large enterprise, Fortune 500 | Strong field parsing; supports PDF and DOCX reliably; internal job codes affect search |
| **Greenhouse** | Tech startups, mid-size | Clean parsing; match quality varies by recruiter search configuration |
| **Lever** | Growth-stage companies | Similar to Greenhouse; handles DOCX well |
| **Taleo (Oracle)** | Enterprise, government | Older parser; two-column layouts frequently scramble; always use plain DOCX |
| **iCIMS** | Healthcare, manufacturing | File type sensitive; DOCX preferred in many configurations |
| **SAP SuccessFactors** | Global enterprise | Handles multilingual resumes; keyword matching tied to job template configuration |
| **LinkedIn Easy Apply** | Global | Parses your LinkedIn profile first, then your uploaded file; profile-resume consistency matters |
| **SmartRecruiters** | SMB, European companies | Generally modern parser; PDF text extraction reliable for most standard templates |

**Rule of thumb:** When you do not know which ATS an employer uses, optimize for Taleo-level strictness (single-column, plain text, no tables or headers). That level of parse-friendliness works everywhere.

---

## How ATS handles different file types

| Format | Parse reliability | Notes |
|--------|------------------|-------|
| **DOCX (Word)** | Highest | Clean field extraction; most compatible across old and new systems |
| **PDF (text-based)** | High | Works if exported from Word/Google Docs with selectable text |
| **PDF (image/scanned)** | Fails | No extractable text; treated as blank by most parsers |
| **PDF (Canva/InDesign export)** | Variable | Graphics may be treated as images; text order often scrambled |
| **Google Docs → Download as PDF** | High | Generally clean; verify with copy-paste test |
| **RTF** | Medium | Supported by most systems but rarely necessary |
| **TXT** | Low | No formatting; loses section context |

Always run a copy-paste test: open your exported file, select all, paste into a text editor. If the result is out of order, parsers will see the same.

---

## Semantic entities ATS systems recognise

Modern ATS platforms index not just exact keywords but associated **semantic entities** — technical terms that hiring workflows are built around. Being fluent in the language of your target industry is keyword optimization done right:

- **Technology:** JavaScript/TypeScript, AWS/Azure/GCP, Docker/Kubernetes, SQL/NoSQL, CI/CD, Agile/Scrum
- **Finance:** GAAP, IFRS, FP&A, DCF, SOX compliance, P&L ownership
- **Healthcare:** EMR/EHR, HIPAA, patient triage, CPT codes, clinical documentation
- **Marketing:** CRM (Salesforce/HubSpot), SEO/SEM, Google Analytics, A/B testing, CAC/LTV
- **Project management:** PMP, Agile, Waterfall, JIRA, stakeholder management, OKRs

The [Resume Keywords Database](/resume-keywords) lists profession-specific terms. The [ATS Keywords Finder](/ats-keywords-finder) extracts them from your target job posting.

---

[CTA]

## Common ATS misconceptions — debunked

These circulate widely on job advice forums and cause candidates to focus on the wrong fixes:

| Misconception | What actually happens |
|---------------|----------------------|
| "ATS auto-rejects 75% of resumes" | ATS ranks and filters; most human shortlists involve recruiter judgment. Parse and keyword issues reduce ranking—not an automatic binary reject. |
| "You need a special ATS resume template" | Any clean single-column document works. Proprietary "ATS templates" often solve problems that do not exist while introducing new formatting quirks. |
| "White-text hidden keywords beat the system" | Recruiters see highlighted hidden text when they paste your file. It signals dishonesty and gets candidates disqualified at many companies. |
| "Higher keyword density = better ranking" | Repetition is a spam signal in both ATS and recruiter review. 2–3 honest appearances of a key term in context beats 12 stuffed appearances. |
| "PDF always fails ATS" | Text-based PDFs from Word/Docs parse well. The problem is image PDFs, scanned files, and design-tool exports — not PDF as a format. |
| "My ATS score is low so I failed" | Third-party tools estimate parse quality; they cannot replicate any specific employer's ATS configuration. Use scores for relative improvement tracking, not pass/fail certainty. |
| "ATS reads in the order I intended" | Only if you use a single-column layout with sequential reading flow. Multi-column layouts cause parsers to read across columns horizontally, mixing content from different sections. |

---

## Industry-specific ATS patterns

Different industries configure ATS differently:

**Technology:** Title matching is strict — "Software Engineer" and "Developer" are different searches. Certifications (AWS SAA, CKA) are often hard-filter fields. GitHub contributions are sometimes scraped by integrations.

**Healthcare:** Licensure numbers and credentials are required fields. Specialisation terms (ICU, NICU, perioperative) map to internal job codes. Location and availability are often hard filters.

**Finance/Accounting:** Regulatory terms (SOX, GAAP, FCA) are common required fields. Years of experience filters are frequently used for titles like "Senior" or "Manager."

**Creative/Marketing:** Portfolio links are extracted as separate fields in many systems. Tool fluency (Adobe suite, HubSpot, Google Analytics) drives keyword matching.

**Government/Public sector:** Often use legacy ATS (USAJobs, similar national platforms) with strict structured fields. Resumes must explicitly match job announcement language — even down to phrasing.

---

## Quick-fix priority order

When you have limited time before applying, fix in this sequence:

1. **Copy-paste test** — 5 minutes: Does extracted text read logically? If not, fix layout before everything else.
2. **Section headers** — 5 minutes: Are Experience, Education, Skills using standard labels?
3. **Contact in body** — 2 minutes: Name, email, phone in the document body — not locked in header/footer.
4. **First bullet of most recent role** — 15 minutes: Add a tool name + metric where you have proof.
5. **Keyword match** — 20 minutes: Run [Resume Match Analyzer](/resume-job-description-match) against target posting; add 5 missing terms to existing bullets.
6. **Re-export and re-check** — 5 minutes: Upload the exact binary to [ATS Resume Checker](/resume-checker) after each edit.

Total: under 60 minutes for most candidates. Start with the checker before editing so you have a baseline to compare against.

Explore all optimization guides in the [Career Success Hub](/career-success-hub) and the [ATS Knowledge Center](/knowledge-center).
`;
