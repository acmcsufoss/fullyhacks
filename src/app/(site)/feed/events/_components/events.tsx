"use client";

import { events } from "@/lib/data/events";
import { eventsType } from "@/types/interface";
import { useState } from "react";
import Calendar, { EventLabel } from "./calendar";

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredEvents =
    selectedFilter === "all"
      ? events
      : events.filter((event: eventsType) => event.type === selectedFilter);
  return (
    <>
      {/* Mobile View */}
      <div className="mb-6 flex flex-col gap-4 md:hidden">
        <div className="mb-4 flex flex-row flex-wrap gap-4 text-[0.85rem]">
          <EventLabel
            events={events}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        </div>
        {filteredEvents.map((event: eventsType) => {
          return (
            <div
              key={event.id}
              className="relative rounded-md bg-purple_card p-4 text-white">
              <div className="flex flex-row items-center justify-between">
                <p className="text-lg font-bold">{event.name}</p>
                <p
                  className={`h-4 w-4 flex-shrink-0 rounded-full ${
                    event.type == "event"
                      ? "bg-[#F5595C]"
                      : event.type == "workshop"
                        ? "bg-[#7D22CC]"
                        : event.type == "food"
                          ? "bg-[#FFA167]"
                          : event.type == "ctf"
                            ? "bg-[#00CC8E]"
                            : event.type == "activity"
                              ? "bg-[#6060C2]"
                              : "#F5595C"
                  }`}></p>
              </div>
              <p> {event.timeString}</p>
              <p> {event.location} </p>
            </div>
          );
        })}
      </div>
      {/* Desktop View */}
      <div className="hidden md:block">
        <Calendar
          filteredEvent={filteredEvents}
          events={events}
          setFilteredEvent={undefined}
        />
      </div>
    </>
  );
}
