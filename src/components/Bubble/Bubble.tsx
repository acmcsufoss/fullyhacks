import React from "react";

interface BubbleProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width: string;
  height: string;
  color: string;
}

const Bubble: React.FC<BubbleProps> = (props) => {
  const {
    width,
    height,
    top = "top-0",
    right = "right-0",
    bottom = "bottom-0",
    left = "left-0",
    color
  } = props;
  return (
    <div
      className={`absolute animate-float motion-reduce:animate-none ${top} ${right} ${bottom} ${left} rounded-full ${width} ${height} ${color}`}></div>
  );
};

export default Bubble;
