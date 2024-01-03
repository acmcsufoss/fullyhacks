import Flower from '@/components/Flower/Flower'
import { GenericNavBar } from '@/components/NavBar/NavBar'
import PopUp from '@/components/PopUp/PopUp'
import { GetServerSidePropsContext, NextPage } from 'next'
import { getSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs'

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   // Check if user is authenticated
//   const session = await getSession(context)
//   // If user already signed in, move them to application page
//   if (session) {
//     return {
//       redirect: {
//         destination: '/apply',
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {}
//   }
// }

const signin: NextPage = () => {
  const [isClicked, setClick] = useState(false)
  return (
    <section className="text-purple_main bg-[#0B062B] min-h-screen text-md font-rubik">
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
        <div className="text-center font-normal">
          <p className="font-ohm mt-14 text-[3rem] md:text-[4rem] font-bold [text-shadow:_0_0_10px_#FF49ED]">
            Welcome to FullyHacks!
          </p>
          <p>Let&apos;s sign in and start your application</p>
        </div>
        <button
          className="flex text-white items-center rounded-md mt-12 p-4 bg-[#AF5B98] hover:bg-[#8f467b] hover:transition-all hover:duration-300 text-[1.15rem] font-semibold font-mont"
          onClick={() => {
            setClick(true)
            signIn('github', {
              redirect: false,
              callbackUrl: 'https://fullyhacks.acmcsuf.com/apply'
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
