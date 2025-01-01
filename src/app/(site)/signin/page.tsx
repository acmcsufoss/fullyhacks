import PopUp from "@/components/pop-up";
import AuthButton from "./_components/auth-button";
import { GenericNavBar } from "@/components/nav-bar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <section className="text-md text-white">
      <GenericNavBar />
      <PopUp
        title="Before you continue"
        content="FullyHacks is only open to college students 18 years old or older 🐘"
        action="I understand"
      />
      <div className="relative mx-4 mt-10 flex flex-col items-center justify-center">
        <div className="mb-16 flex flex-col items-center rounded-lg border border-white bg-gradient-to-b from-[#FFA167D9] to-[#7D22CCD9] py-8 px-16">
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/plane_capybara.svg"
              alt="Sign In Icon"
              className="w-32 md:w-56"
            />
            <h2 className="mt-4 font-bruno text-lg [text-shadow:_0px_3px_3px_rgba(146,_240,_255,_0.75)] md:text-4xl">
              Welcome to FullyHacks!
            </h2>
            <p>Let&apos;s sign in and start your application</p>
          </div>
          <AuthButton />
          <p className="mt-2 text-center text-[1rem]">
            Note: We use Github to keep track of your submission
          </p>
        </div>
      </div>
    </section>
  );
}
