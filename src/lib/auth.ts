import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "db";
import { getServerSession, NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { redirect } from "next/navigation";

const clientId =
  process.env.NODE_ENV === "development"
    ? process.env.GITHUB_ID_DEV
    : process.env.GITHUB_ID;
const clientSecret =
  process.env.NODE_ENV === "development"
    ? process.env.GITHUB_SECRET_DEV
    : process.env.GITHUB_SECRET;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: clientId!,
      clientSecret: clientSecret!
    })
  ],
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60 // 24 hours
  },
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
