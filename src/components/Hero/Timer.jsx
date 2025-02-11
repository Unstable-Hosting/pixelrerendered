// import React from "react";
import CountDownTimer from "./CountDownTimer.jsx";

const Timer = () => {
  return (
    <div className="mt-8 w-full">
      <div className="date">
        <p className="text-center">28 Feb 2025 - 1 March 2025</p>
      </div>
      <CountDownTimer />
    </div>
  );
};

export default Timer;
