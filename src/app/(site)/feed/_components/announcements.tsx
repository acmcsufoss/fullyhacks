import { announcementsType } from "@/types/interface";
import TimeAgo from "react-timeago";
import React from "react";

interface AnnouncementsProps {
  announcements: announcementsType[];
}
interface AnnouncementProps {
  announcement: announcementsType;
}

const Announcement: React.FC<AnnouncementProps> = ({ announcement }) => {
  return (
    <div className="my-10 rounded-lg bg-sky-100 p-4">
      <p className="text-lg font-semibold">{announcement.title}</p>
      <p>{announcement.content}</p>
      <TimeAgo date={announcement.submittedAt} className="mt-4 font-semibold" />
    </div>
  );
};

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => {
  return (
    <div className="mt-14 mr-8 min-h-screen w-full bg-purple_dark text-white">
      <p className="feed-title">Announcements</p>
      <p className="md:text-md">
        Official announcements from the Fullyhacks team
      </p>
      {announcements.map((announcement: announcementsType) => {
        return (
          <Announcement key={announcement.id} announcement={announcement} />
        );
      })}
    </div>
  );
};

export default Announcements;
