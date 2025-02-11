import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../../utils/events';

const EventContainer = ({ title, description, backgroundImage, handleClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const card = cardRef.current;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleCardClick = (e) => {
    e.preventDefault();
    handleClick();
  };

  const cardStyle = {
    transform: `
      perspective(800px) 
      rotateY(${mousePosition.x / 10}deg) 
      rotateX(${-mousePosition.y / 10}deg) 
      scale(${mousePosition.x === 0 && mousePosition.y === 0 ? 1 : 1.02})
    `,
    boxShadow: mousePosition.x === 0 && mousePosition.y === 0 
      ? 'rgba(0, 0, 0, 0.1) 0 0 10px' 
      : 'rgba(0, 0, 0, 0.2) 0 0 20px'
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    transform: `
      translateX(${-mousePosition.x / 6}px) 
      translateY(${-mousePosition.y / 6}px) 
      scale(${mousePosition.x === 0 && mousePosition.y === 0 ? 1 : 1.05})
    `,
    opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0.5 : 0.7
  };

  return (
    <div 
      style={styles.cardWrap}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
    >
      <div 
        ref={cardRef} 
        style={{
          ...styles.card,
          ...cardStyle
        }}
      >
        <div 
          style={{
            ...styles.cardBg,
            ...backgroundStyle
          }}
        />
        <div style={{
          ...styles.cardInfo,
          opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0.7 : 1,
          transform: `
            translateY(${mousePosition.x === 0 && mousePosition.y === 0 ? '40%' : '0'})
          `
        }}>
          <h1 style={styles.cardInfoTitle}>{title}</h1>
          <p style={{
            ...styles.cardInfoDescription,
            opacity: mousePosition.x === 0 && mousePosition.y === 0 ? 0 : 1
          }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
EventContainer.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default EventContainer;