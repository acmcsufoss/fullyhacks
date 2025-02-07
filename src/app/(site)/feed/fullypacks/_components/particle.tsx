"use client";

import type { ParticleConfig } from "./types";
import { PARTICLE_CONFIG } from "./constants";

interface CustomCSSProperties extends React.CSSProperties {
  "--final-position"?: string;
}

export const Particle: React.FC<ParticleConfig> = ({
  size,
  left,
  top,
  duration,
  delay,
  color,
  angle
}) => {
  const finalX = Math.cos(angle * (Math.PI / 180)) * PARTICLE_CONFIG.DISTANCE;
  const finalY = Math.sin(angle * (Math.PI / 180)) * PARTICLE_CONFIG.DISTANCE;

  const particleStyle: CustomCSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    left: `50%`,
    top: `50%`,
    transform: `translate(-50%, -50%)`,
    backgroundColor: color,
    boxShadow: `0 0 ${size * PARTICLE_CONFIG.GLOW_SIZE_MULTIPLIER}px ${
      size * PARTICLE_CONFIG.GLOW_SPREAD_MULTIPLIER
    }px ${color}`,
    animation: `starfield ${duration}s linear infinite`,
    animationDelay: `${delay}s`,
    opacity: PARTICLE_CONFIG.START_OPACITY,
    "--final-position": `translate(${finalX}px, ${finalY}px)`
  };

  return <div className="absolute rounded-full" style={particleStyle} />;
};
