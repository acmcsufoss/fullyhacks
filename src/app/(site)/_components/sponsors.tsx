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

  const zones = [
    { top: "30%", left: "40%" },
    { top: "45%", left: "20%" },
    { top: "55%", left: "50%" },
    { top: "60%", left: "10%" },
    { top: "70%", left: "30%" },
  ];

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <div className="hidden md:block absolute top-0 left-0">
        <div className="relative">
          <img
            src="/assets/combined_ufo.png"
            alt="UFO"
            className="w-[40vw] md:w-[30vw] lg:w-[25vw]"
          />
          <img
            src="/assets/cone.svg"
            alt="Light Cone"
            style={{
              width: "200vw",
              height: "auto"
            }}
            className="absolute top-[66%] left-[80%] transform -translate-x-1/2 w-[150vw] opacity-70 animate-flicker"
          />
        </div>
      </div>
      <div className="absolute top-[40%] left-[12%] transform -translate-x-1/2 -translate-y-1/2">
      <img 
            src="/assets/smaller_ufo.svg"
            alt="ufo"
            className="w-[30vw] md:w-[25vw] lg:w-[22vw]"
            />
        </div>

      <div className="relative h-full w-full">
        <div className="hidden md:block">
          {companies.map((company: companyType, index) => {
            const position = zones[index % zones.length]; 

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
