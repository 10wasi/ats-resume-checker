import { BlogHubPage } from "@/components/blog/BlogHubPage";
import { BLOG_HUBS } from "@/lib/content/blog-hubs/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

const entry = BLOG_HUBS[2];

export const metadata = buildCtrMetadata(entry.ctr, {
  canonical: entry.path,
  keywords: ["resume keywords for ATS", "resume keyword analyzer", "improve resume score"],
  ogType: "article",
});

export default function BlogAtsKeywordsGuideHubPage() {
  return <BlogHubPage entry={entry} />;
}
