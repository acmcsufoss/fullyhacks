import { eventsType } from '@/types/interface'
import React, { useState } from 'react'
import Calendar, { EventLabel } from '../Calendar/Calendar'
const events: eventsType[] = [
  {
    id: 'event1',
    name: 'Check-in (Joel & Angel)',
    type: 'event',
    date: 0,
    timeString: '1:00 - 3:00',
    location: 'SGMH-1502',
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
    location: 'SGMH-1502',
    startTime: 2,
    endTime: 3,
    row: 1.5
  },
  {
    id: 'event4',
    name: 'CSUF Tour (Matt)',
    type: 'event',
    date: 0,
    timeString: '4:10 - 4:30',
    location: '',
    startTime: 3.1,
    endTime: 3.5,
    row: 2.5
  },
  {
    id: 'event9',
    name: 'Team Formation (Boushra)',
    type: 'event',
    date: 0,
    timeString: '4:40',
    location: 'ECS Quad',
    startTime: 3.6,
    endTime: 3.6,
    row: 4.5
  },
  {
    id: 'event3',
    name: 'FULLYHACKS BEGINS',
    type: 'event',
    date: 0,
    timeString: '5:00',
    location: 'CS102A,102B,104,110B,200,300',
    startTime: 4,
    endTime: 4,
    row: 0.5
  },
  {
    id: 'workshop1',
    name: 'Postman (Lillian)',
    type: 'workshop',
    date: 0,
    timeString: '6:00 - 7:00',
    location: 'CS-104',
    startTime: 5,
    endTime: 6,
    row: 2.5
  },
  {
    id: 'workshop2',
    name: 'Svelte Frontend (Diamond)',
    type: 'workshop',
    timeString: '6:00 - 7:00',
    location: 'CS-300',
    date: 0,
    startTime: 5,
    endTime: 6,
    row: 3.5
  },
  {
    id: 'food1',
    name: 'Dinner',
    type: 'food',
    date: 0,
    timeString: '7:00 - 8:30',
    location: 'CS-104',
    startTime: 6,
    endTime: 7.5,
    row: 1.5
  },
  {
    id: 'workshop3',
    name: 'Android Development (Emily)',
    type: 'workshop',
    timeString: '8:00 - 9:00',
    location: 'CS-104',
    date: 0,
    startTime: 7,
    endTime: 8,
    row: 4.5
  },
  {
    id: 'workshop4',
    name: 'Guide to your first internship (Daniel)',
    type: 'workshop',
    timeString: '8:00 - 9:00',
    location: 'CS-300',
    date: 0,
    startTime: 7,
    endTime: 8,
    row: 5.5
  },
  {
    id: 'workshop41',
    name: 'IOS Development with SwiftUI (Daniel)',
    type: 'workshop',
    timeString: '9:00 - 10:00',
    location: 'CS-300',
    date: 0,
    startTime: 8,
    endTime: 9,
    row: 6.5
  },
  {
    id: 'fun10',
    name: 'Blooket Social (David)',
    type: 'fun',
    date: 0,
    timeString: '9:00 - 10:00',
    location: 'CS-104',
    startTime: 8,
    endTime: 9,
    row: 1.5
  },
  {
    id: 'event11',
    name: 'DOOR CLOSED',
    type: 'event',
    date: 0,
    timeString: '10:00',
    location: 'CS Building',
    startTime: 9,
    endTime: 9,
    row: 0.5
  },
  {
    id: 'workshop5',
    name: 'From Concept to Project (Kyle)',
    type: 'workshop',
    date: 0,
    timeString: '10:00 - 11:00',
    location: 'CS-104',
    startTime: 9,
    endTime: 10,
    row: 2.5
  },
  {
    id: 'workshop6',
    name: 'Intro to Python (Pillow, Joel)',
    type: 'workshop',
    date: 0,
    timeString: '10:00 - 11:00',
    location: 'CS-300',
    startTime: 9,
    endTime: 10,
    row: 3.5
  },
  {
    id: 'event12',
    name: 'Sleeping Room Open',
    type: 'event',
    date: 0,
    timeString: '11:30',
    location: 'CS110B, CS200',
    startTime: 11.5,
    endTime: 11.5,
    row: 0.5
  },
  {
    id: 'workshop7',
    name: 'Build web with FastAPI + HTMX',
    type: 'workshop',
    date: 0,
    timeString: '12:00 - 1:00',
    location: 'CS-102A',
    startTime: 11,
    endTime: 12,
    row: 5.5
  },
  {
    id: 'workshop8',
    name: 'SQLite Database (Diamond)',
    type: 'workshop',
    date: 0,
    timeString: '12:00 - 1:00',
    location: 'CS-102B',
    startTime: 11,
    endTime: 12,
    row: 4.5
  },
  {
    id: 'fun2',
    name: 'Movie Night',
    type: 'fun',
    date: 0,
    timeString: '1:00',
    location: 'CS-110B',
    startTime: 12,
    endTime: 13,
    row: 1.5
  },
  {
    id: 'fun3',
    name: 'Watching Sunrise (Boushra)',
    type: 'fun',
    date: 1,
    timeString: '6:00',
    location: 'ECS Quad',
    startTime: 17,
    endTime: 17,
    row: 1.5
  },
  {
    id: 'food2',
    name: 'Breakfast',
    type: 'food',
    date: 1,
    timeString: '9:00 - 10:00',
    location: 'CS-104',
    startTime: 20,
    endTime: 21,
    row: 2.5
  },
  {
    id: 'event5',
    name: 'Treasure Hunt (Boushra & Sama)',
    type: 'event',
    date: 1,
    timeString: '10:00 - 12:00',
    location: 'ECS Quad',
    startTime: 21,
    endTime: 23,
    row: 1
  },
  {
    id: 'event13',
    name: 'Lunch',
    type: 'food',
    date: 1,
    timeString: '12:00 - 1:30',
    location: 'CS-104',
    startTime: 23,
    endTime: 24.5,
    row: 2.5
  },
  {
    id: 'event6',
    name: 'FULLYHACKS ENDS',
    type: 'event',
    date: 1,
    timeString: '4:00',
    location: '',
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
    location: 'CS-104',
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
    location: 'SGMH-1502',
    startTime: 29,
    endTime: 29,
    row: 2
  }
]

