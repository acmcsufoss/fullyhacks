"use client";

import { fullyPacksType } from "@/types/interface";
import React, { useState, useMemo } from "react";
import { Particle } from "./particle";
import { CardButton } from "./card-button";

interface FullyPackProps {
  fullypack: fullyPacksType;
}

const generateParticles = (count: number) =>
  [...Array(count)].map(() => ({
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * -2,
    angle: Math.random() * 360,
    color: Math.random() > 0.7 ? "rgb(70,200,229)" : "rgb(255,255,255)"
  }));

const FullyPackCard: React.FC<FullyPackProps> = ({ fullypack }) => {
  const [isHovered, setIsHovered] = useState(false);
  const particles = useMemo(() => generateParticles(30), []);

  return (
    <div
      className="group relative p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className="relative flex w-full">
        {/* Base card with glow effect */}
        <div className="relative flex w-full flex-col rounded-lg bg-purple_card p-4 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(70,200,229,0.3)]">
          {/* Particles container */}
          <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {particles.map((particle, i) => (
              <Particle key={i} {...particle} />
            ))}
          </div>

          {/* Content */}
          <p className="relative text-center text-lg font-bold leading-normal text-white transition-colors duration-300 group-hover:text-cyan">
            {fullypack.name}
          </p>

          <div className="text-20 relative z-10 mb-4 mt-4 font-normal leading-7 text-white">
            {fullypack.description}
          </div>

          <div className="relative z-10 mt-auto flex gap-2">
            {fullypack.github && (
              <CardButton
                href={fullypack.github}
                type="github"
                label="Github link"
              />
            )}
            {fullypack.link && (
              <CardButton href={fullypack.link} type="link" label="Link" />
            )}
          </div>
        </div>

        {/* Corner decorations - Removed glow effect */}
        <div className="pointer-events-none absolute inset-0">
          {[
            "-top-3 -left-3 border-l-4 border-t-4",
            "-top-3 -right-3 border-r-4 border-t-4",
            "-bottom-3 -left-3 border-l-4 border-b-4",
            "-bottom-3 -right-3 border-r-4 border-b-4"
          ].map((position, index) => (
            <div
              key={index}
              className={`absolute h-6 w-6 ${position} border-purple_card transition-all duration-300 group-hover:border-cyan`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullyPackCard;
