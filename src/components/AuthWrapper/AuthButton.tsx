'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs'

export default function AuthButton() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <button
      className="flex text-white items-center rounded-md mt-12 p-4 bg-[#E149A9] hover:bg-[#8f467b] hover:transition-all hover:duration-300 text-[1.15rem] font-semibold font-mont"
      onClick={() => {
        setIsClicked(true)
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
  )
}
