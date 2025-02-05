"use client";

interface ParticleProps {
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  angle: number;
  color: string;
}

export const Particle: React.FC<ParticleProps> = ({
  size,
  left,
  top,
  duration,
  delay,
  angle,
  color
}) => (
  <div
    className="absolute rounded-full"
    style={
      {
        width: `${size}px`,
        height: `${size}px`,
        left,
        top,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2}px ${color}`,
        animation: `floatParticle ${duration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
        animationDelay: `${delay}s`,
        "--angle": `${angle}deg`,
        opacity: 0
      } as React.CSSProperties
    }
  />
);
