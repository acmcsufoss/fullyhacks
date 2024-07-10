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
  const targetDate = new Date("2024-02-24T13:00:00");
  const [time, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="z-[11] grid lg:grid-flow-col md:grid-flow-col gap-2 md:gap-10 text-center auto-cols-max font-ohm font-medium mt-12">
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3">
        <span className="countdown text-4xl md:text-6xl">
          <span style={{ "--value": time.days } as CSSProperties}></span>
        </span>
      </div>
      <span className="colon text-5xl md:text-7xl">:</span>
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3">
        <span className="countdown text-4xl md:text-6xl">
          <span style={{ "--value": time.hours } as CSSProperties}></span>
        </span>
      </div>
      <span className="colon text-5xl md:text-7xl">:</span>
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3">
        <div className="flex items-center">
          <span className="countdown text-4xl md:text-6xl">
            <span style={{ "--value": time.minutes } as CSSProperties}></span>
          </span>
        </div>
      </div>
      <span className="colon text-5xl md:text-7xl">:</span>
      <div className="flex flex-col items-center justify-center text-blue_neon bg-blue_dark rounded-xl p-3">
        <div className="flex items-center">
          <span className="countdown text-4xl md:text-6xl">
            <span style={{ "--value": time.seconds } as CSSProperties}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
