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
  asteroid: {
    src: string;
    href: string;
    styles: {
      top: string;
      left: string;
      width: string;
    };
  };
}

const SponsorAsteroid: React.FC<SponsorAsteroidProps> = (props) => {
  const { asteroid } = props;
  return (
    <a
      target="_blank"
      href={asteroid.href}
      className={`absolute z-20 block max-w-max ${asteroid.styles.left} ${asteroid.styles.top} ${asteroid.styles.width}`}>
      <img src={asteroid.src} alt="Asteroid" className="object-cover" />
    </a>
  );
};

const Sponsors: React.FC = () => {
  const sponsors = [
    {
      src: "/companies/nordvpn.svg",
      href: "https://nordvpn.com/hackathons",
      styles: {
        top: "top-[20rem] md:top-[28rem] lg:top-[25%]",
        left: "-left-[2rem] md:left-[5rem] lg:left-[15rem]",
        width: "w-[18rem] sm:w-[21rem] lg:w-[25rem]"
      }
    },
    {
      src: "/companies/nordpass.svg",
      href: "https://nordpass.com/",
      styles: {
        top: "top-[30rem] md:top-[35rem] lg:top-[35%]",
        left: "left-[12rem] sm:left-[25rem] md:left-[30rem] lg:left-[45rem]",
        width: "w-[15rem] sm:w-[18rem] lg:w-[22rem]"
      }
    },
    {
      src: "/companies/wolfram.svg",
      href: "https://company.wolfram.com/press-center/wolfram-corporate/",
      styles: {
        top: "top-[32rem] md:top-[40rem] lg:top-[45%]",
        left: "-left-[5rem] md:left-[2rem] lg:left-[25rem]",
        width: "w-[18rem] sm:w-[20rem] lg:w-[24rem]"
      }
    },
    {
      src: "/companies/incogni.svg",
      href: "https://incogni.com/",
      styles: {
        top: "top-[42rem] lg:top-[58%] md:top-[48rem]",
        left: "left-[10rem] sm:left-[20rem] md:left-[25rem] lg:left-[50rem]",
        width: "w-[9rem] sm:w-[11rem] lg:w-[14rem]"
      }
    },
    {
      src: "/companies/saily.svg",
      href: "https://saily.com/",
      styles: {
        top: "top-[48rem] lg:top-[64%] md:top-[55rem]",
        left: "sm:left-[5rem] md:left-[10rem] lg:left-[20rem]",
        width: "w-[17rem] sm:w-[20rem] lg:w-[24rem]"
      }
    }
  ];

  return (
    <div className="min-h-[1100px] w-full overflow-hidden">
      <h2 className="text-center text-xxl [text-shadow:_0_0_10px_#719BCC] md:text-[5rem] lg:text-right">
        Sponsors
      </h2>
      {/* UFO and Light Cone */}
      <div className="absolute top-[7rem] left-4 rotate-12 sm:-left-12 sm:rotate-0 md:left-0 md:top-[15rem] lg:top-8">
        <div className="relative">
          <img
            src="/assets/combined_ufo.png"
            alt="UFO"
            className="w-[25rem] sm:w-[30rem] lg:w-[40rem]"
          />
          <img
            src="/assets/cone.svg"
            alt="Light Cone"
            style={{ width: "400%", height: "auto" }}
            className="absolute top-[65.5%] left-[80%] z-10 -translate-x-1/2 -rotate-2 transform animate-flicker opacity-70"
          />
        </div>
      </div>

      {/* Asteroids Section */}
      {sponsors.map((asteroid, index) => (
        <SponsorAsteroid key={index} asteroid={asteroid} />
      ))}

      <LittleAsteroids />
    </div>
  );
};

export default Sponsors;
