import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      {/* Company Overview */}
      <section className="company-overview py-5">
        <div className="container">
          <h1 className="text-center mb-4">About AQTRA Company</h1>
          <p className="lead text-center">
            AQTRA Company is a leading provider of engineering solutions, specializing in HVAC, MEP, Electrical, Low-Current Systems, Smart Home & Automation, Solar Energy, Embedded Systems, and Web Solutions. With a commitment to innovation and excellence, we deliver cutting-edge solutions tailored to meet the unique needs of our clients.
          </p>
        </div>
      </section>

      {/* Sectors */}
      <section className="sectors py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Sectors</h2>
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>HVAC & Electromechanical Contracting:</strong> Comprehensive climate control and mechanical solutions for residential, commercial, and industrial projects.
            </li>
            <li className="mb-3">
              <strong>Smart Home & Automation Systems:</strong> Advanced automation solutions for modern living, enhancing convenience, security, and energy efficiency.
            </li>
            <li className="mb-3">
              <strong>Electrical & Low-Current Systems:</strong> Reliable electrical installations and low-current systems for communication, security, and data networks.
            </li>
            <li className="mb-3">
              <strong>Solar Energy Systems:</strong> Sustainable and renewable energy solutions to reduce carbon footprints and achieve energy independence.
            </li>
            <li className="mb-3">
              <strong>Embedded Systems & IoT:</strong> Innovative embedded systems and IoT solutions for smarter devices and connected environments.
            </li>
            <li className="mb-3">
              <strong>Web & Software Development:</strong> Custom web and software solutions to drive digital transformation and business growth.
            </li>
          </ul>
        </div>
      </section>

      {/* Licenses & Certifications */}
      <section className="licenses py-5">
        <div className="container">
          <h2 className="mb-4">Licenses & Certifications</h2>
          <p>
            AQTRA Company holds a range of professional licenses and certifications, including Civil Defense approvals, HVAC installation certificates, low-voltage compliance, and safety and quality certifications. These credentials reflect our commitment to excellence and adherence to industry standards.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="experience py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Experience</h2>
          <p>
            With over a decade of combined expertise, AQTRA Company has successfully delivered projects across commercial, residential, industrial, and healthcare sectors. Our team is known for its reliability, technical accuracy, engineering quality, and exceptional project management capabilities.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission py-5">
        <div className="container">
          <h2 className="mb-4">Our Mission</h2>
          <p>
            To provide innovative and sustainable engineering solutions that exceed client expectations, while fostering a culture of excellence and continuous improvement.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="vision py-5 bg-light">
        <div className="container">
          <h2 className="mb-4">Our Vision</h2>
          <p>
            To be a global leader in engineering and technology solutions, driving progress and creating value for our clients and communities.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="values py-5">
        <div className="container">
          <h2 className="mb-4">Our Values</h2>
          <ul className="list-unstyled">
            <li className="mb-2">Integrity: We uphold the highest standards of honesty and transparency in all our dealings.</li>
            <li className="mb-2">Innovation: We embrace creativity and strive to deliver cutting-edge solutions.</li>
            <li className="mb-2">Excellence: We are committed to delivering quality and exceeding expectations.</li>
            <li className="mb-2">Sustainability: We prioritize environmentally friendly practices and solutions.</li>
            <li className="mb-2">Collaboration: We believe in the power of teamwork and strong partnerships.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;