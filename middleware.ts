import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define paths that are protected
  const isAdminPath = path.startsWith("/admin") && path !== "/admin/login"

  // Get the authentication status from cookies
  const isAuthenticated = request.cookies.has("auth")

  // Redirect to login if accessing protected route without authentication
  if (isAdminPath && !isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
