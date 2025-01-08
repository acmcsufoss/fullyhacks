import React from "react";

export default function About() {
  return (
    <section className="relative font-audiowide">
      <img
        src="/assets/moon.svg"
        alt="moon"
        className="block min-w-[768px] md:min-w-[1024px] lg:max-w-[1360px]"
      />

      {/* Text Content */}
      <div
        id="about"
        className="absolute left-1/2 top-[45%] z-10 max-w-[300px] -translate-x-1/2 -translate-y-1/2 text-black sm:top-[52%] sm:max-w-[768px] md:top-1/2">
        <h2 className="text-lg font-bold sm:text-xl md:text-xxl">About</h2>
        <p className="rounded-2xl bg-[#BAB9B9] p-2 pb-6 font-semibold sm:mt-2 sm:bg-[#7F7F7F] sm:leading-relaxed md:text-[1.25rem] lg:text-lg">
          We are Cal State University Fullerton&apos;s (CSUF) student-run
          hackathon. We plan to host 600 students for a 24-hour coding event in
          April 2025.
          <br />
          <br />
          Our goal is to bring together students interested in building
          impactful, innovative projects, with the bonus opportunity to network
          with industry professionals and win prizes!
        </p>
      </div>
    </section>
  );
}
