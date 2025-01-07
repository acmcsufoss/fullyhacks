import { NavBarLanding } from "@/components/nav-bar";

const Hero: React.FC = () => {
  return (
    <>
      <NavBarLanding />
      <img
        src="/assets/stars-sm.svg"
        alt="stars"
        className="absolute left-1/2 -top-12 w-full -translate-x-1/2 animate-pulse"
      />
      <img
        src="/assets/stars-lg.svg"
        alt="stars"
        className="absolute left-1/2 -top-12 w-full -translate-x-1/2 animate-pulse"
      />
      <section className="z-[2] mt-8 text-center text-purple_main">
        <h1 className="relative text-xxl font-medium text-white md:text-[6rem]">
          FullyHacks 2025
        </h1>
        <p className="text-[1rem] font-normal text-[#72D6E6] md:text-lg">
          CS BUILDING: <time dateTime="2023-02-17">APR 12</time> -{" "}
          <time dateTime="2023-02-18">APR 13</time>
        </p>
      </section>
    </>
  );
};

export default Hero;
