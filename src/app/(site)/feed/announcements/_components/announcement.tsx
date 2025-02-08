"use client";

import { announcementsType } from "@/types/interface";
import Timeago from "react-timeago";

export default function Announcement({
  announcement
}: {
  announcement: announcementsType;
}) {
  return (
    <div className="relative my-10 rounded-xl bg-purple_card p-4 font-audiowide text-white">
      {/* Edges */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/assets/announcement_corner_tl.svg"
          alt="hex"
          className="h-8 w-8"
        />
      </div>

      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
        <img
          src="/assets/announcement_corner_br.svg"
          alt="hex"
          className="h-8 w-8"
        />
      </div>

      {/* Announcement Content */}
      <p className="mb-1 text-lg font-semibold">{announcement.title}</p>
      <p className="mb-4 text-sm">{announcement.content}</p>
      <Timeago
        date={announcement.submittedAt}
        className="mt-4 text-sm font-semibold"
      />
    </div>
  );
}
