import { FeedNavBar, FeedSideBar } from "@/components/nav-bar";
import React from "react";

export default function FeedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <FeedNavBar />
      <div className="relative mx-4 mb-8 flex w-full">
        <FeedSideBar />
        {children}
      </div>
    </div>
  );
}
