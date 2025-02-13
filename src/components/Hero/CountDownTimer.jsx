import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fix the target date format - note that months are 0-based in JavaScript
    const targetDate = new Date("2025-03-06T18:29:00Z"); // February 18, 2025, 24:22:00

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        // Calculate time units
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Timer completed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });

        // Fire confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.9 },
          colors: ["#FF00FF", "#00FFFF", "#FF69B4", "#4169E1"],
        });

        // Clear the interval when done
        return true;
      }
      return false;
    };

    // Calculate immediately
    const isDone = calculateTimeLeft();
    if (isDone) return;

    // Set up the interval
    const timerId = setInterval(() => {
      const isDone = calculateTimeLeft();
      if (isDone) {
        clearInterval(timerId);
      }
    }, 1000);

    // Cleanup
    return () => clearInterval(timerId);
  }, []); // Empty dependency array since we don't need to recreate the effect

  return (
    <div className="w-full flex items-center justify-center">
      <div className="">
        <ul className="countdown">
          {[
            { value: timeLeft.days, label: "DAYS" },
            { value: timeLeft.hours, label: "HOURS" },
            { value: timeLeft.minutes, label: "MINUTES" },
            { value: timeLeft.seconds, label: "SECONDS" },
          ].map((item, index) => (
            <li key={index} className="flex flex-col items-center">
              <div className="number text-7xl font-bold text-white font-mono">
                {item.value.toString().padStart(2, "0")}
              </div>
              <div className="label mt-2 text-cyan-400 font-mono tracking-widest text-sm">
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountDownTimer;
