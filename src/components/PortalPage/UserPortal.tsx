import { ApplicationType, User } from '@/types/interface'
import React from 'react'
import Bubble from '../Bubble/Bubble'

interface UserProps {
  user: User
}

const UserPortal: React.FC<UserProps> = ({ user }) => {
  const application: ApplicationType = user.application as ApplicationType
  const date: Date = new Date(application.submittedAt)
  const option: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const formattedDate = date.toLocaleDateString('en-US', option)

  return (
    <div className="relative text-purple_main mx-4 md:mx-48 mt-10 font-rubik">
      <p className="text-xl font-semibold">User Portal</p>
      <div className="md:text-md mt-10 p-6 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-300 border-opacity-25 shadow-xl">
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
    </div>
  )
}

export default UserPortal
