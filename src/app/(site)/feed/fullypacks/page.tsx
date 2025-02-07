"use client";
import { fullyPacksType } from "@/types/interface";
import React, { useState } from "react";
import FullyPackCard from "./_components/fully-pack-card";

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

const fullypacks: fullyPacksType[] = [
  ...webDev,
  ...backendDev,
  ...mobileDev,
  ...dataScience,
  ...discordBot
];

export const LightspeedContext = React.createContext({
  enabled: true,
  toggleLightspeed: () => {}
});

// Helper function to group fullypacks by category
const groupedFullypacks = {
  "Web Development": webDev,
  "Backend Development": backendDev,
  "Mobile Development": mobileDev,
  "Data Science": dataScience,
  "Discord Bots": discordBot
};

export default function FullyPacks() {
  const [lightspeedEnabled, setLightspeedEnabled] = React.useState(true);

  return (
    <LightspeedContext.Provider
      value={{
        enabled: lightspeedEnabled,
        toggleLightspeed: () => setLightspeedEnabled((prev) => !prev)
      }}>
      <section className="w-full max-w-7xl px-4 text-white sm:px-6 md:px-8">
        <div className="feed-title">FULLYPACKS</div>
        <div className="w-full pb-8">
          <div className="custom-text-shadow md:text-md">
            beginner friendly templates for participants
          </div>
          {/* Effects Button
            <button
              onClick={() => setLightspeedEnabled((prev) => !prev)}
              className="ml-4 rounded-lg bg-cyan px-4 py-2 text-purple_card hover:opacity-90">
              {lightspeedEnabled ? "Disable" : "Enable"} Effects
            </button>
          */}
        </div>

        {/* Sections */}
        <div className="space-y-16 py-8">
          {Object.entries(groupedFullypacks).map(
            ([category, packs]) =>
              packs.length > 0 && (
                <div key={category} className="space-y-8">
                  <h2 className="mb-10 text-center text-3xl font-semibold text-purple_main">
                    {category}
                  </h2>

                  <div className="mx-auto grid grid-cols-1 items-start gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {packs.map((fullypack) => (
                      <FullyPackCard key={fullypack.id} fullypack={fullypack} />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    </LightspeedContext.Provider>
  );
}
