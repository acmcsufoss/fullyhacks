"use client";

import { AuthNavBar } from "@/components/NavBar/NavBar";
import Link from "next/link";
import React from "react";

export default function Error() {
  return (
    <div className="">
      <AuthNavBar />
      <div className="flex flex-col items-center">
        <div className="bg-[#100D21] flex flex-col items-center md:w-[640px] p-2 rounded-lg">
          <p className="font-ohm text-[4rem] text-[#62B4FF]">ERROR</p>
          <p className="w-[80%] text-center text-white text-[1.5rem] my-2 font-semibold">
            An error has occurred with your application submission. Please click
            on the button below to be redirected to the application page.
          </p>
          <Link href={"/apply"}>
            <button className="bg-[#4998E1] rounded-md my-16 p-2 text-white">
              Return to Application
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
