"use client";

import { MenuType } from "@/types/interface";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineQuestionCircle
} from "react-icons/ai";
import {
  BiCalendarEvent,
  BiHomeAlt,
  BiLogOut,
  BiUserCircle
} from "react-icons/bi";
import { BsDiscord, BsLightbulb } from "react-icons/bs";
import { HiMenu, HiOutlineSpeakerphone } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoArrowBackSharp } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import links from "@/lib/data/links.json";
import { usePathname } from "next/navigation";
import { MdArrowRight } from "react-icons/md";

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
      id: "faq",
      name: "FAQ",
      href: "#frequently-asked-questions",
      mobile: 24,
      desktop: 24
    },
    {
      id: "portal",
      name: "User Portal",
      href: "/portal",
      mobile: 24,
      desktop: 24
    }
  ];

  return (
    <nav className="navbar relative z-[30] text-white">
      {/* Desktop Navigation */}
      <div className="hidden w-full items-center justify-between px-4 py-4 sm:px-6 lg:flex lg:px-8">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/assets/fullyhacks_logo.png"
            alt="FullyHacks 2025"
            className="w-16 md:w-24"
          />
        </Link>

        <ul className="flex items-center gap-4">
          {menuList.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center gap-4 whitespace-nowrap">
              <Link
                href={item.href}
                className="group relative py-2 text-sm sm:text-base lg:text-lg xl:text-xl">
                {item.name}
                <span className="absolute bottom-0 block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full group-focus:w-full" />
              </Link>
              {index < menuList.length - 1 && (
                <span className="h-[1.5em] w-[3px] bg-white" />
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="flex w-full items-center justify-between px-4 lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn p-2">
            <HiMenu className="h-12 w-12 opacity-80" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact z-[3] mt-3 min-w-max scale-110 bg-[#27233f] p-4 shadow">
            {menuList.map((item) => (
              <div key={item.id} className="flex">
                <Link href={item.href} className="w-full px-6 py-2.5">
                  <p className="cursor-pointer whitespace-nowrap text-base transition-all duration-200 hover:text-purple_main_hover sm:text-lg">
                    {item.name}
                  </p>
                </Link>
              </div>
            ))}
          </ul>
        </div>
        <img
          src="/assets/fullyhacks_logo.png"
          alt="FullyHacks 2025"
          className="h-16 w-16 transition-all duration-200 sm:h-20 sm:w-20"
        />
      </div>
    </nav>
  );
};

export const GenericNavBar = () => {
  return (
    <nav className="flex flex-row-reverse items-center justify-center px-4 py-8">
      <Link href="/" className="gradient-btn ml-auto">
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
    <nav className="z-10 flex flex-row-reverse items-center justify-between px-4 py-8 md:flex-row md:py-4">
      <Link href="/" className="z-10 hidden md:block">
        <img
          alt="nav bar logo"
          src="/assets/fullyhacks_logo.png"
          className="w-16 md:w-24"
        />
      </Link>
      <div className="z-10 text-md text-white">
        <button
          onClick={() => signOut()}
          className="group relative py-1 text-md">
          Sign out
          <span className="absolute bottom-1 block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full group-focus:w-full" />
        </button>
      </div>
    </nav>
  );
};

export const FeedNavBar = () => {
  return (
    <nav className="z-10 flex flex-row-reverse items-center justify-between px-4 py-8 md:flex-row md:py-4">
      <Link href="/" className="hidden md:block">
        <img
          alt="nav bar logo"
          src="/assets/fullyhacks_logo.png"
          className="w-16 md:w-24"
        />
      </Link>
      <div className="text-md text-white">
        <button
          onClick={() => signOut()}
          className="group relative py-1 text-md">
          Sign out
          <span className="absolute bottom-1 block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full group-focus:w-full" />
        </button>
      </div>
    </nav>
  );
};

export const FeedSideBar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current !== pathname) {
      setOpen(false);
    }
    lastPathname.current = pathname;
  }, [pathname]);

  const feedItems = [
    {
      id: "feed01",
      name: "Home",
      href: "/feed/home"
    },
    {
      id: "feed02",
      name: "Announcements",
      href: "/feed/announcements"
    },
    {
      id: "feed03",
      name: "Events",
      href: "/feed/events"
    },
    {
      id: "feed04",
      name: "Tracks & Prizes",
      href: "/feed/prizes"
    },
    {
      id: "feed05",
      name: "FullyPacks",
      href: "/feed/fullypacks"
    },
    {
      id: "feed06",
      name: "FAQs",
      href: "/feed/faq"
    },
    {
      id: "feed07",
      name: "Profile",
      href: "/feed/profile"
    }
  ];

  return (
    <>
      {/* Mobile View */}
      {!isOpen && (
        <AiOutlineMenu
          onClick={() => setOpen(true)}
          className="absolute -top-[5.865rem] left-4 z-20 block cursor-pointer stroke-[2] text-[#72d6e6] md:hidden"
          size={24}
        />
      )}
      <div
        className={`fixed inset-0 z-50 ${isOpen ? "visible" : "invisible delay-300"} transition-[visibility]`}>
        {/* Blur overlay */}
        <div
          className={`absolute inset-0 bg-purple_dark/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute left-0 top-0 h-full w-80 bg-[#021230] p-8 text-sm font-semibold text-[#72d6e6] shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}>
          <div className="mb-8 flex items-center justify-between">
            <img
              src="/assets/fullyhacks_logo.png"
              alt="Fully logo"
              className="w-12"
            />
            <AiOutlineClose
              onClick={() => setOpen(false)}
              size={24}
              className="cursor-pointer"
            />
          </div>
          <ul className="space-y-2 border-b-2 border-[#72d6e6] py-2">
            {feedItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`flex w-full items-center rounded-lg p-2 text-white transition-colors duration-200 ${
                  pathname === item.href ||
                  (item.name === "Home" && pathname.startsWith(item.href))
                    ? "bg-[#173162]"
                    : ""
                }`}>
                <span className="ml-4 text-white">{item.name}</span>
              </Link>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-center gap-4 text-[#72d6e6]">
            <BsDiscord size={28} />
            <a
              target="_blank"
              href={links.discord}
              className="text-white transition-colors duration-200">
              Discord Server
            </a>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden w-[250px] flex-shrink-0 text-sm font-semibold text-[#bdbdbd] md:block md:text-[1.125rem]">
        <ul className="flex flex-col gap-4 border-b-2 border-[#72d6e6] p-2">
          {feedItems.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex w-full rounded-lg p-2 transition-colors duration-300 hover:text-white ${pathname === item.href || (item.name === "Home" && pathname.startsWith(item.href)) ? "custom-text-shadow text-white" : ""}`}>
                {pathname === item.href ||
                (item.name === "Home" && pathname.startsWith(item.href)) ? (
                  <MdArrowRight size={28} color="#c2f2ff" />
                ) : null}
                <li className="ml-auto">{item.name}</li>
              </Link>
            );
          })}
        </ul>
        <div className="mt-4 flex items-center justify-center gap-4 text-[#72d6e6]">
          <BsDiscord size={28} />
          <a target={"_blank"} href={links.discord} className="text-white">
            Discord Server
          </a>
        </div>
      </div>
    </>
  );
};
