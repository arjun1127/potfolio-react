
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-section text-center py-4">
      <div className="container">
        <p className="mb-2">&copy; {new Date().getFullYear()} Arjun. All rights reserved.</p>
        <a href="#home" className="back-to-top">↑ Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;
