import React from 'react'

export interface SignProps {
  textContent: string
  borderColor: string
  parallaxSpeed: number
  zIndex?: number
  top?: string
  right?: string
  bottom?: string
  left?: string
}

const Sign: React.FC<SignProps> = (props) => {
  return (
    <div
      className="neon-sign"
      style={
        {
          '--border-color': props.borderColor,
          '--z-index': props.zIndex,
          '--css-top': props.top,
          '--css-right': props.right,
          '--css-bottom': props.bottom,
          '--css-left': props.left,
          '--parallax-speed': props.parallaxSpeed
        } as React.CSSProperties
      }>
      <span>{props.textContent}</span>
    </div>
  )
}

export default Sign
