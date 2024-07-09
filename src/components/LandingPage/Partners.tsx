import React from "react";

const Partners: React.FC = () => {
  return (
    <>
      <a
        className="block z-[2] relative w-[58%] md:w-[40%] mt-24"
        href="https://acmcsuf.com/">
        <img src="/acm_blue_logo.svg" alt="ACM Logo" />
      </a>
      <div className="mb-auto flex flex-col md:w-[80vw] lg:w-[80vw] md:mt-14">
        <p className="text-xxl text-center font-medium md:text-[5rem] text-[#0BB6FF] [text-shadow:_-3px_0_4px_#FF0BF5] font-ohm">
          Our Mission
        </p>
        <p className="mt-4 text-center text-white">
          ACM is the largest computer science community at{" "}
          <span className="font-semibold"> CSUF </span>. We aim to build a
          foundation for future industry leaders by developing their technical,
          professional, and social skills. We facilitate these by offering
          various events, programs, and initiatives that have been proven to
          help students start up their careers on the right foot.
        </p>
      </div>
    </>
  );
};

export default Partners;
