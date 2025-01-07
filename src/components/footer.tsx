import React from "react";
import { BsInstagram, BsLinkedin, BsDiscord } from "react-icons/bs";
import links from "@/lib/data/links.json";

export const LandingFooter: React.FC = () => {
  return (
    <>
      <div className="relative flex pt-80">
        <div className="flex w-full flex-col items-center">
          <h2 className="m-4 mt-14 text-center text-xxl font-medium text-[#B479FF] [text-shadow:_0_0_10px_#FFD8FD] md:text-[5rem]">
            Contact Us
          </h2>
          <p className="font-medium">{links.email}</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-[#9A76FF]">
            <a target="_blank" href={links.linkedin}>
              <BsLinkedin className="h-12 w-12 md:h-16 md:w-16" />
            </a>
            <a target="_blank" href={links.discord}>
              <BsDiscord className="h-12 w-12 md:h-16 md:w-16" />
            </a>
            <a target="_blank" href={links.acmcsuf}>
              <img
                className="h-12 w-12 md:h-16 md:w-16"
                src="/assets/acm_logo.svg"
                alt="ACM Logo"
              />
            </a>
            <a target="_blank" href={links.instagram}>
              <BsInstagram className="h-8 w-8 md:h-12 md:w-12" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
