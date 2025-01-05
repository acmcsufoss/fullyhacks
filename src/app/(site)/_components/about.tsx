import React from "react";

export default function About() {
  return (
    <section className="relative z-0 font-audiowide">
      {/* about image */}
      <img src="assets/about.png" alt="moon" />

      {/* text */}
      <div
        id="about"
        className="absolute left-1/2 top-[55%] z-10 w-[75%] -translate-x-1/2 -translate-y-1/2 transform p-4 text-black md:p-12">
        {/* about heading */}
        <h2 className="text-9xl font-semibold md:text-5xl">About</h2>
        {/* about body */}
        <p className="rounded-2xl bg-[#7F7F7F] p-2 pb-6 text-2xl font-semibold md:mt-4">
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
2;
