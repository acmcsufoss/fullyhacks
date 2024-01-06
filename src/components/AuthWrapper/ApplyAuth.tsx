import React, { useState } from 'react'
interface ApplyAuthProps {
  children?: React.ReactNode
}
const ApplyAuth: React.FC<ApplyAuthProps> = ({ children }) => {
  // Application from March 13rd to April 1st
  const options = { timeZone: 'America/Los_Angeles' }
  const openDate = new Date('2024-01-02T00:00:00.000-07:00').toLocaleString(
    'en-US',
    options
  )
  const closeDate = new Date('2024-02-25T23:59:59.999-07:00').toLocaleString(
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
        <div className="[text-shadow:_0_0_10px_#FF49ED] flex-col font-rubik font-semibold text-lg text-center md:text-[2.5rem] mt-10 flex items-center justify-center">
          {new Date(now) < new Date(openDate) && (
            <p>Application will open on January 12th, stay tuned.</p>
          )}
          {new Date(now) >= new Date(closeDate) && (
            <p>Application has closed, we&apos;ll see you next year 🐘.</p>
          )}
        </div>
      )}
    </>
  )
}

export default ApplyAuth
