"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

export default function AuthButton() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className="font-mont mt-12 flex items-center rounded-md bg-white p-2 text-[1.15rem] font-semibold text-black transition-colors duration-300 hover:bg-opacity-90 md:p-4"
      onClick={() => {
        setIsClicked(true);
        signIn("github", {
          redirect: false,
          callbackUrl: "https://fullyhacks.acmcsuf.com/apply"
        });
      }}>
      {isClicked ? (
        "Loading..."
      ) : (
        <>
          <span>Sign In with Github</span>
          <BsGithub size={24} className="ml-4 flex-shrink-0" />
        </>
      )}
    </button>
  );
}
