"use client";

import { announcementsType, feedUsers, User } from "@/types/interface";
import React, { useState } from "react";
import MainFeed from "./main-feed";

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
      ) : (
        <></>
      )}
    </section>
  );
};

export default Feed;
