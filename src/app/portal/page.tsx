import Flower from '@/components/Flower/Flower'
import { AuthNavBar } from '@/components/NavBar/NavBar'
import UserPortal from '@/components/PortalPage/UserPortal'
import { getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { prisma } from 'db'
import React from 'react'

export default async function PortalPage() {
  // Check if the user signed in
  const session = await getSession()
  if (!session) {
    redirect('/signin')
  }
  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any },
    include: {
      application: true
    }
  })
  if (!User?.application?.applied) {
    redirect('/apply')
  }
  const user = JSON.parse(JSON.stringify(User))

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
