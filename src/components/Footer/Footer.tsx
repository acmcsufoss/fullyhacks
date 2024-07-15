import React from "react";
import { BsInstagram, BsLinkedin, BsDiscord } from "react-icons/bs";

export const LandingFooter: React.FC = () => {
  return (
    <>
      <div className="relative flex">
        <img
          className="absolute top-9 right-4 w-16 -scale-x-100 md:top-3 md:w-28"
          src="/cat3.svg"
          alt="Cat image"
        />

        <div className="flex w-full flex-col items-center">
          <h2 className="m-4 mt-14 text-center font-ohm text-xxl font-medium text-[#B479FF] [text-shadow:_0_0_10px_#FFD8FD] md:text-[5rem]">
            Contact Us
          </h2>
          <p className="font-medium">fullyhacks@gmail.com</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-[#9A76FF]">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/fullyhacks/">
              <BsLinkedin className="h-12 w-12 md:h-16 md:w-16" />
            </a>
            <a target="_blank" href="https://discord.gg/3NvZKuQxJY">
              <BsDiscord className="h-12 w-12 md:h-16 md:w-16" />
            </a>
            <a target="_blank" href="https://acmcsuf.com/">
              <img
                className="h-12 w-12 md:h-16 md:w-16"
                src="/acm_logo.svg"
                alt="ACM Logo"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/fullyhacks/">
              <BsInstagram className="h-8 w-8 md:h-12 md:w-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
