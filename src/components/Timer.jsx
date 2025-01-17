import React from "react";
import CountDownTimer from "./CountDownTimer.jsx";

const Timer = () => {
  return (
    <div className="mt-8">
      <div className="date">
        <p className="">Feb 28, 2025 - March 1, 2025</p>
      </div>
      <CountDownTimer />
    </div>
  );
};

export default Timer;
