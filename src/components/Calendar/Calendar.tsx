import { eventsType } from '@/types/interface'
import React from 'react'

interface CalendarProps {
  events: eventsType[]
}
interface TimeProps {
  time: string
  value?: number
}
const TimeStamp: React.FC<TimeProps> = (props) => {
  const { time, value } = props
  return (
    <>
      {time == '12am' && (
        <p className="absolute font-bold left-[1085px] top-[-10px]">Sun</p>
      )}
      <div
        style={{ left: value }}
        className="absolute top-10 h-[100%] bg-slate-400 w-[1px]">
        <p className="absolute top-[-25px] translate-x-[-50%]">{time}</p>
      </div>
    </>
  )
}

interface EventProps {
  event: eventsType
}

const Event: React.FC<EventProps> = ({ event }) => {
  const width = (event.endTime - event.startTime) * 100
  const left = event.startTime * 100
  const top = event.row * 100
  return (
    <>
      {/* start bar */}
      <p
        style={{ left: event.startTime * 100, top: top + 46 }}
        className={`rounded-[50%] absolute w-2 h-2 z-[11] ${
          event.type == 'event'
            ? 'bg-sky_300'
            : event.type == 'workshop'
            ? 'bg-pink_300'
            : event.type == 'food'
            ? 'bg-orange-500'
            : event.type == 'ctf'
            ? 'bg-purple-700'
            : 'bg-blue_300'
        }`}></p>
      <div style={{ left: left, top: top }} className="text-sm absolute">
        <p className="font-bold">{event.name}</p>
        <div
          className={`font-semibold flex mb-2 gap-2 ${
            event.type == 'event'
              ? 'text-sky_300'
              : event.type == 'workshop'
              ? 'text-pink_300'
              : event.type == 'food'
              ? 'text-orange-500'
              : event.type == 'ctf'
              ? 'text-purple-600'
              : 'text-blue_300'
          }`}>
          <p className="">{event.timeString} |</p>
          <p className="">{event.location}</p>
        </div>
        {/* duration bar */}
        <p
          style={{ width: width }}
          className={`rounded-md absolute h-1 ${
            event.type == 'event'
              ? 'bg-sky_100'
              : event.type == 'workshop'
              ? 'bg-pink_100'
              : event.type == 'food'
              ? 'bg-orange_300'
              : event.type == 'ctf'
              ? 'bg-purple_300'
              : 'bg-blue_300'
          }`}></p>
      </div>
      {/* end bar */}
      <p
        style={{ left: event.endTime * 100 - 5, top: top + 46 }}
        className={`rounded-[50%] absolute w-2 h-2 z-[11] ${
          event.type == 'event'
            ? 'bg-sky_300'
            : event.type == 'workshop'
            ? 'bg-pink_300'
            : event.type == 'food'
            ? 'bg-orange-500'
            : event.type == 'ctf'
            ? 'bg-purple-700'
            : 'bg-blue-700'
        }`}></p>
    </>
  )
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const hoursArray = Array.from({ length: 30 }, (_, i) => {
    const hour = (i % 12) + 1
    const period = i < 12 ? 'pm' : i > 22 ? 'pm' : 'am'
    const name = i === 11 ? '12am' : `${hour}${period}`
    const value = i === 0 ? 0 : i
    return {
      id: `${i + 1}`,
      name: name,
      value: value * 100
    }
  })
  return (
    <section className="p-4 w-[70%] mb-12 rounded-lg backdrop-filter backdrop-blur-md bg-opacity-25 border border-gray-300 border-opacity-25 shadow-xl text-purple_main font-semibold">
      <div className="border-b-2 py-2 flex flex-wrap items-center gap-4 md:gap-8">
        <p>All events</p>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-sky_300 p-2 rounded-[50%]"></p>
          <p className="text-sky_300 font-bold">Main event</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-pink_300 p-2 rounded-[50%]"></p>
          <p className="text-pink_300 font-bold">Workshops</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-orange-400 p-2 rounded-[50%]"></p>
          <p className="text-orange-400 font-bold">Food</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-purple-500 p-2 rounded-[50%]"></p>
          <p className="text-purple-500 font-bold">CTF</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-[1rem] bg-blue_300 p-2 rounded-[50%]"></p>
          <p className="text-blue_300 font-bold">Fun</p>
        </div>
      </div>
      <div className="overflow-x-scroll gap-10 w-full">
        <div className="ml-8 mt-8 font-normal relative h-[600px] md:h-[800px] w-[3200px]">
          <p className="absolute font-bold left-[-15px] top-[-10px]">Sat</p>
          {/* schedule marker */}
          {hoursArray.map((hour) => {
            return (
              <TimeStamp key={hour.id} time={hour.name} value={hour.value} />
            )
          })}
          {events.map((event: eventsType) => {
            return <Event key={event.id} event={event} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Calendar
