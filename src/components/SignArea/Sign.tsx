import React from 'react'

export interface SignProps {
  textContent: string
  borderColor: string
  parallaxSpeed: number
  zIndex?: number
  cssTop?: string
  cssRight?: string
  cssBottom?: string
  cssLeft?: string
}

const Sign: React.FC<SignProps> = (props) => {
  return (
    <div
      className="neon-sign"
      style={
        {
          opacity: 0.5,
          position: 'absolute',
          gridArea: 'stack',
          animation: 'parallax linear',
          animationTimeline: 'scroll()',
          borderRadius: '0.5rem',
          outline: `2px solid #fff`,
          boxShadow: `0 0 25px 4px ${props.borderColor}, 0 0 25px 4px ${props.borderColor} inset`,
          padding: '0.5rem',
          zIndex: props.zIndex,
          top: props.cssTop,
          right: props.cssRight,
          bottom: props.cssBottom,
          left: props.cssLeft,
          '--parallax-speed': props.parallaxSpeed
        } as React.CSSProperties
      }>
      <span
        style={{
          color: 'transparent',
          writingMode: 'vertical-rl',
          textOrientation: 'upright',
          textTransform: 'uppercase',
          textShadow: `0 0 10px ${props.borderColor}`,
          WebkitTextStroke: '2px white',
          fontSize: '2.5rem',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 700,
          pointerEvents: 'none',
          userSelect: 'none'
        }}>
        {props.textContent}
      </span>
    </div>
  )
}

export default Sign
