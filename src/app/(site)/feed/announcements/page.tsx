import { announcementsType } from "@/types/interface";
import TimeAgo from "react-timeago";
import { prisma } from "db";

async function getAnnouncements() {
  const announcements = await prisma.announcement.findMany({
    orderBy: {
      submittedAt: "desc"
    }
  });
  return JSON.parse(JSON.stringify(announcements));
}

function Announcement({ announcement }: { announcement: announcementsType }) {
  return (
    <div className="my-10 rounded-lg bg-sky-100 p-4">
      <p className="text-lg font-semibold">{announcement.title}</p>
      <p>{announcement.content}</p>
      <TimeAgo date={announcement.submittedAt} className="mt-4 font-semibold" />
    </div>
  );
}

export default async function AnnouncementsPage() {
  const announcements: announcementsType[] = await getAnnouncements();
  return (
    <section className="mt-14 mr-8 w-full text-white">
      <p className="feed-title">Announcements</p>
      <p className="md:text-md">
        Official announcements from the Fullyhacks team
      </p>
      {announcements.map((announcement: announcementsType) => {
        return (
          <Announcement key={announcement.id} announcement={announcement} />
        );
      })}
    </section>
  );
}
