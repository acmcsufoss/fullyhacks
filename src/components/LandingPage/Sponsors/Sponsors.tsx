import { companyType } from '@/types/interface'
import React from 'react'

interface SponsorBalloonProps {
  company: companyType
}

const SponsorBalloon: React.FC<SponsorBalloonProps> = (props) => {
  const { company } = props

  return (
    <div className="w-52 md:w-72 relative animate-float motion-reduce:animate-none">
      <img src="/sponsor_balloon.svg" alt="Sponsor Balloon" />
      <a className="text-center" target="_blank" href={company.href} title={company.name}>
        <img
          className="absolute z-20 w-32 md:w-48 top-0 bottom-14 md:bottom-20 left-0 right-0 m-auto"
          src={company.image}
          alt={company.name}
        />
      </a>
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
      <section className="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 md:gap-x-12 my-10">
        {companies.map((company: companyType) => {
          return <SponsorBalloon key={company.id} company={company} />
        })}
      </section>
    </div>
  )
}

export default Sponsors
