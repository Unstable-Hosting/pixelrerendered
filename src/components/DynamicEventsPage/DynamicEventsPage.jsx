import React from 'react'
import { useParams } from 'react-router-dom';


const DynamicEventsPage = () => {
  const { title } = useParams(); // Get the title from the URL parameters

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{decodeURIComponent(title)}</h1> {/* Display the title */}
      {/* Add more content related to the dynamic page here */}
      <p>This is the dynamic content for the {decodeURIComponent(title)} event.</p>
    </div>
  );
}

export default DynamicEventsPage