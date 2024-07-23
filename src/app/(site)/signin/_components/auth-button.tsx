"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

export default function AuthButton() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className="font-mont mt-12 flex items-center rounded-md bg-[#E149A9] p-4 text-[1.15rem] font-semibold text-white hover:bg-[#8f467b] hover:transition-all hover:duration-300"
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
          <BsGithub size={24} className="ml-4" />
        </>
      )}
    </button>
  );
}
