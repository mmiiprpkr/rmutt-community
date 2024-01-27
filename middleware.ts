import type { NextRequest } from 'next/server'

import {
   DEFAULT_LOGIN_REDIRECT,
   apiAuthPrefix,
   authRoutes,
   publicRoutes
} from "@/routes"

export function middleware(request: NextRequest) {
   const { nextUrl } = request;
   const isLoggedIn = request.cookies.get('__Secure-next-auth.session-token')?.value

   const isApiAuthRoute = nextUrl.pathname.startsWith('/api/auth')
   const isPubicRoute = publicRoutes.includes(nextUrl.pathname);
   const isAuthRoute = authRoutes.includes(nextUrl.pathname);
   console.log(isApiAuthRoute)
   if (isApiAuthRoute) {
      return null;
   }
   if (isAuthRoute) {
      if (isLoggedIn) {
         return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
      }
      return null;
   }

   if (!isLoggedIn && !isPubicRoute) {
      return Response.redirect(new URL("/signin", nextUrl))
   }

   return null;
}

export const config = {
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}