import React from "react";

export default function About() {
  return (
    <section className="relative z-0 font-audiowide">
      {/* Moon Image */}
      <img src="assets/about.png" alt="moon" />

      {/* Text Content */}
      <div
        id="about"
        className="absolute left-1/2 top-[53%] z-10 h-[50%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform text-black sm:top-[62%] sm:w-[75%]">
        <h2 className="text-lg font-bold sm:text-xl md:text-xxl">About</h2>

        <p className="rounded-2xl bg-[#7F7F7F] p-2 pb-6 text-xs font-semibold sm:mt-2 sm:text-[1rem] sm:leading-relaxed md:text-lg">
          We are Cal State University Fullerton&apos;s (CSUF) student-run
          hackathon.
          <br />
          We plan to host 600 students for a 24-hour coding event in April 2025.
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
