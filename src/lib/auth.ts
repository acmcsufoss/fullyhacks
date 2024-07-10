import { NextAuthOptions } from "next-auth";
import { prisma } from "db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID_DEV!,
      clientSecret: process.env.GITHUB_SECRET_DEV!
    })
  ],
  callbacks: {
    session: async ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id
      }
    })
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/" // New users will be directed here on first sign in (leave the property out if not of interest)
  }
};

export async function getAuthSession(fallback = "/signin") {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(fallback);
  }
  return session;
}
