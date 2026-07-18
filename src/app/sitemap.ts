import type { MetadataRoute } from "next";
import { getPostSlugs, getPostBySlug } from "@/lib/blog";
import { getAtsResumeRoleSlugs } from "@/lib/content/ats-resume-roles/registry";
import { getProfessionHubSlugs } from "@/lib/content/profession-hubs/registry";
import { getResumeKeywordsSlugs } from "@/lib/content/resume-keywords/registry";
import { getResumeExampleSlugs } from "@/lib/content/resume-examples/registry";
import { getResumeCheckerRoleSlugs } from "@/lib/content/resume-checker-roles/registry";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import {
  getSitemapLastModified,
  SITEMAP_DEFAULT_LAST_MODIFIED,
  SITEMAP_EXCLUDED_PATHS,
} from "@/lib/seo/sitemap-dates";

/** Pre-render at build — avoids serverless runtime failures on fetch. */
export const dynamic = "force-static";

type StaticPath = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly";
};

const STATIC_PATHS: StaticPath[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: RESUME_CHECKER_PATH, priority: 0.98, changeFrequency: "weekly" },
  { path: "/career-success-hub", priority: 0.96, changeFrequency: "weekly" },
  { path: "/resume-review", priority: 0.92, changeFrequency: "weekly" },
  { path: "/why-resume-not-getting-interviews", priority: 0.91, changeFrequency: "weekly" },
  { path: "/why-resume-gets-rejected", priority: 0.94, changeFrequency: "weekly" },
  { path: "/resume-rejected-by-ats", priority: 0.95, changeFrequency: "weekly" },
  { path: "/common-ats-resume-rejection-reasons", priority: 0.95, changeFrequency: "weekly" },
  { path: "/complete-guide-ats-resume-optimization", priority: 0.98, changeFrequency: "weekly" },
  { path: "/ai-resume-review", priority: 0.93, changeFrequency: "weekly" },
  { path: "/cv-checker", priority: 0.92, changeFrequency: "weekly" },
  { path: "/resume-not-passing-ats", priority: 0.9, changeFrequency: "weekly" },
  { path: "/resume-keywords-missing", priority: 0.9, changeFrequency: "weekly" },
  { path: "/how-to-tailor-resume-for-job-description", priority: 0.9, changeFrequency: "weekly" },
  { path: "/how-to-improve-resume-score", priority: 0.9, changeFrequency: "weekly" },
  { path: "/resume-mistakes-that-cost-interviews", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-screening-explained", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-optimization", priority: 0.93, changeFrequency: "weekly" },
  { path: "/resume-score-checker", priority: 0.95, changeFrequency: "weekly" },
  { path: "/resume-keywords-checker", priority: 0.91, changeFrequency: "weekly" },
  { path: "/resume-keywords", priority: 0.94, changeFrequency: "weekly" },
  { path: "/ats-resume-checker", priority: 0.94, changeFrequency: "weekly" },
  { path: "/resume-keyword-tool", priority: 0.92, changeFrequency: "weekly" },
  { path: "/ats-guide", priority: 0.93, changeFrequency: "weekly" },
  { path: "/how-ats-works", priority: 0.84, changeFrequency: "monthly" },
  { path: "/ats-keywords-finder", priority: 0.92, changeFrequency: "weekly" },
  { path: "/resume-bullet-generator", priority: 0.9, changeFrequency: "weekly" },
  { path: "/resume-skills-analyzer", priority: 0.9, changeFrequency: "weekly" },
  { path: "/resume-summary-generator", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-achievement-generator", priority: 0.89, changeFrequency: "weekly" },
  { path: "/knowledge-center", priority: 0.95, changeFrequency: "weekly" },
  { path: "/resource-hub", priority: 0.97, changeFrequency: "weekly" },
  { path: "/resume-optimization-platform", priority: 0.99, changeFrequency: "weekly" },
  { path: "/free-resume-checker-online", priority: 0.97, changeFrequency: "weekly" },
  { path: "/free-ats-score-checker", priority: 0.96, changeFrequency: "weekly" },
  { path: "/ats-resume-review", priority: 0.94, changeFrequency: "weekly" },
  { path: "/ats-resume-hub", priority: 0.95, changeFrequency: "weekly" },
  { path: "/resume-examples", priority: 0.92, changeFrequency: "weekly" },
  { path: "/ats-resume-examples", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ats-resume-keywords", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ats-resume-format", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ats-resume-mistakes", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ats-score-explained", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ats-friendly-resume-guide", priority: 0.9, changeFrequency: "monthly" },
  { path: "/resume-keywords-by-industry", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ats-resume-templates", priority: 0.9, changeFrequency: "monthly" },
  { path: "/resume-job-description-match", priority: 0.9, changeFrequency: "weekly" },
  { path: "/resume-match-score", priority: 0.91, changeFrequency: "weekly" },
  { path: "/ai-resume-rewrite", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
  { path: "/blog/how-ats-works", priority: 0.84, changeFrequency: "weekly" },
  { path: "/blog/resume-mistakes", priority: 0.84, changeFrequency: "weekly" },
  { path: "/blog/ats-keywords-guide", priority: 0.84, changeFrequency: "weekly" },
  { path: "/blog/remote-job-resume-tips", priority: 0.84, changeFrequency: "weekly" },
  { path: "/resume-action-verbs", priority: 0.88, changeFrequency: "monthly" },
  { path: "/resume-parsing", priority: 0.88, changeFrequency: "monthly" },
  { path: "/resume-objective", priority: 0.88, changeFrequency: "monthly" },
  { path: "/resume-headline-generator", priority: 0.89, changeFrequency: "weekly" },
  { path: "/cover-letter-generator", priority: 0.89, changeFrequency: "weekly" },
  { path: "/interview-question-generator", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-grammar-checker", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-formatter", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-template-builder", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-objective-generator", priority: 0.89, changeFrequency: "weekly" },
  { path: "/resume-skills-generator", priority: 0.89, changeFrequency: "weekly" },
  { path: "/ultimate-ats-resume-guide", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ats-resume-checklist-2026", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.75, changeFrequency: "monthly" },
  { path: "/methodology", priority: 0.84, changeFrequency: "monthly" },
  { path: "/how-we-score-resumes", priority: 0.84, changeFrequency: "monthly" },
  { path: "/our-algorithm", priority: 0.83, changeFrequency: "monthly" },
  { path: "/how-resume-analysis-works", priority: 0.83, changeFrequency: "monthly" },
  { path: "/editorial-policy", priority: 0.72, changeFrequency: "monthly" },
  { path: "/faq-center", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.65, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.65, changeFrequency: "monthly" },
];

function isExcluded(path: string): boolean {
  const normalized = path || "/";
  return SITEMAP_EXCLUDED_PATHS.has(normalized === "/" ? "" : normalized);
}

function makeEntry(
  base: string,
  path: string,
  opts: { priority: number; changeFrequency: "weekly" | "monthly"; lastModified?: Date }
): MetadataRoute.Sitemap[number] {
  return {
    url: `${base}${path}`,
    lastModified: opts.lastModified ?? getSitemapLastModified(path),
    changeFrequency: opts.changeFrequency,
    priority: opts.priority,
  };
}

function dedupeByUrl(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().replace(/\/$/, "");
  const hubLastMod = getSitemapLastModified("", SITEMAP_DEFAULT_LAST_MODIFIED);
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority, changeFrequency } of STATIC_PATHS) {
    if (isExcluded(path)) continue;
    entries.push(makeEntry(base, path, { priority, changeFrequency }));
  }

  for (const role of getAtsResumeRoleSlugs()) {
    const path = `/ats-resume/${role}`;
    if (isExcluded(path)) continue;
    entries.push(makeEntry(base, path, { priority: 0.85, changeFrequency: "monthly", lastModified: hubLastMod }));
  }

  for (const slug of getResumeKeywordsSlugs()) {
    const path = `/resume-keywords/${slug}`;
    if (isExcluded(path)) continue;
    entries.push(makeEntry(base, path, { priority: 0.88, changeFrequency: "monthly", lastModified: hubLastMod }));
  }

  for (const slug of getResumeExampleSlugs()) {
    const path = `/resume-examples/${slug}`;
    if (isExcluded(path)) continue;
    entries.push(makeEntry(base, path, { priority: 0.85, changeFrequency: "monthly", lastModified: hubLastMod }));
  }

  for (const slug of getProfessionHubSlugs()) {
    const path = `/profession/${slug}`;
    if (isExcluded(path)) continue;
    entries.push(makeEntry(base, path, { priority: 0.9, changeFrequency: "monthly", lastModified: hubLastMod }));
  }

  for (const role of getResumeCheckerRoleSlugs()) {
    const path = `/resume-checker/${role}`;
    if (isExcluded(path)) continue;
    entries.push(makeEntry(base, path, { priority: 0.88, changeFrequency: "weekly", lastModified: hubLastMod }));
  }

  for (const slug of getPostSlugs()) {
    const path = `/blog/${slug}`;
    if (isExcluded(path)) continue;
    const post = getPostBySlug(slug);
    entries.push(
      makeEntry(base, path, {
        priority: 0.7,
        changeFrequency: "monthly",
        lastModified: post?.date ? new Date(`${post.date}T00:00:00.000Z`) : hubLastMod,
      })
    );
  }

  return dedupeByUrl(entries);
}
