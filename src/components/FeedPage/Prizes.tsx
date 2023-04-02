import React from 'react'
import { BsShield, BsMap, BsGift } from 'react-icons/bs'
import { SlGraduation } from 'react-icons/sl'
import { CgSmartphoneChip } from 'react-icons/cg'
import { MdOutlineRecycling } from 'react-icons/md'
import { tracksType } from '@/types/interface'

const tracks: tracksType[] = [
  {
    id: 'track1',
    name: 'Education',
    icon: <SlGraduation size={38} />,
    description:
      'How can we improve the education system and make education accessible to everyone?'
  },
  {
    id: 'track2',
    name: 'Security',
    icon: <BsShield size={38} />,
    description:
      'How can we protect our data, identify online threats, build a more secure internet?'
  },
  {
    id: 'track3',
    name: 'New Frontiers',
    icon: <CgSmartphoneChip size={38} />,
    description:
      'New and emerging technologies, such as blockchain, artificial intelligence, and the Internet of Things.'
  },
  {
    id: 'track4',
    name: 'Environment',
    icon: <MdOutlineRecycling size={38} />,
    description:
      'What can we build to help our environment, make Earth a greener and better place'
  }
]

const mainCategory: tracksType[] = [
  {
    id: 'cat1',
    name: 'Best Beginner Project',
    description: 'Mystery keyboard'
  },
  {
    id: 'cat2',
    name: 'Most Complicated Project',
    description: 'Logitech G G305 LIGHTSPEED'
  },
  {
    id: 'cat3',
    name: 'Best UI/UX Project',
    description: '3 months Discord Nitro'
  },
  {
    id: 'cat4',
    name: 'Best AI/ML Project',
    description: 'JBL GO2 - Waterproof Ultra-Portable Bluetooth Speaker'
  },
  {
    id: 'cat5',
    name: 'Best Mobile App',
    description: 'Anker Portable Charger'
  }
]
const subCategory: tracksType[] = [
  {
    id: 'sub1',
    name: 'Best use of Wolfram',
    description:
      '1 year of Wolfram|One Personal Edition + 1 year of Wolfram|Alpha Pro (375$ value)'
  },
  {
    id: 'sub2',
    name: 'Best .XYZ domain',
    description: '15$ Starbucks giftcard'
  }
]

interface TrackProps {
  track: tracksType
}

const Card: React.FC<TrackProps> = ({ track }) => {
  return (
    <div className="w-[260px] h-[260px] cursor-pointer md:w-[320px] md:h-[320px] flex flex-col items-center justify-center p-4 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-300 border-opacity-25 shadow-xl hover:bg-[rgb(52,11,103)] duration-200 ease-in-out hover:text-white">
      <div className="px-10 flex flex-col">
        <div className="text-lg flex gap-4 items-center font-bold">
          <p>{track.name}</p>
          <p>{track.icon}</p>
        </div>
        <p className="mt-4 md:text-md">{track.description}</p>
      </div>
    </div>
  )
}

const Prizes = () => {
  return (
    <section className="my-14 mx-10 w-full text-purple_main">
      <p className="text-xl font-semibold">Tracks & Prizes</p>
      <p className="font-light md:text-md">
        Find all details about tracks, prize categories here
      </p>
      <div className="mt-10">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-lg font-semibold">Tracks</p>
          <BsMap size={28} />
        </div>
        <p className="md:text-md md:w-[60%]">
          Hackers have to build their projects around one of these 4 tracks
          including Education, Cybersecurity, New Frontiers, and Environment.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-8">
        {tracks.map((track: tracksType) => {
          return <Card key={track.id} track={track} />
        })}
      </div>
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-lg font-semibold">Prizes</p>
          <BsGift size={28} />
        </div>
        <p className="md:text-md md:w-[60%]">
          Each team has to sign up for 1 category in order to be considered for
          the corresponding prize. Sign up will begin during the hackathon team
          forming event
        </p>
      </div>
      <div className="mt-10">
        <p className="text-md font-semibold">Main Category</p>
        <div className="mt-10 flex flex-wrap gap-8">
          {mainCategory.map((category: tracksType) => {
            return <Card key={category.id} track={category} />
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-md font-semibold">Sub Category</p>
        <p className="md:text-md md:w-[60%]">
          You can choose a sub category along with your project
        </p>
        <div className="mt-10 flex flex-wrap gap-8">
          {subCategory.map((category: tracksType) => {
            return <Card key={category.id} track={category} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Prizes
