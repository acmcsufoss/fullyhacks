"use client";

import { fullyPacksType } from "@/types/interface";
import React, { useState, useMemo } from "react";
import { Particle } from "./particle";
import { CardButton } from "./card-button";
import { PARTICLE_CONFIG, CORNER_POSITIONS } from "./constants";
import { generateParticles } from "./utils/particle-utils";
import { LightspeedContext } from "./context";

interface FullyPackProps {
  fullypack: fullyPacksType;
}

const FullyPackCard: React.FC<FullyPackProps> = ({ fullypack }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { enabled: lightspeedEnabled } = React.useContext(LightspeedContext);
  const particles = useMemo(() => generateParticles(PARTICLE_CONFIG.COUNT), []);

  return (
    <div className="w-full max-w-md">
      <div
        className="group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className="relative flex min-h-[300px] w-full md:min-h-[450px]">
          {/* Base card with glow effect */}
          <div className="relative flex w-full flex-col rounded-lg bg-purple_card p-4 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(70,200,229,0.3)]">
            {/* Only render particles if lightspeed is enabled */}
            {lightspeedEnabled && (
              <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {particles.map((particle, i) => (
                  <Particle key={i} {...particle} />
                ))}
              </div>
            )}

            {/* Content */}
            <p className="relative text-center text-lg font-bold leading-normal text-white transition-colors duration-300 group-hover:text-cyan">
              {fullypack.name}
            </p>
            <div className="relative z-10 mb-4 mt-4 text-sm font-normal leading-7 text-white">
              {fullypack.description}
            </div>
            <p>
              <span className="font-semibold">Category: </span>
              {fullypack.category}
            </p>

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

          {/* Corner decorations */}
          <div className="pointer-events-none absolute inset-0">
            {CORNER_POSITIONS.map((corner, index) => (
              <div
                key={index}
                className={`absolute h-6 w-6 ${corner.position} border-purple_card transition-all duration-300 group-hover:border-cyan`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullyPackCard;
