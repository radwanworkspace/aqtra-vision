import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import HeroIntro from '@/components/HeroIntro';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out',
      offset: 100,
    });
  }, []);

  return (
    <div className="mt-5 overflow-x-hidden">
      {/* Hero Section */}
      <section className="mb-5 d-flex flex-column justify-content-center align-items-center">
        <HeroIntro />
      </section>

      {/* About Section */}
      <section>
        <About />
      </section>

      {/* Services Section */}
      <section>
        <Services />
      </section>

      {/* Contact Section */}
      <section >
        {/* <Contact /> */}
        <NewsletterSection />
      </section>
    </div>
  );
};

export default Index;
