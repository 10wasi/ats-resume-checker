import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const marketing = join(root, "src", "app", "(marketing)");

const comparisons = [
  { dir: "jobscan-alternative", exportName: "JOBSCAN_COMPARISON" },
  { dir: "resumeworded-alternative", exportName: "RESUMEWORDED_COMPARISON" },
  { dir: "enhancv-alternative", exportName: "ENHANCV_COMPARISON" },
  { dir: "kickresume-alternative", exportName: "KICKRESUME_COMPARISON" },
  { dir: "teal-alternative", exportName: "TEAL_COMPARISON" },
];

const countries = ["usa", "uk", "canada", "australia", "germany", "uae", "pakistan", "india"];

function comparisonPage(exportName) {
  return `import { ${exportName} } from "@/lib/content/sprint3/comparisons";
import { Sprint3LandingPage, sprint3Metadata } from "@/lib/content/sprint3/page";

export const metadata = sprint3Metadata(${exportName});

export default function Page() {
  return <Sprint3LandingPage spec={${exportName}} />;
}
`;
}

function countryPage(slug) {
  const exportName = slug.toUpperCase().replace(/-/g, "_");
  return `import { COUNTRY_PAGES } from "@/lib/content/sprint3/countries";
import { Sprint3LandingPage, sprint3Metadata } from "@/lib/content/sprint3/page";

const spec = COUNTRY_PAGES.find((p) => p.id === "resume-checker-${slug}")!;

export const metadata = sprint3Metadata(spec);

export default function Page() {
  return <Sprint3LandingPage spec={spec} />;
}
`;
}

for (const c of comparisons) {
  const dir = join(marketing, c.dir);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "page.tsx"), comparisonPage(c.exportName));
}

for (const slug of countries) {
  const dir = join(marketing, `resume-checker-${slug}`);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "page.tsx"), countryPage(slug));
}

console.log("Scaffolded", comparisons.length, "comparison and", countries.length, "country pages.");
