import Feed from '@/components/FeedPage/Feed'
import { FeedNavBar } from '@/components/NavBar/NavBar'
import { prisma } from 'db'
import { getSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default async function FeedPage() {
  // Check if user is authenticated
  const session = await getSession()
  // If user signed out, back to sign in page
  if (!session) {
    redirect('/signin')
  }
  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any },
    include: {
      application: true
    }
  })
  // Only approved applicants have access to the feed
  if (User?.application?.status !== 'approved') {
    redirect('/apply')
  }
  // Fetch all applicants discord and bio for feed
  const FeedUsers = await prisma.user.findMany({
    select: {
      id: true,
      isAdmin: true,
      application: {
        select: {
          name: true,
          major: true,
          school: true,
          approved: true,
          github: true,
          class: true
        }
      },
      name: true,
      bio: true,
      discordId: true
    }
  })
  const Announcements = await prisma.announcement.findMany({
    orderBy: {
      submittedAt: 'desc'
    }
  })
  const user = JSON.parse(JSON.stringify(User))
  const feedUsers = JSON.parse(JSON.stringify(FeedUsers))
  const announcements = JSON.parse(JSON.stringify(Announcements))

  return (
    <section className="font-rubik bg-purple_dark">
      <FeedNavBar />
      <Feed
        feedUsers={feedUsers}
        currentUser={user}
        announcements={announcements}
      />
    </section>
  )
}
