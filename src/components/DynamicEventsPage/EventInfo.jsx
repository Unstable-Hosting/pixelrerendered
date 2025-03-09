import { useEffect, useState } from 'react';
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
// Onclick function -- Redirect to Google Forms
  // const handleRegistration = () => {
  //   if (eventDetails.registrationLink) {
  //     window.open(eventDetails.registrationLink, '_blank');
  //   }
  // };

  return (
    <div className="event-info-page">
      <div className="event-info-container">
        <h1 className="event-info-title">{eventDetails.name}</h1>
        
        {/* Event Details Section */}
        <div className="event-details-grid">
          <div className="event-info-card">
            <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Entry Fee</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.entryFee}</p>
              </div>
            </div>

            <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Mode</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.mode}</p>
              </div>
            </div>

            <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Type</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.type}</p>
              </div>
            </div>

            <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Participants</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.participants}</p>
              </div>
            </div>

            <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Venue</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.venue}</p>
              </div>
            </div>

            <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Time</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.time}</p>
              </div>
            </div>

{/*             <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Prizes</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.prizes}</p>
              </div>
            </div> */}

            {eventDetails.prizeMoney && (
              <div className="event-info-section">
                <div className="info-label">
                  <p className="text-[1.2rem] font-[Orbitron]">Prize Money</p>
                </div>
                <div className="info-value">
                  {Object.entries(eventDetails.prizeMoney).map(([position, prize]) => (
                    <p key={position} className="text-[1rem]">
                      {position}: {prize}
                    </p>
                  ))}
                </div>
              </div>
            )}

{/*             {eventDetails.minimumParticipation && (
              <div className="event-info-section">
                <div className="info-label">
                  <p className="text-[1.2rem] font-[Orbitron]">Minimum Participation</p>
                </div>
                <div className="info-value">
                  <p className="text-[1rem]">{eventDetails.minimumParticipation}</p>
                </div>
              </div>
            )} */}

            <div className="event-info-section">
              <div className="info-label">
                <p className="text-[1.2rem] font-[Orbitron]">Description</p>
              </div>
              <div className="info-value">
                <p className="text-[1rem]">{eventDetails.description}</p>
              </div>
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

        <button className="register-button" >
          Registrations Closed
        </button>
      </div>
    </div>
  );
};

export default EventInfo;
