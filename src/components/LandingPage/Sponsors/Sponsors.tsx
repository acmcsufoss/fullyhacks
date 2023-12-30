import { companyType } from '@/types/interface'
import React from 'react'

interface SponsorBalloonProps {
  company: companyType
}

const SponsorBalloon: React.FC<SponsorBalloonProps> = (props) => {
  const { company } = props

  return (
    <div className="relative">
      <div className="flex items-center mt-4 md:mt-8 md:mr-24" key={company.id}>
        <a target="_blank" href={company.href}>
          <img
            src={company.image}
            alt={company.name}
            className="object-cover relative z-20 w-32 md:w-52"
          />
        </a>
      </div>
    </div>
  )
}

interface SponsorProps {
  companies: companyType[]
}

const Sponsors: React.FC<SponsorProps> = (props) => {
  const { companies } = props
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-10 text-center text-xxl text-[#D7EEFF] [text-shadow:_0_0_10px_#719BCC] font-medium font-ohm md:text-[5rem]">
        Sponsors
      </h2>
      <section className="grid grid-cols-3 items-center justify-center gap-8 my-10">
        {companies.map((company: companyType) => {
          return <SponsorBalloon key={company.id} company={company} />
        })}
      </section>
    </div>
  )
}

export default Sponsors
