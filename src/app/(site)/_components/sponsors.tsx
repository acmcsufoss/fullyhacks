import { companyType } from "@/types/interface";
import React from "react";

interface SponsorAsteroidProps {
  asteroid: { src: string; top: string; left: string; size: string, glow: boolean};
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
        borderRadius: isGlowing ? "50%" : undefined, 
      }}
    >
      <img
        src={asteroid.src}
        alt="Asteroid"
        style={{
          width: isGlowing ? "100%" : "40%",
          height: "auto",
          objectFit: "cover",
          borderRadius: isGlowing ? "50%" : undefined, 
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
    { src: "/assets/sponsor_star.svg", top: "60%", left: "10%", size: "6vw", glow: true},
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* UFO and Light Cone */}
      <div className="hidden md:block absolute top-20 left-[15%]">
        <div className="relative">
          <img
            src="/assets/combined_ufo.png"
            alt="UFO"
            className="w-[40vw] md:w-[30vw] lg:w-[25vw]"
          />
          <img
            src="/assets/cone.svg"
            alt="Light Cone"
            style={{ width: "400%", height: "auto"}}
            className="absolute top-[66%] left-[80%] transform -translate-x-1/2 opacity-70 animate-flicker"
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
