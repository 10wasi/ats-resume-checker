import { randomUUID } from "crypto";
import type { NextResponse } from "next/server";
import { ANON_COOKIE } from "./config";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 400; // ~13 months

function cookieOptions() {
  return {
    path: "/",
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

export function resolveAnonId(req: { cookies: { get: (n: string) => { value?: string } | undefined } }): {
  anonId: string;
  isNew: boolean;
} {
  const existing = req.cookies.get(ANON_COOKIE)?.value;
  if (existing && existing.length > 8) {
    return { anonId: existing, isNew: false };
  }
  return { anonId: randomUUID(), isNew: true };
}

export function applyAnonCookie(res: NextResponse, anonId: string, isNew: boolean) {
  if (isNew) {
    res.cookies.set(ANON_COOKIE, anonId, cookieOptions());
  }
}
