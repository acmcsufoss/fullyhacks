import { eventsType } from '@/types/interface'
import React from 'react'
import Calendar from '../Calendar/Calendar'
const events: eventsType[] = [
  {
    id: 'event1',
    name: 'Check-in',
    date: 0,
    startTime: 13,
    endTime: 15
  },
  {
    id: 'event2',
    name: 'Opening ceremony',
    date: 0,
    startTime: 15,
    endTime: 16
  }
]

const Events: React.FC = () => {
  return (
    <section className="mt-14 mx-10 w-full text-purple_main">
      <p className="text-xl font-semibold">Events</p>
      <p className="font-light md:text-md">
        Fullyhacks timeline for your reference
      </p>
      <div className="mt-10">
        <Calendar events={events} />
      </div>
    </section>
  )
}

export default Events
