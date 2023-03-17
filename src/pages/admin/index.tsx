import { Applications } from '@/components/Admin/Applications/Applications'
import { AuthNavBar } from '@/components/NavBar/NavBar'
import { ApplicationType, User } from '@/types/interface'
import { Tab } from '@headlessui/react'
import { prisma } from 'db'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Check if user is authenticated
  const session = await getSession(context)
  // If user already signed in, move them to application page
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
  if (!User?.isAdmin) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  const application = await prisma.application.findMany()
  const counts = await prisma.application.groupBy({
    by: ['food', 'class', 'pronouns', 'degree', 'skillLevel'],
    _count: {
      _all: true
    }
  })
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      applications: JSON.parse(JSON.stringify(application)),
      counts: JSON.parse(JSON.stringify(counts))
    }
  }
}

interface AdminProps {
  user: User
  applications: ApplicationType[]
  counts: any
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
const AdminPage = ({ user, applications, counts }: AdminProps) => {
  const [statusFilter, setStatusFilter] = useState('all')
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(event.target.value)
  }
  console.log(counts)
  const [categories, setCategories] = useState({
    Application: applications
  })
  const filteredApplications =
    statusFilter === 'all'
      ? applications
      : applications.filter((app) => app.status === statusFilter)
  useEffect(() => {
    setCategories({
      Application: filteredApplications
    })
  }, [statusFilter])
  return (
    <section className="font-rubik text-purple_main">
      <AuthNavBar />
      <div className="flex flex-col mt-10 items-center">
        <p className="text-xl font-semibold">Welcome {user.name}</p>
        <div className="w-full max-w-[80%] px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories)?.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple_main',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange_300 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-purple_300 shadow'
                        : 'text-purple_300 hover:bg-white/[0.12] hover:text-white'
                    )
                  }>
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2 flex flex-col">
              <select
                value={statusFilter}
                onChange={(e) => handleStatusChange(e)}
                className="select my-4 bg-purple_300 text-purple_main md:w-[200px] max-w-xs">
                <option disabled selected>
                  Filter by:
                </option>
                <option value="all">All</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="none">Not Done</option>
              </select>
              <div className="stats stats-vertical lg:stats-horizontal shadow my-8">
                <div className="stat">
                  <div className="stat-title">Total applications</div>
                  <div className="stat-value">{applications.length}</div>
                </div>

                <div className="stat">
                  <div className="stat-title"># Vegan</div>
                  <div className="stat-value">{}</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
                <div className="stat">
                  <div className="stat-title">New Registers</div>
                  <div className="stat-value">1,200</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-purple_300 p-1',
                    'ring-purple_300 ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}>
                  <Applications applications={posts} />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  )
}

export default AdminPage
