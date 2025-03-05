// import React, { useState, useEffect } from "react";
import "../css/LandingPage.css";
import Pixels from "../assets/logo.png";
// import CountDownTimer from "../components/Hero/CountDownTimer.jsx";
import TextScramble from "../components/Hero/TextScramble.jsx";
import Timer from "../components/Hero/Timer.jsx";
import ContainerHover from "../components/Events/ContainerHover.jsx";
// import NavBar from "../components/NavBar.jsx";
import ContactUs from "./views/ContactUs.jsx";
import SponsorsCarousel from "../components/Sponsors/SponsorsCarousel";
import About from "./views/About.jsx";

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
      <div
        className="main-content h-screen w-full flex flex-col justify-center items-center"
        id="main-container"
      >
        {/* NavBar */}
        {/* <NavBar /> */}
        {/* NavBar */}

        {/* Hero Section */}
        <div className="Hero-Section flex flex-col items-center justify-center flex-grow">
          <div className="logo-container">
            <img src={Pixels} alt="Pixels_Logo" />
          </div>
          <div className="text-container">
            <h1 className="glitch" data-text="RERENDERED">
              RERENDERED
            </h1>
            <TextScramble phrases={phrases} />
          </div>
          <Timer />
          <div className="button-container">
            <button className="btn">
              <a href="team">Meet the Team</a>
            </button>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div
        className="patterned-section w-full flex flex-col gap-50 pt-[4rem] relative"
        id="Events-container"
      >
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka] header relative">
            Events
          </h1>
        </div>
        <div className="w-full">
          <ContainerHover />
        </div>
      </div>

      {/* Sponsors Section */}
      <div
        className="patterned-section w-full flex flex-col gap-50 pt-[4rem]"
        id="sponsors-container"
      >
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka] header relative">
            Sponsors
          </h1>
        </div>
        <SponsorsCarousel />
      </div>

      {/* Contact Section */}
      <div
        className="patterned-section w-full flex flex-col gap-50 pt-[4rem]"
        id="contact-container"
      >
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka] header relative">
            Contact
          </h1>
          <div className="w-full">
            <ContactUs />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className="patterned-section w-full flex flex-col gap-50 pt-[4rem]"
        id="about-container"
      >
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka] header relative">
            About
          </h1>
          <div className="w-full">
            <About />
          </div>
        </div>
      </div>

      {/* <div className="corner-titles">
        <div className="corner-title top-left">About</div>
        <div className="corner-title top-right">Events</div>
        <div className="corner-title bottom-left">Sponsors</div>
        <div className="corner-title bottom-right">Contact</div>
      </div> */}
    </div>
  );
};

export default LandingPage;
