import { TeamType } from '@/types/interface'
import React from 'react'

interface TeamProps {
  team: TeamType[]
}

const Team: React.FC<TeamProps> = ({ team }) => {
  return (
    <div className="md:ml-[6rem] font-rubik">
      <p className="mt-10 text-xl font-medium md:text-xxl">Our Team</p>
      <p className="mt-4 font-light">
        Amazing people who makes FullyHacks happen
      </p>
      <section className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 my-10">
        {team.map((people: TeamType) => {
          return (
            <div className="flex flex-col items-center" key={people.id}>
              <a target="_blank" href={people.href}>
                <img
                  src={people.image}
                  alt={people.name}
                  className="cursor-pointer rounded-[50%] bg-orange_300 p-1 object-cover h-24 w-24 md:h-32 md:w-32"
                />
              </a>
              <div className="mt-4">
                <p className="font-semibold">{people.name}</p>
                <p className="">{people.role}</p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Team
