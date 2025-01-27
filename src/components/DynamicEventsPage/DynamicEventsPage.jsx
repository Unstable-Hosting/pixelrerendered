import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar.jsx';
import '../../css/card.css'; 
import { eventData } from '../../css/eventsData';

const DynamicEventsPage = () => {
  const { title } = useParams(); // Get the title from the URL parameters
  const [loading, setLoading] = useState(true);
  const [eventDetails, setEventDetails] = useState(null);

  // const eventData = [
  //   {
  //     title: 'Technical Events',
  //     description: 'Dive into the world of technology with our cutting-edge technical events. From coding challenges to hardware hacking, showcase your technical prowess.',
  //     backgroundImage: 'https://picsum.photos/240/320?random=4',
  //     details: [
  //       { name: 'Competitive Programming', time: '10:00 AM', venue: 'Lab 1' },
  //       { name: 'Web Development', time: '2:00 PM', venue: 'Lab 2' },
  //       { name: 'App Development', time: '11:00 AM', venue: 'Lab 3' },
  //       { name: 'Machine Learning', time: '3:00 PM', venue: 'Lab 4' }
  //     ]
  //   },
  //   {
  //     title: 'Cultural Event',
  //     description: 'Experience tranquil waters reflecting the surrounding landscape.',
  //     backgroundImage: 'https://picsum.photos/240/320?random=4'
  //   },
  //   {
  //     title: 'Sports Event',
  //     description: 'Experience tranquil waters reflecting the surrounding landscape.',
  //     backgroundImage: 'https://picsum.photos/240/320?random=4'
  //   },
  // ]

  useEffect(() => {
    const fetchEventDetails = () => {
      const decodedTitle = decodeURIComponent(title);
      const event = eventData.find(event => event.title === decodedTitle);
      
      if (event) {
        setEventDetails(event);
      }
      setLoading(false);
    };

    fetchEventDetails();
  }, [title]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!eventDetails) {
    return <div className="error">Event not found</div>;
  }

  return (
    <div className="event-page">
      <h1 className="event-page-title">{eventDetails.title}</h1>
      
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
            <div className="event-description">
              {eventDetails.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicEventsPage