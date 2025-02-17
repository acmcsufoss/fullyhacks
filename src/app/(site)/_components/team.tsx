"use client";

import Constellation from "./team/constellation";
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";
import TeamGrid from "./team/grid";
import { team } from "@/lib/data/team";

export default function Team() {
  const [teamIndex, setTeamIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      <h2 className="custom-text-shadow mt-10 text-center text-xxl font-medium md:text-[5rem]">
        Our Teams
      </h2>
      <div className="flex w-full flex-col items-center">
        {screenWidth > 768 ? (
          <>
            <p className="mt-2 text-center text-xxl font-light">
              {team[teamIndex].tag}
            </p>
            <button
              className={`absolute top-1/2 left-0 z-20 transition-transform hover:scale-110 ${teamIndex === 0 ? "invisible" : ""}`}
              onClick={() => setTeamIndex(teamIndex - 1)}>
              <MdOutlineKeyboardArrowLeft size={64} className="text-mint" />
            </button>
            <Constellation
              teamIndex={teamIndex}
              team={team[teamIndex].teamMembers}
              screenWidth={screenWidth}
            />
            <button
              className={`absolute top-1/2 right-0 z-20 transition-transform hover:scale-110 ${teamIndex === team.length - 1 ? "invisible" : ""}`}
              onClick={() => setTeamIndex(teamIndex + 1)}>
              <MdOutlineKeyboardArrowRight size={64} className="text-mint" />
            </button>
          </>
        ) : (
          <TeamGrid team={team} />
        )}
      </div>
    </div>
  );
}
