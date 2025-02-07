export const PARTICLE_CONFIG = {
  // Particle appearance
  MIN_SIZE: 0.5,
  MAX_SIZE: 1.5,
  COUNT: 150,
  CYAN_COLOR: "rgba(70,200,229,0.8)" as const,
  WHITE_COLOR: "rgba(255,255,255,0.8)" as const,
  CYAN_PROBABILITY: 0.7,

  // Animation timing
  MIN_DURATION: 1.5,
  MAX_DURATION: 2.5,
  MAX_DELAY: 2,

  // Movement
  DISTANCE: 800,

  // Glow effect
  GLOW_SIZE_MULTIPLIER: 2,
  GLOW_SPREAD_MULTIPLIER: 2,

  // Opacity
  START_OPACITY: 0
} as const;

export const CORNER_POSITIONS = [
  { position: "-top-3 -left-3 border-t-4 border-l-4" },
  { position: "-top-3 -right-3 border-t-4 border-r-4" },
  { position: "-bottom-3 -left-3 border-b-4 border-l-4" },
  { position: "-bottom-3 -right-3 border-b-4 border-r-4" }
] as const;
