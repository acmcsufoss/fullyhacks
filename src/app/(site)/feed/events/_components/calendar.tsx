import { eventLabel, eventsType } from "@/types/interface";
import { TiStarFullOutline } from "react-icons/ti";
import React, { useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
};

interface CalendarProps {
  events: eventsType[];
  filteredEvent: eventsType[];
  setFilteredEvent?: any;
}

interface TimeProps {
  time: string;
  value?: number;
}
const TimeStamp: React.FC<TimeProps> = (props) => {
  const { time, value } = props;
  return (
    <>
      <div
        style={{ left: `${value}px`, height: "100%" }}
        className="absolute top-10 w-[1.25px] bg-[#72D6E6]">
        <p className="absolute top-[-33px] translate-x-[-50%] text-white">
          {time}
        </p>
      </div>
    </>
  );
};

interface EventProps {
  event: eventsType;
}

const Event: React.FC<EventProps> = ({ event }) => {
  const multiplier = 110;
  const width = (event.endTime - event.startTime) * multiplier;
  const left = event.startTime * multiplier;
  const top = event.row * 100;
  const eventColors: Record<string, string> = {
    event: "#F5595C",
    workshop: "#7D22CC",
    food: "#FFA167",
    ctf: "#00CC8E",
    activity: "#6060C2"
  };
  const backgroundColor = eventColors[event.type] || "#6060C2";

  return (
    <div
      style={{
        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        backgroundColor
      }}
      className="absolute max-w-[500px] rounded-xl p-3 leading-tight text-white shadow-lg">
      {/* Title and time  */}
      <div className="flex flex-wrap items-center gap-1 font-rubik">
        <span className="text-[0.8rem] font-bold leading-tight">
          {event.name}
        </span>
        <span className="break-all text-[0.85rem] leading-tight text-white">
          {" "}
          |{" "}
        </span>
        <span className="relative text-[0.75rem] leading-tight">
          {event.timeString}
        </span>
      </div>
      <div className="flex items-center">
        <p className="mt-2 whitespace-normal break-words font-rubik text-[0.75rem] leading-tight">
          {event.location}
        </p>
      </div>
    </div>
  );
};
interface EventLableProps {
  selectedFilter: string;
  events?: eventsType[];
  setSelectedFilter: (filter: string) => void;
}
export const EventLabel: React.FC<EventLableProps> = ({
  selectedFilter,
  setSelectedFilter
}) => {
  const eventLabels: eventLabel[] = [
    {
      id: "e2",
      name: "Main event",
      type: "event",
      borderStyle: "#F5595C",
      textStyle: "text-[#F5595C] font-rubik"
    },
    {
      id: "e3",
      name: "Workshops",
      type: "workshop",
      borderStyle: "#7D22CC",
      textStyle: "text-[#7D22CC] font-rubik"
    },
    {
      id: "e4",
      name: "Food",
      type: "food",
      borderStyle: "#FFA167",
      textStyle: "text-[#FFA167] font-rubik"
    },
    // new type so event.type can be added as ctf
    {
      id: "e5",
      name: "CTF",
      type: "ctf",
      borderStyle: "#00CC8E",
      textStyle: "text-[#00CC8E] font-rubik"
    },
    {
      id: "e6",
      name: "Activity",
      type: "activity",
      borderStyle: "#6060C2",
      textStyle: "text-[#6060C2] font-rubik"
    }
  ];

  const handleFilter = (name: string) => {
    if (selectedFilter === name) {
      setSelectedFilter("all");
    } else {
      setSelectedFilter(name);
    }
  };

  return (
    <>
      {eventLabels.map((event: eventLabel) => {
        return (
          <div
            key={event.id}
            className="flex cursor-pointer items-center gap-2"
            onClick={() => handleFilter(event.type)}>
            {/* <p className={event.borderStyle}></p> */}
            <div
              className={`flex items-center justify-center rounded-full`}
              style={{ color: event.borderStyle }}>
              <TiStarFullOutline className="h-7 w-7" />
            </div>
            <p className={`${event.textStyle} text-[20px]`}>{event.name}</p>{" "}
            {/* Smaller Text */}{" "}
          </div>
        );
      })}
    </>
  );
};

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const multiplier = 110;
  const hoursArray = Array.from({ length: 30 }, (_, i) => {
    const hour = (i % 12) + 1;
    const period = i < 12 ? "pm" : i > 22 ? "pm" : "am";
    return {
      id: `${i + 1}`,
      name: `${hour}${period}`,
      value: i * multiplier
    };
  });

  //calc total timeline width dynamically

  const totalWidth = (hoursArray.length - 1) * multiplier;

  return (
    <div className="relative w-full">
      {/* Event Labels and Border Section */}
      <div className="relative mb-7 flex">
        {/* Centering Container */}
        <div className="relative w-full max-w-[700px]">
          {/* Border Image */}
          <img
            src="/assets/borderEvents.svg"
            alt="Event Label Border"
            className="hidden h-auto w-full lg:block"
          />
          {/* Event Labels */}
          <div className="static inset-0 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 text-xl lg:absolute lg:flex-nowrap">
            <EventLabel
              events={events}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <section className="relative z-0 mb-12 mt-6 rounded-lg border border-gray-700 bg-opacity-25 p-4 font-semibold shadow-xl backdrop-blur-md">
        <div
          className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#72D6E6]"
          style={{
            maxWidth: "100%",
            overflowY: "hidden"
          }}>
          {/* Timeline Container */}
          <div
            className="relative ml-8 font-normal"
            style={{
              height: "800px",
              width: `${totalWidth}`
            }}>
            {/* Time Markers */}
            {hoursArray.map((hour) => (
              <TimeStamp key={hour.id} time={hour.name} value={hour.value} />
            ))}

            {/* Render Events */}
            {events.map((event: eventsType) => {
              const eventOpacity =
                selectedFilter === "all" || event.type === selectedFilter
                  ? 1
                  : 0.3;
              return (
                <div key={event.id} style={{ opacity: eventOpacity }}>
                  <Event event={event} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Calendar;
