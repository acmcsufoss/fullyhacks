"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyType, FAQType, TeamType } from "@/types/interface";
import { SignArea, SIGNS } from "@/components/SignArea";
import { LandingFooter } from "@/components/Footer/Footer";
import About from "@/components/LandingPage/About";
import CountDown from "@/components/LandingPage/CountDown";
import FAQ from "@/components/LandingPage/FAQ";
import Partners from "@/components/LandingPage/Partners";
import Sponsors from "@/components/LandingPage/Sponsors";
import Team from "@/components/LandingPage/Team";
import Hero from "@/components/LandingPage/Hero";

interface LandingPageProps {
  companyData: companyType[];
  faqData: FAQType[];
  teamData: TeamType[];
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  const { companyData, faqData, teamData } = props;
  return (
    <SignArea signs={SIGNS}>
      <main className="relative flex flex-col items-center font-rubik font-semibold">
        <Hero />
        <CountDown />

        <div className="relative flex items-center mt-24 gap-8 text-md font-medium">
          <div className="absolute -right-2 -top-[170%]  ">
            <Image
              src="/cat.svg"
              alt="Neon cat image"
              width={100}
              height={100}
            />
          </div>

          <Link href="/signin" className="">
            <button className="cursor-pointer z-[11] mx-0 apply-btn">
              Apply
            </button>
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1nw2_POGSUO0qCj24TT-fwW7hjqzBQpLW/view?usp=sharing"
            className="z-[11] font-normal sponsor-btn">
            Sponsor Us!
          </a>
        </div>

        <section>
          <div
            id="about"
            className="relative font-normal font-rubik text-purple_main mt-40 flex flex-col items-center justify-center md:flex-row md:text-md max-w-[1048px]">
            <About />
          </div>
          <div
            id="sponsors"
            className="font-normal font-rubik text-purple_main mt-8 flex flex-col items-center justify-center md:text-md max-w-[1048px] md:mt-40">
            <Sponsors companies={companyData} />
          </div>
          <div className="mx-4 relative font-normal font-rubik text-purple_main flex flex-col items-center justify-center gap-16 md:gap-6 lg:gap-16 md:flex-row md:justify-start md:text-md md:mt-40 max-w-[1048px]">
            <Partners />
          </div>
          <div
            id="faq"
            className="mx-4 md:mx-0 relative font-normal font-rubik text-purple_main flex flex-col items-center justify-center md:text-md md:mt-40 max-w-[1048px]">
            <FAQ faqs={faqData} />
          </div>
          <div
            id="team"
            className="mx-4 md:mx-0 font-normal font-rubik text-purple_main mt-8 flex flex-col items-center justify-center md:text-md max-w-[1048px] md:mt-40">
            <Team team={teamData} />
          </div>
        </section>
        <div className="w-[100vw] mb-40 relative font-normal font-rubik text-purple_main flex flex-col items-center justify-start overflow-hidden md:text-md md:mt-32 md:mb-24">
          <LandingFooter />
        </div>
      </main>
    </SignArea>
  );
};

export default LandingPage;
