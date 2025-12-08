import React, { useEffect } from 'react';
import HeaderBanner from '@/components/HeaderBanner';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <HeaderBanner
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with us today!"
        backgroundImage="/assets/contact-banner.jpg"
      />
      <div className="container py-5">
        <h3>Contact Information</h3>
        <p>Feel free to reach out to us through any of the following methods:</p>
        <ul className="list-unstyled">
          <li>
            <strong>Email:</strong> <a href="mailto:info@aqtra-vision.com">info@aqtra-vision.com</a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong>Address:</strong> 123 AQTRA Vision Street, Innovation City, USA
          </li>
        </ul>
        <h3>Send Us a Message</h3>
        <form className="mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows={5} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;