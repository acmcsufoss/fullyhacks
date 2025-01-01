"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

export default function AuthButton() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className="mt-8 flex items-center rounded-md bg-white px-8 py-4 text-[1.15rem] font-semibold text-black transition-colors hover:bg-opacity-90 hover:duration-300"
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
          Sign In with Github
          <BsGithub size={32} className="ml-4" />
        </>
      )}
    </button>
  );
}
