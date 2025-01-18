import React, { useState, useEffect } from "react";
import "../css/LandingPage.css";
import Pixels from "../assets/logo.png";
import CountDownTimer from "../components/CountDownTimer.jsx";
import TextScramble from "../components/TextScramble.jsx";
import Timer from "../components/Timer.jsx";

const LandingPage = () => {
  const phrases = [
    "REIGNITING",
    "SPARK",
    "PIXELS",
    "REIGNITING THE SPARK",
    "Back to the Future",
  ];

  return (
    <div className="landing-page">
      <div className="main-content">
        <div className="logo-container">
          <img src={Pixels} alt="Pixels_Logo" />
        </div>
        <div className="text-container">
          <h1 className="glitch" data-text="RERENDERED">
            RERENDERED
          </h1>
          {/* <h2 className="glitch">REIGNITING THE SPARK</h2> */}
          {/* <TextScramble phrases={phrases} /> */}
        </div>
        <Timer />
        <div className="button-container">
          <button className="btn">
            <a href="#">Meet the Team</a>
          </button>
        </div>
      </div>

      <div className="corner-titles">
        <div className="corner-title top-left">About</div>
        <div className="corner-title top-right">Events</div>
        <div className="corner-title bottom-left">Sponsors</div>
        <div className="corner-title bottom-right">Contact</div>
      </div>
    </div>
  );
};

export default LandingPage;
