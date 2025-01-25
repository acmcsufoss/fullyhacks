import { getAuthSession } from "@/lib/auth";
import { User } from "@/types/interface";
import { prisma } from "db";
import { redirect } from "next/navigation";
import UserForm from "./_components/user-form";
import AnnouncementForm from "./_components/announcement-form";

async function getUser() {
  const session = await getAuthSession();
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as any },
    include: {
      application: true
    }
  });
  if (!user) {
    redirect("/portal");
  }
  if (user?.application?.status !== "approved") {
    redirect("/apply");
  }
  return user;
}

export default async function Profile() {
  const user = await getUser();

  return (
    <div>
      <h1 className="feed-title">{user.name}&apos;s Profile</h1>
      <UserForm />
      {user.isAdmin && (
        <>
          <p className="feed-title mb-10">ADMIN ONLY: Announcement Form</p>
          <AnnouncementForm />
        </>
      )}
    </div>
  );
}
