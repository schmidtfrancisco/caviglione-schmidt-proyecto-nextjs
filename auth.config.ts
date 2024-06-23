import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnLogin = nextUrl.pathname.startsWith("/login");

      if (isOnLogin) {
        if (!isLoggedIn) return true;
        return Response.redirect(new URL("/admin", nextUrl));
      }
      if (isOnAdmin) {
        if (isLoggedIn) return true;
        return false;
      } 
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
