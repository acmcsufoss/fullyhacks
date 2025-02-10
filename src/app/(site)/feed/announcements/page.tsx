import { prisma } from "db";
import { announcementsType } from "@/types/interface";
import Announcement from "./_components/announcement";

async function getAnnouncements() {
  const announcements = await prisma.announcement.findMany({
    orderBy: {
      submittedAt: "desc"
    }
  });
  return JSON.parse(JSON.stringify(announcements));
}

export default async function AnnouncementsPage() {
  const announcements: announcementsType[] = await getAnnouncements();
  return (
    <div>
      <p className="feed-title">Announcements</p>
      <p className="custom-text-shadow font-audiowide text-white md:text-md">
        Official announcements from the FullyHacks team
      </p>
      {announcements.map((announcement: announcementsType) => {
        return (
          <Announcement key={announcement.id} announcement={announcement} />
        );
      })}
    </div>
  );
}
