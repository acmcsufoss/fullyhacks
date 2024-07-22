import { companyType } from "@/types/interface";
import React from "react";

interface SponsorBalloonProps {
  company: companyType;
}

const SponsorBalloon: React.FC<SponsorBalloonProps> = (props) => {
  const { company } = props;

  return (
    <div className="relative w-52 animate-float motion-reduce:animate-none md:w-72">
      <img src="/sponsor_balloon.svg" alt="Sponsor Balloon" />
      <a
        className="text-center"
        target="_blank"
        href={company.href}
        title={company.name}>
        <img
          className="absolute top-0 bottom-14 left-0 right-0 z-20 m-auto w-24 md:bottom-20 md:w-32"
          src={company.image}
          alt={company.name}
        />
      </a>
    </div>
  );
};

interface SponsorProps {
  companies: companyType[];
}

const Sponsors: React.FC<SponsorProps> = (props) => {
  const { companies } = props;
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-10 text-center font-ohm text-xxl font-medium text-[#D7EEFF] [text-shadow:_0_0_10px_#719BCC] md:text-[5rem]">
        Sponsors
      </h2>
      <section className="my-10 grid grid-cols-2 items-center justify-center gap-4 md:gap-x-12 lg:grid-cols-3">
        {companies.map((company: companyType) => {
          return <SponsorBalloon key={company.id} company={company} />;
        })}
      </section>
    </div>
  );
};

export default Sponsors;
