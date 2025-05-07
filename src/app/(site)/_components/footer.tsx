import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { PiInstagramLogoFill } from "react-icons/pi";
import links from "@/lib/data/links.json";

export default function LandingFooter() {
  return (
    <>
      <div className="relative mt-[10rem] flex pt-80 lg:mt-[30rem]">
        <div className="flex w-full flex-grow flex-col items-center">
          <div className="relative inline-block">
            <h2 className="custom-text-shadow m-4 mt-14 text-center font-audiowide text-[2rem] font-normal text-white md:text-[3rem] lg:block lg:text-[5rem]">
              CONTACT US
            </h2>
            {/* capy on the C */}
            <img
              src="/assets/capy-c.svg"
              alt="Capybara"
              className="absolute hidden w-auto sm:hidden lg:top-[1.65rem] lg:left-[0.6rem] lg:block lg:h-[4.5rem]"
            />
          </div>
          {/* email */}
          <p className="py-[1rem] pb-[3rem] font-bruno text-[1.5rem] font-normal md:text-[2rem] lg:pb-[4rem] lg:text-[2rem]">
            {links.email}
          </p>

          {/* Frame for icons */}
          <div className="flex flex-grow items-center justify-center gap-6 text-[#ECECEC]">
            <div className="relative inline-block">
              {/* ACM text */}
              <a target="_blank" href={links.acmcsuf}>
                <img
                  src="/assets/capy-acm.svg"
                  alt="capybara ACM"
                  className="absolute hidden h-[3rem] w-auto lg:top-[-1.5rem] lg:left-[-0.7rem] lg:block"
                />
                <img
                  className="md:h-18 md:w-18 h-14 w-14"
                  src="/assets/acm_logo.svg"
                  alt="ACM Logo"
                />
              </a>
            </div>
            <a target="_blank" href={links.github}>
              <BsGithub className="h-12 w-12 md:h-14 md:w-14" />
            </a>
            <a target="_blank" href={links.linkedin}>
              <BsLinkedin className="h-[2.75rem] w-12 md:h-14 md:w-14" />
            </a>
            <a target="_blank" href={links.instagram}>
              {<PiInstagramLogoFill className="h-12 w-12 md:h-16 md:w-16" />}
            </a>
          </div>
        </div>
      </div>
      {/* Footer Text */}
      <div className="bottom-0 w-full pt-10 text-center">
        <p className="text-sm text-gray-400">
          © 2025 FullyHacks. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
