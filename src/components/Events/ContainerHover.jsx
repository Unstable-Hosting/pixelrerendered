// import React from 'react'
import EventContainer from './EventsContainer';
import styles from '../../utils/events';
import { useNavigate } from 'react-router-dom';

const ContainerHover = () => {
    const navigate = useNavigate();
    const cardData = [
      { 
        title: 'Technical Events'  ,  
        description: 'Explore the majestic landscapes of deep geological wonders.',
        backgroundImage: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnJrN3MxdTk5ZGppczJyNXhmY3JkZzM3OWFtNGIyNzl6czc3Z3BvcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif'
      },
      { 
        title: 'Non-Technical Events', 
        description: 'Discover pristine shorelines and crystal clear waters.',
        backgroundImage: 'https://picsum.photos/240/320?random=2'
      },
      { 
        title: 'Cultural Events', 
        description: 'Experience tranquil waters reflecting the surrounding landscape.',
        backgroundImage: 'https://i.pinimg.com/originals/e6/2f/e0/e62fe0ca7401c7169801f6603a1d4b7b.gif'
      },
      { 
        title: 'Sports Events', 
        description: 'Witness the beauty of ancient and towering forests.',
        backgroundImage: 'https://i.pinimg.com/originals/22/dc/02/22dc02c55c76190ad9deed1e5c81426b.gif'
      },
      { 
        title: 'E-Sports Events', 
        description: 'Witness the beauty of ancient and towering forests.',
        backgroundImage: 'https://i.gifer.com/3PtI.gif'
      },
    ];

      const handleCardClick = (title) => {
        console.log('Navigating to:', `/events/${encodeURIComponent(title)}`); // Add this for debugging
        navigate(`/events/${encodeURIComponent(title)}`);
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