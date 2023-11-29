import React from 'react'
import Sign, { type SignProps } from './Sign'

export interface SignAreaProps {
  children?: React.ReactNode
  signs: SignProps[]
}

const SignArea: React.FC<SignAreaProps> = (props) => {
  return (
    <div
      style={{
        position: 'relative',
        zIndex: 0,
        display: 'grid',
        gridTemplateAreas: 'stack'
      }}>
      <div style={{ gridArea: 'stack', minWidth: '100%' }}>
        {props.children}
      </div>
      {props.signs.map((sign) => (
        <Sign {...sign} key={sign.textContent + sign.borderColor} />
      ))}
    </div>
  )
}

export default SignArea
