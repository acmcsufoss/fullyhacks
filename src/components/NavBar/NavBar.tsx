import { MenuType } from '@/types/interface'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'

export const NavBarLanding: React.FC = () => {
  const router = useRouter()
  const [menuList, setMenu] = useState<MenuType[]>([
    {
      id: 'about',
      name: 'About',
      href: '#about',
      logo: '/laptop.svg',
      mobile: 24,
      desktop: 24
    },
    {
      id: 'faq',
      name: 'FAQ',
      href: '#faq',
      logo: '/thinking.svg',
      mobile: 24,
      desktop: 24
    },
    {
      id: 'team',
      name: 'Team',
      href: '#team',
      logo: '/handshake.svg',
      mobile: 24,
      desktop: 24
    }
  ])

  useEffect(() => {
    const getApplication = async () => {
      try {
        const res = await axios.get('/api/application')
        if (res.data.application != null) {
          setMenu((prev) => [
            ...prev,
            {
              id: 'portal',
              name: 'User Portal',
              href: '/portal',
              logo: '/portal.svg',
              mobile: 24,
              desktop: 24
            }
          ])
        }
      } catch (e) {
        console.log(e)
      }
    }
    getApplication()
  }, [])
  return (
    <nav className="z-[30] rounded-lg backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-300 border-opacity-25 shadow-xl fixed bg-body_bg navbar text-purple_main font-semibold text-lg lg:pl-8 lg:pt-2 lg:grid lg:grid-cols-4">
      <div className="navbar-start">
        <>
          <img
            src="/logo.svg"
            alt="Fully logo"
            width={36}
            height={36}
            className="lg:inline-flex hidden"
          />
          <Link href="/" className="hidden lg:flex gap-2 items-center">
            <p className="lg:inline-flex ml-2 cursor-pointer hidden"> FH </p>
          </Link>
        </>
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
                  <img
                    src={item.logo}
                    alt={item.logo + '"s logo'}
                    width={item.mobile}
                    height={item.mobile}
                  />
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
      <div className="navbar-center hidden lg:flex lg:col-span-3">
        <ul className="menu menu-horizontal w-[100%] flex justify-end items-center">
          {menuList.map((item) => {
            return (
              <div key={item.id} className="flex">
                <img
                  src={item.logo}
                  alt={item.logo + '"s logo'}
                  width={item.desktop}
                  height={item.desktop}
                  className="mx-4 ml-12"
                />
                <Link
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className="flex items-center">
                  <p className="cursor-pointer hover:ease-in-out hover:duration-200 hover:text-purple_main_hover">
                    {item.name}
                  </p>
                </Link>
              </div>
            )
          })}
          <button onClick={() => router.push('/signin')} className="apply-btn">
            Apply
          </button>
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <>
          <img src="/logo.svg" alt="Fully logo" width={36} height={36} />
          <Link href="/" className="flex gap-2 items-center mr-4">
            <p className="ml-2"> FH </p>
          </Link>
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
        src="/logo.svg"
        className="cursor-pointer my-4 ml-2 w-12 h-12 md:w-16 md:h-16"
      />
      <div className="mr-4 ml-auto text-md">
        <button onClick={() => signOut()}> Sign out</button>
      </div>
    </nav>
  )
}
