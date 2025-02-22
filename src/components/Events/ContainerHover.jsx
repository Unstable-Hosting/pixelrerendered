// import React from 'react'
import EventContainer from "./EventsContainer";
import styles from "../../utils/events";
import { useNavigate } from "react-router-dom";

const ContainerHover = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      title: "Technical Events",
      description:
        "Dive into the world of technology with our cutting-edge technical events.",
      backgroundImage: "technical.gif",
    },
    {
      title: "Non-Technical Events",
      description: "Engage in exciting non-technical challenges that test your creativity, wit, and problem-solving abilities.",
      backgroundImage: "non-tech.gif",
    },
    {
      title: "Cultural Events",
      description:
        "Showcase your artistic talents and cultural prowess in our diverse range of cultural events.",
      backgroundImage: "cultural.gif",
    },
    {
      title: "Sports Events",
      description: "Compete in various sports events and showcase your athletic abilities.",
      backgroundImage: "sports.gif",
    },
    {
      title: "E-Sports Events",
      description: "Battle it out in the digital arena with our exciting E-Sports tournaments.",
      backgroundImage: "esports.gif",
    },
  ];

  const handleCardClick = (title) => {
    console.log("Navigating to:", `/events/${encodeURIComponent(title)}`); // Add this for debugging
    navigate(`/events/${encodeURIComponent(title)}`);
  };

  return (
    <div style={styles.container}>
      {cardData.map((card, index) => (
        <EventContainer
          handleClick={() => handleCardClick(card.title)}
          key={index}
          title={card.title}
          description={card.description}
          backgroundImage={card.backgroundImage}
        />
      ))}
    </div>
  );
};

export default ContainerHover;
