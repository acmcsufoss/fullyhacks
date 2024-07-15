import React from "react";

interface FlowerProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width: string;
  height: string;
  isFixed?: boolean;
  noMotion?: boolean;
  flowerType?: number;
}

const Flower: React.FC<FlowerProps> = (props) => {
  const {
    width,
    height,
    top = "top-0",
    right = "right-0",
    bottom = "bottom-0",
    left = "left-0",
    isFixed = false,
    noMotion = false,
    flowerType = 1
  } = props;
  return (
    <img
      src={`flower${flowerType}.svg`}
      className={`rounded-full motion-reduce:animate-none ${width} ${height} ${top} ${right} ${bottom} ${left} ${
        noMotion ? "animate-none" : "animate-float"
      } ${isFixed ? "fixed" : "absolute"}`}
      alt={`flower ${flowerType} svg`}></img>
  );
};

export default Flower;
