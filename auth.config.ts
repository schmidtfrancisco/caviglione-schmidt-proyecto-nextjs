import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdminPage = nextUrl.pathname.startsWith('/admin');
      const isOnLoginPage = nextUrl.pathname === '/login';

      if (nextUrl.pathname.startsWith('/_next')) {
        return NextResponse.next();
      }

      if (isOnAdminPage) {
        if (isLoggedIn) return true;
        return false;
      } else if (isOnLoginPage) {
        if (isLoggedIn) return Response.redirect(new URL('/admin', nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

/*
authorized({ auth, request: { nextUrl } }) {

      const isLoggedIn = !!auth?.user
      const isOnAdmin = nextUrl.pathname.startsWith('/admin')
      const isOnLogin = nextUrl.pathname.startsWith('/login')

      if (isOnLogin) {
        if (isLoggedIn){
          return Response.redirect(new URL('/admin', nextUrl))
        }
        return true
      }
      if (isOnAdmin) {
        if (isLoggedIn) return true
        return false;
      }
      return true;
    },
*/