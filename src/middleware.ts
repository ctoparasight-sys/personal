import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Don't gate login pages or auth API routes
  if (
    pathname === "/projects/pequliar/login" ||
    pathname === "/api/pequliar-auth" ||
    pathname === "/car/login" ||
    pathname === "/api/car-auth"
  ) {
    return NextResponse.next();
  }

  // Pequliar protection
  if (pathname.startsWith("/projects/pequliar") || pathname.startsWith("/pequliar")) {
    const cookie = request.cookies.get("pequliar-auth");
    if (!cookie?.value) {
      const loginUrl = new URL("/projects/pequliar/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // CAR paper protection
  if (pathname.startsWith("/car")) {
    const cookie = request.cookies.get("car-auth");
    if (!cookie?.value) {
      const loginUrl = new URL("/car/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/projects/pequliar/ido",
    "/projects/pequliar/ido/:path*",
    "/pequliar/:path*",
    "/car",
    "/car/:path*",
  ],
};
