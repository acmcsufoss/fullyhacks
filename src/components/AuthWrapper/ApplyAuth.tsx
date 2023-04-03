import React, { useState } from 'react'
interface ApplyAuthProps {
  children?: React.ReactNode
}
const ApplyAuth: React.FC<ApplyAuthProps> = ({ children }) => {
  // Application from March 13rd to April 1st
  const options = { timeZone: 'America/Los_Angeles' }
  const openDate = new Date('2023-03-13T00:00:00.000-07:00').toLocaleString(
    'en-US',
    options
  )
  const closeDate = new Date('2023-04-03T23:59:59.999-07:00').toLocaleString(
    'en-US',
    options
  )
  const now = new Date().toLocaleString('en-US', options)
  const [applicationOpen, setOpen] = useState<boolean>(
    now >= openDate && now <= closeDate
  )
  return (
    <>
      {applicationOpen ? (
        children
      ) : (
        <div className="text-purple_main flex-col font-rubik font-semibold text-lg text-center md:text-xl mt-10 flex items-center justify-center">
          {now < openDate && (
            <p>Application will open on March 14th, stay tuned.</p>
          )}
          {now >= closeDate && (
            <p>Application has closed, we&apos;ll see you next year 🐘.</p>
          )}
          <img
            className="animate-float motion-reduce:animate-none h-36 w-36 md:h-52 md:w-52"
            src="/tuffy_rocket.svg"
            alt="tuffy rocket"
          />
        </div>
      )}
    </>
  )
}

export default ApplyAuth
