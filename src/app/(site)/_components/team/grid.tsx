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

enum TeamMemberTagColor {
  "Director" = "bg-[#C614E4]",
  "Web" = "bg-[#EE9292]",
  "Design" = "bg-[#FB3E3E]",
  "Marketing" = "bg-[rgb(20,71,255)]",
  "Finance" = "bg-[#FCFF60]",
  "Operation" = "bg-[#56FF71]"
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
  // const color = TeamMemberTagColor[tag as keyof typeof TeamMemberTagColor];
  const color = TeamMemberTagColor.Director;

  return (
    <div className="flex flex-col items-center">
      <a target="_blank" href={member.href}>
        <div className="rounded-full bg-gray-200 p-[0.3rem]">
          {/* <div className="rounded-[50%] bg-gradient-to-b from-${color} to-purple_gradient_2 p-[0.5rem]"> */}
            <img
              src={
                member.image.length !== 0
                  ? member.image
                  : "/team/tuffy_rocket.svg"
              }
              alt={member.name}
              className={`cursor-pointer rounded-full ${color} h-24 w-24 object-cover p-1 md:h-28 md:w-28`}
            />
        </div>
        {/* </div> */}
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
              className={`rounded-box flex cursor-pointer items-center justify-between border-2 px-4 py-2 text-white transition-all duration-500 hover:brightness-110 ${
                filteredTag === tag ? "bg-gray-200 text-gray-800 " : "bg-gray-800 text-white"
              }`}>
              <span>{tag}</span>
            </div>
          );
        })}
      </div>
      
      {carouselIndex > 0 && (
        <button
          onClick={() => setCarouselIndex(carouselIndex - 1)}
          className="absolute top-[30rem] -left-3 flex cursor-pointer items-center justify-between rounded-full p-4 text-white transition-all duration-500 hover:bg-purple_hover md:top-96 md:-left-6 lg:-left-12">
          <FaChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      )}

      {carouselIndex < filteredTeam.length - 1 && (
        <button
          onClick={() => setCarouselIndex(carouselIndex + 1)}
          className="absolute top-[30rem] -right-3 flex cursor-pointer items-center justify-between rounded-full p-4 text-white transition-all duration-500 hover:bg-purple_hover md:top-96 md:-right-6 lg:-right-12">
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
          <div className="relative mt-8 h-3 w-96 bg-gray-600 rounded-full overflow-hidden">
          {/* Progress bar fill */}
          <div
            className="absolute rounded-full left-0 top-0 h-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        )}

    </>
  );
};

export default TeamGrid;
