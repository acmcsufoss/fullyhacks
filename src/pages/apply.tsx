import { AuthNavBar } from '@/components/NavBar/NavBar'
import dynamic from 'next/dynamic'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage
} from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import ApplyAuth from '@/components/AuthWrapper/ApplyAuth'
import { prisma } from 'db'
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
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
      application: JSON.parse(JSON.stringify(User?.application))
    }
  }
}

const ApplicationForm = dynamic(
  () => import('../components/Form/ApplicationForm'),
  {
    ssr: false
  }
)

const apply: NextPage = ({
  user,
  application
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter()
  return (
    <section>
      <AuthNavBar />
      {application?.applied ? (
        <>
          <div className="font-rubik text-purple_main mt-10 flex flex-col items-center justify-center text-center">
            <p className="text-lg font-semibold md:text-xl">
              You&apos;ve already submitted an application
            </p>
            <button
              onClick={() => router.push('/portal')}
              className="purple-btn mt-10">
              Go to User Portal
            </button>
          </div>
        </>
      ) : (
        <>
          <ApplyAuth>
            <div className="font-rubik text-purple_main mt-10 flex flex-col items-center">
              <p className="text-lg font-semibold md:text-xl">My Application</p>
              <p className="text-purple_300">Draft will be saved</p>
              <ApplicationForm url={user?.image} />
            </div>
          </ApplyAuth>
        </>
      )}
    </section>
  )
}

export default apply
