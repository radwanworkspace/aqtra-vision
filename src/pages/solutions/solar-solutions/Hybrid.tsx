import React from 'react';
import HeaderBanner from '@/components/HeaderBanner';
import ParallaxImageSection from '@/components/ParallaxImageSection';

const Hybrid: React.FC = () => {
  return (
    <>
      <HeaderBanner
        title="Hybrid Solar Systems"
        subtitle="Grid-connected systems with battery backup for resilience and optimization."
        backgroundImage="/src/assets/hero-bg-2.jpg"
      />

      <section className="container-fluid py-5">
        <div className="container">
          <h2 className="display-5">Hybrid Systems</h2>
          <p className="text-muted">Combine solar, batteries and grid connection to get the best of both worlds.</p>
          {/* <ParallaxImageSection imageUrl={'/src/assets/hero-bg-1.jpg'} heading="Hybrid Systems" summary={'Hybrid systems combine grid connection with battery storage for resilience and peak shaving.'} /> */}

          <ParallaxImageSection imageUrl={'/src/assets/hero-bg-2.jpg'} heading="Benefits" summary={'Backup power, peak-shaving and improved self-consumption.'} />
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title display-4">Hybrid Solar System (Grid-Connected with Storage)</h4>
              <p className="card-text">
                Hybrid systems blend the benefits of on-grid and off-grid: they operate with the grid but include batteries
                to store energy for use during outages or peak pricing periods. Intelligent energy management optimizes usage.
              </p>
              <p className="card-text">
                Combine the advantages of on-grid and off-grid solutions
                by integrating solar panels, battery storage, and the utility grid. They allow
                energy storage for backup use while also enabling grid interaction, providing
                maximum flexibility, reliability, and energy optimization.
              </p>
              <div className='card-body'>
                <span className='badge mx-1 text-bg-primary'>hybrid solar system</span>
                <span className='badge mx-1 text-bg-primary'>solar battery backup</span>
                <span className='badge mx-1 text-bg-primary'>grid hybrid inverter</span>
                <span className='badge mx-1 text-bg-primary'>energy storage solar</span>
              </div>
              <h6 className="display-6 mt-3">Advantages:</h6>
              <ul>
                <li>Reduced electricity bills and peak demand costs</li>
                <li>Backup power during grid outages</li>
                <li>Load shifting and peak demand reduction</li>
                <li>Optimized energy usage and storage</li>
                <li>Enhanced self-consumption and increased savings</li>
                <li>Flexible operation modes between solar, battery, and grid (time-of-use optimization)</li>
                <li>Ideal for homes and businesses needing high reliability</li>
              </ul>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-body">
              <h4>Why Choose Hybrid</h4>
              <ul>
                <li>Seamless backup during outages</li>
                <li>Time-of-use optimization and reduced demand charges</li>
                <li>Greater control through energy management systems</li>
                <li>Suitable for homes and businesses wanting resilience</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hybrid;
