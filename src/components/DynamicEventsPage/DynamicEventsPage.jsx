import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../css/card.css";
import { eventData } from "../../utils/eventsData";

const DynamicEventsPage = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = () => {
      const decodedTitle = decodeURIComponent(title);
      const event = eventData.find((event) => event.title === decodedTitle);

      if (event) {
        setEventDetails(event);
      }
      setLoading(false);
    };

    fetchEventDetails();
  }, [title]);

  const handleParticipateClick = (eventName) => {
    console.log("Navigating to:", `/event-info/${encodeURIComponent(title)}/${encodeURIComponent(eventName)}`);
    navigate(`/event-info/${encodeURIComponent(title)}/${encodeURIComponent(eventName)}`);
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!eventDetails) {
    return <div className="error">Event not found</div>;
  }

  return (
    <div className="event-page">
      <h1 className="event-page-title text-white text-6xl font-[Blanka] relative max-w-6xl mx-auto">
        {eventDetails.title}
      </h1>

      <div className="event-grid">
        {eventDetails.details.map((detail, index) => (
          <div key={index} className="event-card">
            <h2 className="event-name">{detail.name}</h2>
            <div className="event-details">
              <p>
                <strong>Time:</strong> {detail.time}
              </p>
              <p>
                <strong>Venue:</strong> {detail.venue}
              </p>
            </div>
            <div className="event-description">{eventDetails.description}</div>
            <button 
              className="participate-button"
              onClick={() => handleParticipateClick(detail.name)}
            >
              Participate Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicEventsPage;
