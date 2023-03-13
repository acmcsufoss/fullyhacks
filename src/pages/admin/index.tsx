import { AuthNavBar } from '@/components/NavBar/NavBar'
import { User } from '@/types/interface'
import { Tab } from '@headlessui/react'
import { PrismaClient } from '@prisma/client'
import { getAllApplications } from 'lib'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import React, { useState } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
const prisma = new PrismaClient()
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Check if user is authenticated
  const session = await getSession(context)
  const queryClient = new QueryClient()
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
  await queryClient.prefetchQuery(
    ['applications', context.req.headers.cookie],
    () => getAllApplications(context.req.headers.cookie)
  )
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      cookie: context.req.headers.cookie,
      dehydratedState: dehydrate(queryClient)
    }
  }
}

interface AdminProps {
  user: User
  cookie: string
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
const AdminPage = ({ user, cookie }: AdminProps) => {
  const { data, isLoading } = useQuery(['applications', cookie], () =>
    getAllApplications(cookie)
  )
  let [categories] = useState({
    Application: [...data],
    Statistic: [
      {
        id: 2,
        title: 'Statistic'
      }
    ],
    CheckIn: [
      {
        id: 1,
        title: 'Check-in'
      }
    ]
  })
  return (
    <section className="font-rubik text-purple_main">
      <AuthNavBar />
      <div className="flex flex-col mt-10 items-center">
        <p className="text-xl font-semibold">Welcome {user.name}</p>
        <div className="w-full max-w-[80%] px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
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
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}>
                  <ul>
                    <div className="overflow-x-auto">
                      <table className="table w-full text-white">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Major</th>
                            <th>Food</th>
                            <th>Class</th>
                            <th>Phone</th>
                            <th>Degree</th>
                            <th>Pronouns</th>
                            <th>Skill Level</th>
                            <th>Response</th>
                          </tr>
                        </thead>
                        <tbody>
                          {posts.map((post, idx) => (
                            <tr
                              key={post.id}
                              className="relative rounded-md p-3 hover:bg-gray-100">
                              <th> {idx + 1} </th>
                              <td className="text-sm font-medium leading-5">
                                {post.name}
                              </td>
                              <td className="text-sm font-medium leading-5">
                                {post.major}
                              </td>
                              <td className="text-sm font-medium leading-5">
                                {post.food}
                              </td>
                              <td className="text-sm font-medium leading-5">
                                {post.class}
                              </td>
                              <td className="text-sm font-medium leading-5">
                                {post.phone}
                              </td>
                              <td className="text-sm font-medium leading-5">
                                {post.degree}
                              </td>
                              <td className="text-sm font-medium leading-5">
                                {post.pronouns}
                              </td>
                              <td className="text-sm font-medium leading-5">
                                {post.skillLevel}
                              </td>
                              <td className="break-all text-sm font-medium leading-5">
                                {post.response}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ul>
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
