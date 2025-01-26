import React, { useState, useEffect } from "react";
import "../css/LandingPage.css";
import Pixels from "../assets/logo.png";
import CountDownTimer from "../components/Hero/CountDownTimer.jsx";
import TextScramble from "../components/Hero/TextScramble.jsx";
import Timer from "../components/Hero/Timer.jsx";
import ContainerHover from "../components/Events/ContainerHover.jsx";

const LandingPage = () => {
  const phrases = [
    "REIGNITING",
    "SPARK",
    "PIXELS",
    "REIGNITING THE SPARK",
    "Back to the Future",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="main-content" id="about-container">
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo/Home */}
              <a href="/" className="text-white hover:text-gray-300 transition-colors text-xl">
                PIXELS
              </a>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" onClick={(e) => handleScroll(e, 'about-container')} 
                   className="text-white hover:text-gray-300 transition-colors text-xl">
                  About
                </a>
                <a onClick={(e) => handleScroll(e, 'Events-container')} 
                   className="text-white hover:text-gray-300 transition-colors text-xl cursor-pointer">
                  Events
                </a>
                <a href="#sponsors" onClick={(e) => handleScroll(e, 'sponsors-container')} 
                   className="text-white hover:text-gray-300 transition-colors text-xl">
                  Sponsors
                </a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact-container')} 
                   className="text-white hover:text-gray-300 transition-colors text-xl">
                  Contact
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-gray-300 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/40 rounded-lg mt-2">
                  <a
                    href="#about"
                    onClick={(e) => handleScroll(e, 'about-container')}
                    className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
                  >
                    About
                  </a>
                  <a
                    onClick={(e) => handleScroll(e, 'Events-container')}
                    className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors cursor-pointer"
                  >
                    Events
                  </a>
                  <a
                    href="#sponsors"
                    onClick={(e) => handleScroll(e, 'sponsors-container')}
                    className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
                  >
                    Sponsors
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, 'contact-container')}
                    className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="Hero-Section">
        <div className="logo-container">
          <img src={Pixels} alt="Pixels_Logo" />
        </div>
        <div className="text-container">
          <h1 className="glitch" data-text="RERENDERED">
            RERENDERED
          </h1>
          {/* <h2 className="glitch">REIGNITING THE SPARK</h2> */}
          <TextScramble phrases={phrases} />
        </div>
        <Timer />
        <div className="button-container">
          <button className="btn">
            <a href="#">Meet the Team</a>
          </button>
        </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="w-full flex flex-col gap-50 pt-[4rem]" id="Events-container">
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka]">Events</h1>
        </div>
        <div className="w-full">
          <ContainerHover/>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="w-full flex flex-col gap-50 pt-[4rem]" id="sponsors-container">
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka]">Sponsors</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full flex flex-col gap-50 pt-[4rem]" id="contact-container">
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka]">Contact</h1>
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
