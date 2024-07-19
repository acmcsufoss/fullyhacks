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

        <div className="relative mt-24 flex items-center gap-8 text-md font-medium">
          <div className="absolute -right-2 -top-[127%]">
            <Image
              src="/cat.svg"
              alt="Neon cat image"
              width={100}
              height={100}
            />
          </div>

          <Link href="/signin" className="">
            <button className="apply-btn z-[11] mx-0 cursor-pointer">
              Apply
            </button>
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1nw2_POGSUO0qCj24TT-fwW7hjqzBQpLW/view?usp=sharing"
            className="sponsor-btn z-[11] font-normal">
            Sponsor Us!
          </a>
        </div>

        <section>
          <div
            id="about-fullyhacks"
            className="relative mt-40 flex max-w-[1048px] flex-col items-center justify-center font-rubik font-normal text-purple_main md:flex-row md:text-md">
            <About />
          </div>
          <div
            id="sponsors"
            className="mt-8 flex max-w-[1048px] flex-col items-center justify-center font-rubik font-normal text-purple_main md:mt-40 md:text-md">
            <Sponsors companies={companyData} />
          </div>
          <div className="relative mx-4 flex max-w-[1048px] flex-col items-center justify-center gap-16 font-rubik font-normal text-purple_main md:mt-40 md:flex-row md:justify-start md:gap-6 md:text-md lg:gap-16">
            <Partners />
          </div>
          <div
            id="frequently-asked-questions"
            className="relative mx-4 flex max-w-[1048px] flex-col items-center justify-center font-rubik font-normal text-purple_main md:mx-0 md:mt-40 md:text-md">
            <FAQ faqs={faqData} />
          </div>
          <div
            id="team"
            className="mx-4 mt-8 flex max-w-[1048px] flex-col items-center justify-center font-rubik font-normal text-purple_main md:mx-0 md:mt-40 md:text-md">
            <Team team={teamData} />
          </div>
        </section>
        <div className="relative mb-40 flex w-[100vw] flex-col items-center justify-start overflow-hidden font-rubik font-normal text-purple_main md:mt-32 md:mb-24 md:text-md">
          <LandingFooter />
        </div>
      </main>
    </SignArea>
  );
};

export default LandingPage;
