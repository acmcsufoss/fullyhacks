import React from 'react'

const About: React.FC = () => {
  return (
    <section className="relative flex flex-col w-[min(40rem,_80%)] bg-[#1E0072] bg-opacity-20 border-4 border-pink_200 rounded-2xl">
      <img
        src="/cat2.svg"
        className="absolute top-5 left-8 md:left-20 z-10 object-cover w-48 md:w-64 md:-rotate-6"
        alt="Fully logo"
      />
      <div id="about" className="relative p-4 md:p-12 text-[#EFE2FF]">
        <h2 className="mt-20 text-xl font-semibold text-[#8423FF] md:text-5xl">
          About
        </h2>
        <p className="md:mt-4">
          <span className="font-semibold text-[#00ABF5]">
            24-hour hackathon{' '}
          </span>
          for beginners and first-time hackers. This year, our hackathon will be
          held on
          <span className="font-semibold text-[#385DDF]">
            {' '}
            February 24th to 25th
          </span>
          .
        </p>
        <p className="mt-4 md:mt-8">
          You can even
          <span className="font-semibold text-[#4F38DF]">
            {' '}
            meet representatives{' '}
          </span>
          from our generous sponsors during our networking event. Your project
          also has the chance to
          <span className="font-semibold text-pink_700">
            {' '}
            win cool prizes! 🎉
          </span>
        </p>
      </div>
    </section>
  )
}

export default About
