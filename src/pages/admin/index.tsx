import { Application } from '@/components/Admin/Applications/Application'
import Applications from '@/components/Admin/Applications/Applications'
import { AuthNavBar } from '@/components/NavBar/NavBar'
import { ApplicationType, User } from '@/types/interface'
import { prisma } from 'db'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React, { useState } from 'react'
export async function getServerSideProps(context: GetServerSidePropsContext) {
  context.res.setHeader('Cache-Control', 'public, s-maxage=31536000')
  // Check if user is authenticated
  const session = await getSession(context)
  // If user not signed in, move to signin
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }
  const { user } = session
  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any }
  })
  //Only admin allow to access this page
  if (!User?.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  const application = await prisma.application.findMany()
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      applications: JSON.parse(JSON.stringify(application))
    }
  }
}

interface AdminProps {
  user: User
  applications: ApplicationType[]
}

const AdminPage = ({ user, applications }: AdminProps) => {
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

export default AdminPage
