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
        "Explore the majestic landscapes of deep geological wonders.",
      backgroundImage: "technical.gif",
    },
    {
      title: "Non-Technical Events",
      description: "Discover pristine shorelines and crystal clear waters.",
      backgroundImage: "https://picsum.photos/240/320?random=2",
    },
    {
      title: "Cultural Events",
      description:
        "Experience tranquil waters reflecting the surrounding landscape.",
      backgroundImage: "cultural.gif",
    },
    {
      title: "Sports Events",
      description: "Witness the beauty of ancient and towering forests.",
      backgroundImage: "sports.gif",
    },
    {
      title: "E-Sports Events",
      description: "Witness the beauty of ancient and towering forests.",
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
