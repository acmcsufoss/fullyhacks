import { companyType } from "@/types/interface";
import React from "react";

const LittleAsteroids: React.FC = () => {
  console.log("Little asteroids rendering...");
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
  asteroid: {
    src: string;
    top: string;
    left: string;
    size: string;
    glow: boolean;
  };
}

const SponsorAsteroid: React.FC<SponsorAsteroidProps> = (props) => {
  const { asteroid } = props;

  const isGlowing = asteroid.glow || false;

  return (
    <div
      style={{
        position: "absolute",
        top: asteroid.top,
        left: asteroid.left,
        width: isGlowing ? asteroid.size : "auto",
        height: isGlowing ? asteroid.size : "auto",
        boxShadow: isGlowing
          ? "0 0 30px 15px rgba(255, 255, 0, 0.8)"
          : undefined,
        borderRadius: isGlowing ? "50%" : undefined
      }}>
      <img
        src={asteroid.src}
        alt="Asteroid"
        style={{
          width: isGlowing ? "100%" : "40%",
          height: "auto",
          objectFit: "cover",
          borderRadius: isGlowing ? "50%" : undefined
        }}
      />
    </div>
  );
};

const Sponsors: React.FC = () => {
  const asteroids = [
    { src: "/assets/smaller_ufo.svg", top: "15%", left: "0%" },
    { src: "/assets/sponsor_asteroid.svg", top: "30%", left: "30%" },
    { src: "/assets/sponsor_asteroid1.svg", top: "45%", left: "20%" },
    { src: "/assets/sponsor_asteroid.svg", top: "55%", left: "40%" },
    { src: "/assets/sponsor_asteroid1.svg", top: "40%", left: "5%" },
    { src: "/assets/sponsor_asteroid.svg", top: "65%", left: "25%" },
    {
      src: "/assets/sponsor_star.svg",
      top: "60%",
      left: "10%",
      size: "6vw",
      glow: true
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* UFO and Light Cone */}
      <div className="absolute top-20 left-[15%] hidden md:block">
        <div className="relative">
          <img
            src="/assets/combined_ufo.png"
            alt="UFO"
            className="w-[40vw] md:w-[30vw] lg:w-[25vw]"
          />
          <img
            src="/assets/cone.svg"
            alt="Light Cone"
            style={{ width: "400%", height: "auto" }}
            className="absolute top-[66%] left-[80%] -translate-x-1/2 transform animate-flicker opacity-70"
          />
        </div>
      </div>

      {/* Asteroids Section */}
      <div className="relative h-full w-full">
        <div className="hidden md:block">
          {asteroids.map((asteroid, index) => (
            <SponsorAsteroid key={index} asteroid={asteroid} />
          ))}
        </div>

        <LittleAsteroids />

        {/* Stacked Asteroids for Smaller Screens */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center gap-6">
            {asteroids.map((asteroid, index) => (
              <div key={index} className="w-[120px]">
                <img src={asteroid.src} alt="Asteroid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
