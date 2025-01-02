"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";

export interface Coordinates {
  x: number;
  y: number;
}

export interface Edge {
  start: Coordinates;
  end: Coordinates;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  href: string;
  image: string;
  vertex: Coordinates;
  textBelow: boolean;
}

export interface Team {
  tag: string;
  teamMembers: TeamMember[];
}

export const team: Team[] = [
  {
    tag: "Directors",
    teamMembers: [
      {
        id: "director1",
        name: "Sama",
        image: "/team/sama.jpeg",
        role: "Director",
        href: "https://www.linkedin.com/in/sama-ahmedd",
        vertex: { x: 400, y: 100 },
        textBelow: false
      },
      {
        id: "director2",
        name: "Eric",
        image: "/team/eric.jpg",
        role: "Director + Finance",
        href: "https://linkedin.com/in/lyyeric",
        vertex: { x: 250, y: 550 },
        textBelow: true
      },
      {
        id: "director3",
        name: "Joel",
        image: "/team/joel.jpg",
        role: "Director",
        href: "https://www.linkedin.com/in/joeldanielrico/",
        vertex: { x: 650, y: 270 },
        textBelow: false
      },
      {
        id: "director4",
        name: "Pillow",
        image: "",
        role: "Director",
        href: "https://google.com",
        vertex: { x: 750, y: 550 },
        textBelow: true
      }
    ]
  },
  {
    tag: "Web Team",
    teamMembers: [
      {
        id: "web1",
        name: "Tomas",
        image: "",
        role: "Web Team Lead",
        href: "https://google.com",
        vertex: { x: 100, y: 150 },
        textBelow: true
      },
      {
        id: "web2",
        name: "Jeremiah",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 300, y: 120 },
        textBelow: true
      },
      {
        id: "web3",
        name: "John",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 450, y: 190 },
        textBelow: true
      },
      {
        id: "web4",
        name: "Andres",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 500, y: 320 },
        textBelow: true
      },
      {
        id: "web5",
        name: "Jordan",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 530, y: 550 },
        textBelow: true
      },
      {
        id: "web6",
        name: "Gustavo",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 850, y: 390 },
        textBelow: true
      },
      {
        id: "web7",
        name: "Daniel",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 880, y: 620 },
        textBelow: true
      }
    ]
  },
  {
    tag: "Design Team",
    teamMembers: [
      {
        id: "web1",
        name: "Tomas",
        image: "",
        role: "Web Team Lead",
        href: "https://google.com",
        vertex: { x: 100, y: 150 },
        textBelow: true
      },
      {
        id: "web2",
        name: "Jeremiah",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 300, y: 120 },
        textBelow: true
      },
      {
        id: "web3",
        name: "John",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 450, y: 190 },
        textBelow: true
      },
      {
        id: "web4",
        name: "Andres",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 500, y: 320 },
        textBelow: true
      },
      {
        id: "web5",
        name: "Jordan",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 530, y: 550 },
        textBelow: true
      },
      {
        id: "web6",
        name: "Gustavo",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 850, y: 390 },
        textBelow: true
      },
      {
        id: "web7",
        name: "Daniel",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 880, y: 620 },
        textBelow: true
      }
    ]
  },
  {
    tag: "Marketing Team",
    teamMembers: [
      {
        id: "marketing1",
        name: "Tomas",
        image: "",
        role: "Web Team Lead",
        href: "https://google.com",
        vertex: { x: 100, y: 150 },
        textBelow: true
      },
      {
        id: "marketing2",
        name: "Jeremiah",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 300, y: 120 },
        textBelow: true
      },
      {
        id: "marketing3",
        name: "John",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 450, y: 190 },
        textBelow: true
      },
      {
        id: "marketing4",
        name: "Andres",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 500, y: 320 },
        textBelow: true
      },
      {
        id: "marketing5",
        name: "Jordan",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 530, y: 550 },
        textBelow: true
      },
      {
        id: "marketing6",
        name: "Gustavo",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 850, y: 390 },
        textBelow: true
      },
      {
        id: "marketing7",
        name: "Daniel",
        image: "",
        role: "Web Officer",
        href: "https://google.com",
        vertex: { x: 880, y: 620 },
        textBelow: true
      }
    ]
  }
];

