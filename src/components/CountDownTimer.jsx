import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date here
    const targetDate = new Date("2025-01-18T23:59:59"); // Example: Dec 31, 2024

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <ul className="countdown">
        <li>
          <div className="number">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="label">Days</div>
        </li>
        <li>
          <div className="number">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="label">Hours</div>
        </li>
        <li>
          <div className="number">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="label">Minutes</div>
        </li>
        <li>
          <div className="number">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="label">Seconds</div>
        </li>
      </ul>
    </div>
  );
};

export default CountDownTimer;
