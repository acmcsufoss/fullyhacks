import { eventsType } from '@/types/interface'
import React from 'react'

interface CalendarProps {
  events: eventsType[]
}
interface TimeProps {
  style?: string
  time: string
  value?: number
}
const TimeStamp: React.FC<TimeProps> = (props) => {
  const { time, style, value } = props
  return (
    <div className={style}>
      <p className="absolute top-[-25px] translate-x-[-50%]">{time}</p>
    </div>
  )
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const hoursArray = Array.from({ length: 12 }, (_, i) => {
    const hour = (i % 12) + 1
    const period = i < 12 ? 'pm' : 'am'
    const name = i === 11 ? '12am' : `${hour}${period}`
    const value = i === 0 ? 0 : i
    return {
      id: `${i + 1}`,
      name: name,
      value: value * 100
    }
  })
  console.log(hoursArray)

  return (
    <section className="p-4 w-[90%] rounded-lg backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-300 border-opacity-25 shadow-xl text-purple_main font-semibold">
      <div className="border-b-2 py-2 flex flex-wrap items-center gap-4 md:gap-8">
        <p>All events</p>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-sky_100 p-2 rounded-[50%]"></p>
          <p className="text-sky_100 font-bold">Main event</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-pink_100 p-2 rounded-[50%]"></p>
          <p className="text-pink_100 font-bold">Workshops</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-orange_300 p-2 rounded-[50%]"></p>
          <p className="text-orange_300 font-bold">Food</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-purple_300 p-2 rounded-[50%]"></p>
          <p className="text-purple_300 font-bold">CTF</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-blue_300 p-2 rounded-[50%]"></p>
          <p className="text-blue_300 font-bold">Fun</p>
        </div>
      </div>
      <p className="my-4">Sat</p>
      <div className="overflow-x-scroll gap-10 w-full">
        <div className="ml-8 mt-8 font-normal relative h-[800px] w-[5200px]">
          {/* schedule marker */}
          {hoursArray.map((hour) => {
            return (
              <TimeStamp
                key={hour.id}
                time={hour.name}
                value={hour.value}
                style={`left-[${hour.value}px] absolute top-0 h-[100%] bg-slate-400 w-[1px]`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Calendar
