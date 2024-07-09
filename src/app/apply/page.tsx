'use client'

import Link from 'next/link'
import Flower from '@/components/Flower/Flower'
import { AuthNavBar } from '@/components/NavBar/NavBar'
import ApplyAuth from '@/components/AuthWrapper/ApplyAuth'
import ApplicationForm from '@/components/Form/ApplicationForm'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { prisma } from 'db'

export default async function ApplyPage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/signin')
  }
  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any },
    select: {
      application: true
    }
  })
  const user = JSON.parse(JSON.stringify(session.user))
  const application = JSON.parse(JSON.stringify(User?.application))

  return (
    <>
      <section>
        <Flower
          width="w-24 md:w-32"
          height="h-24 md:w-32"
          left="left-5"
          top="top-[12rem]"
          noMotion={true}
          flowerType={1}
        />

        <Flower
          width="w-36 md:w-52"
          height="w-36 md:h-52"
          left="left-8 md:left-10"
          top="top-[30rem] md:top-[20rem]"
          noMotion={true}
          flowerType={3}
        />

        <Flower
          width="w-16 md:w-24"
          height="w-16 md:h-24"
          left="left-6 md:left-12"
          top="top-[32rem] md:top-[28rem]"
          noMotion={true}
          flowerType={3}
        />

        <Flower
          width="w-16 md:w-24"
          height="w-16 md:h-24"
          left=""
          right="right-[2rem] md:right-[4rem]"
          top="top-[7rem]"
          noMotion={true}
          flowerType={2}
        />

        <Flower
          width="w-28 md:w-52"
          height="w-28 md:h-52"
          left=""
          right="right-[3rem] md:right-[6rem]"
          top="top-[12rem]"
          noMotion={true}
          flowerType={4}
        />

        <AuthNavBar />
        {application?.applied ? (
          <>
            <div className="font-rubik text-purple_main mt-10 flex flex-col items-center justify-center text-center">
              <p className="text-lg font-semibold md:text-xl">
                You&apos;ve already submitted an application
              </p>
              <Link href="/poral" className="purple-btn mt-10">
                Go to User Portal
              </Link>
            </div>
          </>
        ) : (
          <ApplyAuth>
            <div className="flex items-center justify-center">
              <div className="z-10 font-rubik text-[#FF35EB] mt-10 mb-32 flex flex-col items-center bg-blue_rgba w-[min(50rem,_90vw)] p-8 rounded-lg border-8 border-blue_border_rgba [box-shadow:_0_0_32px_#618AA8]">
                <p className="text-[#FF35EB] text-lg font-semibold md:text-[3rem]">
                  MY APPLICATION
                </p>
                <p className="text-white md:text-[1.5rem] font-light">
                  Draft will be saved
                </p>
                <p className="mt-4 font-semibold text-white text-[1.25rem]">
                  *Application due by Saturday, February 10th*
                </p>
                <ApplicationForm url={user?.image} />
              </div>
            </div>
          </ApplyAuth>
        )}
      </section>
    </>
  )
}
