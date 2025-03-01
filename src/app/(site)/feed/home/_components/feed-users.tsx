"use client";

import { feedUsers } from "@/types/interface";
import { useState } from "react";
import { BsDiscord, BsGithub } from "react-icons/bs";

function getUppercaseLetters(str: string) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      result += str[i];
    }
  }
  return result;
}

export default function FeedUsers({ feedUsers }: { feedUsers: feedUsers[] }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="mt-8 flex flex-col gap-4">
      {feedUsers.map((user: feedUsers) => {
        return (
          <div
            key={user.id}
            className="flex w-full flex-col gap-4 rounded-lg border-2 border-[#448592] p-4 pb-6 text-white transition-colors hover:border-[#7AD4E7] md:text-md">
            {isOpen && (
              <div
                className="toast cursor-pointer"
                onClick={() => setOpen(false)}>
                <div className="alert bg-[#021230]">
                  <div>
                    <span>Copied to clipboard</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex gap-4">
              <div className="relative flex aspect-square w-[40px] flex-shrink-0 items-center justify-center self-start rounded-[50%] bg-[#7AD4E7] text-black md:w-[55px] md:text-lg">
                <div className="absolute aspect-square w-[50px] items-center rounded-[50%] border-2 border-[#7AD4E7] md:w-[70px]" />
                {user.application.name[0].toUpperCase()}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-4 lg:flex-row">
                  <h2 className="min-w-max text-lg md:text-xl">
                    {user.application.name}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 font-rubik text-sm font-medium text-black">
                    {user.isAdmin && (
                      <span className="rounded-full bg-[#FF9EED] px-4 py-1">
                        Admin
                      </span>
                    )}
                    {user.isOrganizer && (
                      <span className="rounded-full bg-[#fff36e] px-4 py-1">
                        Organizer
                      </span>
                    )}
                    <span className="rounded-full bg-[#7BD7FF] px-4 py-1">
                      {user.application.major}
                    </span>
                    <span className="rounded-full bg-[#7BD7FF] px-4 py-1">
                      {user.application.class}
                    </span>
                    <span className="rounded-full bg-[#7BD7FF] px-4 py-1">
                      {getUppercaseLetters(user.application.school)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <a
                    href={`https://github.com/${user.application.github}`}
                    target="_blank"
                    className="flex items-center gap-2 text-sm">
                    <BsGithub color="#FF9C9C" size={24} />
                    <p className="text-white">{user.application.github}</p>
                  </a>
                  <div
                    onClick={() => {
                      navigator.clipboard.writeText(user.discordId),
                        setOpen(true);
                    }}
                    className="flex cursor-pointer items-center gap-2 text-sm">
                    <BsDiscord color="#FF9C9C" size={24} />
                    {!user.discordId ? (
                      <p>Not added</p>
                    ) : (
                      <p className="text-white">{user.discordId}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2 text-white">{user.bio}</p>
          </div>
        );
      })}
    </div>
  );
}
