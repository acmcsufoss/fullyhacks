import { feedUsers, User } from '@/types/interface'
import React, { useState } from 'react'
import { BsDiscord, BsGithub } from 'react-icons/bs'
import { FeedPopUp } from '../PopUp/PopUp'

interface MainFeedProps {
  feedUsers: feedUsers[]
  currentUser: User
}

const MainFeed: React.FC<MainFeedProps> = (props) => {
  const { feedUsers, currentUser } = props
  const [isOpen, setOpen] = useState(false)
  const filteredFeedUsers = feedUsers?.filter(
    (user) => user.bio !== null && user.application.approved == true
  )
  return (
    <section className="flex items-start flex-col w-full grow md:mx-10 mr-[2rem] mt-14 overflow-x-auto">
      {currentUser?.bio == null && <FeedPopUp />}
      <p className="feed-title">Homepage</p>
      {filteredFeedUsers.map((user: feedUsers) => {
        return (
          <div
            key={user.id}
            className="border-b-2 border-[#5A75FF] [box-shadow:_0_4px_8px_-2px_#5A75FF] pb-6 my-4 w-full md:text-md flex gap-4 text-purple_main">
            {isOpen && (
              <div
                className="toast cursor-pointer"
                onClick={() => setOpen(false)}>
                <div className="alert bg-sky-100">
                  <div>
                    <span>Copied to clipboard</span>
                  </div>
                </div>
              </div>
            )}
            <p className="md:w-12 md:h-12 w-[40px] h-[40px] self-start md:text-lg text-center font-semibold p-2 bg-[#B7EEFF] text-black rounded-[50%]">
              {user.application.name[0].toUpperCase()}
            </p>
            <div className="flex flex-col w-full">
              <div className="mb-2 gap-1 flex items-start flex-col md:flex-row md:tems-center">
                <p className="font-semibold mr-4 text-[#66D4EC]">
                  {' '}
                  {user.application.name}
                </p>
                <a
                  href={`https://github.com/${user.application.github}`}
                  target="_blank"
                  className="flex items-center gap-2 mr-4">
                  <BsGithub color="#EF4DB3" />
                  <p className="text-white"> {user.application.github}</p>
                </a>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(user.discordId), setOpen(true)
                  }}
                  className="cursor-pointer flex items-center gap-2">
                  <BsDiscord color="#EF4DB3" />
                  {!user.discordId ? (
                    <p>Not added</p>
                  ) : (
                    <p className="text-white"> {user.discordId}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 my-2 text-sm text-black">
                {user.isAdmin && (
                  <p className="bg-[#FCC14F] px-4 rounded-xl">Admin</p>
                )}
                <p className="bg-[#00B3FF] px-4 rounded-xl">
                  {user.application.major}
                </p>
                <p className="bg-[#00B3FF] px-4 rounded-xl">
                  {user.application.class}
                </p>
                <p className="bg-[#00B3FF] px-4 rounded-xl">
                  {user.application.school}
                </p>
              </div>
              <p className="text-white mt-2"> {user.bio}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default MainFeed
