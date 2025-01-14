import { FeedNavBar, FeedSideBar } from "@/components/nav-bar";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "db";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function getUser() {
  const session = await getAuthSession();
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as any },
    include: {
      application: true
    }
  });
  if (user?.application?.approved) {
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
    <div className="feed-background-container">
      <FeedNavBar />
      <div className="relative mx-4 mb-8 flex w-full">
        <FeedSideBar />
        {children}
      </div>
    </div>
  );
}
