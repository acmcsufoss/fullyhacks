import React from "react";
import Script from "next/script";
import { SignProps } from "./signs";

const Sign: React.FC<SignProps> = (props) => {
  return (
    <div
      className="neon-sign"
      style={
        {
          "--border-color": props.borderColor,
          "--z-index": props.zIndex,
          "--css-top": props.top,
          "--css-right": props.right,
          "--css-bottom": props.bottom,
          "--css-left": props.left,
          "--parallax-speed": props.parallaxSpeed,
          "--flicker-delay": props.flickerDelay
            ? `${props.flickerDelay}s`
            : undefined
        } as React.CSSProperties
      }>
      <span>{props.textContent}</span>
    </div>
  );
};

export interface SignAreaProps {
  children?: React.ReactNode;
  signs: SignProps[];
}

const SignArea: React.FC<SignAreaProps> = (props) => {
  return (
    <>
      <div className="neon-sign-area">
        <div className="neon-sign-area-content">{props.children}</div>
        {props.signs.map((sign, i) => (
          <Sign {...sign} key={sign.textContent + sign.borderColor + i} />
        ))}
      </div>
      {/* https://github.com/flackr/scroll-timeline#readme */}
      <Script
        strategy="lazyOnload"
        src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
      />
    </>
  );
};

export default SignArea;
