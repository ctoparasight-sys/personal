import { NextRequest, NextResponse } from "next/server";

async function hmacSign(message: string, key: string): Promise<string> {
  const encoder = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(key),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function POST(request: NextRequest) {
  const password = process.env.CAR_PASSWORD;
  if (!password) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!body.password || body.password !== password) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }

  const cookieValue = await hmacSign("car-authenticated", password);
  const response = NextResponse.json({ ok: true });
  response.cookies.set("car-auth", cookieValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
  return response;
}
