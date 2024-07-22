"use client";

import { announcementsType, feedUsers, User } from "@/types/interface";
import React, { useState } from "react";
import { FeedSideBar } from "../nav-bar";
import Announcements from "./Announcements";
import Events from "./Events";
import FAQs from "./FAQs";
import FullyPacks from "./FullyPacks";
import MainFeed from "./MainFeed";
import Prizes from "./Prizes";
import Profile from "./Profile";
import Resources from "./Resources";
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
      <FeedSideBar setLocation={setLocation} />
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
