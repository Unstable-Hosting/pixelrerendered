import React from 'react'
import EventContainer from './EventsContainer';
import styles from '../../css/events';
import { useNavigate } from 'react-router-dom';

const ContainerHover = () => {
    const navigate = useNavigate();
    const cardData = [
        { 
          title: 'Technical Events'  ,  
          description: 'Explore the majestic landscapes of deep geological wonders.',
          backgroundImage: 'https://picsum.photos/240/320?random=1'
        },
        { 
          title: 'Non-Technical', 
          description: 'Discover pristine shorelines and crystal clear waters.',
          backgroundImage: 'https://picsum.photos/240/320?random=2'
        },
        { 
          title: 'Cultural', 
          description: 'Experience tranquil waters reflecting the surrounding landscape.',
          backgroundImage: 'https://picsum.photos/240/320?random=4'
        },
        { 
          title: 'Sports', 
          description: 'Witness the beauty of ancient and towering forests.',
          backgroundImage: 'https://picsum.photos/240/320?random=3'
        },
        { 
          title: 'E-Sports', 
          description: 'Witness the beauty of ancient and towering forests.',
          backgroundImage: 'https://picsum.photos/240/320?random=3'
        },
      ];

      const handleCardClick = (title) => {
        navigate(`/events/${encodeURIComponent(title)}`); // Redirect to the Dynamic Page with title
      };
  
      return (
        <div style={styles.container}>
          {cardData.map((card, index) => (
            <EventContainer 
              handleClick={()=>handleCardClick(card.title)}
              key={index}
              title={card.title}
              description={card.description}
              backgroundImage={card.backgroundImage}
            />
          ))}
        </div>
      );
}

export default ContainerHover