import Bubble from '@/components/Bubble/Bubble'
import React from 'react'

const Partners: React.FC = () => {
  return (
    <>
      <img
        src="/acm.svg"
        alt="acm logo"
        className="motion-reduce:animate-none animate-float z-[2] relative w-[58%] md:w-[300px]"
      />
      <Bubble
        top="top-[-0.5rem] md:top-[-2rem] z-[1]"
        left="left-[8rem] md:left-[6rem]"
        width="w-20 md:w-36"
        height="h-20 md:h-36"
        color="bg-orange_300"
      />
      <Bubble
        top="z-[1] top-[7rem] md:top-auto"
        left="left-20 md:left-0"
        width="w-20 md:w-36"
        height="h-20 md:h-36"
        color="bg-purple_300"
      />
      <Bubble
        top="z-[1] top-[7rem] md:top-auto"
        left="left-[11rem] md:left-48"
        width="w-20 md:w-36"
        height="h-20 md:h-36"
        color="bg-pink_100"
      />
      <div className="mb-auto flex flex-col md:ml-[6rem]">
        <p className="mt-14 text-xl font-medium md:text-xxl">Our Partners</p>
        <p className="mt-4">
          The teams of people here in
          <span className="font-semibold"> CSUF </span> that helped put this
          together.
        </p>
        <p className="mt-4">
          We are the largest computer science community at{' '}
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
