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
    <section>
      <AuthNavBar />
      {application?.applied ? (
        <>
          <div className="mt-10 flex flex-col items-center justify-center text-center text-purple_main">
            <p className="text-lg font-semibold md:text-xl">
              You&apos;ve already submitted an application
            </p>
            <Link href="/portal" className="purple-btn mt-10">
              Go to User Portal
            </Link>
          </div>
        </>
      ) : (
        <ApplyAuth>
          <div className="flex items-center justify-center">
            <div className="z-10 mt-10 mb-32 flex w-[min(50rem,_90vw)] flex-col items-center rounded-lg border-8 border-blue_border_rgba bg-blue_rgba p-8 text-[#FF35EB] [box-shadow:_0_0_32px_#618AA8]">
              <p className="text-lg font-semibold text-[#FF35EB] md:text-[3rem]">
                MY APPLICATION
              </p>
              <p className="font-light text-white md:text-[1.5rem]">
                Draft will be saved
              </p>
              <p className="mt-4 text-[1.25rem] font-semibold text-white">
                *Application due by Saturday, February 10th*
              </p>
              <ApplicationForm url={user?.image} />
            </div>
          </div>
        </ApplyAuth>
      )}
    </section>
  );
}
