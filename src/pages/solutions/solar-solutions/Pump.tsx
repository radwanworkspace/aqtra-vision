import React from 'react';
import HeaderBanner from '@/components/HeaderBanner';
import ParallaxImageSection from '@/components/ParallaxImageSection';

const Pump: React.FC = () => {
  return (
    <>
      <HeaderBanner
        title="Solar Water Pumping"
        subtitle="Solar-driven pumping solutions for irrigation, livestock and remote water supply."
        backgroundImage="/src/assets/hero-bg-3.jpg"
      />

      <section className="container-fluid py-5">
        <div className="container">
          <h2 className="display-5">Solar Water Pumping Systems</h2>
          <p className="text-muted">Reliable, low-maintenance pumping solutions using solar energy — perfect for agriculture and remote supply.</p>
          {/* <ParallaxImageSection imageUrl={'/src/assets/hero-bg-2.jpg'} overlay heading="Solar Water Pumping System" summary={''} /> */}

          <ParallaxImageSection imageUrl={'/src/assets/solor-install.mp4'} heading="Typical Use" summary={'Irrigation, boreholes, livestock watering and village water supply.'} />
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title display-4">Solar Water Pumping System</h4>
              <p className="card-text">
                Solar water pumping systems use solar energy to power water pumps for
                agriculture, irrigation, livestock, and remote water supply applications.
                These systems operate without fuel or grid electricity, providing a
                cost-effective and sustainable solution for water pumping needs.
                maximum flexibility, reliability, and energy optimization.
              </p>
              <div className='card-body'>
                <span className='badge mx-1 text-bg-primary'>solar water pumping system</span>
                <span className='badge mx-1 text-bg-primary'>solar irrigation pump</span>
                <span className='badge mx-1 text-bg-primary'>solar borehole pump</span>
                <span className='badge mx-1 text-bg-primary'>agriculture solar pump</span>
              </div>
              <h6 className="display-6 mt-3">Advantages:</h6>
              <ul>
                <li>No fuel or electricity costs</li>
                <li>Reliable water supply for remote locations</li>
                <li>Low maintenance and long operational life</li>
                <li>Environmentally friendly and sustainable</li>
                <li>Ideal for agriculture and irrigation projects</li>
              </ul>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h4>Design Notes</h4>
              <ul>
                <li>Select pump and inverter to match head and flow requirements</li>
                <li>Consider direct-coupled vs battery-backed solutions</li>
                <li>Include filtration and borehole protections as needed</li>
                <li>Provide seasonal sizing for irrigation cycles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pump;
