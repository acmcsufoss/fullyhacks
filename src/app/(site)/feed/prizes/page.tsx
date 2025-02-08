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
    <div className="relative flex h-[494px] w-full max-w-[480px] cursor-pointer flex-col items-center rounded-[61.64px] bg-[#173162] p-6 shadow-xl duration-200 ease-in-out hover:bg-[rgb(52,11,103)] hover:text-white">
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
    <div>
      <h1 className="feed-title">Tracks & Prizes</h1>
      <p className="custom-text-shadow font-audiowide text-[16px] leading-snug text-white sm:text-[18px] lg:text-[24px]">
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
      <div className="mt-10 grid grid-cols-1 gap-y-16 gap-x-0 sm:grid-cols-2 lg:grid-cols-2">
        {tracks.map((track: tracksType) => {
          return <Card key={track.id} track={track} />;
        })}
      </div>

      <div className="mt-14">
        <div className="mb-8">
          <p className="font-rubik text-[20px] font-[700] leading-[20px] text-[#72D6E6] md:text-[27px]">
            Prizes
          </p>
          <p className="mt-4 font-audiowide text-[16px] leading-[22px] text-white md:text-[20px] md:leading-[30px]">
            Each team has to sign up for one prize category in order to be
            considered for the corresponding prize.
          </p>
        </div>

        <div
          className="relative mx-auto rounded-[20px] bg-[#173162] px-4 py-4 md:rounded-[61.64px]"
          style={{ width: "100%", maxWidth: "1060px" }}>
          <div className="grid h-full grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:gap-x-3 md:gap-y-2">
            {mainCategory.slice(0, 4).map((prize: tracksType) => (
              <div
                key={prize.id}
                className="flex flex-col items-center justify-center space-y-4 p-4 sm:p-6">
                <p className="font-audiowide text-[20px] font-[400] text-[#72D6E6] md:text-[36px]">
                  {prize.name}
                </p>

                <div
                  className="w-full rounded-[10px] bg-[#C5C5C5] text-center md:rounded-[20px]"
                  style={{
                    maxWidth: "497px",
                    height: "auto",
                    padding: "1rem"
                  }}>
                  <p className="mt-4 px-2 text-sm font-normal md:px-4 md:text-base">
                    {prize.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
