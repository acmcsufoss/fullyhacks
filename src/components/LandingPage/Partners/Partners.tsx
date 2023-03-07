import Bubble from '@/components/Bubble/Bubble'
import React from 'react'

const Partners: React.FC = () => {
  return (
    <>
      <img
        src="/partners.svg"
        alt="partners"
        className="motion-reduce:animate-none animate-float z-[2] relative w-[58%] md:w-[300px]"
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
