import { TeamType } from '@/types/interface'
import React from 'react'

interface TeamProps {
  team: TeamType[]
}

const Team: React.FC<TeamProps> = ({ team }) => {
  return (
    <div className="md:ml-[6rem] font-rubik">
      <p className="mt-10 text-xl font-medium md:text-[5rem] text-[#0BB6FF] [text-shadow:_-3px_0_4px_#FF0BF5] font-ohm">
        Our Team
      </p>
      <p className="mt-4 font-light">
        The amazing people who make FullyHacks possible
      </p>
      <section className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 my-10">
        {team.map((people: TeamType) => {
          return (
            <div className="flex flex-col items-center" key={people.id}>
              <a target="_blank" href={people.href}>
                <div className="rounded-[50%] bg-white [box-shadow:_0_0_10px_#FFFFFF] p-1">
                  <div className="rounded-[50%] bg-gradient-to-b from-purple_gradient_1 to-purple_gradient_2 p-[0.75rem]">
                    <img
                      src={people.image}
                      alt={people.name}
                      className={`cursor-pointer rounded-[50%] ${
                        people.tag == 'Design'
                          ? 'bg-[#FB3E3E]'
                          : people.tag == 'Marketing'
                            ? 'bg-[#1447FF]'
                            : people.tag == 'Operation'
                              ? 'bg-[#56FF71]'
                              : people.tag == 'Web'
                                ? 'bg-[#EE9292]'
                                : people.tag == 'Finance'
                                  ? 'bg-[#FCFF60]'
                                  : 'bg-[#C614E4]'
                      } p-1 object-cover h-20 w-20 md:h-28 md:w-28`}
                    />
                  </div>
                </div>
              </a>
              <div className="mt-4 text-white">
                <p className="font-semibold">{people.name}</p>
                <p className="font-light">{people.role}</p>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Team
