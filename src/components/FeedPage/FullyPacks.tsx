import { fullyPacksType } from '@/types/interface'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

const flaskDescription = (
  <>
    <p>
      Flask is a web framework that allows you to create web applications using
      the Python programming language.
    </p>
    <p>
      In simple terms, Flask provides you with tools and features that make it
      easier to build web applications.
    </p>
  </>
)

const webDev: fullyPacksType[] = [
  {
    id: 'web01',
    name: 'Flask + Vercel',
    github: 'https://github.com/acmcsufoss/fullypack_flask_vercel',
    description: flaskDescription
  }
]

const FullyPacks = () => {
  return (
    <section className="mt-14 mx-10 w-full text-purple_main">
      <p className="text-xl font-semibold">FullyPacks</p>
      <p className="font-light md:text-md">
        Beginner-friendly templates for participants
      </p>
      <div className="mt-10">
        <p className="text-lg font-semibold">Web Development</p>
        <div className="mt-4 gap-10 grid md:grid-cols-3 justify-start">
          {webDev.map((fullypack: fullyPacksType) => {
            return (
              <div key={fullypack.id} className="bg-sky-100 p-4 rounded-lg">
                <p className="text-lg font-semibold">{fullypack.name}</p>
                {fullypack.description}
                <button className="flex gap-2 items-center mt-4 font-semibold bg-[rgb(52,11,103)] text-white rounded-lg p-2">
                  <a target={'_blank'} href={fullypack.github}>
                    Github link
                  </a>
                  <BsGithub size={28} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FullyPacks
