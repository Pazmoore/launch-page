"use client";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // Expected format: "YYYY-MM-DDTHH:mm:ssZ"
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (isNaN(targetTime) || difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center mt-5">
      <p className="text-2xl font-semibold mb-4 text-white">
        Countdown till launch:
      </p>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {Object.entries(timeLeft).map(([unit, value], index, arr) => (
          <div key={unit} className="flex items-center">
            {/* Value Box */}
            <div
              className="text-white flex flex-wrap flex-col items-center justify-center p-1 lg:px-4 lg:py-2 rounded-lg shadow-lg backdrop-blur-md">
              <span className="lg:text-4xl text-2xl font-semibold">{value}</span>
              <span className="text-sm uppercase">{unit}</span>
            </div>

            {/* Colon Separator */}
            {index < arr.length - 1 && (
              <span
              className="text-white flex flex-wrap flex-col items-center justify-center p-1 lg:px-4 lg:py-2 rounded-lg shadow-lg backdrop-blur-md">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
