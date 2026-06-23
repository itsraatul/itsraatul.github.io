import React from "react";
import { motion } from "framer-motion";
import CyberBackground from "../components/CyberBackground";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <CyberBackground />
        <div className="grid-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-block"
        >
          
          <h2 className="hero-greeting">Hi, I am</h2>
          <div className="glitch-container">
            <h1 className="hero-title glitch-main">Arunangshu Mojumder Raatul</h1>
            <h1 className="hero-title glitch-clone glitch-red">Arunangshu Mojumder Raatul</h1>
            <h1 className="hero-title glitch-clone glitch-cyan">Arunangshu Mojumder Raatul</h1>
          </div>
          
          <div className="bio-container">
            <p className="hero-bio">
              I hold a <strong>Master's Degree</strong> in <span className="highlight">Information Security & Cyber Forensics</span> and a <strong>Bachelor's Degree</strong> in <span className="highlight">Computer Science and Engineering</span>. I am also a <span className="highlight">Certified Ethical Hacker (CEH)</span>.
            </p>
            <p className="hero-bio-sub">
              My work focuses on <strong>Cybersecurity</strong>, <strong>Blockchain Systems</strong>, <strong>Applied Cryptography</strong>, and <strong>finding vulnerabilities in systems</strong>. I currently have 7 peer-reviewed research papers.
            </p>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#publications" className="btn outline">Research Papers</a>
            <a href="#certifications" className="btn outline">Certifications</a>
            <a href="#honors" className="btn outline">Awards & Achievements</a>
            <a href="#skills" className="btn outline">Technical Expertise</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
