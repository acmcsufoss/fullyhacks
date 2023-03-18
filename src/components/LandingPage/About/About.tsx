import React from 'react'
import Bubble from '../../Bubble/Bubble'

const About: React.FC = () => {
  return (
    <>
      <img
        src="/tuffy_rocket.svg"
        className="motion-reduce:animate-none z-10 object-cover w-[58%] md:w-[300px] md:order-2 animate-float"
        alt="tuffy rocket"
      />
      <Bubble
        top="top-8 md:top-12"
        left="left-14 md:left-[40em]"
        width="w-20 md:w-30"
        height="h-20 md:h-30"
        color="bg-orange_300"
      />
      <Bubble
        top="top-0 md:top-20"
        left="left-[11em] md:left-[44em]"
        width="w-28 md:w-36"
        height="h-28 md:h-36"
        color="bg-purple_300"
      />
      <div id="about" className="md:ml-[6rem]">
        <p className="mt-10 text-xl font-medium md:text-xxl">About</p>
        <p className="mt-4">
          FullyHacks is California State University, Fullerton's 24-hour, beginner-friendly hackathon which will be held
          <span className="font-semibold"> 100% in-person</span> from
          <span className="font-semibold"> April 8th to 9th.</span>
        </p>
        <p className="mt-4">
          You'll be able to
          <span className="font-semibold">
            {' '}
            meet future Software Engineers{' '}
          </span>{' '}
          during our networking event. Your project also has the chance to
          <span className="font-semibold"> win cool prizes! 🎉</span>
        </p>
      </div>
    </>
  )
}

export default About
