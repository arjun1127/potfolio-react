import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Contact3D from './Contact3D';
import emailjs from '@emailjs/browser';
import.meta.env.VITE_EMAILJS_SERVICE_ID
import.meta.env.VITE_EMAILJS_TEMPLATE_ID
import.meta.env.VITE_EMAILJS_PUBLIC_KEY


const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        
        (result) => {
          console.log(result.text);
          setSent(true);
          e.target.reset(); // clear the form after successful submission
        },
        (error) => {
          console.error('Email send error:', error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 gradient-text">Get in Touch</h2>
        <p className="text-center mb-5">Feel free to reach out or just to say hi! 👋</p>
        <div className="row">
          {/* Contact Form */}
          <div className="col-md-6 mb-4">
            <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
              {sent && (
                <p className="mt-3 text-success text-center">Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* 3D Model */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className="contact-3d-wrapper w-100">
              <Contact3D />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mt-5">
          <div className="contact-details mb-4 d-flex align-items-center justify-content-center gap-2">
            <FaEnvelope />
            <a href="mailto:arjunkrao2004@gmail.com" className="contact-link">
              arjunkrao2004@gmail.com
            </a>
          </div>
          <div className="social-icons d-flex justify-content-center gap-4">
            <a
              href="https://github.com/arjun1127"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-rao-1520a424a/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
