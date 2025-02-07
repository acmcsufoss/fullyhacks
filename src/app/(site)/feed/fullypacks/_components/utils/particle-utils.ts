import { PARTICLE_CONFIG } from "../constants";
import type { ParticleConfig } from "../types";

export const generateParticles = (count: number): ParticleConfig[] =>
  Array.from({ length: count }, () => ({
    size:
      Math.random() * (PARTICLE_CONFIG.MAX_SIZE - PARTICLE_CONFIG.MIN_SIZE) +
      PARTICLE_CONFIG.MIN_SIZE,
    left: "50%",
    top: "50%",
    duration:
      Math.random() *
        (PARTICLE_CONFIG.MAX_DURATION - PARTICLE_CONFIG.MIN_DURATION) +
      PARTICLE_CONFIG.MIN_DURATION,
    delay: Math.random() * -PARTICLE_CONFIG.MAX_DELAY,
    color:
      Math.random() > PARTICLE_CONFIG.CYAN_PROBABILITY
        ? PARTICLE_CONFIG.CYAN_COLOR
        : PARTICLE_CONFIG.WHITE_COLOR,
    angle: Math.random() * 360
  }));
