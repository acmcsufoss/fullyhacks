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
    // Set the date for April 8th
    const targetDate = new Date('2023-04-08T00:00:00')
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
    <div className="grid lg:grid-flow-col md:grid-flow-col gap-10 text-center auto-cols-max font-rubik mt-12">
      <div className="flex flex-col text-blue_300">
        <div className="flex items-center">
          <span className="countdown text-5xl">
            <span style={{ '--value': time.days } as CSSProperties}></span>
          </span>
        </div>
        Days
      </div>
      <div className="flex flex-col text-purple_500">
        <span className="countdown text-5xl">
          <span style={{ '--value': time.hours } as CSSProperties}></span>
        </span>
        Hours
      </div>
      <div className="flex flex-col text-pink_700">
        <span className="countdown text-5xl">
          <span style={{ '--value': time.minutes } as CSSProperties}></span>
        </span>
        Mins
      </div>
      <div className="flex flex-col text-pink_300">
        <span className="countdown text-5xl">
          <span style={{ '--value': time.seconds } as CSSProperties}></span>
        </span>
        Secs
      </div>
    </div>
  )
}

export default CountDown
