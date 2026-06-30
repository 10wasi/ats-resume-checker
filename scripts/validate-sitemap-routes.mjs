/**
 * Validates sitemap URLs return HTTP 200 (no 301/404).
 * Usage: npm run build && npm run start & node scripts/validate-sitemap-routes.mjs
 */
const BASE = process.env.SITEMAP_VALIDATE_BASE ?? "http://127.0.0.1:3847";

const REDIRECT_SOURCES = new Set([
  "/ats-score-checker",
  "/resume-checker-online",
  "/ats-resume/marketing-professionals",
  "/ats-resume/accountants",
  "/ats-resume/hr-professionals",
]);

async function fetchStatus(path) {
  const url = `${BASE}${path === "/" ? "" : path}`;
  const res = await fetch(url, { redirect: "manual" });
  return { path, url, status: res.status };
}

async function main() {
  const sitemapRes = await fetch(`${BASE}/sitemap.xml`, { redirect: "manual" });
  if (sitemapRes.status !== 200) {
    console.error(`sitemap.xml returned ${sitemapRes.status}`);
    process.exit(1);
  }
  const ct = sitemapRes.headers.get("content-type") ?? "";
  if (!ct.includes("xml")) {
    console.warn(`Warning: sitemap content-type is "${ct}" (expected xml)`);
  }

  const xml = await sitemapRes.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const u = new URL(m[1]);
    return u.pathname || "/";
  });

  const failures = [];
  const redirects = [];

  for (const path of locs) {
    if (REDIRECT_SOURCES.has(path)) {
      failures.push({ path, reason: "redirect source listed in sitemap" });
      continue;
    }
    const { status } = await fetchStatus(path);
    if (status >= 300 && status < 400) redirects.push({ path, status });
    else if (status !== 200) failures.push({ path, reason: `HTTP ${status}` });
  }

  if (redirects.length) {
    for (const r of redirects) {
      failures.push({ path: r.path, reason: `redirect HTTP ${r.status}` });
    }
  }

  console.log(`Checked ${locs.length} sitemap URLs against ${BASE}`);

  if (failures.length) {
    console.error("Failures:");
    for (const f of failures) console.error(`  ${f.path}: ${f.reason}`);
    process.exit(1);
  }

  console.log("All sitemap URLs return HTTP 200.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
