// src/App.jsx

import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/hero_cust';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css'; // if you have global styles

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="projects" className="py-5">
          <Projects />
        </section>

        <section id="skills" className="py-5">
          <Skills />
        </section>

        <section id="contact" className="py-5">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
