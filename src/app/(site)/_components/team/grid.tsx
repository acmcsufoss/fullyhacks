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
  const color = TeamMemberTagColor.Director;

  return (
    <div className="flex flex-col items-center">
      <a target="_blank" href={member.href}>
        <div className="rounded-[50%] bg-white p-1 [box-shadow:_0_0_10px_#FFFFFF]">
          <div className="rounded-[50%] bg-gradient-to-b from-purple_gradient_1 to-purple_gradient_2 p-[0.75rem]">
            <img
              src={
                member.image.length !== 0
                  ? member.image
                  : "/team/tuffy_rocket.svg"
              }
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

const TeamGrid: React.FC<TeamProps> = ({ team }) => {
  const [filteredTeam, setFilteredTeam] = useState<TeamMember[][]>(
    listToMatrix(filterTeamMembers(team, "All"))
  );
  const [filteredTag, setFilteredTag] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Handle all team filtering options
  const handleTeamFiltering = (tag: string) => {
    setFilteredTag(tag);
    const newFilteredTeam = listToMatrix(filterTeamMembers(team, tag));
    setFilteredTeam(newFilteredTeam);
    setCarouselIndex(0);
  };

  return (
    <>
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

      {carouselIndex > 0 && (
        <button
          onClick={() => setCarouselIndex(carouselIndex - 1)}
          className="absolute top-[26rem] -left-3 flex cursor-pointer items-center justify-between rounded-full border-2 border-pink_200 p-4 text-white transition-all duration-500 hover:bg-purple_hover md:top-96 md:-left-6 lg:-left-12">
          <FaChevronLeft className="h-2 w-2 md:h-4 md:w-4" />
        </button>
      )}

      {carouselIndex < filteredTeam.length - 1 && (
        <button
          onClick={() => setCarouselIndex(carouselIndex + 1)}
          className="absolute top-[26rem] -right-3 flex cursor-pointer items-center justify-between rounded-full border-2 border-pink_200 p-4 text-white transition-all duration-500 hover:bg-purple_hover md:top-96 md:-right-6 lg:-right-12">
          <FaChevronRight className="h-2 w-2 md:h-4 md:w-4" />
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
    </>
  );
};

export default TeamGrid;
