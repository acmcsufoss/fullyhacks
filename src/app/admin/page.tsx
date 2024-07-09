'use client'

import React, { useState } from 'react'
import Applications from '@/components/Admin/Applications/Applications'
import { AuthNavBar } from '@/components/NavBar/NavBar'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { prisma } from 'db'

export default async function AdminPage() {
  // Check if user is authenticated
  const session = await getServerSession(authOptions)
  // If user not signed in, move to signin
  if (!session) {
    redirect('/signin')
  }

  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any }
  })
  //Only admin allow to access this page
  if (!User?.isAdmin) {
    redirect('/')
  }
  const application = await prisma.application.findMany()
  const user = JSON.parse(JSON.stringify(session.user))
  const applications = JSON.parse(JSON.stringify(application))

  const [tabName, setTabName] = useState('Applications')
  const [currentIdx, setIdx] = useState(0)
  const tabList = [
    {
      id: 'tab1',
      name: 'Applications'
    },
    {
      id: 'tab2',
      name: 'Check-in'
    },
    {
      id: 'tab3',
      name: 'Schedule'
    }
  ]
  return (
    <section className="font-rubik">
      <AuthNavBar />
      <div className="flex flex-col mt-10 items-center">
        <p className="text-xl font-semibold text-purple_main">
          Welcome {user.name}
        </p>
        <div className="w-full max-w-[80%] px-2 py-16 sm:px-0">
          <div>
            <div className="flex justify-around space-x-1 rounded-xl p-2 bg-purple_300 text-purple_main">
              {tabList.map((tab, idx) => {
                return (
                  <p
                    key={tab.id}
                    className={`cursor-pointer ${
                      idx == currentIdx ? 'font-bold underline' : ''
                    }`}
                    onClick={() => {
                      setIdx(idx)
                      setTabName(tab.name)
                    }}>
                    {tab.name}
                  </p>
                )
              })}
            </div>
            {tabName == 'Applications' ? (
              <Applications applications={applications} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
