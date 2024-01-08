import Bubble from '@/components/Bubble/Bubble'
import React from 'react'

const Partners: React.FC = () => {
  return (
    <>
      <img
        className="z-[2] relative w-[58%] md:w-[300px] mt-24"
        src="/acm_blue_logo.svg"
        alt="ACM Logo"
      />
      <div className="mb-auto flex flex-col md:ml-[6rem]">
        <p className="mt-14 text-xxl text-center font-medium md:text-[5rem] text-[#0BB6FF] [text-shadow:_-3px_0_4px_#FF0BF5] font-ohm">
          Our Mission
        </p>
        <p className="mt-4 text-center text-white">
          ACM is the largest computer science community at{' '}
          <span className="font-semibold"> CSUF </span>. We aim to build a
          foundation for future industry leaders by developing their technical,
          professional, and social skills. We facilitate these by offering
          various events, programs, and initiatives that have been proven to
          help students start up their careers on the right foot.
        </p>
      </div>
    </>
  )
}

export default Partners
