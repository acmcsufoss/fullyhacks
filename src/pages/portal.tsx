import Flower from '@/components/Flower/Flower'
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
    <div className="bg-[#0B062B] pb-12">
      <AuthNavBar />
      <Flower
        top="top-[24em] hidden md:block"
        left="left-48"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[12em] hidden md:block"
        left="left-12"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[12em] hidden md:block"
        left="right-[4em]"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[22em] hidden md:block"
        left="right-[10em]"
        width="w-36"
        height="h-36"
      />
      <UserPortal user={user} />
    </div>
  )
}

export default portal
