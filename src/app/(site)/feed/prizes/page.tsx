import { mainCategory } from "@/lib/data/prizes";
import { TrackType } from "@/types/interface";
import { BsMusicPlayer } from "react-icons/bs";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdOutlineRecycling } from "react-icons/md";
import { TbAccessible } from "react-icons/tb";

const tracks: TrackType[] = [
  {
    id: "track1",
    name: "Entertainment",
    icon: <BsMusicPlayer size={38} />,
    description:
      "Developing engaging and innovative entertainment solutions, including games, interactive media, and digital experiences."
  },
  {
    id: "track2",
    name: "Accessibility",
    icon: <TbAccessible size={38} />,
    description:
      "Improving user experience through inclusive design, assistive technologies, and compliance with accessibility standards."
  },
  {
    id: "track3",
    name: "New Frontiers",
    icon: <CgSmartphoneChip size={38} />,
    description:
      "New and emerging technologies, such as blockchain, artificial intelligence, and the Internet of Things."
  },
  {
    id: "track4",
    name: "Sustainability",
    icon: <MdOutlineRecycling size={38} />,
    description:
      "Tackling challenges like renewable energy, waste reduction, and green technology to promote a more sustainable future"
  }
];

function Card({ track }: { track: TrackType }) {
  return (
    <div className="relative flex min-h-[480px] w-full max-w-[480px] flex-col items-center rounded-[2.5rem] bg-[#173162] p-6 shadow-xl duration-200 ease-in-out hover:text-white">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <img src="/assets/hex.svg" alt="hex" className="h-8 w-8" />
      </div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-90">
        <img src="/assets/hex.svg" alt="hex" className="h-8 w-8" />
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 -rotate-90">
        <img src="/assets/hex.svg" alt="hex" className="h-8 w-8" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-180">
        <img src="/assets/hex.svg" alt="hex" className="h-8 w-8" />
      </div>

      <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="/assets/rectangle.svg" alt="rectangle" />
      </div>
      <div className="absolute top-1/2 right-[-12px] -translate-y-1/2 translate-x-1/2 rotate-90">
        <img src="/assets/rectangle.svg" alt="rectangle" />
      </div>
      <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180">
        <img src="/assets/rectangle.svg" alt="rectangle" />
      </div>
      <div className="absolute top-1/2 left-[-12px] -translate-y-1/2 -translate-x-1/2 -rotate-90">
        <img src="/assets/rectangle.svg" alt="rectangle" />
      </div>

      <div className="relative mt-6 flex h-[61px] w-full items-center justify-center">
        <div className="absolute left-0 flex h-[61px] w-[61px]">
          <img src="/assets/circles.svg" alt="circles" />
        </div>

        <p className="custom-text-shadow text-center text-lg font-bold text-[#72D6E6]">
          {track.name}
        </p>

        <div className="absolute right-0 flex h-[61px] w-[61px]">
          <img src="/assets/circles.svg" alt="circles" />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center p-4 text-center">
        <p className="font-audiowide text-md text-white">{track.description}</p>
      </div>
    </div>
  );
}

export default function Prizes() {
  return (
    <div>
      <h1 className="feed-title">Tracks & Prizes</h1>
      <p className="custom-text-shadow mt-2 font-audiowide leading-snug text-white lg:text-lg">
        Find all details about tracks, prize categories here
      </p>

      <div className="mt-10">
        <div className="mb-4 flex items-center gap-4">
          <h2 className="text-3xl font-semibold text-[#72D6E6]">TRACKS</h2>
        </div>
        <p className="mt-4 font-audiowide text-white md:text-md">
          Hackers have to build their projects around one of these 4 tracks
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 items-center justify-center gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {tracks.map((track: TrackType) => {
          return <Card key={track.id} track={track} />;
        })}
      </div>

      <div className="mt-14">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-[#72D6E6]">PRIZES</h2>
          <p className="mt-4 font-audiowide text-white md:text-md">
            Each team has to sign up for one prize category in order to be
            considered for the corresponding prize.
          </p>
        </div>

        <div className="flex w-full flex-wrap gap-4">
          {mainCategory.map((prize: TrackType) => (
            <div
              key={prize.id}
              className="flex min-h-[130px] flex-col items-center rounded-lg bg-[#173162] p-4">
              <h3 className="custom-text-shadow font-audiowide text-md font-[400] text-[#72D6E6] md:text-lg">
                {prize.name}
              </h3>
              <p className="mt-4 px-2 text-white md:text-md">
                {prize.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
