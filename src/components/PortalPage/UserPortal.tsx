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
    <div className="flex flex-col items-center justify-center relative text-purple_main mx-4 md:mx-48 mt-10 font-rubik">
      <p className="text-xl font-semibold self-start">User Portal</p>
      <div className="w-full md:text-md mt-10 p-6 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-300 border-opacity-25 shadow-xl">
        <div className="flex gap-4">
          <img
            className="z-[30] w-24 h-24 rounded-md md:w-48 md:h-48"
            src={`${user.image}`}
            alt="Github's pfp"
          />
          <div className="z-[30] flex flex-col flex-wrap font-medium">
            <p className="">
              Name: <span className="font-normal"> {application.name} </span>
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
                  ? 'bg-green-300'
                  : application.status == 'rejected'
                  ? 'bg-red-400'
                  : 'bg-gray-300'
              }`}>
              {application.status}
            </span>
          </p>
          <p className="mt-4">
            Submitted on: <span className="font-normal"> {formattedDate} </span>
          </p>
        </div>
        <div className="hidden md:block">
          <Bubble
            top="top-4"
            left="right-4"
            width="w-32"
            height="h-32"
            color="bg-purple_300"
          />
          <Bubble
            top="top-24"
            left="right-48"
            width="w-32"
            height="h-32"
            color="bg-orange_300"
          />
        </div>
      </div>
      {application.status == 'approved' && (
        <button
          onClick={() => router.push('/feed')}
          className="hover:bg-purple_hover hover:duration-200 hover:ease-in-out hover:text-white flex items-center gap-4 bg-purple_300 p-2 font-semibold mt-8 rounded-lg md:text-md">
          Continue to Feed
          <BsArrowRight size={24} />
        </button>
      )}
    </div>
  )
}

export default UserPortal
