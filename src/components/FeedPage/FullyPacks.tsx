import { fullyPacksType } from '@/types/interface'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

const flaskDescription = (
  <>
    <p>
      <span className="font-semibold">Flask</span> is a web framework that
      allows you to create web applications using the Python programming
      language.
    </p>
    <p>
      In simple terms, Flask provides you with tools and features that make it
      easier to build web applications.
    </p>
  </>
)

const reactNativeDescription = (
  <>
    <p>
      <span className="font-semibold">React Native</span> is a popular mobile
      framework that uses JavaScript and React to create apps for both iOS and
      Android with device-specific functionality.
    </p>
    <p>
      <span className="font-semibold">Expo</span> simplifies mobile app
      development on React Native by providing pre-built components, APIs, and
      tools for faster development, building, and deployment.
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

const mobileDev: fullyPacksType[] = [
  {
    id: 'mobile01',
    name: 'React Native (Expo)',
    github: 'https://github.com/acmcsufoss/fullypack_react_native',
    description: reactNativeDescription
  }
]

interface FullyPackProps {
  fullypack: fullyPacksType
}
const FullyPack: React.FC<FullyPackProps> = ({ fullypack }) => {
  return (
    <div className="bg-sky-100 p-4 rounded-lg">
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
}

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
            return <FullyPack key={fullypack.id} fullypack={fullypack} />
          })}
        </div>
      </div>
      <div className="my-10">
        <p className="text-lg font-semibold">Mobile Development</p>
        <div className="mt-4 gap-10 grid md:grid-cols-3 justify-start">
          {mobileDev.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FullyPacks