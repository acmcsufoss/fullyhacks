import { feedUsers } from "@/types/interface";
import { prisma } from "db";
import FeedUsers from "../_components/feed-users";
import { notFound } from "next/navigation";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";

export const dynamic = "force-dynamic";

const PAGE_SIZE = 10;

async function getFeedUsers(
  pageNumber: number
): Promise<{ feedUsers: feedUsers[]; totalFeedUsers: number }> {
  const skip = (pageNumber - 1) * PAGE_SIZE;

  const totalFeedUsers = await prisma.user.count({
    where: {
      application: {
        approved: true
      }
    }
  });

  console.log(skip, totalFeedUsers);

  // If out of range, return an empty array
  if (skip >= totalFeedUsers) {
    return { feedUsers: [], totalFeedUsers };
  }

  const feedUsers = await prisma.user.findMany({
    where: {
      bio: { not: null },
      application: {
        approved: true
      }
    },
    skip: skip,
    take: PAGE_SIZE,
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
  return { feedUsers: JSON.parse(JSON.stringify(feedUsers)), totalFeedUsers };
}

export default async function FeedHome({
  params
}: {
  params: Promise<{ page: string }>;
}) {
  const page = Number((await params).page);
  if (isNaN(page) || page < 1) {
    notFound();
  }

  const { feedUsers, totalFeedUsers } = await getFeedUsers(page);
  if (feedUsers.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1 className="feed-title">Homepage</h1>
      <p className="custom-text-shadow mt-2 text-md text-white md:text-lg">
        Meet fellow participants.
      </p>
      <FeedUsers feedUsers={feedUsers} />

      <div className="flex flex-col items-center gap-2">
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={`/feed/home/${page - 1}`}
            className={`h-12 w-12 rounded-full p-3 ${page === 1 ? "pointer-events-none brightness-75" : ""}`}>
            <MdOutlineKeyboardArrowLeft size={28} color="#7AD4E7" />
          </a>
          <span className="h-12 w-12 rounded-full bg-[#7AD4E7] p-3 text-center">
            {page}
          </span>
          <a
            href={`/feed/home/${page - 1}`}
            className={`h-12 w-12 rounded-full p-3 ${page === Math.floor(totalFeedUsers / PAGE_SIZE) + 1 ? "pointer-events-none brightness-75" : ""}`}>
            <MdOutlineKeyboardArrowRight size={28} color="#7AD4E7" />
          </a>
        </div>
        <p className="font-rubrik text-gray-400">
          {(page - 1) * PAGE_SIZE + 1} -{" "}
          {(page - 1) * PAGE_SIZE + feedUsers.length} of {totalFeedUsers}{" "}
          participants
        </p>
      </div>
    </div>
  );
}
