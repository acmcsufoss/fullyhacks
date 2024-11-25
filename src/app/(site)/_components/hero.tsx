import { NavBarLanding } from "@/components/nav-bar";

const Hero: React.FC = () => {
  return (
    <>
      <NavBarLanding />
      <section className="z-[2] mt-20 text-center text-purple_main">
        <h1 className="relative font-ohm text-xxl font-medium text-[#D7EEFF] [text-shadow:_0_0_10px_#719BCC] md:text-[6rem]">
          FullyHacks{" "}
          <span className="text-turquoise_300 [text-shadow:_0_0_10px_#0BF4CA]">
            2024
          </span>
          <img
            src="/assets/cat3.svg"
            className="absolute top-[-18%] left-1/2 w-[72px] md:top-[-20%] md:w-[100px]"
            alt="neon cat"
          />
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
