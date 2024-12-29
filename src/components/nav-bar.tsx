"use client";

import { MenuType } from "@/types/interface";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineQuestionCircle
} from "react-icons/ai";
import { BiCalendarEvent, BiHomeAlt } from "react-icons/bi";
import { BsDiscord, BsLightbulb } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoArrowBackSharp } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";

export const NavBarLanding: React.FC = () => {
  const menuList: MenuType[] = [
    {
      id: "about",
      name: "About",
      href: "#about-fullyhacks",
      mobile: 24,
      desktop: 24
    },
    {
      id: "faq",
      name: "FAQ",
      href: "#frequently-asked-questions",
      mobile: 24,
      desktop: 24
    },
    {
      id: "sponsors",
      name: "Sponsors",
      href: "#sponsors",
      mobile: 24,
      desktop: 24
    },
    {
      id: "team",
      name: "Team",
      href: "#team",
      mobile: 24,
      desktop: 24
    },
    {
      id: "login",
      name: "Log In",
      href: "/signin",
      mobile: 24,
      desktop: 24
    }
  ];

  return (
    <nav className="navbar z-[30] text-lg text-white md:grid md:grid-cols-4 md:pl-8 md:pt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn md:hidden">
            <AiOutlineMenu className="h-5 w-5" />
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact z-[3] ml-4 mt-3 min-w-max bg-[#27233f] p-2 text-[1rem] shadow">
            {menuList.map((item) => (
              <div key={item.id} className="flex">
                <Link href={item.href} className="w-full px-4 py-1.5">
                  <p className="cursor-pointer whitespace-nowrap hover:text-purple_main_hover transition-colors duration-200">
                    {item.name}
                  </p>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden md:col-span-3 md:flex">
        <ul className="menu menu-horizontal flex w-full items-center justify-end gap-1 lg:gap-2">
          {menuList.map((item, index) => (
            <div key={item.id} className="flex items-center whitespace-nowrap">
              <Link
                href={item.href}
                className="flex items-center px-2 lg:px-4 py-2 hover:text-purple_main_hover transition-colors duration-200">
                <p className="cursor-pointer text-sm lg:text-lg">
                  {item.name}
                </p>
              </Link>
              {index < menuList.length - 1 && (
                <span className="h-6 border-l-2 border-white" />
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="navbar-end md:hidden">
        <img src="/assets/logo.svg" alt="Fully logo" width={36} height={36} />
      </div>
    </nav>
  );
};

export const GenericNavBar = () => {
  return (
    <nav className="flex items-center justify-center text-purple_main">
      <Link href="/">
        <img
          alt="nav bar logo"
          src="/assets/logo.svg"
          className="ml-4 h-24 w-24 cursor-pointer md:h-32 md:w-32"
        />
      </Link>
      <Link
        href="/"
        className="mr-4 ml-auto flex cursor-pointer items-center gap-4 rounded-xl bg-purple_main p-2 text-white hover:bg-pink-500 hover:transition-all hover:duration-300">
        <button className="text-sm font-semibold md:text-md">
          Back to Home
        </button>
        <IoArrowBackSharp className="h-8 w-8 scale-x-[-1] cursor-pointer" />
      </Link>
    </nav>
  );
};

export const AuthNavBar = () => {
  return (
    <nav className="flex items-center text-purple_main">
      <Link href="/">
        <img
          src="/assets/logo.svg"
          alt="nav bar logo"
          className="ml-2 h-24 w-24 cursor-pointer md:h-32 md:w-32"
        />
      </Link>
      <div
        onClick={() => signOut()}
        className="mr-4 ml-auto cursor-pointer rounded-xl bg-[#E149A9] p-2 text-md text-white hover:bg-pink-500 hover:transition-all hover:duration-300">
        <button>Sign out</button>
      </div>
    </nav>
  );
};

export const FeedNavBar = () => {
  return (
    <nav className="flex items-center text-purple_main">
      <Link href="/">
        <img
          alt="nav bar logo"
          src="/assets/logo.svg"
          className="my-4 ml-4 h-16 w-16 cursor-pointer md:ml-10 md:h-20 md:w-20"
        />
        <div className="mr-4 ml-auto text-md text-white md:mr-10">
          <button onClick={() => signOut()}> Sign out</button>
        </div>
      </Link>
    </nav>
  );
};

interface FeedSideBarProps {
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export const FeedSideBar: React.FC<FeedSideBarProps> = ({ setLocation }) => {
  const [currIdx, setIdx] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const feedItems = [
    {
      id: "feed01",
      name: "Home",
      icon: <BiHomeAlt size={28} />
    },
    {
      id: "feed02",
      name: "Announcements",
      icon: <HiOutlineSpeakerphone size={28} />
    },
    {
      id: "feed03",
      name: "Events",
      icon: <BiCalendarEvent size={28} />
    },
    {
      id: "feed07",
      name: "Tracks & Prizes",
      icon: <HiOutlineTrophy size={28} />
    },
    {
      id: "feed04",
      name: "FullyPacks",
      icon: <SlEnergy size={28} />
    },
    {
      id: "feed05",
      name: "Resources",
      icon: <BsLightbulb size={28} />
    },
    {
      id: "feed08",
      name: "FAQs",
      icon: <AiOutlineQuestionCircle size={28} />
    }
    // {
    //   id: 'feed06',
    //   name: 'Profile',
    //   icon: <BiUserCircle size={28} />
    // }
  ];
  return (
    <>
      {!isOpen && (
        <AiOutlineMenu
          onClick={() => setOpen(true)}
          className="fixed top-[5rem] left-4 z-20 cursor-pointer text-[#EF4DB3] md:hidden"
          size={20}
        />
      )}

      {/* For mobile */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-20 h-screen w-screen bg-purple_dark/40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      />

      <div
        className={`fixed top-0 transition-all duration-200 ease-in md:hidden ${
          isOpen ? "left-0" : "-left-80"
        } z-30 h-screen basis-1/6 bg-purple_dark p-8 text-sm font-semibold text-[#EF4DB3]`}>
        <AiOutlineClose
          onClick={() => setOpen(false)}
          size={20}
          className="cursor-pointer"
        />
        <ul className="border-b-2 border-[#EF4DB3] p-2">
          {feedItems.map((item, idx) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setLocation(item.name), setIdx(idx), setOpen(false);
                }}
                className={`my-2 flex w-full items-center rounded-lg p-2 ${
                  currIdx == idx ? "bg-[rgba(255,136,229,0.4)] text-white" : ""
                }`}>
                {item.icon}
                <li className="ml-4 text-white">{item.name}</li>
              </button>
            );
          })}
        </ul>
        <div className="mt-4 flex items-center gap-4 text-center">
          <BsDiscord size={28} />
          <a target={"_blank"} href="https://discord.gg/XKNZxHEnJj">
            Discord Server
          </a>
        </div>
      </div>

      {/* For desktop */}
      <div className="mx-4 mt-12 hidden basis-1/5 text-sm font-semibold text-[#EF4DB3] md:mx-10 md:block md:text-md">
        <ul className="border-b-2 p-2">
          {feedItems.map((item, idx) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setLocation(item.name), setIdx(idx);
                }}
                className={`my-4 flex w-full items-center rounded-lg p-2 ${
                  currIdx == idx ? "bg-[rgba(255,136,229,0.4)] text-white" : ""
                }`}>
                {item.icon}
                <li className="ml-4 text-white">{item.name}</li>
              </button>
            );
          })}
        </ul>
        <div className="mt-4 flex items-center gap-4 text-center">
          <BsDiscord size={28} />
          <a
            target={"_blank"}
            href="https://discord.gg/XKNZxHEnJj"
            className="text-white">
            Discord Server
          </a>
        </div>
      </div>
    </>
  );
};
