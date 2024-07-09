"use client";

import React from "react";
import Flower from "@/components/Flower/Flower";
import UserPortal from "@/components/PortalPage/UserPortal";
import { AuthNavBar } from "@/components/NavBar/NavBar";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "db";

export default async function PortalPage() {
  // Check if the user signed in
  const session = await getServerSession(authOptions);
  console.log("Session: " + session);

  if (!session) {
    redirect("/signin");
  }
  const User = await prisma.user.findUnique({
    where: { email: session?.user?.email as any },
    include: {
      application: true
    }
  });
  if (!User?.application?.applied) {
    redirect("/apply");
  }
  const user = JSON.parse(JSON.stringify(User));

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
