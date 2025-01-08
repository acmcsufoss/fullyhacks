export const FAQBackgroundEffects = () => {
  return (
    <>
      <img
        src="/assets/ring-galaxy.svg"
        alt="Ring Galaxy"
        className="absolute -left-[40%] -top-[100px] w-[800px] md:top-[111px] md:-left-[25%] lg:-left-[15%]"
      />
      <img
        src="/assets/ring-planet.svg"
        alt="Planet"
        className="absolute -right-[20%] top-[1000px] w-[400px] md:top-[1214px] md:-right-[25%] md:w-[600px] lg:-right-[15%] lg:w-[800px]"
      />
      <img
        src="/assets/constellation.svg"
        alt="Constellation"
        className="absolute top-[221px] right-0 w-[300px] rotate-180 -scale-x-100 overflow-visible blur-sm brightness-110 md:top-[442px] md:w-[500px]"
      />
      <img
        src="/assets/constellation.svg"
        alt="Constellation"
        className="absolute top-[720px] left-0 w-[300px] overflow-visible blur-sm brightness-110 md:top-[883px] md:w-[500px]"
      />
    </>
  );
};
