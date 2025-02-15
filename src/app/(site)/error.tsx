"use client";

import { AuthNavBar } from "@/components/nav-bar";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function Error({
  error
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-white">
      <div className="portal-background-container"></div>
      <AuthNavBar />
      <div className="flex flex-col items-center p-8">
        <div className="z-10 flex flex-col items-center rounded-lg bg-[#060606] bg-opacity-50 p-4 md:w-[640px] md:p-12">
          <p className="text-[2.5rem] text-[#72D6E6] md:text-[4rem]">ERROR</p>
          <p className="my-2 w-[90%] text-center text-md font-semibold text-white md:text-[1.5rem]">
            An error has occurred with your application submission. Please click
            on the button below to be redirected to the application page.
          </p>
          <Link
            href="/apply"
            className="mb-10 mt-8 flex w-[min(300px,_90vw)] items-center justify-center gap-4 rounded-xl bg-[#5BA0BD] p-2 text-white transition-opacity duration-300 hover:opacity-90 hover:ease-in-out md:text-md lg:mb-4">
            <BsArrowLeft size={24} />
            Return to Application
          </Link>
        </div>
      </div>
    </div>
  );
}
