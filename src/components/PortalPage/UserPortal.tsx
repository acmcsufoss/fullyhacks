"use client";

import { ApplicationType, User } from "@/types/interface";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface UserProps {
  user: User;
}

const UserPortal: React.FC<UserProps> = ({ user }) => {
  const application: ApplicationType = user.application as ApplicationType;
  const date: Date = new Date(application.submittedAt);
  const router = useRouter();
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const formattedDate = date.toLocaleDateString("en-US", option);

  return (
    <div className="font-rubik relative mx-4 flex flex-col items-center justify-center text-white">
      <p className="neon-text text-[4rem]">User Portal</p>
      <div className="md:text-md border-purple_main mt-10 w-[min(400px,_90wv)] rounded-lg border-2 bg-[#100D21] bg-opacity-25 p-6 backdrop-blur-md backdrop-filter md:w-[500px] lg:w-[720px]">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
          <img
            className="border-purple_main z-[30] h-24 w-24 rounded-md border-2 md:h-48 md:w-48"
            src={`${user.image}`}
            alt="Github's pfp"
          />
          <div className="z-[30] flex flex-col flex-wrap font-medium">
            <p className="">
              Name: <span className="font-normal"> {application.name} </span>
            </p>
            <p className="">
              School:{" "}
              <span className="font-normal"> {application.school} </span>
            </p>
            <p className="">
              Github:
              <span className="font-normal"> {application.github} </span>
            </p>
            <p className="">Email:</p>
            <span className="break-all font-normal">
              {" "}
              {application.preferredEmail}{" "}
            </span>
          </div>
        </div>
        <div className="mt-4 font-semibold md:mt-8">
          <p>
            Application Status:
            <span
              className={`ml-4 rounded-md p-1 text-center font-normal ${
                application.status == "approved"
                  ? "bg-green-500"
                  : application.status == "rejected"
                    ? "bg-red-600"
                    : "bg-gray-500"
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
      {application.status == "approved" && (
        <>
          <button
            onClick={() => router.push("/feed")}
            className="bg-purple_main md:text-md mb-16 mt-8 flex items-center gap-4 rounded-lg p-2 font-semibold text-white hover:bg-[#b63487] hover:duration-200 hover:ease-in-out">
            Continue to Feed
            <BsArrowRight size={24} />
          </button>
          <p className="mb-4 text-lg">Food QR Code</p>
        </>
      )}
    </div>
  );
};

export default UserPortal;
