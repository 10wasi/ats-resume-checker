import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/blog";
import { getAtsResumeRoleSlugs } from "@/lib/content/ats-resume-roles/registry";
import { getResumeKeywordsSlugs } from "@/lib/content/resume-keywords/registry";
import { getResumeExampleSlugs } from "@/lib/content/resume-examples/registry";
import { getSiteUrl } from "@/lib/site-url";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export default function sitemap(): MetadataRoute.Sitemap {
  /** Origin only, no trailing slash — every <loc> is `${base}/path`. */
  const base = getSiteUrl().replace(/\/$/, "");
  const staticPaths: {
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly";
  }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: RESUME_CHECKER_PATH, priority: 0.95, changeFrequency: "weekly" },
    {
      path: "/career-success-hub",
      priority: 0.96,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-review",
      priority: 0.92,
      changeFrequency: "weekly",
    },
    {
      path: "/why-resume-not-getting-interviews",
      priority: 0.91,
      changeFrequency: "weekly",
    },
    {
      path: "/why-resume-gets-rejected",
      priority: 0.91,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-not-passing-ats",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-keywords-missing",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/how-to-tailor-resume-for-job-description",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/how-to-improve-resume-score",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-mistakes-that-cost-interviews",
      priority: 0.89,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-screening-explained",
      priority: 0.89,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-optimization",
      priority: 0.93,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-score-checker",
      priority: 0.91,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-keywords-checker",
      priority: 0.91,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-keywords",
      priority: 0.94,
      changeFrequency: "weekly",
    },
    {
      path: "/ats-resume-checker",
      priority: 0.94,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-match-analyzer",
      priority: 0.93,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-keyword-tool",
      priority: 0.92,
      changeFrequency: "weekly",
    },
    {
      path: "/ats-guide",
      priority: 0.93,
      changeFrequency: "weekly",
    },
    {
      path: "/how-ats-works",
      priority: 0.84,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-keywords-finder",
      priority: 0.92,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-bullet-generator",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-skills-analyzer",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-summary-generator",
      priority: 0.89,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-achievement-generator",
      priority: 0.89,
      changeFrequency: "weekly",
    },
    {
      path: "/knowledge-center",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      path: "/ats-resume-hub",
      priority: 0.95,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-examples",
      priority: 0.92,
      changeFrequency: "weekly",
    },
    {
      path: "/ats-resume-examples",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-resume-keywords",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-resume-format",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-resume-mistakes",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-score-explained",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-friendly-resume-guide",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/resume-keywords-by-industry",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-resume-templates",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/resume-job-description-match",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      path: "/resume-match-score",
      priority: 0.91,
      changeFrequency: "weekly",
    },
    {
      path: "/ai-resume-rewrite",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/blog/how-ats-works", priority: 0.84, changeFrequency: "weekly" },
    { path: "/blog/resume-mistakes", priority: 0.84, changeFrequency: "weekly" },
    { path: "/blog/ats-keywords-guide", priority: 0.84, changeFrequency: "weekly" },
    { path: "/blog/remote-job-resume-tips", priority: 0.83, changeFrequency: "weekly" },
    {
      path: "/ultimate-ats-resume-guide",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    {
      path: "/ats-resume-checklist-2026",
      priority: 0.9,
      changeFrequency: "monthly",
    },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/methodology", priority: 0.82, changeFrequency: "monthly" },
    { path: "/faq-center", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.65, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.65, changeFrequency: "monthly" },
  ];
  const entries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    })
  );
  for (const role of getAtsResumeRoleSlugs()) {
    entries.push({
      url: `${base}/ats-resume/${role}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }
  for (const slug of getResumeKeywordsSlugs()) {
    entries.push({
      url: `${base}/resume-keywords/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.88,
    });
  }
  for (const slug of getResumeExampleSlugs()) {
    entries.push({
      url: `${base}/resume-examples/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    });
  }
  for (const slug of getPostSlugs()) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  return entries;
}
