import Link from 'next/link'
import React from 'react'
import { GenericNavBar } from '../NavBar/NavBar'

const NotFound = () => {
  return (
    <>
      <GenericNavBar />
      <div className="flex flex-col items-center w-full justify-center h-full text-purple_main mt-10 font-rubik">
        <p className="text-xl md:text-xxl font-semibold text-center">
          404 Page Not Found :({' '}
        </p>
        <button className="md:text-lg p-2 mt-10 apply-btn">
          <Link href={'/'}>Back to home</Link>
        </button>
      </div>
    </>
  )
}

export default NotFound
