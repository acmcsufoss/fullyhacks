import { mainCategory, subCategory } from "@/lib/data/prizes";
import { tracksType } from "@/types/interface";
import { BsMusicPlayer } from "react-icons/bs";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdOutlineRecycling } from "react-icons/md";
import { TbAccessible } from "react-icons/tb";

const tracks: tracksType[] = [
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

function Card({ track }: { track: tracksType }) {
  return (
    <div className="flex h-[494px] w-full max-w-[480px] cursor-pointer flex-col items-center rounded-[61.64px] bg-[#173162] p-6 shadow-xl duration-200 ease-in-out hover:bg-[rgb(52,11,103)] hover:text-white">
      <div className="relative mt-6 flex h-[61px] w-full items-center justify-center">
        <div className="absolute left-0 flex h-[61px] w-[61px]">
          <img src="/assets/circles.svg" alt="circles" />
        </div>

        <p className="w-[355px] text-center text-lg font-bold text-white">
          {track.name}
        </p>

        <div className="absolute right-0 flex h-[61px] w-[61px]">
          <img src="/assets/circles.svg" alt="circles" />
        </div>
      </div>

      <div className="mt-6 flex h-[180px] w-[273px] flex-col items-center text-center">
        {track.team && (
          <p className="mb-4 font-normal leading-7 text-white">
            Total: {track.team} team(s)
          </p>
        )}
        <p className="font-audiowide text-[20px] font-[400] leading-[30px] text-white">
          {track.description}
        </p>
      </div>
    </div>
  );
}

export default function Prizes() {
  return (
    <section className="my-14 mr-8 w-full px-4 text-white lg:px-8">
      <p className="h-[95px] w-[565px] font-audiowide text-[64px] font-[400] leading-[81.59px] text-[#72D6E6]">
        Tracks & Prizes
      </p>
      <p
        className="h-[31px] w-[732px] font-audiowide text-[24px] font-[400] leading-[30.6px] text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]"
        style={{ letterSpacing: "5%" }}>
        Find all details about tracks, prize categories here
      </p>

      <div className="mt-10">
        <div className="mb-4 flex items-center gap-4">
          <p className="font-rubik text-[27px] font-[700] leading-[20px] text-[#72D6E6]">
            TRACKS
          </p>
        </div>
        <p className="font-audiowide text-white md:text-md">
          Hackers have to build their projects around one of these 4 tracks
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {tracks.map((track: tracksType) => {
          return <Card key={track.id} track={track} />;
        })}
      </div>
      <div className="mt-14">
        <div className="mb-4 flex items-center gap-4">
          <p className="text-lg font-bold leading-normal text-purple-500">
            PRIZES
          </p>
        </div>
        <p className="font-normal leading-normal md:text-md">
          Each team has to sign up for 1 category in order to be considered for
          the corresponding prize. Sign up will begin during the hackathon team
          forming event
        </p>
      </div>
      <div className="mt-10">
        <p className="text-lg font-bold leading-normal text-purple-500">
          MAIN CATEGORY
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {mainCategory.map((category: tracksType) => {
            return <Card key={category.id} track={category} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-lg font-bold leading-normal text-purple-500">
          SUB CATEGORY
        </p>
        <p className="font-normal leading-normal md:text-md">
          You can choose ONE sub category along with your project
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {subCategory.map((category: tracksType) => {
            return <Card key={category.id} track={category} />;
          })}
        </div>
      </div>
    </section>
  );
}
