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
    <section className="relative text-md text-white">
      <div className="portal-background-container"></div>
      <img
        src="/assets/portal-stars-1.svg"
        alt="Portal Stars 1"
        className="fixed top-[35%] left-1/2 w-full -translate-x-1/2 -translate-y-1/2 animate-pulse overflow-hidden sm:w-[80%] md:top-[46%] lg:top-[60%]"
      />
      <img
        src="/assets/portal-stars-2.svg"
        alt="Portal Stars 2"
        className="animation-delay-500 fixed left-1/2 top-[40%] w-full -translate-x-1/2 -translate-y-1/2 animate-pulse overflow-hidden blur-[2px] sm:w-[80%] md:top-1/2 lg:top-[65%]"
      />
      <img
        src="/assets/radial-sphere.svg"
        alt="Radial Sphere"
        className="fixed bottom-12 left-12 h-16 w-16 blur-[1px] md:h-28 md:w-28"
      />
      <img
        src="/assets/portal-shooting-star.svg"
        alt="Shooting Star"
        className="fixed right-12 top-1/4 w-[200px]"
      />

      <GenericNavBar />
      <PopUp
        title="Before you continue"
        content="FullyHacks only open to college students 18 years old or older 🐘"
        action="I understand"
      />
      <div className="md relative mx-8 mt-6 flex flex-col items-center justify-center">
        <div className="mb-16 flex flex-col items-center rounded-lg bg-gradient-to-b from-[#72D6E6] to-[#173162] px-4 pt-8 pb-12 shadow-md md:px-16">
          <div className="flex flex-col items-center text-center">
            <img
              src="/assets/plane_capybara.svg"
              alt="Sign In Icon"
              className="w-20 md:w-36"
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
