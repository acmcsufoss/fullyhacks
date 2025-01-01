"use client";

import React from "react";
import Link from "next/link";
// import Image from "next/image";
import { companyType, FAQType, TeamType } from "@/types/interface";
import { LandingFooter } from "@/components/footer";
import Hero from "./hero";
import CountDown from "./count-down";
import About from "./about";
import Sponsors from "./sponsors";
import FAQ from "@/components/faq";
import Team from "./team";
import TeamConstellation from "./team-constellation";

interface LandingPageProps {
  companyData: companyType[];
  faqData: FAQType[];
  teamData: TeamType[];
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  const { companyData, faqData, teamData } = props;
  return (
    <main className="landing-container relative flex flex-col text-white">
      <section className="top-section relative flex w-full flex-col items-center">
        <Hero />
        <CountDown />
        <div className="relative mt-24 flex items-center gap-8 text-md font-medium">
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
        <div
          id="about-fullyhacks"
          className="relative mt-40 flex max-w-[1048px] flex-col items-center justify-center font-normal md:flex-row md:text-md">
          <About />
        </div>
      </section>
      <section className="sponsors-container relative flex w-full flex-col items-center">
        <div
          id="sponsors"
          className="mt-8 flex w-full max-w-[1048px] flex-col items-center justify-center font-normal md:mt-40 md:text-md">
          <Sponsors companies={companyData} />
        </div>
      </section>
      <section className="team-container flex w-screen flex-col items-center">
        <div
          id="team"
          className="mx-4 mt-8 flex max-w-[1048px] flex-col items-center justify-center font-normal md:mx-0 md:mt-40 md:text-md">
          <TeamConstellation />
          {/* <Team team={teamData} /> */}
        </div>
      </section>
      <section className="relative flex w-[100vw] flex-col items-center justify-start overflow-hidden pb-40 font-normal md:pt-32 md:pb-24 md:text-md">
        <div
          id="frequently-asked-questions"
          className="relative mx-4 flex max-w-[1048px] flex-col items-center justify-center font-normal md:mt-40 md:text-md">
          <FAQ faqs={faqData} />
        </div>
        <LandingFooter />
      </section>
    </main>
  );
};

export default LandingPage;
