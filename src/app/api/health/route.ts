import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Use GET /api/health to confirm the Next server is running. */
export async function GET() {
  return NextResponse.json({ ok: true, service: "resumeiq" }, { status: 200 });
}
