// import React from 'react'
import ContainerHover from "../components/Events/ContainerHover";
import "../css/EventsPage.css";

const EventsPage = () => {
  return (
    <div className="events-page">
      <div className="events-content">
        <div className="">
          <h1 className="text-6xl text-white font-[Blanka] header relative">
            Events
          </h1>
        </div>
        <div className="max-w-8xl mx-auto">
          <ContainerHover />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
