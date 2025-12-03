import React from 'react';
import './ServiceVideoSection.css';

interface ServiceVideo {
  videoUrl: string;
  title: string;
  logoUrl: string;
}

interface ServiceVideoSectionProps {
  services: ServiceVideo[];
}

const ServiceVideoSection: React.FC<ServiceVideoSectionProps> = ({ services }) => {
  return (
    <section className="service-video-section">
      <div className="service-video-grid">
        {services.map((service, index) => (
          <div key={index} className="service-video-box">
            <div className="video-container">
              <video className="service-video" src={service.videoUrl} loop muted autoPlay />
              <img src={service.logoUrl} alt="Service Logo" className="service-logo" />
            </div>
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceVideoSection;