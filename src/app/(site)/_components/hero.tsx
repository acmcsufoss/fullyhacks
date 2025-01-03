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
      <section className="z-[2] mt-20 text-center text-purple_main">
        <h1 className="relative text-xxl font-medium text-[#e5f4ff] [text-shadow:_0_0_10px_#719BCC] md:text-[6rem]">
          FullyHacks 2025
        </h1>
        <p className="text-[1rem] font-normal md:text-lg">
          CS BUILDING: <time dateTime="2023-02-17">FEB 24</time> -{" "}
          <time dateTime="2023-02-18">FEB 25</time>
        </p>
      </section>
    </>
  );
};

export default Hero;
