import { companyType } from '@/types/interface'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import About from '../About/About'
import Bubble from '../Bubble/Bubble'
import Bubbles from '../Bubble/Bubbles'
import CountDown from '../CountDown/CountDown'
import { NavBarLanding } from '../NavBar/NavBar'
import Sponsors from '../Sponsors/Sponsors'

const LandingPage: React.FC = () => {
  const [companies, setCompanies] = useState<companyType[]>([])
  useEffect(() => {
    const getCompanies = async () => {
      const res = await axios.get('/api/companies')
      setCompanies(res.data)
    }
    getCompanies()
  }, [])

  return (
    <>
      <NavBarLanding />
      <section className="mt-20 text-center text-purple_main z-10">
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
      <section>
        <div className="mx-4 relative font-normal font-rubik text-purple_main mt-40 flex flex-col items-center justify-center md:flex-row md:mx-8 md:text-md max-w-[1048px]">
          <About />
        </div>
        <div className="mx-4 font-normal font-rubik text-purple_main mt-8 flex flex-col items-start justify-center md:mx-8 md:text-md max-w-[1048px] md:mt-40">
          <Sponsors companies={companies} />
        </div>
      </section>
    </>
  )
}

export default LandingPage
