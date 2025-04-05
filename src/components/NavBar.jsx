// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
      className={`navbar navbar-expand-lg custom-navbar navbar-dark ${
        isScrolled ? 'scrolled' : ''
      }`}
    >
      <div className="container">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="navbar-brand"
        >
          Arjun Rao K
        </ScrollLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <motion.div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <ul className="navbar-nav">
            {['home', 'skills', 'projects'].map((section, index) => (
              <li className="nav-item" key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  className="nav-link"
                  activeClass="active"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
