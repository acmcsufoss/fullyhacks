import { eventLabel, eventsType } from "@/types/interface";
import React from "react";

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
      {time == "12am" && (
        <p className="absolute left-[1085px] top-[-10px] font-bold">Sun</p>
      )}
      <div
        style={{ left: value }}
        className="absolute top-10 h-[100%] w-[1px] bg-slate-400">
        <p className="absolute top-[-25px] translate-x-[-50%]">{time}</p>
      </div>
    </>
  );
};

interface EventProps {
  event: eventsType;
}

const Event: React.FC<EventProps> = ({ event }) => {
  const width = (event.endTime - event.startTime) * 100;
  const left = event.startTime * 100;
  const top = event.row * 100;
  return (
    <>
      {/* start bar */}
      <p
        style={{ left: event.startTime * 100, top: top + 46 }}
        className={`absolute z-[11] h-2 w-2 rounded-[50%] ${
          event.type == "event"
            ? "bg-sky_300"
            : event.type == "workshop"
              ? "bg-pink_300"
              : event.type == "food"
                ? "bg-orange-500"
                : "bg-blue_300"
        }`}></p>
      <div style={{ left: left, top: top }} className="absolute text-sm">
        <p className="font-bold">{event.name}</p>
        <div
          className={`mb-2 flex gap-2 font-semibold ${
            event.type == "event"
              ? "text-sky_300"
              : event.type == "workshop"
                ? "text-pink_300"
                : event.type == "food"
                  ? "text-orange-500"
                  : "text-blue_300"
          }`}>
          <p className="">{event.timeString} |</p>
          <p className="">{event.location}</p>
        </div>
        {/* duration bar */}
        <p
          style={{ width: width }}
          className={`absolute h-1 rounded-md ${
            event.type == "event"
              ? "bg-sky_100"
              : event.type == "workshop"
                ? "bg-pink_100"
                : event.type == "food"
                  ? "bg-orange_300"
                  : "bg-blue_300"
          }`}></p>
      </div>
      {/* end bar */}
      <p
        style={{ left: event.endTime * 100 - 5, top: top + 46 }}
        className={`absolute z-[11] h-2 w-2 rounded-[50%] ${
          event.type == "event"
            ? "bg-sky_300"
            : event.type == "workshop"
              ? "bg-pink_300"
              : event.type == "food"
                ? "bg-orange-500"
                : "bg-blue-700"
        }`}></p>
    </>
  );
};
interface EventLableProps {
  setFilteredEvent?: any;
  events?: eventsType[];
}
export const EventLabel: React.FC<EventLableProps> = ({
  events,
  setFilteredEvent
}) => {
  const eventLabels: eventLabel[] = [
    {
      id: "e1",
      name: "All",
      type: "all",
      borderStyle: "w-[1rem] bg-white p-2 rounded-[50%]",
      textStyle: "text-white font-bold"
    },
    {
      id: "e2",
      name: "Main event",
      type: "event",
      borderStyle: "w-[1rem] bg-sky_300 p-2 rounded-[50%]",
      textStyle: "text-sky_300 font-bold"
    },
    {
      id: "e3",
      name: "Workshops",
      type: "workshop",
      borderStyle: "w-[1rem] bg-pink_300 p-2 rounded-[50%]",
      textStyle: "text-pink_300 font-bold"
    },
    {
      id: "e4",
      name: "Food",
      type: "food",
      borderStyle: "w-[1rem] bg-orange-400 p-2 rounded-[50%]",
      textStyle: "text-orange-400 font-bold"
    },
    {
      id: "e5",
      name: "Fun",
      type: "fun",
      borderStyle: "w-[1rem] bg-blue_300 p-2 rounded-[50%]",
      textStyle: "text-blue_300 font-bold"
    }
  ];

  const handleFilter = (name: string) => {
    let filtered = events?.filter(
      (e: eventsType) => name === "all" || e.type === name
    );

    if (filtered !== undefined) {
      setFilteredEvent(filtered);
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
            <p className={event.borderStyle}></p>
            <p className={event.textStyle}>{event.name}</p>
          </div>
        );
      })}
    </>
  );
};

const Calendar: React.FC<CalendarProps> = ({
  events,
  filteredEvent,
  setFilteredEvent
}) => {
  const hoursArray = Array.from({ length: 30 }, (_, i) => {
    const hour = (i % 12) + 1;
    const period = i < 12 ? "pm" : i > 22 ? "pm" : "am";
    const name = i === 11 ? "12am" : `${hour}${period}`;
    const value = i === 0 ? 0 : i;
    return {
      id: `${i + 1}`,
      name: name,
      value: value * 100
    };
  });
  const setAllEvent = () => {
    setFilteredEvent(events);
  };
  return (
    <section className="mb-12 w-[70%] rounded-lg border border-gray-300 border-opacity-25 bg-opacity-25 p-4 font-semibold text-purple_main shadow-xl backdrop-blur-md backdrop-filter">
      <div className="flex flex-wrap items-center gap-4 border-b-2 py-2 md:gap-8">
        <p className="cursor-pointer" onClick={setAllEvent}>
          All events
        </p>
        <EventLabel events={events} setFilteredEvent={setFilteredEvent} />
      </div>
      <div className="w-full gap-10 overflow-x-scroll">
        <div className="relative ml-8 mt-8 h-[600px] w-[3200px] font-normal md:h-[800px]">
          <p className="absolute left-[-15px] top-[-10px] font-bold">Sat</p>
          {/* schedule marker */}
          {hoursArray.map((hour) => {
            return (
              <TimeStamp key={hour.id} time={hour.name} value={hour.value} />
            );
          })}
          {filteredEvent.map((event: eventsType) => {
            return <Event key={event.id} event={event} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
