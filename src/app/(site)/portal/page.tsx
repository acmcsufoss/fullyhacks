import React from "react";
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
    <section className="text-md text-white">
      <div className="portal-background-container"></div>
      <AuthNavBar />
      <UserPortal user={user} />
    </section>
  );
}
