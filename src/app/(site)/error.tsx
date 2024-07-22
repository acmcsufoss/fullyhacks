"use client";

import { AuthNavBar } from "@/components/nav-bar";
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="">
      <AuthNavBar />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center rounded-lg bg-[#100D21] p-2 md:w-[640px]">
          <p className="font-ohm text-[4rem] text-[#62B4FF]">ERROR</p>
          <p className="my-2 w-[80%] text-center text-[1.5rem] font-semibold text-white">
            An error has occurred with your application submission. Please click
            on the button below to be redirected to the application page.
          </p>
          <Link href={"/apply"}>
            <button className="my-16 rounded-md bg-[#4998E1] p-2 text-white">
              Return to Application
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
