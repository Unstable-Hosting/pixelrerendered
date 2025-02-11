// import React from 'react';
import '../../css/SponsorsCarousel.css';

const SponsorsCarousel = () => {
  const sponsors = [
    { id: 1, image: "sponsor1.png", name: "Sponsor 1" },
    { id: 2, image: "sponsor2.png", name: "Sponsor 2" },
    { id: 3, image: "sponsor3.png", name: "Sponsor 3" },
    { id: 4, image: "sponsor4.png", name: "Sponsor 4" },
    { id: 5, image: "sponsor5.png", name: "Sponsor 5" },
    // Add more sponsors as needed
  ];

  // Create multiple copies for a seamless loop
  const createInfiniteLoop = () => {
    // Create 3 copies of the sponsors array for a smoother loop
    return [...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
      <div key={`${sponsor.id}-${index}`} className="sponsor-item">
        <img 
          src={sponsor.image} 
          alt={sponsor.name}
          className="sponsor-image"
        />
      </div>
    ));
  };

  return (
    <div className="sponsors-carousel">
      <div className="sponsors-container">
        <div className="sponsors-track">
          {createInfiniteLoop()}
        </div>
      </div>
    </div>
  );
};

export default SponsorsCarousel; 