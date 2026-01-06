import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import "./About.css";

const About = () => {
  return (
    <Section id="about" className="about-section">
      <div className="about-content">
        <motion.div 
          className="bio-column"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="bio-text">
            I am <span className="highlight">Arunangshu Mojumder Raatul</span>, a passionate Information Security and Cyber Forensics student with a deep focus on Blockchain technology and organizational cybersecurity.
          </p>
          <p className="bio-text">
            My work bridges the gap between technical security assessments and governance frameworks. I strive to build systems that are not only secure by design but also transparent and trustworthy.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Research Papers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Coding</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="education-column"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          
          <div className="edu-card">
            <div className="edu-year">2024 - 2026</div>
            <h3 className="edu-degree">M.Tech in Information Security & Cyber Forensics</h3>
            <h4 className="edu-school">SRM Institute of Science and Technology, India</h4>
            <p className="edu-detail">CGPA: 9.50/10.00 • Merit Based Founder’s Scholarship</p>
          </div>

          <div className="edu-card">
            <div className="edu-year">2019 - 2023</div>
            <h3 className="edu-degree">B.Sc in Computer Science and Engineering</h3>
            <h4 className="edu-school">University of Liberal Arts Bangladesh</h4>
            <p className="edu-detail">CGPA: 3.86/4.00 • Magna cum Laude Distinction</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
