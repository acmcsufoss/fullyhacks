import { motion } from "motion/react";
import { TeamEdge, TeamMember, TeamMemberCoordinates } from "@/types/interface";

export const teamEdges: TeamEdge[][] = [
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
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } }
  ],
  [
    { start: { x: 100, y: 150 }, end: { x: 300, y: 120 } },
    { start: { x: 100, y: 150 }, end: { x: 300, y: 120 } },
    { start: { x: 300, y: 120 }, end: { x: 450, y: 190 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
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
  start: TeamMemberCoordinates;
  end: TeamMemberCoordinates;
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

export default function Constellation({
  teamIndex,
  team
}: {
  teamIndex: number;
  team: TeamMember[];
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
      {teamEdges[teamIndex].map(({ start, end }, i) => {
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
