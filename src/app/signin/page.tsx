import Flower from '@/components/Flower/Flower'
import { GenericNavBar } from '@/components/NavBar/NavBar'
import PopUp from '@/components/PopUp/PopUp'
import { getSession, signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs'

export default async function SignIn() {
  const session = await getSession()
  if (session) {
    redirect('/')
  }

  async function handleSignIn() {
    'use server'
    await signIn('github', {
      redirect: false,
      callbackUrl: 'https://fullyhacks.acmcsuf.com/apply'
    })
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
          <form action={handleSignIn}>
            <button className="flex text-white items-center rounded-md mt-12 p-4 bg-[#E149A9] hover:bg-[#8f467b] hover:transition-all hover:duration-300 text-[1.15rem] font-semibold font-mont">
              <>
                Sign In with Github
                <BsGithub size={24} className="ml-4" />
              </>
            </button>
          </form>
          <p className="mt-6 text-[1rem] text-center">
            Note: We use Github to keep track of your submission
          </p>
        </div>
      </div>
    </section>
  )
}
