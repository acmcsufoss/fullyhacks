import React from 'react'
import Script from 'next/script'
import Sign, { type SignProps } from './Sign'

export interface SignAreaProps {
  children?: React.ReactNode
  signs: SignProps[]
}

const SignArea: React.FC<SignAreaProps> = (props) => {
  return (
    <>
      <div className="neon-sign-area">
        <div className="neon-sign-area-content">{props.children}</div>
        {props.signs.map((sign) => (
          <Sign {...sign} key={sign.textContent + sign.borderColor} />
        ))}
      </div>
      {/* https://github.com/flackr/scroll-timeline#readme */}
      <Script
        strategy="lazyOnload"
        src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
      />
    </>
  )
}

export default SignArea
