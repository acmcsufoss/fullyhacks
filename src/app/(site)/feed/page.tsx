import Feed from "./_components/feed";
import { FeedNavBar } from "@/components/nav-bar";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "db";
import { getAuthSession } from "@/lib/auth";

async function getFeedData(session: Session) {
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as any },
    include: {
      application: true
    }
  });
  if (user?.application?.status !== "approved") {
    redirect("/apply");
  }
  const feedUsers = await prisma.user.findMany({
    select: {
      id: true,
      isAdmin: true,
      application: {
        select: {
          name: true,
          major: true,
          school: true,
          approved: true,
          github: true,
          class: true
        }
      },
      name: true,
      bio: true,
      discordId: true
    }
  });
  const announcements = await prisma.announcement.findMany({
    orderBy: {
      submittedAt: "desc"
    }
  });
  return {
    user: JSON.parse(JSON.stringify(user)),
    feedUsers: JSON.parse(JSON.stringify(feedUsers)),
    announcements: JSON.parse(JSON.stringify(announcements))
  };
}

export default async function FeedPage() {
  // const session = await getAuthSession();
  // const { user, feedUsers, announcements } = await getFeedData(session);

  const testUser = {
    id: "1",
    name: "Tomas",
    email: "some@example.com",
    school: "CSUF",
    image: "",
    isAdmin: true
  };

  return <Feed currentUser={testUser} feedUsers={[]} announcements={[]} />;
}
