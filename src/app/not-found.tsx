import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export default function NotFound() {
  return (
    <main className="relative h-full text-white">
      <div className="portal-background-container"></div>
      <img
        src="/assets/among-us.svg"
        alt="Among Us"
        className="animate-tilt absolute bottom-[10%] -left-12 w-[250px] md:-left-24 md:w-[400px]"
      />

      <div className="mt-32 flex w-full flex-col items-center justify-center">
        <h1 className="z-10 text-[3.5rem] text-[#72D6E6] md:text-[7rem]">
          404
        </h1>
        <p className="custom-text-shadow z-10 text-center text-xl font-semibold md:text-[3rem]">
          page not found
        </p>
        <Link
          href="/"
          className="z-10 mb-10 mt-4 flex w-[min(300px,_90vw)] items-center justify-center gap-4 rounded-xl bg-[#5BA0BD] p-2 text-white transition-opacity duration-300 hover:opacity-90 hover:ease-in-out lg:mb-4">
          <BsArrowLeft size={24} />
          RETURN TO HOME
        </Link>
      </div>
    </main>
  );
}
