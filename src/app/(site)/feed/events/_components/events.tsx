"use client";

import { events } from "@/lib/data/events";
import { EventType } from "@/types/interface";
import { useState } from "react";
import Calendar, { EventLabel } from "./calendar";

export default function Events() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const eventColors: Record<string, string> = {
    event: "#F5595C",
    workshop: "#7D22CC",
    food: "#FFA167",
    activity: "#00CC8E",
    mentorship: "#6060C2"
  };
  const filteredEvents =
    selectedFilter === "all"
      ? events
      : events.filter((event: EventType) => event.type === selectedFilter);

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
        {filteredEvents.map((event: EventType) => {
          return (
            <div
              key={event.id}
              className="relative rounded-md bg-purple_card p-4 text-white">
              <div className="flex flex-row items-center justify-between">
                <p className="text-lg font-bold">{event.name}</p>
                <p
                  className="h-4 w-4 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: eventColors[event.type] }}></p>
              </div>
              <p>{event.timeString}</p>
              <p>{event.location}</p>
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
