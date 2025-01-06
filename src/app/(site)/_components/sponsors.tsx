import { companyType } from "@/types/interface";
import React from "react";

interface SponsorAsteroidProps {
  company: companyType;
}

const SponsorAsteroid: React.FC<SponsorAsteroidProps> = (props) => {
  const { company } = props;

  return (
    <div className="relative">
      <img src="/assets/sponsor_asteroid.svg" alt="Sponsor Asteroid" />
    </div>
  );
};

interface SponsorProps {
  companies: companyType[];
}

const Sponsors: React.FC<SponsorProps> = (props) => {
  const { companies } = props;

  // Predefined positions for larger screens
  const zones = [
    { top: "20%", left: "40%" },
    { top: "35%", left: "20%" },
    { top: "50%", left: "50%" },
    { top: "60%", left: "10%" },
    { top: "70%", left: "30%" },
    { top: "25%", left: "70%" },
  ];

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* UFO and Light Cone (Visible Only on Larger Screens) */}
      <div className="hidden md:block absolute top-0 left-0">
        <div className="relative">
          {/* UFO */}
          <img
            src="/assets/combined_ufo.png"
            alt="UFO"
            className="w-[40vw] md:w-[30vw] lg:w-[25vw]"
          />
          {/* Cone */}
          <img
            src="/assets/cone.svg"
            alt="Light Cone"
            className="absolute top-[66%] left-[80%] transform -translate-x-1/2 w-[50vw] md:w-[40vw] lg:w-[35vw] opacity-70 animate-flicker"
          />
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="relative h-full w-full">
        {/* Larger Screens: Random Asteroid Placement */}
        <div className="hidden md:block">
          {companies.map((company: companyType, index) => {
            const position = zones[index % zones.length]; // Cycle through zones

            return (
              <div
                key={company.id}
                style={{
                  position: "absolute",
                  top: position.top,
                  left: position.left,
                }}
                className="w-[15vw] md:w-[12vw] lg:w-[10vw]"
              >
                <SponsorAsteroid company={company} />
              </div>
            );
          })}
        </div>

        {/* Smaller Screens: Stacked Asteroids */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center gap-6">
            {companies.map((company: companyType) => (
              <div key={company.id} className="w-[120px]">
                <SponsorAsteroid company={company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
