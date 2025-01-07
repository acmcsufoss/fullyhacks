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
    { start: { x: 100, y: 150 }, end: { x: 200, y: 350 } },
    { start: { x: 300, y: 120 }, end: { x: 450, y: 190 } },
    { start: { x: 450, y: 190 }, end: { x: 500, y: 320 } },
    { start: { x: 500, y: 320 }, end: { x: 530, y: 550 } },
    { start: { x: 500, y: 320 }, end: { x: 850, y: 390 } },
    { start: { x: 850, y: 390 }, end: { x: 880, y: 620 } },
    { start: { x: 530, y: 550 }, end: { x: 880, y: 620 } }
  ],
  [
    { start: { x: 250, y: 100 }, end: { x: 470, y: 140 } },
    { start: { x: 250, y: 100 }, end: { x: 200, y: 220 } },
    { start: { x: 200, y: 220 }, end: { x: 410, y: 420 } },
    { start: { x: 470, y: 140 }, end: { x: 580, y: 380 } },
    { start: { x: 410, y: 420 }, end: { x: 430, y: 700 } },
    { start: { x: 580, y: 380 }, end: { x: 880, y: 620 } },
    { start: { x: 430, y: 700 }, end: { x: 880, y: 620 } }
  ],
  [
    { start: { x: 630, y: 60 }, end: { x: 290, y: 270 } },
    { start: { x: 630, y: 60 }, end: { x: 790, y: 370 } },
    { start: { x: 290, y: 270 }, end: { x: 790, y: 370 } },
    { start: { x: 290, y: 270 }, end: { x: 200, y: 690 } },
    { start: { x: 790, y: 370 }, end: { x: 740, y: 650 } },
    { start: { x: 200, y: 690 }, end: { x: 740, y: 650 } }
  ],
  [
    { start: { x: 340, y: 50 }, end: { x: 500, y: 100 } },
    { start: { x: 340, y: 50 }, end: { x: 300, y: 240 } },
    { start: { x: 500, y: 100 }, end: { x: 680, y: 70 } },
    { start: { x: 680, y: 70 }, end: { x: 740, y: 220 } },
    { start: { x: 300, y: 240 }, end: { x: 220, y: 380 } },
    { start: { x: 740, y: 220 }, end: { x: 840, y: 470 } },
    { start: { x: 220, y: 380 }, end: { x: 480, y: 390 } },
    { start: { x: 220, y: 380 }, end: { x: 320, y: 520 } },
    { start: { x: 480, y: 390 }, end: { x: 680, y: 410 } },
    { start: { x: 680, y: 410 }, end: { x: 840, y: 470 } },
    { start: { x: 320, y: 520 }, end: { x: 460, y: 640 } },
    { start: { x: 460, y: 640 }, end: { x: 690, y: 680 } },
    { start: { x: 690, y: 680 }, end: { x: 820, y: 620 } },
    { start: { x: 840, y: 470 }, end: { x: 820, y: 620 } }
  ],
  [
    { start: { x: 250, y: 70 }, end: { x: 200, y: 220 } },
    { start: { x: 250, y: 70 }, end: { x: 410, y: 50 } },
    { start: { x: 200, y: 220 }, end: { x: 390, y: 250 } },
    { start: { x: 410, y: 50 }, end: { x: 520, y: 120 } },
    { start: { x: 520, y: 120 }, end: { x: 390, y: 250 } },
    { start: { x: 390, y: 250 }, end: { x: 420, y: 370 } },
    { start: { x: 420, y: 370 }, end: { x: 550, y: 390 } },
    { start: { x: 550, y: 390 }, end: { x: 560, y: 520 } },
    { start: { x: 560, y: 520 }, end: { x: 400, y: 620 } },
    { start: { x: 560, y: 520 }, end: { x: 570, y: 690 } },
    { start: { x: 560, y: 520 }, end: { x: 720, y: 490 } },
    { start: { x: 720, y: 490 }, end: { x: 850, y: 440 } },
    { start: { x: 850, y: 440 }, end: { x: 880, y: 620 } },
    { start: { x: 880, y: 620 }, end: { x: 720, y: 700 } },
    { start: { x: 720, y: 700 }, end: { x: 720, y: 490 } }
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
        className="stroke-[#747474]"
      />
    </motion.svg>
  );
}

export default function Constellation({
  teamIndex,
  team,
  screenWidth
}: {
  teamIndex: number;
  team: TeamMember[];
  screenWidth: number;
}) {
  return (
    <motion.svg
      className="z-10"
      key={teamIndex}
      width={screenWidth >= 1024 ? 1024 : 740}
      height={screenWidth >= 1024 ? 800 : 600}
      viewBox="0 0 1024 800"
      preserveAspectRatio="xMidYMid meet"
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
