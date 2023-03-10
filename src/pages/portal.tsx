import { AuthNavBar } from '@/components/NavBar/NavBar'
import { PrismaClient } from '@prisma/client'
import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'
const prisma = new PrismaClient()
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Check if user is authenticated
  const session = await getSession(context)
  // If user signed out, back to homepage
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any },
    select: {
      application: true
    }
  })
  if (!User?.application?.applied) {
    return {
      redirect: {
        destination: '/apply',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

const portal: NextPage = () => {
  return (
    <>
      <AuthNavBar />
      <p>User Portal</p>
    </>
  )
}

export default portal
