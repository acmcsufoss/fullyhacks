import { feedUsers } from '@/types/interface'
import React, { useState } from 'react'
import { BsDiscord, BsGithub } from 'react-icons/bs'
import PopUp from '../PopUp/PopUp'

interface MainFeedProps {
  feedUsers: feedUsers[]
}

const MainFeed: React.FC<MainFeedProps> = (props) => {
  const { feedUsers } = props
  const [isOpen, setOpen] = useState(false)
  const filteredFeedUsers = feedUsers?.filter((user) => user.bio !== null)
  return (
    <section className="grow md:mr-10 mt-10 overflow-x-auto">
      {filteredFeedUsers.map((user: feedUsers) => {
        return (
          <div
            key={user.id}
            className="border-b-2 pb-4 md:text-md flex gap-4 text-purple_main">
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
            <p className="self-start md:text-lg w-12 text-center font-semibold p-2 bg-sky-100 rounded-[50%]">
              {user.name[0]}
            </p>
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-semibold mr-4"> {user.name}</p>
                <a
                  href={`https://github.com/${user.application.github}`}
                  target="_blank"
                  className="flex items-center gap-2 mr-4">
                  <BsGithub />
                  <p> {user.application.github}</p>
                </a>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(user.discordId), setOpen(true)
                  }}
                  className="cursor-pointer flex items-center gap-2">
                  <BsDiscord />
                  <p> {user.discordId}</p>
                </div>
              </div>
              <div className="flex gap-4 my-2 text-sm">
                <p className="bg-sky-100 px-4 rounded-xl">
                  {user.application.class}
                </p>
                <p className="bg-sky-100 px-4 rounded-xl">
                  {user.application.major}
                </p>
              </div>

              <p> {user.bio}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default MainFeed
