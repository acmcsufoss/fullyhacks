import { getAuthSession } from "@/lib/auth";
import { ApplicationStatus } from "@/types/interface";
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
  if (user?.application?.status !== ApplicationStatus.APPROVED) {
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
          <p className="feed-title mt-20">ADMIN ONLY</p>
          <p className="custom-text-shadow mb-10 font-audiowide text-[16px] font-bold leading-snug text-white sm:text-[18px] lg:text-[24px]">
            Announcement Form
          </p>
          <AnnouncementForm />
        </>
      )}
    </div>
  );
}
