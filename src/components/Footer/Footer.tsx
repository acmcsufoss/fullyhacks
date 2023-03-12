import React from 'react'
import { FooterBubbles } from '../Bubble/Bubbles'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

export const LandingFooter: React.FC = () => {
  return (
    <>
      <div className="flex relative">
        <img
          className="animate-float w-20 h-20 md:w-36 md:h-36"
          src="/confetti.svg"
          alt="confetti left logo"
        />
        <div className="w-full flex flex-col items-center">
          <p className="text-center mx-4 mt-14 text-lg font-medium md:text-xxl mb-4">
            Stay Connected
          </p>
          <div className="flex gap-8">
            <a target="_blank" href="https://www.instagram.com/fullyhacks/">
              <BsInstagram className="w-8 h-8 md:w-12 md:h-12" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/tuffyhacks/">
              <BsLinkedin className="w-8 h-8 md:w-12 md:h-12" />
            </a>
          </div>
        </div>
        <img
          className="animate-float scale-x-[-1] w-20 h-20 md:w-36 md:h-36"
          src="/confetti.svg"
          alt="confetti right logo"
        />
      </div>
      <FooterBubbles />
      <img
        className="w-64 h-64 overflow-hidden absolute top-[20rem] left-[-2rem] md:top-[26rem] md:left-[0rem] md:w-[24em] md:h-[24em]"
        src="/tuffy_confetti.svg"
        alt="confetti elephants"
      />
    </>
  )
}
