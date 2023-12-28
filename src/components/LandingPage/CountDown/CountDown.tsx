import React, { useReducer } from 'react'
import { CSSProperties } from 'react'
interface TimeState {
  days: number
  hours: number
  minutes: number
  seconds: number
}
type TimeAction = { type: 'count'; payload: TimeState }
const reducer = (state: TimeState, action: TimeAction): TimeState => {
  switch (action.type) {
    case 'count':
      const { days, hours, minutes, seconds } = action.payload
      return { days, hours, minutes, seconds }
    default:
      return state
  }
}
const CountDown = () => {
  const [time, dispatch] = useReducer(reducer, {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  setInterval(() => {
    // Set the date for February 23rd
    const targetDate = new Date('2024-02-23T13:00:00')
    const currentDate = new Date()
    const timeRemaining = targetDate.getTime() - currentDate.getTime()
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
    dispatch({ type: 'count', payload: { days, hours, minutes, seconds } })
  }, 1000)
  return (
    <div className="z-[11] grid lg:grid-flow-col md:grid-flow-col gap-10 text-center auto-cols-max font-ohm font-medium mt-12">
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3 py-7">
        <span className="countdown text-6xl">
          <span style={{ '--value': time.days } as CSSProperties}></span>
        </span>
      </div>
      <span className="colon text-7xl">:</span>
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3">
        <span className="countdown text-6xl">
          <span style={{ '--value': time.hours } as CSSProperties}></span>
        </span>
      </div>
      <span className="colon text-7xl">:</span>
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3">
        <div className="flex items-center">
          <span className="countdown text-6xl">
            <span style={{ '--value': time.minutes } as CSSProperties}></span>
          </span>
        </div>
      </div>
      <span className="colon text-7xl">:</span>
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3">
        <div className="flex items-center">
          <span className="countdown text-6xl">
            <span style={{ '--value': time.seconds } as CSSProperties}></span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CountDown
