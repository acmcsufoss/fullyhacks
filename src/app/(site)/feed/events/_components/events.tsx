"use client";

import { events } from "@/lib/data/events";
import { eventsType } from "@/types/interface";
import { useState } from "react";
import Calendar, { EventLabel } from "./calendar";

export default function Events() {
  const [filteredEvent, setFilteredEvent] = useState<eventsType[]>(events);
  return (
    <>
      {/* For mobile */}
      <div className="mb-6 flex flex-col gap-4 md:hidden">
        <div className="mb-4 flex flex-row flex-wrap gap-4 text-[0.85rem]">
          <EventLabel events={events} setFilteredEvent={setFilteredEvent} />
        </div>
        {filteredEvent.map((event: eventsType) => {
          return (
            <div
              key={event.id}
              className="relative rounded-md bg-purple_card p-4 text-white">
              <div className="flex flex-row items-center justify-between">
                <p className="text-lg font-bold">{event.name}</p>
                <p
                  className={`h-4 w-4 rounded-[50%] ${
                    event.type == "event"
                      ? "bg-sky_300"
                      : event.type == "workshop"
                        ? "bg-pink_300"
                        : event.type == "food"
                          ? "bg-orange-400"
                          : "bg-blue_300"
                  }`}></p>
              </div>
              <p> {event.timeString}</p>
              <p> {event.location} </p>
            </div>
          );
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
    </>
  );
}
