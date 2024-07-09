import PopUp from '@/components/PopUp/PopUp'
import Flower from '@/components/Flower/Flower'
import AuthButton from '@/components/AuthWrapper/AuthButton'
import { GenericNavBar } from '@/components/NavBar/NavBar'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function SignIn() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/')
  }

  return (
    <section className="text-purple_main bg-[#0B062B] text-md font-rubik">
      <GenericNavBar />
      <Flower
        top="top-[20em] hidden md:block"
        left="left-48"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[6em] hidden md:block"
        left="left-12"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[6em] hidden md:block"
        left="right-[4em]"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[22em] hidden md:block"
        left="right-[10em]"
        width="w-36"
        height="h-36"
      />
      <PopUp
        title="Before you continue"
        content="FullyHacks only open to college students 18 years old or older 🐘"
        action="I understand"
      />
      <div className="relative mt-10 flex flex-col justify-center items-center mx-4">
        <div className="bg-blue_rgba flex rounded-lg flex-col items-center p-4 mb-16 border-4 border-[#373DCB]">
          <div className="text-white text-center font-normal flex flex-col items-center">
            <img src="signin.svg" alt="Sign In" className="w-[320px]" />
            <p className=" mt-14 text-[2rem] md:text-[3rem] font-bold">
              Welcome to FullyHacks!
            </p>
            <p>Let&apos;s sign in and start your application</p>
          </div>
          <AuthButton />
          <p className="mt-6 text-[1rem] text-center">
            Note: We use Github to keep track of your submission
          </p>
        </div>
      </div>
    </section>
  )
}
