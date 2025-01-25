import { NavBarLanding } from "@/components/nav-bar";

const Hero: React.FC = () => {
  return (
    <>
      <NavBarLanding />
      <img
        src="/assets/stars-sm.svg"
        alt="stars"
        className="absolute left-1/2 w-full -translate-x-1/2 animate-pulse opacity-80 sm:-top-12"
      />
      <img
        src="/assets/stars-lg.svg"
        alt="stars"
        className="absolute left-1/2 w-full -translate-x-1/2 animate-pulse opacity-75 delay-300 sm:-top-12"
      />
      <section className="z-[2] mt-8 text-center">
        <h1 className="custom-text-shadow relative text-xxl font-medium text-white md:text-[6rem]">
          FullyHacks 2025
        </h1>
        <p className="text-[1rem] font-normal text-[#72D6E6] md:text-lg">
          CS BUILDING: SPRING 2025
        </p>
      </section>
    </>
  );
};

export default Hero;
