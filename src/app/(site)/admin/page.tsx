import React from "react";
import { AuthNavBar } from "@/components/nav-bar";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { prisma } from "db";
import { getAuthSession } from "@/lib/auth";
import AdminView from "./_components/admin-view";

async function getAdminData(session: Session) {
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as any }
  });

  // Only admin are allowed to access this page
  if (!user?.isAdmin) {
    redirect("/");
  }

  const applications = await prisma.application.findMany();
  return {
    applications: JSON.parse(JSON.stringify(applications)),
    user: JSON.parse(JSON.stringify(session.user))
  };
}

export default async function AdminPage() {
  const session = await getAuthSession();
  const { user, applications } = await getAdminData(session);

  return (
    <section className="text-white">
      <AuthNavBar />
      <div className="mt-10 flex flex-col items-center">
        <p className="text-xl font-semibold">Welcome {user.name}</p>
        <div className="w-full max-w-[80%] px-2 py-16 sm:px-0">
          <AdminView applications={applications} />
        </div>
      </div>
    </section>
  );
}
