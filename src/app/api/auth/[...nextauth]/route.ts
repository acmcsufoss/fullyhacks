import { AuthOptions } from 'next-auth'
import { prisma } from 'db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GitHubProvider from 'next-auth/providers/github'
import NextAuth from 'next-auth/next'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ],
  callbacks: {
    session: async ({ session, user }) => {
      if (session?.user) {
        session.user.name = user.name
      }
      return session
    }
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
