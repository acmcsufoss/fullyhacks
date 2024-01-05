import { ApplicationType, User } from '@/types/interface'
import { useRouter } from 'next/router'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Bubble from '../Bubble/Bubble'

interface UserProps {
  user: User
}

const UserPortal: React.FC<UserProps> = ({ user }) => {
  const application: ApplicationType = user.application as ApplicationType
  const date: Date = new Date(application.submittedAt)
  const router = useRouter()
  const option: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const formattedDate = date.toLocaleDateString('en-US', option)

  return (
    <div className="text-white  flex flex-col items-center justify-center relative mx-4 md:mx-48 font-rubik">
      <p className="text-[4rem] [text-shadow:_0_0_10px_#FF49ED] font-ohm text-purple_main">
        User Portal
      </p>
      <div className="w-[720px] bg-[#100D21] md:text-md mt-10 p-6 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-25 border-2 border-[#E149A9]">
        <div className="flex gap-4">
          <img
            className="border-2 border-[#E149A9] z-[30] w-24 h-24 rounded-md md:w-48 md:h-48"
            src={`${user.image}`}
            alt="Github's pfp"
          />
          <div className="z-[30] flex flex-col flex-wrap font-medium">
            <p className="">
              Name: <span className="font-normal"> {application.name} </span>
            </p>
            <p className="">
              School:{' '}
              <span className="font-normal"> {application.school} </span>
            </p>
            <p className="">
              Github:
              <span className="font-normal"> {application.github} </span>
            </p>
            <p className="">Email:</p>
            <span className="font-normal break-all"> {application.email} </span>
          </div>
        </div>
        <div className="mt-4 font-semibold md:mt-8">
          <p>
            Application Status:
            <span
              className={`font-normal p-1 rounded-md text-center ml-4 ${
                application.status == 'approved'
                  ? 'bg-green-500'
                  : application.status == 'rejected'
                    ? 'bg-red-600'
                    : 'bg-gray-500'
              }`}>
              {application.status}
            </span>
          </p>
          <p className="mt-4">
            Submitted on: <span className="font-normal"> {formattedDate} </span>
          </p>
        </div>
        <div className="hidden md:block"></div>
      </div>
      {application.status == 'approved' && (
        <button
          onClick={() => router.push('/feed')}
          className="hover:bg-[#b63487] hover:duration-200 hover:ease-in-out text-white flex items-center gap-4 bg-[#E149A9] p-2 font-semibold mt-8 rounded-lg md:text-md">
          Continue to Feed
          <BsArrowRight size={24} />
        </button>
      )}
    </div>
  )
}

export default UserPortal
