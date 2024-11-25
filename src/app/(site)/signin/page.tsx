import PopUp from "@/components/pop-up";
import Flower from "@/components/flower";
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
    <section className="bg-[#0B062B] font-rubik text-md text-purple_main">
      <GenericNavBar />
      <Flower
        top="top-[20em] hidden md:block"
        left="left-48"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[6em] hidden md:block"
        left="left-12"
        width="w-36"
        height="h-36"
      />
      <Flower
        top="top-[6em] hidden md:block"
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
      <PopUp
        title="Before you continue"
        content="FullyHacks only open to college students 18 years old or older 🐘"
        action="I understand"
      />
      <div className="relative mx-4 mt-10 flex flex-col items-center justify-center">
        <div className="mb-16 flex flex-col items-center rounded-lg border-4 border-[#373DCB] bg-blue_rgba p-4">
          <div className="flex flex-col items-center text-center font-normal text-white">
            <img src="/assets/signin.svg" alt="Sign In" className="w-[320px]" />
            <p className="mt-14 text-[2rem] font-bold md:text-[3rem]">
              Welcome to FullyHacks!
            </p>
            <p>Let&apos;s sign in and start your application</p>
          </div>
          <AuthButton />
          <p className="mt-6 text-center text-[1rem]">
            Note: We use Github to keep track of your submission
          </p>
        </div>
      </div>
    </section>
  );
}
