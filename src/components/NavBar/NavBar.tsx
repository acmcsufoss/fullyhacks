import { MenuType } from '@/types/interface'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
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
      name: 'Portal',
      href: '/portal',
      mobile: 24,
      desktop: 24
    }
  ])

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  // Use useEffect to check the window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 831) {
        // Close the mobile menu if the screen width is greater than or equal to 831px
        setMobileMenuOpen(false)
      }
    }

    // Attach the event listener
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="z-[30] navbar text-white text-center font-rubik font-semibold text-2xl lg:pl-8 lg:pt-2 lg:grid lg:grid-cols-3">
      <div className="navbar-start lg:col-span-2 flex items-center">
        <Link href="/" className="flex gap-2 items-center">
          <img
            src="/logo.svg"
            alt="Fully logo"
            width={240}
            height={240}
            className="lg:inline-flex hidden"
          />
        </Link>
      </div>
      <div className="navbar-center hidden xl:flex lg:col-span-1 lg:justify-end pr-8 mt-2">
        <ul className="menu menu-horizontal w-[100%] flex items-center justify-end space-x-4 absolute top-10 right-8">
          {menuList.map((item, index) => (
            <React.Fragment key={item.id}>
              <Link href={item.href} className="flex items-center">
                <p className="cursor-pointer hover:ease-in-out hover:duration-200 hover:text-purple_main_hover">
                  {item.name}
                </p>
              </Link>
              {index < menuList.length - 1 && (
                <span
                  className="mx-2"
                  style={{
                    width: '2px',
                    backgroundColor: '#E149A9',
                    display: 'inline-block',
                    height: '1em'
                  }}></span>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Fully logo"
              width={120}
              height={120}
              className="absolute top-4 left-4"
            />
          </Link>
          <AiOutlineMenu
            onClick={toggleMobileMenu}
            className="cursor-pointer text-purple_main absolute top-4 right-4"
            size={20}
          />
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-14 right-4 text-white text-2xl bg-gray-800 bg-opacity-75">
            <AiOutlineClose
              onClick={toggleMobileMenu}
              size={20}
              className="cursor-pointer"
            />
            <ul className="border-b-2 p-2">
              {menuList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => router.push(item.href)}
                  className="w-full flex my-4 p-2 rounded-lg items-center">
                  {item.name}
                </button>
              ))}
            </ul>
          </div>
        )}
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
