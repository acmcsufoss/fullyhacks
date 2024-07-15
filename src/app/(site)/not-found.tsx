"use client";

import Link from "next/link";
import React from "react";
import { GenericNavBar } from "@/components/NavBar/NavBar";

export default function NotFound() {
  return (
    <>
      <GenericNavBar />
      <div className="mt-10 flex h-full w-full flex-col items-center justify-center font-rubik text-purple_main">
        <p className="text-center text-xl font-semibold md:text-xxl">
          404 Page Not Found :({" "}
        </p>
        <button className="apply-btn mt-10 p-2 md:text-lg">
          <Link href={"/"}>Back to home</Link>
        </button>
      </div>
    </>
  );
}
