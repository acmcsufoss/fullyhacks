import { TeamType } from '@/types/interface'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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

interface TeamMemberProps {
  member: TeamType
}

enum TeamMemberTagColor {
  'Director' = '#C614E4',
  'Web' = '#EE9292',
  'Design' = '#FB3E3E',
  'Marketing' = 'rgb(20,71,255)',
  'Finance' = '#FCFF60',
  'Operation' = '#56FF71'
}

const listToMatrix = (list: TeamType[], n: number = 8) => {
  // separate the all list into groups of n elements
  let matrix: TeamType[][] = []
  for (let i = 0, k = -1; i < list.length; i++) {
    if (i % n === 0) {
      k++
      matrix[k] = []
    }
    matrix[k].push(list[i])
  }

  return matrix
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center">
      <a target="_blank" href={member.href}>
        <div className="rounded-[50%] bg-white [box-shadow:_0_0_10px_#FFFFFF] p-1">
          <div className="rounded-[50%] bg-gradient-to-b from-purple_gradient_1 to-purple_gradient_2 p-[0.75rem]">
            <img
              src={member.image}
              alt={member.name}
              className={`cursor-pointer rounded-[50%] bg-[${
                TeamMemberTagColor[
                  member.tag as keyof typeof TeamMemberTagColor
                ]
              }] p-1 object-cover h-20 w-20 md:h-28 md:w-28`}
            />
          </div>
        </div>
      </a>
      <div className="mt-4 text-white">
        <p className="font-semibold">{member.name}</p>
        <p className="font-light">{member.role}</p>
      </div>
    </div>
  )
}

const Team: React.FC<TeamProps> = ({ team }) => {
  const [filteredTeam, setFilteredTeam] = useState<TeamType[]>(team)
  const [filteredTag, setFilteredTag] = useState('')
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isCarousel, setIsCarousel] = useState(true)
  const allTeam = listToMatrix(team)

  // Handle all team filtering options
  const handleTeamFiltering = (tag: string) => {
    setFilteredTag(tag)
    if (tag === 'All') {
      setIsCarousel(true)
      return
    }
    // If anything other than "All" tag, set the filterted team to that
    // tag and no carousel
    const newFilteredTeam = team.filter((people) => people.tag === tag)
    setFilteredTeam(newFilteredTeam)
    setIsCarousel(false)
  }

  return (
    <div className="relative font-rubik md:w-[min(900px,_90vw)]">
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
              className={`flex items-center justify-between px-4 py-2 text-white border-2 border-pink_200 rounded-box transition-all duration-500 cursor-pointer hover:brightness-110 ${
                filteredTag === tag ? 'bg-pink_200' : ''
              }`}>
              <span>{tag}</span>
            </div>
          )
        })}
      </div>

      {/* If displaying all organizers, create carousel */}
      {(filteredTag === 'All' || filteredTag === '') && (
        <>
          {carouselIndex > 0 && (
            <button
              onClick={() => setCarouselIndex(carouselIndex - 1)}
              className="absolute top-[26rem] md:top-96 -left-3 md:-left-6 lg:-left-12 flex items-center justify-between p-4 text-white border-2 border-pink_200 rounded-full transition-all duration-500 cursor-pointer hover:bg-purple_hover">
              <FaChevronLeft className="w-2 h-2 md:w-4 md:h-4" />
            </button>
          )}

          {carouselIndex < allTeam.length - 1 && (
            <button
              onClick={() => setCarouselIndex(carouselIndex + 1)}
              className="absolute top-[26rem] md:top-96 -right-3 md:-right-6 lg:-right-12 flex items-center justify-between p-4 text-white border-2 border-pink_200 rounded-full transition-all duration-500 cursor-pointer hover:bg-purple_hover">
              <FaChevronRight className="w-2 h-2 md:w-4 md:h-4" />
            </button>
          )}
        </>
      )}

      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4 md:gap-7 lg:gap-10 my-10">
        {isCarousel
          ? allTeam.map((group: TeamType[], i) => {
              return group.map((people: TeamType) => {
                if (carouselIndex !== i) return
                return <TeamMember key={people.id} member={people} />
              })
            })
          : filteredTeam.map((people: TeamType) => {
              return <TeamMember key={people.id} member={people} />
            })}
      </section>
    </div>
  )
}

export default Team
