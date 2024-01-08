import { TeamType } from '@/types/interface'
import React, { useEffect, useState } from 'react'

const teamTags = [
  'All',
  'Director',
  'Web',
  'Design',
  'Marketing',
  'Finance',
  'Operation'
]

interface TeamProps {
  team: TeamType[]
}

const Team: React.FC<TeamProps> = ({ team }) => {
  const [filteredTeam, setFilteredTeam] = useState(team)
  const [filteredTag, setFilteredTag] = useState('')

  const handleTeamFiltering = (tag: string) => {
    if (tag === 'All') {
      setFilteredTeam(team)
      return
    }

    setFilteredTag(tag)
    const newFilteredTeam = team.filter((people) => people.tag === tag)
    console.log(newFilteredTeam)
    setFilteredTeam(newFilteredTeam)
  }

  return (
    <div className="font-rubik md:w-[900px]">
      <h2 className="mt-10 text-xxl text-center font-medium md:text-[5rem] text-[#0BB6FF] [text-shadow:_-3px_0_4px_#FF0BF5] font-ohm">
        Our Team
      </h2>
      <p className="mt-2 text-center font-light">
        The amazing people who make FullyHacks possible
      </p>

      <div className="flex mt-4 items-center justify-center gap-4 flex-wrap">
        {teamTags.map((tag, i) => {
          return (
            <div
              key={'tag' + (i + 1)}
              onClick={() => handleTeamFiltering(tag)}
              className="flex items-center justify-between px-4 py-2 text-white border-2 border-pink_200 rounded-box transition-all duration-500 cursor-pointer hover:bg-purple_hover">
              <span>{tag}</span>
            </div>
          )
        })}
      </div>

      <section className="grid grid-cols-2 md:grid-cols-4 text-center gap-10 my-10">
        {filteredTeam.map((people: TeamType) => {
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
