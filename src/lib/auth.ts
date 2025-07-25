import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"

import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email"

import type { NextAuthOptions } from "next-auth";

import { Resend } from "resend"
import htmlemail from "@/constants/EmailTemplate"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true, 
    }),
    EmailProvider({
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { from },
      }) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
          from: from as string,
          to: email,
          subject: "Sign in to your account",
          html: htmlemail(url),
        });
      },
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60,
    }),

  ],
  session: { 
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, 
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      }
    }
  },
  callbacks: {
    async session({ session, user }) {
      if (session?.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};