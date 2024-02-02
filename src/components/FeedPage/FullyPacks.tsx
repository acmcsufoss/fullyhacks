import { fullyPacksType } from '@/types/interface'
import React from 'react'
import { BsGithub, BsLink } from 'react-icons/bs'
const flaskDescription = (
  <>
    <p>
      <span className="font-semibold">Flask</span> is a web framework that
      allows you to create web applications using the Python programming
      language.
    </p>
    <p className="mt-4">
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
  },
  {
    id: 'web02',
    name: 'HTML + CSS',
    github: 'https://github.com/acmcsufoss/fullypack_html_css',
    description:
      'Most beginner-friendly website using HTML and CSS for everyone to create their first website, no coding experience required'
  },
  {
    id: 'web03',
    name: 'Sveltekit',
    github: 'https://github.com/acmcsufoss/fullypack_sveltekit',
    description:
      'This is a project template to help you create your first web application with Sveltekit. It comes with a simple routing setup and a couple of helper components, including one that should keep most of your content mobile friendly and a premade mobile friendly navbar.'
  }
]

const backendDev: fullyPacksType[] = [
  {
    id: 'backend01',
    name: 'Free Database Providers',
    link: 'https://fullyhacks.notion.site/Free-Database-Providers-857f6fa883c5458f899f97a3f5e18f1c',
    description:
      'A compiled list of database hosting providers, along with details about their free usage tiers and any associated limitations or conditions.'
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

const dataScience: fullyPacksType[] = [
  {
    id: 'ds01',
    name: 'Analyze universities around the world',
    github: 'https://github.com/acmcsufoss/fullypack_data_science',
    description:
      'This is a simple Data Science project analyzing a universities dataset using Google Colab, Python, Pandas, Matplotlib'
  }
]

const discordBot: fullyPacksType[] = [
  {
    id: 'bot01',
    name: 'Discord Bot Python',
    github: 'https://github.com/acmcsufoss/fullypack_discord_python',
    description:
      'Discord.py is a Python library for building Discord bots. It provides an easy-to-use interface for interacting with the Discord API, allowing developers to create bots that can perform a wide range of tasks, such as moderating channels, automating tasks, and responding to user commands.'
  }
]

interface FullyPackProps {
  fullypack: fullyPacksType
}
const FullyPack: React.FC<FullyPackProps> = ({ fullypack }) => {
  return (
    <div className="flex flex-col items-start bg-purple_card p-4 rounded-lg">
      <p className="text-white font-rubik text-lg text-center font-bold leading-normal">
        {fullypack.name}
      </p>
      <div className="mb-4 text-white font-rubik text-20 font-normal leading-7">
        {fullypack.description}
      </div>
      {'github' in fullypack ? (
        <button className="flex gap-2 items-center mt-auto font-semibold bg-cyan text-purple_card rounded-lg p-2">
          <a target={'_blank'} href={fullypack.github}>
            Github link
          </a>
          <BsGithub size={28} />
        </button>
      ) : (
        <></>
      )}
      {'link' in fullypack ? (
        <button className="flex gap-2 items-center mt-auto font-semibold bg-[rgb(52,11,103)] text-white rounded-lg p-2">
          <a target={'_blank'} href={fullypack.link}>
            Link
          </a>
          <BsLink size={28} />
        </button>
      ) : (
        <></>
      )}
    </div>
  )
}

const FullyPacks = () => {
  return (
    <section className="mt-14 mx-10 w-full text-purple_main">
      <p className="feed-title">FullyPacks</p>
      <p className="text-white font-rubik text-27 font-normal leading-normal">
        Beginner-friendly templates for participants
      </p>
      <div className="mt-10">
        <p className="text-purple-500 font-rubik text-25 font-bold leading-normal">
          Web Development
        </p>
        <div className="mt-4 gap-10 grid md:grid-cols-3 justify-start">
          {webDev.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-purple-500 font-rubik text-25 font-bold leading-normal">
          Backend Development
        </p>
        <div className="mt-4 gap-10 grid md:grid-cols-3 justify-start">
          {backendDev.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-purple-500 font-rubik text-25 font-bold leading-normal">
          Mobile Development
        </p>
        <div className="mt-4 gap-10 grid md:grid-cols-3 justify-start">
          {mobileDev.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />
          })}
        </div>
      </div>
      <div className="my-10">
        <p className="text-purple-500 font-rubik text-25 font-bold leading-normal">
          Data Science
        </p>
        <div className="mt-4 gap-10 grid md:grid-cols-3 justify-start">
          {dataScience.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />
          })}
        </div>
      </div>
      <div className="my-10">
        <p className="text-purple-500 font-rubik text-25 font-bold leading-normal">
          Discord Bot
        </p>
        <div className="mt-4 gap-10 grid md:grid-cols-3 justify-start">
          {discordBot.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FullyPacks
