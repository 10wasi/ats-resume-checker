import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "graphic-designer";
const ROLE = "Graphic Designer";

export const graphicDesignerKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Graphic designer keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Graphic Designer Resume Keywords — ATS List",
    description:
      "Graphic designer resume keywords: Adobe CC, brand systems & campaign terms for ATS resumes. Verbs, mistakes & plain-layout examples—free checker.",
    h1: "Graphic Designer Resume Keywords for ATS",
    primaryKeyword: "graphic designer resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Graphic Designer Resume Keywords — ATS List",
    description:
      "Graphic designer resume keywords: Adobe CC, brand systems & campaign terms for ATS resumes. Verbs, mistakes & plain-layout examples—free checker.",
  },
  relatedSlugs: ["marketing-manager", "software-engineer", "product-manager"],
  faqItems: [
    {
      question: "Can graphic designers use creative resume layouts for ATS?",
      answer:
        "Use a plain single-column ATS resume for online applications; keep portfolio PDFs for human reviewers. Test exports with the ATS Resume Checker.",
    },
    {
      question: "What design keywords should appear on an ATS resume?",
      answer:
        "Adobe Creative Cloud tools, brand identity, typography, layout, campaign deliverables, and production specs—as text, not icon grids.",
    },
    {
      question: "Should I link my portfolio on an ATS resume?",
      answer:
        "Yes—plain URL in contact block. Do not rely on embedded graphics for critical keywords.",
    },
    {
      question: "Print vs digital design keywords?",
      answer:
        "Mirror the posting—packaging, print production, social assets, UI collaboration, or motion terms as required.",
    },
    {
      question: "How do designers show metrics on resumes?",
      answer:
        "Assets produced, turnaround time, campaign reach, conversion lift from creative tests, or brand consistency across touchpoints.",
    },
  ],
  body: `
**Graphic designer resume keywords** must live in **plain text** for ATS—Adobe tools, deliverables, and campaign outcomes, not icon-only skill badges.

## Most common ATS keywords for graphic designers

Adobe Creative Cloud · Photoshop · Illustrator · InDesign · After Effects · Figma · brand identity · visual design · typography · layout · art direction · creative direction · print design · digital design · social media graphics · marketing collateral · UI collaboration · packaging design · photo editing · vector illustration · production-ready files · CMYK · RGB · brand guidelines · creative assets

## Technical skills keywords

Photoshop · Illustrator · InDesign · After Effects · Premiere Pro · Figma · Sketch · Canva · HTML/CSS basics · print production · prepress · color correction · asset management · DAM systems

## Soft skills keywords

creative problem solving · client communication · deadline management · collaboration with marketing · attention to detail · brand stewardship · feedback incorporation · presentation of concepts

## Action verbs

Designed · Created · Developed · Produced · Illustrated · Directed · Collaborated · Refreshed · Standardized · Delivered · Conceptualized · Edited · Streamlined · Executed · Enhanced

## Industry-specific phrases

- "Designed 120+ social assets per quarter aligned to **brand guidelines** in **Illustrator** and **Photoshop**"
- "Led **brand identity** refresh across 8 product lines; consistency audit score 94%"
- "Collaborated with marketing on campaign creative lifting **conversion** 15% on landing pages"
- "Prepared **print-ready** files for 500k-unit packaging run with zero prepress errors"

## Common keyword mistakes

- Portfolio layout submitted as ATS resume—text does not extract
- Skill icons instead of spelled-out Adobe CC tool names
- "Creative genius" without deliverable volume or campaign context
- Omitting print vs digital specialization when posting is specific
- Keywords only in portfolio URL with empty experience bullets

## Example resume section

**Experience — Nike · Graphic Designer** · May 2021 – Present

- Designed **digital** and **print** campaign assets in **Illustrator** and **InDesign** for seasonal launches (40+ deliverables/quarter).
- Maintained **brand identity** standards across global **social media** templates; audit compliance 94%.
- Collaborated with **marketing** on A/B creative tests improving **conversion** 15% on hero banners.
- Produced **production-ready** files for vendors; reduced revision cycles 20% via clear **typography** specs.

**Skills:** Adobe Creative Cloud · Photoshop · Illustrator · InDesign · brand identity · typography · print design

${keywordsPageFooter(SLUG, ROLE)}
`,
};
