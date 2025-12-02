import React from 'react';
import './Marquee.css';
import marqueeImage from '@/assets/aqtra-logos-marque.png';

const Marquee: React.FC = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        <img src={marqueeImage} alt="Marquee" />
        <img src={marqueeImage} alt="Marquee" />
        <img src={marqueeImage} alt="Marquee" />
      </div>
    </div>
  );
};

export default Marquee;