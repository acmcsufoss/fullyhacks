"use client";

import { BsGithub, BsLink } from "react-icons/bs";
import type { CardButtonProps } from "./types";

export const CardButton: React.FC<CardButtonProps> = ({
  href,
  type,
  label
}) => {
  const isGithub = type === "github";
  const Icon = isGithub ? BsGithub : BsLink;

  const buttonClassName = `
    flex items-center gap-2 rounded-lg
    ${
      isGithub
        ? "bg-cyan text-purple_card hover:shadow-cyan/30"
        : "bg-[rgb(52,11,103)] text-white hover:shadow-purple_card/30"
    }
    p-2 font-semibold transition-all duration-300 
    hover:-translate-y-1 hover:shadow-lg
  `;

  return (
    <button className={buttonClassName}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
      <Icon size={28} />
    </button>
  );
};
