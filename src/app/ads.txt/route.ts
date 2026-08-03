import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

/** AdSense-ready ads.txt — set ADSENSE_PUBLISHER_ID (e.g. pub-XXXXXXXXXXXXXXXX) when approved. */
export async function GET() {
  const pubId = process.env.ADSENSE_PUBLISHER_ID?.trim();
  const site = getSiteUrl().replace(/\/$/, "");

  if (!pubId) {
    return new Response(
      `# ResumeIQ ads.txt placeholder\n# Set ADSENSE_PUBLISHER_ID when Google AdSense approves this site.\n# Site: ${site}\n`,
      { headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }

  const line = `google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(line, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
