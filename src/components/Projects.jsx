// src/components/Projects.jsx

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/project.css';
import slr from '../assets/proj_1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import gan from '../assets/proj_2.png';
import path from '../assets/proj_3.png';
const projectData = [
  {
    title: "SLR",
    description: "A machine learning model implemented using LSTM to predict signs",
    image: slr,
    link: "https://github.com/arjun1127/SLR-deep-learning"
  },
  {
    title: "WeatherGAN",
    description: "The GAN-Based Weather Simulation System is designed for image-to-image translation to create realistic weather simulations.",
    image: gan,
    link: "https://github.com/arjun1127/GAN_weather_Application"
  },
  {
    title: "Pathfinding Visualizer",
    description: "An interactive visualizer for Dijkstra and BFS algorithms.",
    image: path,
    link: "https://668cffda90e06122c9590a0b--ark-path-find.netlify.app/"
  }
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="fade-up">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true}>
                <motion.div
                  className="card project-card h-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <a
                      href={project.link}
                      className="btn btn-outline-primary mt-auto"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
