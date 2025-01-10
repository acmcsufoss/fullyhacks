"use client";

import { announcementsType, feedUsers, User } from "@/types/interface";
import React, { useState } from "react";
import { FeedSideBar } from "@/components/nav-bar";
import Announcements from "./announcements";
import Events from "./events";
import FAQs from "./faq";
import FullyPacks from "./fullypacks";
import MainFeed from "./main-feed";
import Prizes from "./prizes";
import Resources from "./resources";
interface FeedProps {
  feedUsers: feedUsers[];
  currentUser: User;
  announcements: announcementsType[];
}
const Feed: React.FC<FeedProps> = (props) => {
  const { feedUsers, currentUser, announcements } = props;
  const [currentLocation, setLocation] = useState("Home");
  return (
    <section className="relative mx-4 mb-8 flex w-full">
      {currentLocation == "Home" ? (
        <MainFeed feedUsers={feedUsers} currentUser={currentUser} />
      ) : currentLocation == "Announcements" ? (
        <Announcements announcements={announcements} />
      ) : currentLocation == "Events" ? (
        <Events />
      ) : currentLocation == "Tracks & Prizes" ? (
        <Prizes />
      ) : currentLocation == "FullyPacks" ? (
        <FullyPacks />
      ) : currentLocation == "FAQs" ? (
        <FAQs />
      ) : currentLocation == "Resources" ? (
        <Resources />
      ) : (
        <></>
      )}
    </section>
  );
};

export default Feed;
