import { companyType } from '@/types/interface'
import React from 'react'
import Bubble from '../Bubble/Bubble'

interface SponsorProps {
  companies: companyType[]
}

const Sponsors: React.FC<SponsorProps> = (props) => {
  const { companies } = props
  return (
    <div className="md:ml-[6rem]">
      <p className="mt-10 text-xl font-medium md:text-xxl">Sponsors</p>
      <p className="mt-4 font-light">
        Companies that help make Tuffyhack 2023 possible
      </p>
      <section
        id="sponsors"
        className="grid grid-cols-3 justify-center gap-8 my-10 ">
        {companies.map((company: companyType) => {
          return (
            <div className="mt-4 md:mt-8 md:mr-24" key={company.id}>
              <img
                src={company.image}
                alt={company.name}
                className="relative z-20 w-20 md:w-32"
              />
              <Bubble
                top="relative z-1 top-[-2.5rem] md:top-[-4.5rem]"
                left="left-[-1rem] md:left-[-1.5rem]"
                width="w-6 md:w-10"
                height="h-6 md:h-10"
                color="bg-pink_100"
              />
              <Bubble
                top="relative z-1 top-[-2.5rem] md:top-[-4.5rem]"
                left="left-[4rem] md:left-[7rem]"
                width="w-6 md:w-10"
                height="h-6 md:h-10"
                color="bg-purple_300"
              />
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Sponsors
