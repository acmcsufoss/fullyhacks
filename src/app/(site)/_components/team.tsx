import { TeamType } from "@/types/interface";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamTags = [
  "All",
  "Director",
  "Web",
  "Design",
  "Marketing",
  "Finance",
  "Operation"
];

interface TeamProps {
  team: TeamType[];
}

interface TeamMemberProps {
  member: TeamType;
}

enum TeamMemberTagColor {
  "Director" = "bg-[#C614E4]",
  "Web" = "bg-[#EE9292]",
  "Design" = "bg-[#FB3E3E]",
  "Marketing" = "bg-[rgb(20,71,255)]",
  "Finance" = "bg-[#FCFF60]",
  "Operation" = "bg-[#56FF71]"
}

const listToMatrix = (list: TeamType[], n: number = 8) => {
  // separate the all list into groups of n elements
  let matrix: TeamType[][] = [];
  for (let i = 0, k = -1; i < list.length; i++) {
    if (i % n === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }

  return matrix;
};

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  const memberTag = member.tag as keyof typeof TeamMemberTagColor;
  const color = TeamMemberTagColor[memberTag];

  return (
    <div className="flex flex-col items-center">
      <a target="_blank" href={member.href}>
        <div className="rounded-[50%] bg-white p-1 [box-shadow:_0_0_10px_#FFFFFF]">
          <div className="rounded-[50%] bg-gradient-to-b from-purple_gradient_1 to-purple_gradient_2 p-[0.75rem]">
            <img
              src={member.image}
              alt={member.name}
              className={`cursor-pointer rounded-[50%] ${color} h-20 w-20 object-cover p-1 md:h-28 md:w-28`}
            />
          </div>
        </div>
      </a>
      <div className="mt-4 text-white">
        <p className="font-semibold">{member.name}</p>
        <p className="font-light">{member.role}</p>
      </div>
    </div>
  );
};

const Team: React.FC<TeamProps> = ({ team }) => {
  const [filteredTeam, setFilteredTeam] = useState<TeamType[]>(team);
  const [filteredTag, setFilteredTag] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarousel, setIsCarousel] = useState(true);
  const allTeam = listToMatrix(team);

  // Handle all team filtering options
  const handleTeamFiltering = (tag: string) => {
    setFilteredTag(tag);
    if (tag === "All") {
      setIsCarousel(true);
      return;
    }
    // If anything other than "All" tag, set the filterted team to that
    // tag and no carousel
    const newFilteredTeam = team.filter((people) => people.tag === tag);
    setFilteredTeam(newFilteredTeam);
    setIsCarousel(false);
  };

  return (
    <div className="relative md:w-[min(900px,_90vw)]">
      <h2 className="mt-10 text-center text-xxl font-medium text-[#0BB6FF] [text-shadow:_-3px_0_4px_#FF0BF5] md:text-[5rem]">
        Our Team
      </h2>
      <p className="mt-2 text-center font-light">
        The amazing people who make FullyHacks possible
      </p>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {teamTags.map((tag, i) => {
          return (
            <div
              key={"tag" + (i + 1)}
              onClick={() => handleTeamFiltering(tag)}
              className={`rounded-box flex cursor-pointer items-center justify-between border-2 border-pink_200 px-4 py-2 text-white transition-all duration-500 hover:brightness-110 ${
                filteredTag === tag ? "bg-pink_200" : ""
              }`}>
              <span>{tag}</span>
            </div>
          );
        })}
      </div>

      {/* If displaying all organizers, create carousel */}
      {(filteredTag === "All" || filteredTag === "") && (
        <>
          {carouselIndex > 0 && (
            <button
              onClick={() => setCarouselIndex(carouselIndex - 1)}
              className="absolute top-[26rem] -left-3 flex cursor-pointer items-center justify-between rounded-full border-2 border-pink_200 p-4 text-white transition-all duration-500 hover:bg-purple_hover md:top-96 md:-left-6 lg:-left-12">
              <FaChevronLeft className="h-2 w-2 md:h-4 md:w-4" />
            </button>
          )}

          {carouselIndex < allTeam.length - 1 && (
            <button
              onClick={() => setCarouselIndex(carouselIndex + 1)}
              className="absolute top-[26rem] -right-3 flex cursor-pointer items-center justify-between rounded-full border-2 border-pink_200 p-4 text-white transition-all duration-500 hover:bg-purple_hover md:top-96 md:-right-6 lg:-right-12">
              <FaChevronRight className="h-2 w-2 md:h-4 md:w-4" />
            </button>
          )}
        </>
      )}

      <section className="my-10 grid grid-cols-2 gap-4 text-center md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:gap-10">
        {isCarousel
          ? allTeam.map((group: TeamType[], i) => {
              return group.map((people: TeamType) => {
                if (carouselIndex !== i) return;
                return <TeamMember key={people.id} member={people} />;
              });
            })
          : filteredTeam.map((people: TeamType) => {
              return <TeamMember key={people.id} member={people} />;
            })}
      </section>
    </div>
  );
};

export default Team;
