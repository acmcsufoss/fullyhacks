import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

// Instantiate Prisma Client
const prisma = new PrismaClient()

const options = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID_DEV,
      clientSecret: process.env.GITHUB_SECRET_DEV
    })
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      if (session?.user) {
        session.user.id = user.id
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
  // adapter: PrismaAdapter(prisma),
}
const nextAuth = (req, res) => {
  NextAuth(req, res, options)
}
export default nextAuth
