import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    console.log("[ROUTE: ]", req.nextUrl.pathname)
    console.log("[ISLOGGINED: ]", !!req.nextauth)

    if (req.nextUrl.pathname === "/") {
      return null;
    }
  },
  {
  pages: {
    signIn: "/signin",
  },

});

export const config = { 
  matcher: ["/settings/:path*"],
};