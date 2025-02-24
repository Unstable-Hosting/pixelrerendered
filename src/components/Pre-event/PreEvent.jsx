import { useEffect, useRef } from 'react';
import '../../css/PreEvent.css';
import Pixels from "../../assets/logo.png";
import bgGif from "../../assets/image4.gif"; // Background GIF
import rickRollAudio from "../../assets/rick_roll.mp3"; // Import the audio file

const PreEvent = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt to play audio when the component mounts
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    };

    // Start playing muted audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }

    // Add an event listener to unmute audio on user interaction
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // Unmute the audio
        playAudio(); // Play audio after unmuting
      }
      window.removeEventListener('click', handleUserInteraction); // Remove the listener after the first interaction
    };

    window.addEventListener('click', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div className="pre-event-container" style={{ backgroundImage: `url(${bgGif})` }}>
      <audio ref={audioRef} loop autoPlay muted>
        <source src={rickRollAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="logo">
        <img src={Pixels} alt="Pixels Logo" />
      </div>
      
      <div className="rickroll">
        <img src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif" alt="Never Gonna Give You Up" />
      </div>
      
      <div className="content">
        <div className="glitch-wrapper">
          <h1 className="presents cyberpunk-text">PIXELS PRESENTS</h1>
        </div>
        <h2 className="event-name neon-text">DJ NIGHT</h2>
        <div className="event-details retro-text">
          <p className="venue">VENUE - CANTEEN AREA</p>
          <p className="time">TODAY AT 4 PM TO 7 PM</p>
        </div>
      </div>
    </div>
  );
}

export default PreEvent;