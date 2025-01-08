"use client";

import React from "react";
import Link from "next/link";
import { CompanyType, FAQType, TeamType } from "@/types/interface";
import { LandingFooter } from "@/components/footer";
import Hero from "./hero";
import CountDown from "./count-down";
import About from "./about";
import Sponsors from "./sponsors";
import Team from "./team";
import FAQ from "@/components/faq";
import { FAQBackgroundEffects } from "./background-effects";

interface LandingPageProps {
  companyData: CompanyType[];
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
        <div className="relative mt-14 flex items-center gap-12 text-md font-medium">
          <Link href="/signin" className="">
            <button className="z-[11] mx-0 box-border flex cursor-pointer flex-row items-center justify-center rounded-[20px] border-[3px] border-[#926BAF] py-2 px-4 text-[#926BAF] md:text-xl">
              Apply
            </button>
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1nw2_POGSUO0qCj24TT-fwW7hjqzBQpLW/view?usp=sharing"
            className="z-[11] mx-0 box-border flex cursor-pointer flex-row items-center justify-center rounded-[20px] border-[3px] border-[#4A47CD] py-2 px-4 text-[#4A47CD] md:text-xl">
            Sponsor Us!
          </a>
        </div>
        <div
          id="about-fullyhacks"
          className="relative mt-40 flex min-w-[300px] max-w-[1048px] flex-col items-center justify-center font-normal md:flex-row md:text-md">
          <About />
        </div>
      </section>
      <section className="sponsors-container relative flex w-full flex-col items-center">
        <div
          id="sponsors"
          className="mt-8 flex w-full max-w-[1048px] flex-col items-center justify-center font-normal md:mt-40 md:text-md">
          <Sponsors sponsors={companyData} />
        </div>
      </section>
      <section className="team-container flex w-screen flex-col items-center">
        <div
          id="team"
          className="mx-4 mt-8 flex max-w-[1048px] flex-col items-center justify-center font-normal md:mx-0 md:mt-40 md:text-md">
          <Team team={teamData} />
        </div>
      </section>
      <section className="relative flex w-[100vw] flex-col items-center justify-start overflow-hidden pb-32 font-normal md:pt-32 md:pb-24 md:text-md">
        <FAQBackgroundEffects />
        <div
          id="frequently-asked-questions"
          className="relative mx-4 flex max-w-[1048px] flex-col items-center justify-center font-normal md:mt-40 md:text-md">
          <FAQ faqs={faqData} />
        </div>
        {/* footer */}
        {/* Stars footer*/}
        <img
          src="/assets/footer/stars.svg"
          alt="stars"
          className="absolute hidden lg:left-[48%] lg:bottom-0 lg:block lg:h-[73rem] lg:w-full lg:-translate-x-1/2 lg:animate-pulse"
        />

        {/* comets */}
        <img
          src="/assets/footer/shootingStars.svg"
          alt="shooting stars"
          className="absolute hidden w-full lg:bottom-[5rem] lg:block"
        />

        {/* capystroid */}
        <img
          src="/assets/footer/capyAstroid.svg"
          alt="astroid capybara"
          className="absolute bottom-[25rem] right-[4rem] h-[8rem] md:right-[7rem] md:h-[9rem] lg:bottom-[10rem] lg:right-[13rem] lg:h-[13rem] lg:w-auto"
        />

        {/* Satellite */}
        <img
          src="/assets/footer/satellite.svg"
          alt="satellite"
          className="absolute bottom-[32rem] right-[-1rem] h-[18rem] md:h-[20rem] lg:bottom-[25rem] lg:h-[34rem]"
        />

        {/* constellation 1 */}
        <img
          src="/assets/constellation.svg"
          alt="constellation"
          className="absolute hidden lg:bottom-[0rem] lg:left-[-20rem] lg:block lg:h-[65rem] lg:blur-md"
        />

        {/* Constellation 2 */}
        <img
          src="/assets/constellation.svg"
          alt="constellation"
          className="absolute hidden lg:bottom-[-35rem] lg:right-[-28rem] lg:block lg:h-[53rem] lg:rotate-[75deg] lg:blur-md"
        />

        {/* cloud haze */}
        <img
          src="/assets/footer/cloudy.svg"
          alt="background"
          className="absolute hidden lg:bottom-[-30rem] lg:block lg:h-[rem] lg:w-full"
        />

        {/* rocketboost */}
        <img
          src="/assets/footer/rocketBoost.svg"
          alt="rocketboost"
          className="absolute hidden lg:bottom-[27rem] lg:left-[2.5rem] lg:block lg:h-[14rem] lg:w-auto"
        />

        {/* Capybara on Spaceship */}
        <img
          src="/assets/footer/capyShip.svg"
          alt="Spaceship"
          className="absolute bottom-[36rem] left-[-2.5rem] h-[8.5rem] w-auto md:h-[10rem] lg:left-[3rem] lg:bottom-[30rem] lg:h-[22rem]"
        />

        {/* mobile bg */}
        {/* constellation  */}
        <img
          src="/assets/footer/mobile/constellation.svg"
          alt="constellations"
          className="absolute bottom-[4rem] right-1 blur-lg md:right-[1rem] md:bottom-[-5rem] md:h-[70rem] lg:hidden"
        />

        {/* constellations multiple */}
        <img
          src="/assets/footer/mobile/constellationGroup.svg"
          alt="constellations"
          className="absolute bottom-[23rem] left-[0.25rem] h-[30rem] blur-lg md:bottom-[15rem] md:h-[40rem] lg:hidden"
        />

        {/* stars */}
        <img
          src="/assets/footer/mobile/mobileStars.svg"
          alt="constellations"
          className="absolute bottom-[20rem] left-[-2rem] h-[35rem] w-full animate-pulse md:bottom-[9rem] md:left-[-9rem] md:h-[50rem] lg:hidden"
        />
        <LandingFooter />
      </section>
    </main>
  );
};

export default LandingPage;
