import Link from 'next/link'
import React from 'react'

export const NavBarLanding: React.FC = () => {
  const menuList = [
    {
      id: 'about',
      name: 'About',
      href: '#about',
      logo: '/laptop.svg',
      mobile: 24,
      desktop: 24
    },
    {
      id: 'sponsors',
      name: 'Sponsors',
      href: '#sponsors',
      logo: '/handshake.svg',
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
    }
  ]
  return (
    <nav className="navbar text-purple_main font-semibold text-lg lg:ml-8 lg:mt-2">
      <div className="navbar-start">
        <Link href="/" className="lg:flex gap-2 items-center hidden">
          <img src="/logo.svg" alt="Fully logo" width={36} height={36} />
          <p> FH </p>
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
            className="ml-4 menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple_300 rounded-box w-52 text-[1rem]">
            {menuList.map((item) => {
              return (
                <Link
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className="flex gap-2 items-center m-2">
                  <img
                    src={item.logo}
                    alt={item.logo + '"s logo'}
                    width={item.mobile}
                    height={item.mobile}
                  />
                  {item.name}
                </Link>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuList.map((item) => {
            return (
              <Link
                key={item.id}
                id={item.id}
                href={item.href}
                className="flex items-center mx-10">
                <img
                  src={item.logo}
                  alt={item.logo + '"s logo'}
                  width={item.desktop}
                  height={item.desktop}
                  className="mx-4"
                />
                {item.name}
              </Link>
            )
          })}
          <button className="bg-sky_300 text-white mx-14 py-1 px-6 rounded-lg">
            Apply
          </button>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/" className="flex gap-2 items-center mr-4 lg:hidden">
          <img src="/logo.svg" alt="Fully logo" width={36} height={36} />
          <p> FH </p>
        </Link>
      </div>
    </nav>
  )
}
