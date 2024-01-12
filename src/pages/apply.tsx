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
        <div className="flex items-center justify-center">
          <div className="font-rubik text-[#FF35EB] mt-10 flex flex-col items-center bg-blue_rgba w-[50%] rounded-lg border-8 border-blue_border_rgba [box-shadow:_0_0_32px_#618AA8]">
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
      )}
    </section>
  )
}

export default apply
