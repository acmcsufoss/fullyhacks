import { CompanyType } from "@/types/interface";

export const companies: CompanyType[] = [
  {
    id: "co1",
    name: "NordVPN",
    imageSrc: "/companies/nordvpn.svg",
    href: "https://nordvpn.com/hackathons",
    styles: {
      top: "top-[20rem] md:top-[28rem] lg:top-[25%]",
      left: "-left-[2rem] md:left-[5rem] lg:left-[15rem]",
      width: "w-[18rem] sm:w-[21rem] lg:w-[25rem]",
      animation: "animate-tilt animation-delay-2000"
    }
  },
  {
    id: "co2",
    name: "NordPass",
    imageSrc: "/companies/nordpass.svg",
    href: "https://nordpass.com/",
    styles: {
      top: "top-[30rem] md:top-[35rem] lg:top-[35%]",
      left: "left-[12rem] sm:left-[25rem] md:left-[30rem] lg:left-[45rem]",
      width: "w-[15rem] sm:w-[18rem] lg:w-[22rem]",
      animation: "animate-tilt animation-delay-500"
    }
  },
  {
    id: "co3",
    name: "Wolfram",
    imageSrc: "/companies/wolfram.svg",
    href: "https://company.wolfram.com/press-center/wolfram-corporate/",
    styles: {
      top: "top-[32rem] md:top-[40rem] lg:top-[45%]",
      left: "-left-[5rem] md:left-[2rem] lg:left-[25rem]",
      width: "w-[18rem] sm:w-[20rem] lg:w-[24rem]",
      animation: "animate-tilt animation-delay-1000"
    }
  },
  {
    id: "co4",
    name: "Incogni",
    imageSrc: "/companies/incogni.svg",
    href: "https://incogni.com/",
    styles: {
      top: "top-[42rem] lg:top-[58%] md:top-[48rem]",
      left: "left-[10rem] sm:left-[20rem] md:left-[25rem] lg:left-[50rem]",
      width: "w-[9rem] sm:w-[11rem] lg:w-[14rem]",
      animation: "animate-tilt"
    }
  },
  {
    id: "co5",
    name: "Saily",
    imageSrc: "/companies/saily.svg",
    href: "https://saily.com/",
    styles: {
      top: "top-[48rem] lg:top-[64%] md:top-[55rem]",
      left: "sm:left-[5rem] md:left-[10rem] lg:left-[20rem]",
      width: "w-[17rem] sm:w-[20rem] lg:w-[24rem]",
      animation: ""
    }
  }
];
