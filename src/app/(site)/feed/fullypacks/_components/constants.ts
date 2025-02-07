export const PARTICLE_CONFIG = {
  // Particle appearance
  MIN_SIZE: 0.5,
  MAX_SIZE: 2,
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
  INITIAL_SCALE: 0,
  FINAL_SCALE: 2,

  // Glow effect
  GLOW_SIZE_MULTIPLIER: 2,
  GLOW_SPREAD_MULTIPLIER: 2,

  // Opacity
  START_OPACITY: 0,
  PEAK_OPACITY: 0.7,
  END_OPACITY: 0,

  // Animation keyframes (as percentages)
  FADE_IN_POINT: 10,
  FADE_OUT_START: 90
} as const;

export const STYLE_CONFIG = {
  CORNER_SIZE: "1.5rem",
  CORNER_OFFSET: "-0.75rem",
  GLOW_OPACITY: 0.7,
  BORDER_WIDTH: "4px"
} as const;

export const CORNER_POSITIONS = [
  { position: "-top-3 -left-3 border-t-4 border-l-4" },
  { position: "-top-3 -right-3 border-t-4 border-r-4" },
  { position: "-bottom-3 -left-3 border-b-4 border-l-4" },
  { position: "-bottom-3 -right-3 border-b-4 border-r-4" }
] as const;
