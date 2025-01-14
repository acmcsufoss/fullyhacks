"use client";

import { announcementsType } from "@/types/interface";
import Timeago from "react-timeago";

export default function Announcement({
  announcement
}: {
  announcement: announcementsType;
}) {
  return (
    <div className="my-10 rounded-lg bg-sky-900 p-4">
      <p className="text-lg font-semibold">{announcement.title}</p>
      <p>{announcement.content}</p>
      <Timeago date={announcement.submittedAt} className="mt-4 font-semibold" />
    </div>
  );
}
