import React from 'react';
import HeaderBanner from '@/components/HeaderBanner';
import ParallaxImageSection from '@/components/ParallaxImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlug } from '@fortawesome/free-solid-svg-icons';

const OnGrid: React.FC = () => {
  return (
    <>
      <HeaderBanner
        title="On-Grid Solar Systems"
        subtitle="Grid-tied photovoltaic systems for reduced bills and energy export when available."
        backgroundImage="/src/assets/hero-bg-1.jpg"
      />

      <section className="container-fluid py-5">
        <div className="container">
          <h2 className="display-5">On-Grid (Grid-Tied) Systems</h2>
          <p className="text-muted">On-grid systems connect directly to the utility network and are ideal where grid power is reliable.</p>
          {/* <ParallaxImageSection imageUrl={'/src/assets/hero-bg-1.jpg'} overlay heading="On-Grid Systems" summary={'Grid-tied solar systems for saving on utility bills while remaining connected to the grid.'} /> */}

          <ParallaxImageSection imageUrl={'/src/assets/hero-bg-1.jpg'} heading="How it works" summary={'PV panels generate electricity which is consumed on-site and excess is exported to the grid.'} />
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title display-4"><FontAwesomeIcon icon={faPlug} className='text-primary' /> On-Grid (Grid-Tied)</h4>
              <p className="card-text">On-grid solar systems are connected directly to the public electricity grid. These systems allow your solar power station to exchange electricity with the utility grid. When your solar panels produce more power than you need, the excess energy is sent to the grid. When solar production is not enough, electricity is drawn automatically from the grid.</p>
              <p className="card-text">The exchange of energy is managed through net metering or Feed-in Tariff (FIT) systems, ensuring accurate billing and energy balance.</p>

              <div className='card-body'>
                <span className='badge mx-1 text-bg-primary'>on grid solar system</span>
                <span className='badge mx-1 text-bg-primary'>grid tied solar</span>
                <span className='badge mx-1 text-bg-primary'>rooftop solar panels</span>
                <span className='badge mx-1 text-bg-primary'>solar net metering</span>
              </div>
              <h6 className="display-6 mt-3">Benefits:</h6>
              <ul>
                <li>Reduced electricity bills through self-consumption</li>
                <li>Ability to export excess power to the utility grid</li>
                <li>Seamless transition between solar and grid power</li>
                <li>Lower installation cost (no batteries required)</li>
                <li>High efficiency and simple system design</li>
                <li>Ideal for areas with reliable grid availability</li>
                <li>Scalable — easy to expand later</li>
              </ul>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h4>Key Features</h4>
              <ul>
                <li>No battery required (lower cost)</li>
                <li>Export excess power to grid (net metering / FIT)</li>
                <li>Simple installation and fast ROI</li>
                <li>Scalable for future expansion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnGrid;
