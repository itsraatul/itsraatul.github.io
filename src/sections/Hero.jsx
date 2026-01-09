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
          
          <h1 className="hero-title glitch" data-text="Hi, I'm Arunangshu Mojumder Raatul">
            Hi, I'm Arunangshu Mojumder Raatul
          </h1>
          
          <div className="bio-container">
            <p className="hero-bio">
              I am an <strong>M.Tech Scholar</strong> in Information Security & Cyber Forensics.<br/>
              Focusing on <strong>Cybersecurity</strong>, <span className="highlight">Blockchain Systems</span>, and <strong>Applied Cryptography</strong>.
            </p>
            <p className="hero-bio-sub">
              I work on designing and building secure, decentralized systems that bridge academic research and real-world implementation.
            </p>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#publications" className="btn outline">Research Papers</a>
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
