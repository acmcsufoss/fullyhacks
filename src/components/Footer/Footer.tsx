import React from "react";
import { BsInstagram, BsLinkedin, BsDiscord } from "react-icons/bs";

export const LandingFooter: React.FC = () => {
  return (
    <>
      <div className="flex relative">
        <img
          className="absolute top-9 right-4 md:top-3 w-16 md:w-28 -scale-x-100"
          src="/cat3.svg"
          alt="Cat image"
        />

        <div className="w-full flex flex-col items-center">
          <h2 className="m-4 mt-14 text-center text-[#B479FF] [text-shadow:_0_0_10px_#FFD8FD] text-xxl font-ohm font-medium md:text-[5rem]">
            Contact Us
          </h2>
          <p className="font-medium">fullyhacks@gmail.com</p>
          <div className="mt-4 flex gap-4 items-center justify-center text-[#9A76FF]">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/fullyhacks/">
              <BsLinkedin className="w-12 h-12 md:w-16 md:h-16" />
            </a>
            <a target="_blank" href="https://discord.gg/3NvZKuQxJY">
              <BsDiscord className="w-12 h-12 md:w-16 md:h-16" />
            </a>
            <a target="_blank" href="https://acmcsuf.com/">
              <img
                className="w-12 h-12 md:w-16 md:h-16"
                src="/acm_logo.svg"
                alt="ACM Logo"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/fullyhacks/">
              <BsInstagram className="w-8 h-8 md:w-12 md:h-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
