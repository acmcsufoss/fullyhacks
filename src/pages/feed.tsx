import Feed from '@/components/FeedPage/Feed'
import { FeedNavBar } from '@/components/NavBar/NavBar'
import { announcementsType, feedUsers, User } from '@/types/interface'
import { prisma } from 'db'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

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
  // Only approved applicants have access to the feed
  if (User?.application?.status !== 'approved') {
    return {
      redirect: {
        destination: '/apply',
        permanent: false
      }
    }
  }
  // Fetch all applicants discord and bio for feed
  const feedUsers = await prisma.user.findMany({
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
  const announcements = await prisma.announcement.findMany({
    orderBy: {
      submittedAt: 'desc'
    }
  })
  return {
    props: {
      user: JSON.parse(JSON.stringify(User)),
      feedUsers: JSON.parse(JSON.stringify(feedUsers)),
      announcements: JSON.parse(JSON.stringify(announcements))
    }
  }
}

interface feedProps {
  user: User
  feedUsers: feedUsers[]
  announcements: announcementsType[]
}

const feed = ({ user, feedUsers, announcements }: feedProps) => {
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

export default feed
