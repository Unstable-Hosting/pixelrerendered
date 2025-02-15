// import React from 'react';
import '../../css/About.css';
import qrCode from '../../assets/Instagram handle.png'; // Import the image

function About() {
  return (
    <div className="about-container about-theme">
      <div className="cyber-grid"></div>
      <section className="hero-section">
      </section>
      
      <section className="content-section">
        <div className="about-card siescoms">
          <h2 className="neon">SIESCOMS</h2>
          <p>The SIES College of Management Studies (SIESCOMS) was established in 1995. SIESCOMS envisages providing quality management education for the nascent professionals, the dynamic future managers for 21st century.</p>
          <p>SIESCOMS&apos;s foundation maps its roots to the rich tradition of South India Education Society (SIES), one of the oldest and value-based educational trusts that run a number of educational institutes in the city of Mumbai and Navi Mumbai.</p>
          
          <div className="achievement">
            <h3 className="neon">Achievements</h3>
            <ul>
              <li>ISO 9001:2015 Certification for quality management education by Lloyd Register Quality Assurance (LRQA)</li>
              <li>Prestigious Ramakrishna Bajaj National Quality (RBNQ) award for the year 2008 in the &quot;Education&quot; category. This is the only award developed in the country on the lines of the Malcolm-Balridge National Quality Award.</li>
            </ul>
          </div>
        </div>

        <div className="about-card pixels">
          <h2 className="neon">What is Pixels?</h2>
          <p>Pixels is a prestigious annual event organized by the MCA department of SIES College of Management Studies (SIESCOMS), Navi Mumbai. It aims to foster innovation, technical skills, and collaboration among students and the broader tech community.</p>
          
          <div className="pixels-history">
            <h3 className="neon">The History of Pixels</h3>
            <div className="history-item">
              <h4>Inception</h4>
              <p>Launched by the MCA department to foster technical skills and collaboration.</p>
            </div>
            <div className="history-item">
              <h4>Previous Editions</h4>
              <p>Last held in 2019, gaining popularity for its vibrant events and participation.</p>
            </div>
            <div className="history-item">
              <h4>Pause and Revival</h4>
              <p>After a 4-year hiatus, Pixels is back with enhanced features and larger-scale events.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="qr-section">
        <h2 className="neon">Follow Us on Instagram!</h2>
        <img src={qrCode} alt="Instagram QR Code" className="qr-code" />
      </section>
    </div>
  );
}

export default About;
