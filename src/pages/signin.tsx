import Bubbles from '@/components/Bubble/Bubbles'
import { GenericNavBar } from '@/components/NavBar/NavBar'
import PopUp from '@/components/PopUp/PopUp'
import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Check if user is authenticated
  const session = await getSession(context)
  // If user already signed in, move them to application page
  if (session) {
    return {
      redirect: {
        destination: '/apply',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}

const signin: NextPage = () => {
  const [isClicked, setClick] = useState(false)
  return (
    <section className="text-purple_main text-md font-rubik">
      <GenericNavBar />
      <PopUp
        title="Before you continue"
        content="FullyHacks only open to CSUF students 18 years old or older 🐘"
        action="I understand"
      />
      <div className="relative mt-10 flex flex-col justify-center items-center mx-4">
        <Bubbles />
        <img
          className="animate-float motion-reduce:animate-none w-48 md:w-[260px]"
          src="/tuffy_rocket.svg"
          alt="Tuffy Rocket"
        />
        <div className="text-center font-normal">
          <p className="mt-14 text-lg md:text-xl font-semibold">
            Welcome to FullyHacks!
          </p>
          <p>Let's sign in and start your application</p>
        </div>
        <button
          className="flex items-center rounded-md mt-12 p-4 bg-purple_300 text-[1.15rem] font-semibold font-mont"
          onClick={() => {
            setClick(true)
            signIn('github', {
              redirect: false,
              callbackUrl: 'http://localhost:3000/apply'
            })
          }}>
          {isClicked ? (
            'Loading...'
          ) : (
            <>
              Sign In with Github
              <BsGithub size={24} className="ml-4" />
            </>
          )}
        </button>
      </div>
    </section>
  )
}

export default signin
