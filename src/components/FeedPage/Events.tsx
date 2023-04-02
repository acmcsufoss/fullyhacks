import { eventsType } from '@/types/interface'
import React from 'react'
import Calendar from '../Calendar/Calendar'
const events: eventsType[] = [
  {
    id: 'event1',
    name: 'Check-in',
    type: 'event',
    date: 0,
    timeString: '1:00 - 3:00',
    location: 'In front of TSU',
    startTime: 0,
    endTime: 2,
    row: 0.5
  },
  {
    id: 'event2',
    name: 'Opening ceremony',
    type: 'event',
    date: 0,
    timeString: '3:00 - 4:00',
    location: 'TSU Theater',
    startTime: 2,
    endTime: 3,
    row: 1.5
  },
  {
    id: 'event3',
    name: 'FULLYHACKS BEGINS',
    type: 'event',
    date: 0,
    timeString: '4:00',
    location: 'TBA',
    startTime: 3,
    endTime: 3,
    row: 0.5
  },
  {
    id: 'event4',
    name: 'Team forming',
    type: 'event',
    date: 0,
    timeString: '4:10 - 5:30',
    location: 'TBA',
    startTime: 3.1,
    endTime: 4.5,
    row: 2.5
  },
  {
    id: 'food1',
    name: 'Pizza dinner',
    type: 'food',
    date: 0,
    timeString: '6:00 - 7:00',
    location: 'TBA',
    startTime: 5,
    endTime: 6,
    row: 1.5
  },
  {
    id: 'workshop1',
    name: 'Next.js - React (Daniel)',
    type: 'workshop',
    date: 0,
    timeString: '7:00 - 8:00',
    location: 'TBA',
    startTime: 6,
    endTime: 7,
    row: 2.5
  },
  {
    id: 'workshop2',
    name: 'Svelte (Karni)',
    type: 'workshop',
    timeString: '7:00 - 8:00',
    location: 'TBA',
    date: 0,
    startTime: 6,
    endTime: 7,
    row: 3.5
  },
  {
    id: 'ctf',
    name: 'CTF Begins',
    type: 'ctf',
    timeString: '8:00 - 12:00',
    location: 'TBA',
    date: 0,
    startTime: 7,
    endTime: 11,
    row: 6.5
  },
  {
    id: 'workshop3',
    name: 'Mobile Dev (Emily)',
    type: 'workshop',
    timeString: '8:00 - 9:00',
    location: 'TBA',
    date: 0,
    startTime: 7,
    endTime: 8,
    row: 4.5
  },
  {
    id: 'workshop4',
    name: 'AI/ML (Justin)',
    type: 'workshop',
    timeString: '8:00 - 9:00',
    location: 'TBA',
    date: 0,
    startTime: 7,
    endTime: 8,
    row: 5.5
  },
  {
    id: 'workshop5',
    name: 'Game Dev (Steph)',
    type: 'workshop',
    date: 0,
    timeString: '9:00 - 10:00',
    location: 'TBA',
    startTime: 8,
    endTime: 9,
    row: 2.5
  },
  {
    id: 'workshop6',
    name: 'Database (Oscar)',
    type: 'workshop',
    date: 0,
    timeString: '9:00 - 10:00',
    location: 'TBA',
    startTime: 8,
    endTime: 9,
    row: 3.5
  },
  {
    id: 'fun1',
    name: 'Team building',
    type: 'fun',
    date: 0,
    timeString: '11:00 - 12:00',
    location: 'TBA',
    startTime: 10,
    endTime: 11,
    row: 5
  },
  {
    id: 'fun2',
    name: 'Movie Night',
    type: 'fun',
    date: 0,
    timeString: '12:00',
    location: 'TBA',
    startTime: 11,
    endTime: 11,
    row: 4.5
  },
  {
    id: 'food2',
    name: 'Donut breakfast',
    type: 'food',
    date: 1,
    timeString: '9:00 - 10:00',
    location: 'TBA',
    startTime: 20,
    endTime: 21,
    row: 2.5
  },
  {
    id: 'event5',
    name: 'Networking event',
    type: 'event',
    date: 1,
    timeString: '10:00 - 12:00',
    location: 'TBA',
    startTime: 21,
    endTime: 23,
    row: 1
  },
  {
    id: 'workshop7',
    name: 'Team Brainstorming (Jacob)',
    type: 'workshop',
    date: 1,
    timeString: '12:00 - 1:00',
    location: 'TBA',
    startTime: 23,
    endTime: 24,
    row: 2.5
  },
  {
    id: 'workshop8',
    name: 'Project Deployment (TBA)',
    type: 'workshop',
    date: 1,
    timeString: '2:00 - 3:00',
    location: 'TBA',
    startTime: 25,
    endTime: 26,
    row: 2
  },
  {
    id: 'event6',
    name: 'FULLYHACKS ENDS',
    type: 'event',
    date: 1,
    timeString: '4:00',
    location: 'TBA',
    startTime: 27,
    endTime: 27,
    row: 0.5
  },
  {
    id: 'event7',
    name: 'Judging & Project Expo',
    type: 'event',
    date: 1,
    timeString: '4:00 - 6:00',
    location: 'TBA',
    startTime: 27,
    endTime: 29,
    row: 1.25
  },
  {
    id: 'event8',
    name: 'Closing ceremony & Announce winners',
    type: 'event',
    date: 1,
    timeString: '6:00',
    location: 'TSU Theater',
    startTime: 29,
    endTime: 29,
    row: 2
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
