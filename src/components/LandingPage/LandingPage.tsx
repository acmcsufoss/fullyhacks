import React from 'react'
import About from '../About/About'
import Bubble from '../Bubble/Bubble'
import Bubbles from '../Bubble/Bubbles'
import CountDown from '../CountDown/CountDown'

const LandingPage: React.FC = () => {
  return (
    <>
      <section className="mt-20 flex flex-col items-center text-center text-purple_main z-10">
        <h1 className="text-xxl">
          FullyHacks <span className="text-orange_300">2023</span>
        </h1>
        <p className="font-normal text-lg">April 8th - 9th</p>
      </section>
      <Bubbles />
      <CountDown />
      <div className="flex items-center mt-12 gap-8 text-md font-medium">
        <button className="bg-sky_300 text-white px-6 py-1 rounded-lg">
          Apply
        </button>
        <button className="font-normal"> Sponsor Us!</button>
      </div>
      <section
        className="mx-4 relative font-normal font-rubik text-purple_main my-40 flex flex-col items-center justify-center md:flex-row md:mx-8 md:text-md">
        <About />
      </section>
    </>
  )
}

export default LandingPage
