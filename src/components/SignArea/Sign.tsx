import React from "react";

export interface SignProps {
  /**
   * textContent is the text that will be displayed on the sign.
   */
  textContent: string;

  /**
   * borderColor is the color sign.
   */
  borderColor: string;

  /**
   * parallaxSpeed is the rate at which the sign moves as the user scrolls.
   */
  parallaxSpeed: number;

  /**
   * flickerDelay is the `animation-delay` of the flicker animation in seconds.
   */
  flickerDelay?: number;

  /**
   * zIndex is the `z-index` of the sign.
   */
  zIndex?: number;

  /**
   * top is the `top` CSS property of the sign.
   */
  top?: string;

  /**
   * right is the `right` CSS property of the sign.
   */
  right?: string;

  /**
   * bottom is the `bottom` CSS property of the sign.
   */
  bottom?: string;

  /**
   * left is the `left` CSS property of the sign.
   */
  left?: string;
}

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

export default Sign;
