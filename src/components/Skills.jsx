import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/skill.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiGooglecolab } from 'react-icons/si';

const skills = [
  { name: 'HTML', level: 90, icon: <FaHtml5 /> },
  { name: 'CSS', level: 85, icon: <FaCss3Alt /> },
  { name: 'JavaScript', level: 80, icon: <FaJs /> },
  { name: 'React', level: 75, icon: <FaReact /> },
  { name: 'Java', level: 90, icon: <FaJava /> },
  { name: 'Git', level: 55, icon: <FaGitAlt /> },
  { name: 'Python', level: 50, icon: <FaPython /> },
  { name: 'Machine Learning', level: 50, icon: <SiGooglecolab /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 gradient-text">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-3 text-center mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="circular-container">
                <svg className="progress-circle" width="120" height="120">
                  <defs>
                    <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00bcd4" />
                      <stop offset="100%" stopColor="#8e44ad" />
                    </linearGradient>
                  </defs>
                  <circle className="bg" cx="60" cy="60" r="50" />
                  <circle
                    className="progress"
                    cx="60"
                    cy="60"
                    r="50"
                    style={{ strokeDashoffset: 314 - (314 * skill.level) / 100 }}
                  />
                </svg>
                <div className="percentage">
                  {skill.level}%
                </div>
              </div>
              <div className="skill-icon mt-2">{skill.icon}</div>
              <div className="skill-name mt-1">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
