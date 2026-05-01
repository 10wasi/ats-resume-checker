import { NextRequest, NextResponse } from "next/server";
import { applyAnonCookie, resolveAnonId } from "@/lib/monetization/resolve-anon";
import { buildUsageSnapshot, PLAN_COOKIE } from "@/lib/monetization/usage-gate";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { anonId, isNew } = resolveAnonId(req);
  const planCookie = req.cookies.get(PLAN_COOKIE)?.value;
  const snapshot = buildUsageSnapshot(anonId, planCookie);
  const res = NextResponse.json(snapshot);
  applyAnonCookie(res, anonId, isNew);
  return res;
}
