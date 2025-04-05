/// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../styles/Hero.css';

const typingPhrases = [
  "Web Developer 💻",
  "Engeerinig Student ",
  "React & Node.js Dev ⚛️",
  "Always Learning 📚",
];

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = typingPhrases[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % typingPhrases.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section className="hero-section animated-hero d-flex align-items-center justify-content-center position-relative text-white">

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles-canvas"
        options={{
          fullScreen: false,
          background: { color: 'transparent' },
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, color: "#ffffff", distance: 130 },
            move: { enable: true, speed: 1 },
            number: { value: 40 },
            size: { value: 2 },
          }
        }}
      />

      {/* Glowing Blobs */}
      <div className="blob"></div>
      <div className="blob-2"></div>

      {/* Morphing SVG Blob */}
      <svg className="svg-blob" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(300,300)">
          <path fill="#ff44ec">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="
                M139.1,-138.6C175.2,-96.4,193.9,-48.2,193.5,1.4C193.2,50.9,173.8,101.7,137.7,144.1C101.7,186.5,48.8,220.5,3.5,216.2C-41.9,211.9,-83.8,169.3,-124.6,126.6C-165.3,84,-205,42,-214.2,-6.5C-223.5,-55.1,-202.3,-110.1,-161.5,-151.2C-120.6,-192.4,-60.3,-219.6,-5.3,-213.3C49.6,-206.9,99.2,-167.8,139.1,-138.6Z;
                M116.6,-110.4C145.4,-67.1,158.1,-22.2,155.5,25.4C152.8,72.9,134.8,122.9,98.2,156.6C61.7,190.3,5.6,207.8,-49.3,200.1C-104.3,192.4,-158,159.6,-193.3,114.1C-228.6,68.6,-245.5,10.4,-227.7,-40.4C-209.9,-91.1,-157.4,-133.4,-103.1,-168.3C-48.8,-203.1,7.3,-230.5,56.6,-218.8C105.9,-207.1,148.4,-156.7,116.6,-110.4Z;
                M139.1,-138.6C175.2,-96.4,193.9,-48.2,193.5,1.4C193.2,50.9,173.8,101.7,137.7,144.1C101.7,186.5,48.8,220.5,3.5,216.2C-41.9,211.9,-83.8,169.3,-124.6,126.6C-165.3,84,-205,42,-214.2,-6.5C-223.5,-55.1,-202.3,-110.1,-161.5,-151.2C-120.6,-192.4,-60.3,-219.6,-5.3,-213.3C49.6,-206.9,99.2,-167.8,139.1,-138.6Z"
            />
          </path>
        </g>
      </svg>

      {/* Glass Content Box */}
      <div className="glass-box container text-center hero-content py-5 px-4 rounded-4">
        <h1 className="display-4 fw-bold mb-3 hero-title gradient-text">
          Hey 👋 I’m Arjun Rao
        </h1>
        <div className="typewriter-text mb-3 animate-text">
          {displayedText}
        </div>
        <p className="lead hero-subtitle mb-4">
          Turning ideas into delightful web experiences!
        </p>
        <a href="#projects" className="btn hero-btn shadow">
          View Projects
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-arrow">&#x2193;</div>
      </div>
    </section>
  );
};

export default Hero;
