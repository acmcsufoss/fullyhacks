import { MenuType } from '@/types/interface'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { BiHomeAlt, BiCalendarEvent, BiUserCircle } from 'react-icons/bi'
import { SlEnergy } from 'react-icons/sl'
import { BsDiscord, BsLightbulb } from 'react-icons/bs'
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineQuestionCircle
} from 'react-icons/ai'
import { HiOutlineSpeakerphone } from 'react-icons/hi'
import { HiOutlineTrophy } from 'react-icons/hi2'

export const NavBarLanding: React.FC = () => {
  const router = useRouter()
  const [menuList, setMenu] = useState<MenuType[]>([
    {
      id: 'about',
      name: 'About',
      href: '#about',
      mobile: 24,
      desktop: 24
    },
    {
      id: 'faq',
      name: 'FAQ',
      href: '#faq',
      mobile: 24,
      desktop: 24
    },
    {
      id: 'sponsor',
      name: 'Sponsors',
      href: '#sponsors',
      mobile: 24,
      desktop: 24
    },
    {
      id: 'portal',
      name: 'User Portal',
      href: '/portal',
      mobile: 24,
      desktop: 24
    }
  ])

  return (
    <nav className="z-[30] navbar text-white font-semibold text-lg lg:pl-8 lg:pt-2 lg:grid lg:grid-cols-4">
      <div className="navbar-start">
        <Link href="/" className="hidden lg:flex gap-2 items-center">
          <img
            src="/logo.svg"
            alt="Fully logo"
            width={240}
            height={240}
            className="lg:inline-flex hidden"
          />
        </Link>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="z-[3] ml-4 menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple_300 rounded-box w-52 text-[1rem]">
            {menuList.map((item) => {
              return (
                <div key={item.id} className="flex gap-4 my-2">
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex gap-2 items-center m-2">
                    <p className="cursor-pointer"> {item.name} </p>
                  </Link>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden xl:flex lg:col-span-3 mr-36 mb-20">
        <ul className="menu menu-horizontal w-[100%] flex justify-end items-center">
        {menuList.map((item, index) => {
  return (
    <div key={item.id} style={{ marginRight: '-40px' }} className="flex my-2">
      {/* Placeholder div or remove entirely */}
      <div
        style={{ width: item.desktop, height: item.desktop }}
        className="ml-12"
      />
      <Link
        key={item.id}
        id={item.id}
        href={item.href}
        className="flex items-center"
      >
        <p className="cursor-pointer hover:ease-in-out hover:duration-200 hover:text-purple_main_hover font-rubik">
          {item.name}
        </p>
      </Link>
      {index < menuList.length - 1 && (
        <span className="ml-7"
        style={{ borderLeft: '4px solid #E149A9', height: '32px' }}
        ></span>
      )}    </div>
  );
})}

        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <>
          <img src="/logo.svg" alt="Fully logo" width={36} height={36} />
        </>
      </div>
    </nav>
  )
}

export const GenericNavBar = () => {
  const router = useRouter()
  return (
    <nav className="flex items-center text-purple_main bg-orange_100">
      <img
        onClick={() => router.push('/')}
        alt="nav bar logo"
        src="/logo.svg"
        className="cursor-pointer my-4 ml-2 w-12 h-12 md:w-16 md:h-16"
      />
      <div className="mr-4 ml-auto flex gap-4 items-center">
        <button
          onClick={() => router.push('/')}
          className="font-semibold text-sm md:text-md">
          Back to home
        </button>
        <IoArrowBackSharp
          onClick={() => router.push('/')}
          className="cursor-pointer scale-x-[-1] w-8 h-8"
        />
      </div>
    </nav>
  )
}

export const AuthNavBar = () => {
  const router = useRouter()
  return (
    <nav className="flex items-center text-purple_main bg-orange_100">
      <img
        onClick={() => router.push('/')}
        alt="nav bar logo"
        src="/logo.svg"
        className="cursor-pointer my-4 ml-2 w-12 h-12 md:w-16 md:h-16"
      />
      <div className="mr-4 ml-auto text-md">
        <button onClick={() => signOut()}> Sign out</button>
      </div>
    </nav>
  )
}

export const FeedNavBar = () => {
  const router = useRouter()
  return (
    <nav className="flex items-center text-purple_main bg-body_bg border-b-2">
      <img
        onClick={() => router.push('/')}
        alt="nav bar logo"
        src="/logo.svg"
        className="cursor-pointer my-4 ml-4 md:ml-10 w-8 h-8 md:w-10 md:h-10"
      />
      <div className="mr-4 md:mr-10 ml-auto text-md">
        <button onClick={() => signOut()}> Sign out</button>
      </div>
    </nav>
  )
}

interface FeedSideBarProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

export const FeedSideBar: React.FC<FeedSideBarProps> = ({ setLocation }) => {
  const [currIdx, setIdx] = useState(0)
  const [isOpen, setOpen] = useState(false)
  const feedItems = [
    {
      id: 'feed01',
      name: 'Home',
      icon: <BiHomeAlt size={28} />
    },
    {
      id: 'feed02',
      name: 'Announcements',
      icon: <HiOutlineSpeakerphone size={28} />
    },
    {
      id: 'feed03',
      name: 'Events',
      icon: <BiCalendarEvent size={28} />
    },
    {
      id: 'feed07',
      name: 'Tracks & Prizes',
      icon: <HiOutlineTrophy size={28} />
    },
    {
      id: 'feed04',
      name: 'FullyPacks',
      icon: <SlEnergy size={28} />
    },
    {
      id: 'feed05',
      name: 'Resources',
      icon: <BsLightbulb size={28} />
    },
    {
      id: 'feed08',
      name: 'FAQs',
      icon: <AiOutlineQuestionCircle size={28} />
    },
    {
      id: 'feed06',
      name: 'Profile',
      icon: <BiUserCircle size={28} />
    }
  ]
  return (
    <>
      {!isOpen && (
        <AiOutlineMenu
          onClick={() => setOpen(true)}
          className="absolute top-4 left-0 md:hidden cursor-pointer text-purple_main"
          size={20}
        />
      )}
      {isOpen && (
        <div className="md:hidden text-sm mt-4 mx-4 font-rubik text-purple_main font-semibold basis-1/6">
          <AiOutlineClose
            onClick={() => setOpen(false)}
            size={20}
            className="cursor-pointer"
          />
          <ul className="border-b-2 p-2">
            {feedItems.map((item, idx) => {
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setLocation(item.name), setIdx(idx)
                  }}
                  className={`w-full flex my-4 p-2 rounded-lg items-center ${
                    currIdx == idx ? 'bg-sky-100 text-sky-400' : ''
                  }`}>
                  {item.icon}
                  <li className="ml-4">{item.name}</li>
                </button>
              )
            })}
          </ul>
          <div className="flex items-center text-center mt-4 gap-4">
            <BsDiscord size={28} />
            <a target={'_blank'} href="https://discord.gg/XKNZxHEnJj">
              Discord Server
            </a>
          </div>
        </div>
      )}
      <div className="hidden md:block text-sm mt-12 mx-4 md:mx-10 font-rubik text-purple_main font-semibold md:text-md basis-1/5">
        <ul className="border-b-2 p-2">
          {feedItems.map((item, idx) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setLocation(item.name), setIdx(idx)
                }}
                className={`w-full flex my-4 p-2 rounded-lg items-center ${
                  currIdx == idx ? 'bg-sky-100 text-sky-400' : ''
                }`}>
                {item.icon}
                <li className="ml-4">{item.name}</li>
              </button>
            )
          })}
        </ul>
        <div className="flex items-center text-center mt-4 gap-4">
          <BsDiscord size={28} />
          <a target={'_blank'} href="https://discord.gg/XKNZxHEnJj">
            Discord Server
          </a>
        </div>
      </div>
    </>
  )
}
