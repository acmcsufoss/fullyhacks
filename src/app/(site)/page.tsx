"use client";

import React from "react";
import Link from "next/link";
import Hero from "./_components/hero";
import CountDown from "./_components/count-down";
import About from "./_components/about";
import {
  FAQBackgroundEffects,
  FooterBackgroundEffects,
  SponsorsBackgroundEffects,
  TeamBackgroundEffects
} from "./_components/background-effects";
import Sponsors from "./_components/sponsors";
import { LandingFooter } from "@/components/footer";
import FAQ from "./_components/faq";
import Team from "./_components/team";

export default function Home() {
  return (
    <main className="landing-container relative flex flex-col text-white">
      <section className="top-section relative flex w-full flex-col items-center">
        <Hero />
        <CountDown />
        <div className="relative mt-14 flex items-center gap-12 text-md font-medium">
          <Link href="/apply">
            <button className="z-[11] mx-0 box-border rounded-[20px] bg-[#926BAF] py-2 px-4 text-white transition-all focus:brightness-110 hover:brightness-110 md:text-xl">
              Apply
            </button>
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1VD3-67cy95E7RaM1rXaItzjYtk-ogb_r/view"
            className="z-[11] mx-0 cursor-pointer rounded-[20px] border-[3px] border-[#4A47CD] py-2 px-4 text-[#4A47CD] transition-all focus:brightness-110 hover:brightness-110 md:text-xl">
            Sponsor Us!
          </a>
        </div>
        <div
          id="about-fullyhacks"
          className="relative mt-40 flex min-w-[300px] flex-col items-center justify-center font-normal md:flex-row md:text-md">
          <About />
        </div>
      </section>
      <section className="sponsors-container relative flex w-full flex-col items-center">
        <div
          id="sponsors"
          className="mt-8 flex w-full max-w-[1048px] flex-col items-center justify-center font-normal md:mt-40 md:text-md">
          <SponsorsBackgroundEffects />
          <Sponsors />
        </div>
      </section>
      <section className="team-container flex w-screen flex-col items-center overflow-visible">
        <div
          id="team"
          className="relative mx-4 mt-8 flex max-w-[1048px] flex-col items-center justify-center font-normal md:mx-0 md:mt-40 md:text-md">
          <TeamBackgroundEffects />
          <Team />
        </div>
      </section>
      <section className="relative flex w-[100vw] flex-col items-center justify-start overflow-hidden pb-32 font-normal md:pt-32 md:pb-24 md:text-md">
        <FAQBackgroundEffects />
        <div
          id="frequently-asked-questions"
          className="relative mx-4 flex max-w-[1048px] flex-col items-center justify-center font-normal md:mt-40 md:text-md">
          <FAQ />
        </div>
        <FooterBackgroundEffects />
        <LandingFooter />
      </section>
    </main>
  );
}
