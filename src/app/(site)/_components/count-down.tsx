import React, { useEffect, useState } from "react";
import { CSSProperties } from "react";
interface TimeState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (targetDate: Date) => {
  const difference: any = +new Date(targetDate) - +new Date();

  let timeLeft: TimeState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};
const CountDown = () => {
  const targetDate = new Date("2024-02-24T00:00:00");
  const [time, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="z-[11] mt-12 flex flex-col items-center justify-center text-center font-medium">
      <div>
        <p>TIME UNTIL LIFTOFF</p>
      </div>
      <div className="z-[11] grid auto-cols-max grid-flow-col text-center font-medium">
        <div className="flex flex-col items-center justify-center rounded-xl">
          <span className="countdown text-lg md:text-5xl">
            <span style={{ "--value": time.days } as CSSProperties}></span>d
          </span>
        </div>
        <span className="mx-2 flex h-full items-center justify-center pb-1 text-4xl md:mx-4 md:pb-2 md:text-6xl">
          :
        </span>
        <div className="flex flex-col items-center justify-center rounded-xl">
          <span className="countdown text-lg md:text-5xl">
            <span style={{ "--value": time.hours } as CSSProperties}></span>h
          </span>
        </div>
        <span className="mx-2 flex h-full items-center justify-center pb-1 text-4xl md:mx-4 md:pb-2 md:text-6xl">
          :
        </span>
        <div className="flex flex-col items-center justify-center rounded-xl">
          <div className="flex items-center">
            <span className="countdown text-lg md:text-5xl">
              <span style={{ "--value": time.minutes } as CSSProperties}></span>
              m
            </span>
          </div>
        </div>
        <span className="mx-2 flex h-full items-center justify-center pb-1 text-4xl md:mx-4 md:pb-2 md:text-6xl">
          :
        </span>
        <div className="rounded-xltext-blue_neon flex flex-col items-center justify-center">
          <div className="flex items-center">
            <span className="countdown text-lg md:text-5xl">
              <span style={{ "--value": time.seconds } as CSSProperties}></span>
              s
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
