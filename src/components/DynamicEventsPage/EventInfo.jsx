import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { eventData } from '../../utils/eventsData';
import '../../css/Eventinfo.css';

const EventInfo = () => {
  const { title, eventName } = useParams();
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventInfo = () => {
      const decodedTitle = decodeURIComponent(title);
      const decodedEventName = decodeURIComponent(eventName);
      const category = eventData.find(cat => cat.title === decodedTitle);
      if (category && category.details) {
        const event = category.details.find(evt => evt.name === decodedEventName);
        if (event) {
          setEventDetails(event);
        }
      }
    };
    fetchEventInfo();
  }, [title, eventName]);

  if (!eventDetails) {
    return (
      <div className="event-info-page">
        <div className="event-info-container">
          <h1 className="event-info-title">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="event-info-page">
      <div className="event-info-container">
        <h1 className="event-info-title">{eventDetails.name}</h1>
        
        {/* Event Details Section */}
        <div className="event-details-grid">
          <div className="event-info-card">
            <div className="event-info-section">
              <div className="info-label">Entry Fee</div>
              <div className="info-value">{eventDetails.entryFee}</div>
            </div>

            <div className="event-info-section">
              <div className="info-label">Mode</div>
              <div className="info-value">{eventDetails.mode}</div>
            </div>

            <div className="event-info-section">
              <div className="info-label">Type</div>
              <div className="info-value">{eventDetails.type}</div>
            </div>

            <div className="event-info-section">
              <div className="info-label">Participants</div>
              <div className="info-value">{eventDetails.participants}</div>
            </div>

            <div className="event-info-section">
              <div className="info-label">Venue</div>
              <div className="info-value">{eventDetails.venue}</div>
            </div>

            <div className="event-info-section">
              <div className="info-label">Time</div>
              <div className="info-value">{eventDetails.time}</div>
            </div>

            <div className="event-info-section">
              <div className="info-label">Prizes</div>
              <div className="info-value">{eventDetails.prizes}</div>
            </div>

            {eventDetails.prizeMoney && (
              <div className="event-info-section">
                <div className="info-label">Prize Money</div>
                <div className="info-value">
                  {Object.entries(eventDetails.prizeMoney).map(([position, prize]) => (
                    <div key={position}>
                      {position}: {prize}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {eventDetails.minimumParticipation && (
              <div className="event-info-section">
                <div className="info-label">Minimum Participation</div>
                <div className="info-value">{eventDetails.minimumParticipation}</div>
              </div>
            )}

            <div className="event-info-section">
              <div className="info-label">Description</div>
              <div className="info-value">{eventDetails.description}</div>
            </div>
          </div>

          {/* Rules Section */}
          {eventDetails.rules && (
            <div className="rules-card">
              <div className="rules-header">Rules & Guidelines</div>
              <div className="rules-container">
                {Object.entries(eventDetails.rules).map(([category, rules]) => (
                  <div key={category} className="rules-category">
                    <h3 className="rules-category-title">{category}</h3>
                    <ul className="rules-list">
                      {Array.isArray(rules) ? (
                        rules.map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))
                      ) : (
                        Object.entries(rules).map(([subCategory, subRules]) => (
                          <div key={subCategory}>
                            <h4>{subCategory}</h4>
                            <ul>
                              {subRules.map((rule, index) => (
                                <li key={index}>{rule}</li>
                              ))}
                            </ul>
                          </div>
                        ))
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <button className="register-button">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventInfo;