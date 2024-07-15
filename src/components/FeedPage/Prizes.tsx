import React from "react";
import { BsShield, BsMap, BsGift, BsMusicPlayer } from "react-icons/bs";
import { CgSmartphoneChip } from "react-icons/cg";
import { MdOutlineRecycling } from "react-icons/md";
import { tracksType } from "@/types/interface";
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

const mainCategory: tracksType[] = [
  {
    id: "cat1",
    name: "Best Beginner Project",
    team: 1,
    description: "Logitech G305"
  },
  {
    id: "cat2",
    name: "Most Technical Project",
    team: 1,
    description: "Keychron K8"
  },
  {
    id: "cat3",
    name: "Best UI/UX Project",
    team: 1,
    description: "JBL G03 Wireless Speaker"
  },
  {
    id: "cat4",
    name: "Best AI/ML Project",
    team: 1,
    description: "Sony WH-CH520"
  },
  {
    id: "cat5",
    name: "Best Mobile App",
    team: 1,
    description: "Mini Mobile Projector"
  }
];
const subCategory: tracksType[] = [
  {
    id: "sub1",
    name: "Organizer Favorite",
    team: 1,
    description: "Vercel Hats"
  },
  {
    id: "sub2",
    name: "Cutest Project",
    team: 1,
    description: "Cute Stuff Animal"
  },
  {
    id: "sub4",
    name: "Cool Game Project",
    team: 2,
    description: "Steam key for Grounded by Obsidian"
  },
  {
    id: "sub3",
    name: "Best use of Wolfram",
    team: 7,
    description:
      "1 year of Wolfram|One Personal Edition + 1 year of Wolfram|Alpha Pro (375$ value)"
  },
  {
    id: "sub5",
    name: "Best Mobile App with Swift",
    team: 1,
    description:
      "StickerGiant fun pack (drawing book, webcam cover, poppin game,...)"
  }
];

interface TrackProps {
  track: tracksType;
}

const Card: React.FC<TrackProps> = ({ track }) => {
  return (
    <div className="flex h-[300px] max-w-xs cursor-pointer flex-col rounded-lg border border-gray-300 border-opacity-25 bg-purple_card p-6 shadow-xl backdrop-blur-md backdrop-filter duration-200 ease-in-out hover:bg-[rgb(52,11,103)] hover:text-white md:h-[350px] md:max-w-sm md:p-8">
      <div className="flex flex-col">
        <div className="flex gap-4 text-lg font-bold">
          <p>{track.name}</p>
          <p>{track.icon}</p>
        </div>
        <div className="mt-4 md:text-md">
          {track.team && (
            <p className="text-20 mb-4 font-rubik font-normal leading-7 text-white">
              Total: {track.team} team(s)
            </p>
          )}
          <p className="text-20 mb-4 font-rubik font-normal leading-7 text-white">
            {track.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Prizes = () => {
  return (
    <section className="my-14 mr-8 w-full text-white">
      <p className="feed-title">Tracks & Prizes</p>
      <p className="md:text-md">
        Find all details about tracks, prize categories here
      </p>
      <div className="mt-10">
        <div className="mb-4 flex items-center gap-4">
          <p className="font-rubik text-lg font-bold leading-normal text-purple-500">
            TRACKS
          </p>
        </div>
        <p className="font-rubik font-normal text-white md:text-md">
          Hackers have to build their projects around one of these 4 tracks
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {tracks.map((track: tracksType) => {
          return <Card key={track.id} track={track} />;
        })}
      </div>
      <div className="mt-14">
        <div className="mb-4 flex items-center gap-4">
          <p className="font-rubik text-lg font-bold leading-normal text-purple-500">
            PRIZES
          </p>
        </div>
        <p className="font-rubik font-normal leading-normal md:text-md">
          Each team has to sign up for 1 category in order to be considered for
          the corresponding prize. Sign up will begin during the hackathon team
          forming event
        </p>
      </div>
      <div className="mt-10">
        <p className="font-rubik text-lg font-bold leading-normal text-purple-500">
          MAIN CATEGORY
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {mainCategory.map((category: tracksType) => {
            return <Card key={category.id} track={category} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="font-rubik text-lg font-bold leading-normal text-purple-500">
          SUB CATEGORY
        </p>
        <p className="font-rubik font-normal leading-normal md:text-md">
          You can choose ONE sub category along with your project
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {subCategory.map((category: tracksType) => {
            return <Card key={category.id} track={category} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
