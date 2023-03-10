import ApplicationForm from '@/components/Form/ApplicationForm'
import { AuthNavBar } from '@/components/NavBar/NavBar'
import { PrismaClient } from '@prisma/client'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage
} from 'next'
import { getSession } from 'next-auth/react'
const prisma = new PrismaClient()
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
    where: { email: session?.user?.email as any },
    select: {
      application: true
    }
  })
  if (User?.application?.applied) {
    return {
      redirect: {
        destination: '/portal',
        permanent: false
      }
    }
  }
  return {
    props: {
      user: user
    }
  }
}

const apply: NextPage = ({
  user
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <section>
      <AuthNavBar />
      <div className="font-rubik text-purple_main mt-10 flex flex-col items-center">
        <p className="text-lg font-semibold md:text-xl">My Application</p>
        <p className="text-purple_300">Draft will be saved</p>
        <ApplicationForm url={user?.image} />
      </div>
    </section>
  )
}

export default apply
