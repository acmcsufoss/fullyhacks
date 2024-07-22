import React from "react";
import Flower from "@/components/flower";
import UserPortal from "./_components/user-portal";
import { AuthNavBar } from "@/components/nav-bar";
import { redirect } from "next/navigation";
import { Session } from "next-auth";
import { prisma } from "db";
import { getAuthSession } from "@/lib/auth";

async function getUser(session: Session) {
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as any },
    include: {
      application: true
    }
  });

  if (!user?.application?.applied) {
    redirect("/apply");
  }
  return {
    user: JSON.parse(JSON.stringify(user))
  };
}

export default async function PortalPage() {
  const session = await getAuthSession();
  const { user } = await getUser(session);

  return (
    <div className="bg-[#0B062B] pb-12">
      <AuthNavBar />
      <Flower
        top="top-[24em] hidden md:block"
        left="left-48"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[12em] hidden md:block"
        left="left-12"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[12em] hidden md:block"
        left="right-[4em]"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[22em] hidden md:block"
        left="right-[10em]"
        width="w-36"
        height="h-36"
      />
      <UserPortal user={user} />
    </div>
  );
}
