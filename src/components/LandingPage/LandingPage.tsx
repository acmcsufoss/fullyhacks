import { companyType, FAQType, TeamType } from '@/types/interface'
import Link from 'next/link'
import React from 'react'
import Bubbles from '../Bubble/Bubbles'
import { LandingFooter } from '../Footer/Footer'
import { NavBarLanding } from '../NavBar/NavBar'
import About from './About/About'
import CountDown from './CountDown/CountDown'
import FAQ from './FAQ/FAQ'
import Partners from './Partners/Partners'
import Sponsors from './Sponsors/Sponsors'
import Team from './Team/Team'

import Image from 'next/image'
interface LandingPageProps {
  companyData: companyType[]
  faqData: FAQType[]
  teamData: TeamType[]
}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  const { companyData, faqData, teamData } = props
  return (
    <>
      <NavBarLanding />
      <section className="mt-20 text-center text-purple_main z-[2]">
        <h1 className="text-xxl">
          FullyHacks <span className="text-turquoise_300">2024</span>
        </h1>
        <p className="font-normal text-lg">April 8th - 9th</p>
      </section>
      <CountDown />

      <div className="relative flex items-center mt-24 gap-8 text-md font-medium">
        <div className="absolute -right-2 -top-[170%]  ">
          <Image src="/cat.svg" width={100} height={100} />
        </div>

        <Link href="/signin" className="">
          <button className="cursor-pointer z-[11] mx-0 apply-btn">
            Apply
          </button>
        </Link>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1_JJoRMsqY2n5EUpNk4GFdhJInvi8GEp2/view?usp=share_link"
          className="z-[11] font-normal sponsor-btn">
          Sponsor Us!
        </a>
      </div>

      <section>
        <div
          id="about"
          className="mx-4 relative font-normal font-rubik text-purple_main mt-40 flex flex-col items-center justify-center md:flex-row md:mx-8 md:text-md max-w-[1048px]">
          <About />
        </div>
        <div
          id="sponsors"
          className="mx-4 font-normal font-rubik text-purple_main mt-8 flex flex-col items-start justify-center md:mx-8 md:text-md max-w-[1048px] md:mt-40">
          <Sponsors companies={companyData} />
        </div>
        <div className="mx-4 relative font-normal font-rubik text-purple_main flex flex-col items-center justify-center md:flex-row md:mx-8 md:text-md md:mt-40 max-w-[1048px]">
          <Partners />
        </div>
        <div
          id="faq"
          className="mx-4 relative font-normal font-rubik text-purple_main flex flex-col items-center justify-center md:mx-8 md:text-md md:mt-40 max-w-[1048px]">
          <FAQ faqs={faqData} />
        </div>
        <div
          id="team"
          className="mx-4 font-normal font-rubik text-purple_main mt-8 flex flex-col items-start justify-center md:mx-8 md:text-md max-w-[1048px] md:mt-40">
          <Team team={teamData} />
        </div>
      </section>
      <div className="w-[100vw] mt-12 h-[480px] relative font-normal font-rubik text-purple_main flex flex-col items-center justify-start overflow-hidden md:mx-8 md:text-md md:mt-40 md:h-[720px]">
        <LandingFooter />
      </div>
    </>
  )
}

export default LandingPage
