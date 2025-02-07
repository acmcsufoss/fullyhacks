export interface ParticleConfig {
  size: number;
  left: string;
  top: string;
  duration: number;
  delay: number;
  color: string;
  angle: number;
}

export interface CardButtonProps {
  href: string;
  type: "github" | "link";
  label: string;
}
