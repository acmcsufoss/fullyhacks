import { TeamMember, TeamType } from "@/types/interface";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamTags = [
  "All",
  "Directors",
  "Web Team",
  "Design Team",
  "Marketing Team",
  "Operations Team"
];

interface TeamProps {
  team: TeamType[];
}

interface TeamMemberProps {
  member: TeamMember;
}

const listToMatrix = (list: TeamMember[], n: number = 8) => {
  // separate the all list into groups of n elements
  let matrix: TeamMember[][] = [];
  for (let i = 0, k = -1; i < list.length; i++) {
    if (i % n === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
};

const filterTeamMembers = (team: TeamType[], tag: string): TeamMember[] => {
  if (tag === "All") {
    const filteredTeamMembers: TeamMember[] = [];
    for (const teamGroup of team) {
      for (const teamMember of teamGroup.teamMembers) {
        filteredTeamMembers.push(teamMember);
      }
    }
    return filteredTeamMembers;
  }
  const filteredTeamMembers: TeamMember[] = [];
  for (const teamGroup of team) {
    if (teamGroup.tag === tag) {
      for (const teamMember of teamGroup.teamMembers) {
        filteredTeamMembers.push(teamMember);
      }
    }
  }
  return filteredTeamMembers;
};

const TeamMemberComponent: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="flex w-[190px] flex-col items-center">
      <a target="_blank" href={member.href}>
        <div className="rounded-full bg-gray-200 p-[0.3rem]">
          <img
            src={
              member.image.length !== 0
                ? member.image
                : "/team/tuffy_rocket.svg"
            }
            alt={member.name}
            className={`h-24 w-24 cursor-pointer rounded-full object-cover md:h-28 md:w-28`}
          />
        </div>
      </a>
      <div className="mt-2 text-center text-white">
        <p className="font-semibold">{member.name}</p>
        <p className="text-sm opacity-80">{member.role}</p>
      </div>
    </div>
  );
};

const TeamGrid: React.FC<TeamProps> = ({ team }) => {
  const [filteredTeam, setFilteredTeam] = useState<TeamMember[][]>(
    listToMatrix(filterTeamMembers(team, "All"), 4)
  );
  const [filteredTag, setFilteredTag] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Handle all team filtering options
  const handleTeamFiltering = (tag: string) => {
    setFilteredTag(tag);
    const newFilteredTeam = listToMatrix(filterTeamMembers(team, tag), 4);
    setFilteredTeam(newFilteredTeam);
    setCarouselIndex(0);
  };

  const progress = ((carouselIndex + 1) / filteredTeam.length) * 100;

  return (
    <>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {teamTags.map((tag, i) => {
          return (
            <div
              key={"tag" + (i + 1)}
              onClick={() => handleTeamFiltering(tag)}
              className={`rounded-box flex cursor-pointer items-center justify-between border-2 px-4 py-2 transition-all duration-500 hover:brightness-110 ${
                filteredTag === tag
                  ? "bg-gray-200 text-gray-800"
                  : "bg-gray-800 text-white"
              }`}>
              <span>{tag}</span>
            </div>
          );
        })}
      </div>

      {carouselIndex > 0 && (
        <button
          onClick={() => setCarouselIndex(carouselIndex - 1)}
          className="absolute top-[20rem] -left-3 flex cursor-pointer items-center justify-between rounded-full p-4 text-mint transition-all duration-500 hover:bg-purple_hover sm:left-12">
          <FaChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      )}

      {carouselIndex < filteredTeam.length - 1 && (
        <button
          onClick={() => setCarouselIndex(carouselIndex + 1)}
          className="absolute top-[20rem] -right-3 flex cursor-pointer items-center justify-between rounded-full p-4 text-mint transition-all duration-500 hover:bg-purple_hover sm:right-12">
          <FaChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      )}

      <section className="my-10 grid grid-cols-2 gap-4 text-center md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:gap-10">
        {filteredTeam.map((teamMemberGroup, i) => {
          return teamMemberGroup.map((member) => {
            if (carouselIndex !== i) return;
            return <TeamMemberComponent key={member.id} member={member} />;
          });
        })}
      </section>

      {filteredTeam.length > 1 && (
        <div className="relative mt-8 h-3 w-[min(24rem,_90%)] overflow-hidden rounded-full bg-gray-600">
          {/* Progress bar fill */}
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </>
  );
};

export default TeamGrid;
