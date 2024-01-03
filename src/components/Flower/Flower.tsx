import React from 'react'

interface FlowerProps {
  top?: string
  right?: string
  bottom?: string
  left?: string
  width: string
  height: string
}

const Flower: React.FC<FlowerProps> = (props) => {
  const {
    width,
    height,
    top = 'top-0',
    right = 'right-0',
    bottom = 'bottom-0',
    left = 'left-0'
  } = props
  return (
    <img
      src="flower.svg"
      className={`motion-reduce:animate-none animate-float absolute ${top} ${right} ${bottom} ${left} rounded-full ${width} ${height}`}
      alt="flower svg"></img>
  )
}

export default Flower
