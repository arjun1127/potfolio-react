
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="animated-hero text-white d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Hi, I'm Arjun 👋</h1>
        <p className="lead hero-subtitle">
          A passionate developer crafting beautiful web experiences.
        </p>
        <a href="#projects" className="btn btn-primary hero-btn mt-3">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
