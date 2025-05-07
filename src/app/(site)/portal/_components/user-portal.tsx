import React from "react";
import Link from "next/link";
import { ApplicationType, ApplicationStatus, User } from "@/types/interface";
import { BsArrowRight } from "react-icons/bs";

export default function UserPortal({ user }: { user: User }) {
  const application: ApplicationType = user.application as ApplicationType;
  const date: Date = new Date(application.submittedAt);
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const formattedDate = date.toLocaleDateString("en-US", option);

  return (
    <div className="relative mx-4 mb-16 flex flex-col items-center justify-center text-white">
      <h2 className="custom-text-shadow text-center text-5xl md:text-[4rem]">
        USER PORTAL
      </h2>
      <div className="mt-4 w-[min(400px,_90wv)] rounded-xl bg-[#060606] bg-opacity-50 p-6 md:w-[500px] md:p-10 md:text-md lg:w-[720px]">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start">
          <img
            className="z-[30] h-24 w-24 rounded-md border-4 border-white md:h-48 md:w-48"
            src={`${user.image}`}
            alt="GitHub Profile Picture"
          />
          <div className="z-[30] flex flex-col flex-wrap">
            <div>
              <span className="underline underline-offset-2">Name:</span>{" "}
              <span className="text-[#cdcdcd]">{application.name}</span>
            </div>
            <div>
              <span className="underline underline-offset-2">School:</span>{" "}
              <span className="text-[#cdcdcd]">{application.school}</span>
            </div>
            <div>
              <span className="underline underline-offset-2">GitHub:</span>{" "}
              <span className="text-[#cdcdcd]">{application.github}</span>
            </div>
            <div>
              <span className="underline underline-offset-2">Email:</span>{" "}
              <span className="text-[#cdcdcd]">{application.email}</span>
            </div>
            {application.preferredEmail !== "" && (
              <div>
                <span className="underline underline-offset-2">
                  Preferred Email:
                </span>{" "}
                <span className="text-[#cdcdcd]">
                  {application.preferredEmail}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 font-semibold md:mt-8">
          <p>
            Application Status:
            <span
              className={`ml-4 rounded-md py-1 px-2 text-center font-normal ${
                application.status === ApplicationStatus.APPROVED
                  ? "bg-green-500"
                  : application.status === ApplicationStatus.REJECTED
                    ? "bg-red-600"
                    : application.status === ApplicationStatus.WAITLISTED
                      ? "bg-yellow-500"
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
      {application.status === ApplicationStatus.APPROVED && (
        <>
          <Link href="/feed" className="blue-btn mb-10 mt-8 lg:mb-4">
            Continue to the Feed
            <BsArrowRight size={24} />
          </Link>
        </>
      )}
    </div>
  );
}
