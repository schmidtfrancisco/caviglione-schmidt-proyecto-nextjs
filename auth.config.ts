import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
	callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnAdmin = nextUrl.pathname.startsWith('/admin')
      if (isOnAdmin) {
        if (isLoggedIn) return true
        return false; //Redirecciona al login.
      } else if (isLoggedIn) {
				return Response.redirect(new URL('/admin', nextUrl))
			}
			if(!isOnAdmin && isLoggedIn) {
				return Response.redirect(new URL('/admin', nextUrl))
			}
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;