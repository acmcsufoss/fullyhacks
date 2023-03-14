import { AuthNavBar } from '@/components/NavBar/NavBar'
import UserPortal from '@/components/PortalPage/UserPortal'
import { prisma } from 'db'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Check if user is authenticated
  const session = await getSession(context)
  // If user signed out, back to homepage
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }
  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any },
    include: {
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
    props: {
      user: JSON.parse(JSON.stringify(User))
    }
  }
}

const portal = ({
  user
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <AuthNavBar />
      <UserPortal user={user} />
    </>
  )
}

export default portal