const Events: React.FC = () => {
  const [filteredEvent, setFilteredEvent] = useState<eventsType[]>(events)
  return (
    <section className="mt-14 mr-8 w-full text-white bg-purple_dark min-h-screen">
      <p className="feed-title">Events</p>
      <p className="md:text-md">Fullyhacks timeline for your reference</p>
      <p className="md:text-sm text-white/60 mt-4">Click the label to filter</p>
      <div className="mt-10">
        {/* For mobile */}
        <div className="md:hidden flex flex-col gap-4 mb-6">
          <div className="flex flex-row flex-wrap gap-4 text-[0.85rem] mb-4">
            <EventLabel events={events} setFilteredEvent={setFilteredEvent} />
          </div>
          {filteredEvent.map((event: eventsType) => {
            return (
              <div className="relative rounded-md bg-purple_card text-white p-4">
                <div className="flex flex-row items-center justify-between">
                  <p className="font-bold text-lg">{event.name}</p>
                  <p
                    className={`rounded-[50%] w-4 h-4 ${
                      event.type == 'event'
                        ? 'bg-sky_300'
                        : event.type == 'workshop'
                          ? 'bg-pink_300'
                          : event.type == 'food'
                            ? 'bg-orange-400'
                            : 'bg-blue_300'
                    }`}></p>
                </div>
                <p> {event.timeString}</p>
                <p> {event.location} </p>
              </div>
            )
          })}
        </div>
        {/* For laptop */}
        <div className="hidden md:block">
          <Calendar
            filteredEvent={filteredEvent}
            events={events}
            setFilteredEvent={setFilteredEvent}
          />
        </div>
      </div>
    </section>
  )
}

export default Events
