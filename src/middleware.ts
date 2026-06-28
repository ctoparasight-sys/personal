import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Don't gate the login page itself
  if (pathname === "/projects/pequliar/login") {
    return NextResponse.next();
  }

  // Don't gate the auth API route
  if (pathname === "/api/pequliar-auth") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("pequliar-auth");
  if (!cookie?.value) {
    const loginUrl = new URL("/projects/pequliar/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Cookie exists — allow through (value validated at set-time via HMAC)
  return NextResponse.next();
}

export const config = {
  matcher: ["/projects/pequliar", "/projects/pequliar/:path*", "/pequliar/:path*"],
};