export const teamEdges: Edge[][] = [
  [
    { start: { x: 650, y: 270 }, end: { x: 750, y: 550 } },
    { start: { x: 750, y: 550 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 250, y: 550 } },
    { start: { x: 400, y: 100 }, end: { x: 650, y: 270 } }
  ],
  [
    { start: { x: 100, y: 150 }, end: { x: 300, y: 120 } },
    { start: { x: 300, y: 120 }, end: { x: 450, y: 190 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } }
  ],
  [
    { start: { x: 100, y: 150 }, end: { x: 300, y: 120 } },
    { start: { x: 300, y: 120 }, end: { x: 450, y: 190 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } }
  ],
  [
    { start: { x: 100, y: 150 }, end: { x: 300, y: 120 } },
    { start: { x: 300, y: 120 }, end: { x: 450, y: 190 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } }
  ],
  [
    { start: { x: 100, y: 150 }, end: { x: 300, y: 120 } },
    { start: { x: 300, y: 120 }, end: { x: 450, y: 190 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } }
  ]
];

function LineConnector({
  start,
  end
}: {
  start: Coordinates;
  end: Coordinates;
}) {
  const path = `M${start.x},${start.y} L ${end.x}, ${end.y}`;
  return (
    <motion.svg>
      <motion.path
        d={path}
        strokeWidth={2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        className="stroke-slate-300"
      />
    </motion.svg>
  );
}

function Constellation({
  teamIndex,
  team,
  edges
}: {
  teamIndex: number;
  team: TeamMember[];
  edges: Edge[];
}) {
  return (
    <motion.svg
      className="z-10"
      key={teamIndex}
      width={1024}
      height={800}
      initial={{ opacity: 0.15 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {edges.map(({ start, end }, i) => {
        return <LineConnector key={"Line " + i} start={start} end={end} />;
      })}
      {team.map((officer) => (
        <a target="_blank" href={officer.href} key={officer.id}>
          <motion.svg
            whileHover="hover"
            initial="initial"
            style={{ overflow: "visible" }}>
            {/* Officer Image */}
            <defs>
              <clipPath id={`clip-circle-${officer.id}`}>
                <circle cx={officer.vertex.x} cy={officer.vertex.y} r={35} />
              </clipPath>
            </defs>
            <image
              x={officer.vertex.x - 35}
              y={officer.vertex.y - 35}
              width={70}
              height={70}
              href={
                officer.image.length !== 0
                  ? officer.image
                  : "/team/tuffy_rocket.svg"
              }
              clipPath={`url(#clip-circle-${officer.id})`}
              preserveAspectRatio="xMidYMid slice"
            />
            {/* Name & Role */}
            <motion.text
              x={officer.vertex.x}
              y={officer.vertex.y + (officer.textBelow ? 55 : -60)}
              textAnchor="middle"
              className="fill-white">
              {officer.name}
            </motion.text>
            <motion.text
              x={officer.vertex.x}
              y={officer.vertex.y + (officer.textBelow ? 55 : -60) + 18}
              textAnchor="middle"
              className="fill-white text-sm">
              {officer.role}
            </motion.text>
            <motion.circle
              r={40}
              cx={officer.vertex.x}
              cy={officer.vertex.y}
              strokeWidth={2}
              variants={{
                initial: { pathLength: 0 },
                hover: { pathLength: 1.05 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fill-none stroke-white"
            />
          </motion.svg>
        </a>
      ))}
    </motion.svg>
  );
}

const TeamConstellation = ({ team }: { team: Team[] }) => {
  const [teamIndex, setTeamIndex] = useState(0);
  return (
    <div className="relative">
      <h2 className="mt-10 text-center text-xxl font-medium md:text-[5rem]">
        Our Teams
      </h2>
      <p className="mt-2 text-center text-xxl font-light">
        {team[teamIndex].tag}
      </p>
      <img
        src="/assets/constellation1.svg"
        alt="Constellation Image"
        className="absolute -bottom-[35%] right-0 w-[400px] overflow-visible blur-md brightness-110 md:w-[640px]"
      />
      <div className="flex w-full items-center">
        <button
          className={`absolute left-[15%] top-1/2 z-20 transition-transform hover:scale-110 lg:left-0 ${teamIndex === 0 ? "invisible" : ""}`}
          onClick={() => setTeamIndex(teamIndex - 1)}>
          <MdOutlineKeyboardArrowLeft size={64} className="text-mint" />
        </button>
        <Constellation
          teamIndex={teamIndex}
          team={team[teamIndex].teamMembers}
          edges={teamEdges[teamIndex]}
        />
        <button
          className={`absolute right-[15%] top-1/2 z-20 transition-transform hover:scale-110 lg:right-0 ${teamIndex === team.length - 1 ? "invisible" : ""}`}
          onClick={() => setTeamIndex(teamIndex + 1)}>
          <MdOutlineKeyboardArrowRight size={64} className="text-mint" />
        </button>
      </div>
    </div>
  );
};

export default TeamConstellation;
