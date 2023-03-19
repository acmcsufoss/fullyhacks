import Feed from '@/components/FeedPage/Feed'
import { FeedNavBar } from '@/components/NavBar/NavBar'
import { feedUsers, User } from '@/types/interface'
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
      application: true,
      name: true,
      bio: true,
      discordId: true
    }
  })
  return {
    props: {
      user: JSON.parse(JSON.stringify(User)),
      feedUsers: JSON.parse(JSON.stringify(feedUsers))
    }
  }
}

interface feedProps {
  user: User
  feedUsers: feedUsers[]
}

const feed = ({ user, feedUsers }: feedProps) => {
  return (
    <section>
      <FeedNavBar />
      <Feed feedUsers={feedUsers} />
    </section>
  )
}

export default feed
