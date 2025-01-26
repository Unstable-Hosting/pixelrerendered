import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar.jsx';


const DynamicEventsPage = () => {
  const { title } = useParams(); // Get the title from the URL parameters
  const eventData = [
    {
      title: 'Technical Event',
      description: 'Experience tranquil waters reflecting the surrounding landscape.',
      backgroundImage: 'https://picsum.photos/240/320?random=4'
    },
    {
      title: 'Cultural Event',
      description: 'Experience tranquil waters reflecting the surrounding landscape.',
      backgroundImage: 'https://picsum.photos/240/320?random=4'
    },
    {
      title: 'Sports Event',
      description: 'Experience tranquil waters reflecting the surrounding landscape.',
      backgroundImage: 'https://picsum.photos/240/320?random=4'
    },
  ]

  // useEffect(()=>{

  // })
  return (
    <div className="p-4">
      <NavBar />
      <h1 className="text-4xl font-bold">{decodeURIComponent(title)}</h1>
      <div className="">

      </div>
    </div>
  );
}

export default DynamicEventsPage