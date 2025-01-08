import { CompanyType } from "@/types/interface";
import React from "react";

const LittleAsteroids: React.FC = () => {
  const littleAsteroids = [
    {
      src: "/assets/little_asteroid.svg",
      top: "350px",
      left: "280px",
      size: "1vw"
    },
    {
      src: "/assets/tiny_asteroid.svg",
      top: "490px",
      left: "440px",
      size: "1vw"
    },
    {
      src: "/assets/little_asteroid.svg",
      top: "600px",
      left: "570px",
      size: "1vw"
    },
    {
      src: "/assets/tiny_asteroid.svg",
      top: "580px",
      left: "0px",
      size: "2vw"
    },
    { src: "/assets/radial_star.svg", top: "700px", left: "30px", size: "4vw" },
    { src: "/assets/radial_star.svg", top: "700px", left: "200px", size: "4vw" }
  ];

  return (
    <div className="relative hidden md:block">
      {littleAsteroids.map((asteroid, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: asteroid.top,
            left: asteroid.left,
            width: asteroid.size,
            height: asteroid.size
          }}>
          <img
            src={asteroid.src}
            alt={`Little Asteroid ${index}`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover"
            }}
          />
        </div>
      ))}
    </div>
  );
};

interface SponsorAsteroidProps {
  asteroid: CompanyType;
}

interface SponsorsProps {
  sponsors: CompanyType[];
}

const SponsorAsteroid: React.FC<SponsorAsteroidProps> = (props) => {
  const { asteroid } = props;
  return (
    <a
      target="_blank"
      href={asteroid.href}
      className={`absolute z-20 block max-w-max ${asteroid.styles.left} ${asteroid.styles.top} ${asteroid.styles.width}`}>
      <img src={asteroid.imageSrc} alt="Asteroid" className="object-cover" />
    </a>
  );
};

const Sponsors: React.FC<SponsorsProps> = (props) => {
  const { sponsors } = props;
  return (
    <div className="min-h-[1100px] w-full overflow-hidden">
      <h2 className="custom-text-shadow text-center text-xxl md:text-[5rem] lg:text-right">
        Sponsors
      </h2>
      {/* UFO and Light Cone */}
      <div className="absolute top-[7rem] left-4 rotate-12 sm:-left-12 sm:rotate-0 md:left-0 md:top-[15rem] lg:top-8">
        <div className="relative">
          <img
            src="/assets/ufo.png"
            alt="UFO"
            className="w-[25rem] sm:w-[30rem] lg:w-[40rem]"
          />
          <img
            src="/assets/cone.svg"
            alt="Light Cone"
            style={{ width: "400%", height: "auto" }}
            className="animate-flicker absolute top-[65.5%] left-[80%] z-10 -translate-x-1/2 -rotate-2 transform opacity-70"
          />
        </div>
      </div>

      {/* Asteroids Section */}
      {sponsors.map((asteroid, index) => (
        <SponsorAsteroid key={index} asteroid={asteroid} />
      ))}

      <LittleAsteroids />
      <p className="custom-text-shadow absolute left-24 bottom-32 md:text-xl">
        More coming soon...
      </p>
    </div>
  );
};

export default Sponsors;
