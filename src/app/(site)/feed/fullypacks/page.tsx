"use client";
import { FullypackType } from "@/types/interface";
import { useState } from "react";
import FullyPackCard from "./_components/fully-pack-card";
import { LightspeedContext } from "./_components/context";

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

const fullyPacks: FullypackType[] = [
  {
    id: "web01",
    name: "Flask + Vercel",
    github: "https://github.com/acmcsufoss/fullypack_flask_vercel",
    description: flaskDescription,
    category: "Web Development"
  },
  {
    id: "web02",
    name: "HTML + CSS",
    github: "https://github.com/acmcsufoss/fullypack_html_css",
    description:
      "Most beginner-friendly website using HTML and CSS for everyone to create their first website, no coding experience required",
    category: "Web Development"
  },
  {
    id: "web03",
    name: "Sveltekit",
    github: "https://github.com/acmcsufoss/fullypack_sveltekit",
    description:
      "This is a project template to help you create your first web application with Sveltekit. It comes with a simple routing setup and a couple of helper components, including one that should keep most of your content mobile friendly and a premade mobile friendly navbar.",
    category: "Web Development"
  },
  {
    id: "backend01",
    name: "Free Database Providers",
    link: "https://fullyhacks.notion.site/Free-Database-Providers-857f6fa883c5458f899f97a3f5e18f1c",
    description:
      "A compiled list of database hosting providers, along with details about their free usage tiers and any associated limitations or conditions.",
    category: "Backend Development"
  },
  {
    id: "mobile01",
    name: "React Native (Expo)",
    github: "https://github.com/acmcsufoss/fullypack_react_native",
    description: reactNativeDescription,
    category: "Mobile Development"
  },
  {
    id: "ds01",
    name: "Analyze universities around the world",
    github: "https://github.com/acmcsufoss/fullypack_data_science",
    description:
      "This is a simple Data Science project analyzing a universities dataset using Google Colab, Python, Pandas, Matplotlib",
    category: "Data Science"
  }
];

export default function FullyPacks() {
  const [lightspeedEnabled, setLightspeedEnabled] = useState(true);

  return (
    <LightspeedContext.Provider
      value={{
        enabled: lightspeedEnabled,
        toggleLightspeed: () => setLightspeedEnabled((prev) => !prev)
      }}>
      <section className="w-full max-w-7xl text-white">
        <div className="feed-title">FULLYPACKS</div>
        <div className="w-full pb-8">
          <div className="custom-text-shadow md:text-md">
            Beginner friendly templates for participants
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 grid-rows-1 gap-8 py-8 sm:grid-cols-2 md:grid-cols-1 md:gap-12 lg:grid-cols-2 xl:grid-cols-3">
          {fullyPacks.map((fullypack) => (
            <div key={fullypack.id} className="space-y-8">
              <FullyPackCard key={fullypack.id} fullypack={fullypack} />
            </div>
          ))}
        </div>
      </section>
    </LightspeedContext.Provider>
  );
}
