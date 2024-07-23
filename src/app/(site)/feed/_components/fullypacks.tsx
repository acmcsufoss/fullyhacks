import { fullyPacksType } from "@/types/interface";
import React from "react";
import { BsGithub, BsLink } from "react-icons/bs";
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
);

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
);

const webDev: fullyPacksType[] = [
  {
    id: "web01",
    name: "Flask + Vercel",
    github: "https://github.com/acmcsufoss/fullypack_flask_vercel",
    description: flaskDescription
  },
  {
    id: "web02",
    name: "HTML + CSS",
    github: "https://github.com/acmcsufoss/fullypack_html_css",
    description:
      "Most beginner-friendly website using HTML and CSS for everyone to create their first website, no coding experience required"
  },
  {
    id: "web03",
    name: "Sveltekit",
    github: "https://github.com/acmcsufoss/fullypack_sveltekit",
    description:
      "This is a project template to help you create your first web application with Sveltekit. It comes with a simple routing setup and a couple of helper components, including one that should keep most of your content mobile friendly and a premade mobile friendly navbar."
  }
];

const backendDev: fullyPacksType[] = [
  {
    id: "backend01",
    name: "Free Database Providers",
    link: "https://fullyhacks.notion.site/Free-Database-Providers-857f6fa883c5458f899f97a3f5e18f1c",
    description:
      "A compiled list of database hosting providers, along with details about their free usage tiers and any associated limitations or conditions."
  }
];

const mobileDev: fullyPacksType[] = [
  {
    id: "mobile01",
    name: "React Native (Expo)",
    github: "https://github.com/acmcsufoss/fullypack_react_native",
    description: reactNativeDescription
  }
];

const dataScience: fullyPacksType[] = [
  {
    id: "ds01",
    name: "Analyze universities around the world",
    github: "https://github.com/acmcsufoss/fullypack_data_science",
    description:
      "This is a simple Data Science project analyzing a universities dataset using Google Colab, Python, Pandas, Matplotlib"
  }
];

const discordBot: fullyPacksType[] = [
  {
    id: "bot01",
    name: "Discord Bot Python",
    github: "https://github.com/acmcsufoss/fullypack_discord_python",
    description:
      "Discord.py is a Python library for building Discord bots. It provides an easy-to-use interface for interacting with the Discord API, allowing developers to create bots that can perform a wide range of tasks, such as moderating channels, automating tasks, and responding to user commands."
  }
];

interface FullyPackProps {
  fullypack: fullyPacksType;
}
const FullyPack: React.FC<FullyPackProps> = ({ fullypack }) => {
  return (
    <div className="flex flex-col items-start rounded-lg bg-purple_card p-4">
      <p className="text-center font-rubik text-lg font-bold leading-normal text-white">
        {fullypack.name}
      </p>
      <div className="text-20 mb-4 font-rubik font-normal leading-7 text-white">
        {fullypack.description}
      </div>
      {"github" in fullypack ? (
        <button className="mt-auto flex items-center gap-2 rounded-lg bg-cyan p-2 font-semibold text-purple_card">
          <a target={"_blank"} href={fullypack.github}>
            Github link
          </a>
          <BsGithub size={28} />
        </button>
      ) : (
        <></>
      )}
      {"link" in fullypack ? (
        <button className="mt-auto flex items-center gap-2 rounded-lg bg-[rgb(52,11,103)] p-2 font-semibold text-white">
          <a target={"_blank"} href={fullypack.link}>
            Link
          </a>
          <BsLink size={28} />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

const FullyPacks = () => {
  return (
    <section className="mt-14 mr-8 w-full text-white">
      <p className="feed-title">FullyPacks</p>
      <p className="md:text-md">Beginner-friendly templates for participants</p>
      <div className="mt-10">
        <p className="text-md font-bold text-purple-500">Web Development</p>
        <div className="mt-4 grid justify-start gap-10 md:grid-cols-3">
          {webDev.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-md font-bold text-purple-500">Backend Development</p>
        <div className="mt-4 grid justify-start gap-10 md:grid-cols-3">
          {backendDev.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />;
          })}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-md font-bold text-purple-500">Mobile Development</p>
        <div className="mt-4 grid justify-start gap-10 md:grid-cols-3">
          {mobileDev.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />;
          })}
        </div>
      </div>
      <div className="my-10">
        <p className="text-md font-bold text-purple-500">Data Science</p>
        <div className="mt-4 grid justify-start gap-10 md:grid-cols-3">
          {dataScience.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />;
          })}
        </div>
      </div>
      <div className="my-10">
        <p className="text-md font-bold text-purple-500">Discord Bot</p>
        <div className="mt-4 grid justify-start gap-10 md:grid-cols-3">
          {discordBot.map((fullypack: fullyPacksType) => {
            return <FullyPack key={fullypack.id} fullypack={fullypack} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FullyPacks;
