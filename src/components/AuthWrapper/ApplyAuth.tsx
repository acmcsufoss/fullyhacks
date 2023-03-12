import React, { useState } from 'react'
interface ApplyAuthProps {
  children?: React.ReactNode
}
const ApplyAuth: React.FC<ApplyAuthProps> = ({ children }) => {
  // Application from March 13rd to April 1st
  const openDate = new Date('2023-03-13')
  const closeDate = new Date('2023-04-01')
  const dateToCheck = new Date()
  const [applicationOpen, setOpen] = useState<boolean>(
    dateToCheck >= openDate && dateToCheck <= closeDate
  )
  return (
    <>
      {applicationOpen ? (
        children
      ) : (
        <div className="text-purple_main flex-col font-rubik font-semibold text-lg text-center md:text-xl mt-10 flex items-center justify-center">
          {dateToCheck < openDate && (
            <p>Application will open on March 13rd, stay tuned.</p>
          )}
          {dateToCheck >= closeDate && (
            <p>Application has closed, we'll see you next year 🐘.</p>
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
