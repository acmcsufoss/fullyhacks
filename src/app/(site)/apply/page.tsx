import Link from "next/link";
import { AuthNavBar } from "@/components/nav-bar";
import ApplyAuth from "./_components/apply-auth";
import ApplicationForm from "./_components/application-form";
import { Session } from "next-auth";
import { prisma } from "db";
import { getAuthSession } from "@/lib/auth";

async function getApplicationData(session: Session) {
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email as any },
    select: {
      application: true
    }
  });

  return {
    user: JSON.parse(JSON.stringify(session.user)),
    application: JSON.parse(JSON.stringify(user?.application))
  };
}

export default async function ApplyPage() {
  const session = await getAuthSession();
  const { user, application } = await getApplicationData(session);

  return (
    <section className="text-white">
      <div className="portal-background-container"></div>
      <AuthNavBar />
      {application?.applied ? (
        <div className="mt-10 flex flex-col items-center justify-center p-4 text-center">
          <p className="custom-text-shadow z-10 text-lg font-semibold md:text-xl">
            You&apos;ve already submitted an application
          </p>
          <Link href="/portal" className="gradient-btn mt-10">
            Go to User Portal
          </Link>
        </div>
      ) : (
        <ApplyAuth>
          <div className="z-10 flex w-full items-center justify-center">
            <div className="relative z-10 mt-10 mb-32 flex w-[min(50rem,_90vw)] flex-col items-center rounded-xl bg-[#060606] bg-opacity-50 p-8">
              <img
                src="/assets/fullyhacks_logo.png"
                alt="FullyHacks Logo"
                className="absolute left-4 top-4 w-6 md:w-12"
              />
              <p className="text-lg font-semibold text-white md:text-[3rem]">
                MY APPLICATION
              </p>
              <p className="font-light text-white md:text-[1.5rem]">
                Draft will be saved
              </p>
              <ApplicationForm url={user?.image} />
            </div>
          </div>
        </ApplyAuth>
      )}
    </section>
  );
}
