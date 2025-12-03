import React, { useEffect } from 'react';
import ServiceVideoSection from '@/components/ServiceVideoSection';
import Layout from '@/components/Layout';

const services = [
  {
    videoUrl: '/videos/service1.mp4',
    title: 'Service 1',
    logoUrl: '/logos/service1-logo.png',
  },
  {
    videoUrl: '/videos/service2.mp4',
    title: 'Service 2',
    logoUrl: '/logos/service2-logo.png',
  },
  {
    videoUrl: '/videos/service3.mp4',
    title: 'Service 3',
    logoUrl: '/logos/service3-logo.png',
  },
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('dark-body');
    return () => {
      document.body.classList.remove('dark-body');
    };
  }, []);

  return (
    <Layout>
      <div className="bg-dark">
        <h1 className="text-center text-4xl font-bold my-8 text-white">Our Services</h1>
        <ServiceVideoSection services={services} />
      </div>
    </Layout>
  );
};

export default ServicesPage;