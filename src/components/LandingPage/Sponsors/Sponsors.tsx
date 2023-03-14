import { companyType } from '@/types/interface'
import React from 'react'

interface SponsorProps {
  companies: companyType[]
}

const Sponsors: React.FC<SponsorProps> = (props) => {
  const { companies } = props
  return (
    <div className="md:ml-[6rem]">
      <p className="mt-10 text-xl font-medium md:text-xxl">Sponsors</p>
      <p className="mt-4 font-light">
        Organizations that help make FullyHacks 2023 possible
      </p>
      <section className="grid grid-cols-3 items-center justify-center gap-8 my-10 ">
        {companies.map((company: companyType) => {
          return (
            <div
              className="flex items-center mt-4 md:mt-8 md:mr-24"
              key={company.id}>
              <a target="_blank" href={company.href}>
                <img
                  src={company.image}
                  alt={company.name}
                  className="object-cover relative z-20 w-32 md:w-52"
                />
              </a>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Sponsors
