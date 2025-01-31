import { FeedNavBar, FeedSideBar } from "@/components/nav-bar";
import { FeedPopUp } from "@/components/pop-up";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "db";
import { redirect } from "next/navigation";
import React from "react";

export const dynamic = "force-dynamic";

async function getUser() {
  const session = await getAuthSession();
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as any },
    include: {
      application: true
    }
  });
  if (user?.application?.status !== "approved") {
    redirect("/apply");
  }
  return user;
}

export default async function FeedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // const user = await getUser();

  return (
    <main className="flex flex-col gap-8">
      <div className="feed-background-container"></div>
      <FeedNavBar />
      {/* {user.bio == null && <FeedPopUp />} */}
      <div className="relative mb-8 flex w-full gap-12 px-4 md:px-8">
        <FeedSideBar />
        <section className="flex-1">{children}</section>
      </div>
    </main>
  );
}
