import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ANON_COOKIE } from "@/lib/monetization/config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 400;

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const existing = req.cookies.get(ANON_COOKIE)?.value;
  if (existing && existing.length > 8) {
    return res;
  }
  res.cookies.set(ANON_COOKIE, crypto.randomUUID(), {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
