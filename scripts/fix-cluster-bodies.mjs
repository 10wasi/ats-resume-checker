import fs from "fs";
import path from "path";

const dir = "src/lib/content/cluster";
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith("-body.ts"))) {
  const filePath = path.join(dir, f);
  let s = fs.readFileSync(filePath, "utf8");
  const match = s.match(/export const (\w+) = `([\s\S]*?)`;\s*$/);
  if (!match) {
    console.log("skip", f);
    continue;
  }
  const name = match[1];
  let body = match[2];
  body = body.replace(/\$\{RESUME_CHECKER_PATH\}/g, "/resume-checker");
  body = body.replace(/`/g, "'");
  const out =
    'import { RESUME_CHECKER_PATH } from "@/lib/site-nav";\n\n' +
    `/** Long-form cluster body — ${f} */\n` +
    `export const ${name} = ${JSON.stringify(body)};\n`;
  fs.writeFileSync(filePath, out);
  console.log("fixed", f, body.split(/\s+/).length, "words");
}
