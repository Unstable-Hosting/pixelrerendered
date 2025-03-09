// import React from 'react';
import "../../css/SponsorsCarousel.css";
import Dwariks from "../../assets/Dwarika.png";
import Construction from "../../assets/Construction.jpg";
import Upgrad from "../../assets/Upgrad.jpg";
import Technovation from "../../assets/technovation.jpg";
import Pizza from "../../assets/Pizza.png";
import Krafton from "../../assets/Krafton.png";

const SponsorsCarousel = () => {
  const sponsors = [
    { id: 1, image: Dwariks, name: "Dwarika" },
    { id: 2, image: Construction, name: "Satyam Enterprises" },
    { id: 3, image: Krafton, name: "Krafton" },
    { id: 4, image: Upgrad, name: "Upgrad" },
    // { id: 4, image: "sponsor4.png", name: "Krafton" },
    // { id: 5, image: "sponsor5.png", name: "Suyash Construction" },
    // { id: 5, image: "sponsor5.png", name: "Pro Gamers Cafe" },
    { id: 5, image: Technovation, name: "Netweaver Technovations Pvt. Ltd." },
    { id: 6, image: Pizza, name: "Happy Town Pizza" },
    // { id: 5, image: "sponsor5.png", name: "S Delight Cafe" }
  ];

  // Create multiple copies for a seamless loop
  const createInfiniteLoop = () => {
    // Create 3 copies of the sponsors array for a smoother loop
    return [...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
      <div key={`${sponsor.id}-${index}`} className="sponsor-item">
        <img src={sponsor.image} alt={sponsor.name} className="sponsor-image" />
      </div>
    ));
  };

  return (
    <div className="sponsors-carousel">
      <div className="sponsors-container">
        <div className="sponsors-track">{createInfiniteLoop()}</div>
      </div>
    </div>
  );
};

export default SponsorsCarousel;
