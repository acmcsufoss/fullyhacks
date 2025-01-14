import { prisma } from "db";
import FeedUsers from "./_components/feed-users";
import { feedUsers } from "@/types/interface";

async function getFeedUsers() {
  const users = await prisma.user.findMany({
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

  const feedUsers = users.filter(
    (user) => user.bio != null && user.application?.approved == true
  );

  return JSON.parse(JSON.stringify(feedUsers));
}

export default async function FeedHome() {
  const feedUsers: feedUsers[] = await getFeedUsers();

  return (
    <section className="mr-[2rem] mt-14 flex w-full grow flex-col items-start overflow-x-hidden md:mx-10">
      <h1 className="feed-title">Homepage</h1>
      <FeedUsers feedUsers={feedUsers} />
    </section>
  );
}
