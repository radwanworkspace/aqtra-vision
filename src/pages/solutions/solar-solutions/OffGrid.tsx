import React from 'react';
import HeaderBanner from '@/components/HeaderBanner';
import ParallaxImageSection from '@/components/ParallaxImageSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';

const OffGrid: React.FC = () => {
  return (
    <>
      <HeaderBanner
        title="Off-Grid Solar Systems"
        subtitle="Standalone systems with battery storage and optional backup generation."
        backgroundImage="/src/assets/hero-bg-3.jpg"
      />

      <section className="container-fluid py-5">
        <div className="container">
          <h2 className="display-5">Off-Grid (Standalone) Systems</h2>
          <p className="text-muted">Designed for locations without reliable grid access — includes PV, batteries and controllers.</p>
          {/* <ParallaxImageSection imageUrl={'/src/assets/hero-bg-3.jpg'} overlay heading="Off-Grid Systems" summary={'Fully independent solar systems with battery storage and backup generation.'} /> */}

          <ParallaxImageSection imageUrl={'/src/assets/hero-bg-3.jpg'} heading="Use Cases" summary={'Rural houses, telecom, remote facilities and sites where grid connection is unavailable or costly.'} />
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title display-4"><FontAwesomeIcon icon={faCarBattery} className='text-primary' /> Off-Grid Solar System (Standalone)</h4>
              <p className="card-text">
                Off-grid systems are designed for locations without reliable grid access or where full independence is required.
                They include PV arrays, battery storage, charge controllers and often a backup generator for extended autonomy.
              </p>
              <p className="card-text">
                Off-grid solar systems operate independently from the utility grid and are
                designed to supply power in remote or grid-unavailable locations. These systems
                rely on solar panels and battery storage to provide continuous electricity,
                ensuring energy availability day and night.
              </p>
              <div className='card-body'>
                <span className='badge mx-1 text-bg-primary'>off grid solar system</span>
                <span className='badge mx-1 text-bg-primary'>solar battery system</span>
                <span className='badge mx-1 text-bg-primary'>remote solar power</span>
                <span className='badge mx-1 text-bg-primary'>standalone solar</span>
              </div>
              <h6 className="display-6 mt-3">Suitable For:</h6>
              <ul>
                <li>Remote sites, rural properties and telecom towers</li>
                <li>Critical loads requiring guaranteed uptime</li>
                <li>Projects where grid connection is impractical or costly</li>
                <li>Complete energy independence from the grid</li>
                <li>Reliable power supply for remote locations</li>
                <li>Energy availability during day and night</li>
                <li>No exposure to grid outages</li>
                <li>Suitable for rural, desert, and off-grid areas</li>
              </ul>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h4>Design Considerations</h4>
              <ul>
                <li>Battery capacity sizing for required autonomy</li>
                <li>Charge controllers and inverter selection</li>
                <li>Backup generator planning for extended cloudy periods</li>
                <li>Maintenance and battery lifecycle planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffGrid;
