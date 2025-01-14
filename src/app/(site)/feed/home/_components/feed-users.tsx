"use client";

import { feedUsers } from "@/types/interface";
import { useState } from "react";
import { BsDiscord, BsGithub } from "react-icons/bs";

export default function FeedUsers({ feedUsers }: { feedUsers: feedUsers[] }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {feedUsers.map((user: feedUsers) => {
        return (
          <div
            key={user.id}
            className="my-4 flex w-full gap-4 border-b-2 border-[#5A75FF] pb-6 text-purple_main [box-shadow:_0_4px_8px_-2px_#5A75FF] md:text-md">
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
            <p className="h-[40px] w-[40px] self-start rounded-[50%] bg-[#B7EEFF] p-2 text-center font-semibold text-black md:h-12 md:w-12 md:text-lg">
              {user.application.name[0].toUpperCase()}
            </p>
            <div className="flex w-full flex-col">
              <div className="md:tems-center mb-2 flex flex-col items-start gap-1 md:flex-row">
                <p className="mr-4 font-semibold text-[#66D4EC]">
                  {user.application.name}
                </p>
                <a
                  href={`https://github.com/${user.application.github}`}
                  target="_blank"
                  className="mr-4 flex items-center gap-2">
                  <BsGithub color="#EF4DB3" />
                  <p className="text-white"> {user.application.github}</p>
                </a>
                <div
                  onClick={() => {
                    navigator.clipboard.writeText(user.discordId),
                      setOpen(true);
                  }}
                  className="flex cursor-pointer items-center gap-2">
                  <BsDiscord color="#EF4DB3" />
                  {!user.discordId ? (
                    <p>Not added</p>
                  ) : (
                    <p className="text-white"> {user.discordId}</p>
                  )}
                </div>
              </div>
              <div className="my-2 flex flex-wrap items-center gap-4 text-sm text-black">
                {user.isAdmin && (
                  <p className="rounded-xl bg-[#FCC14F] px-4">Admin</p>
                )}
                <p className="rounded-xl bg-[#00B3FF] px-4">
                  {user.application.major}
                </p>
                <p className="rounded-xl bg-[#00B3FF] px-4">
                  {user.application.class}
                </p>
                <p className="rounded-xl bg-[#00B3FF] px-4">
                  {user.application.school}
                </p>
              </div>
              <p className="mt-2 text-white"> {user.bio}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
