import React, { useState, useEffect } from "react";
import "./Navbar.css";

import { FaGithub, FaLinkedin, FaGoogle, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <a href="#" className="logo">
          &lt;Raatul /&gt;
        </a>

        <div className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#publications" onClick={() => setMobileMenuOpen(false)}>Research</a>
          
          <div className="social-icons-nav">
            <a href="mailto:its.raatul@gmail.com" aria-label="Email"><FaEnvelope /></a>
            <a href="https://github.com/itsraatul" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/raatul" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://scholar.google.com/citations?user=a4EGu4AAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar"><FaGoogle /></a>
          </div>

          <a href="/resume/resume.txt" download className="resume-btn">
            Resume <HiDownload />
          </a>
        </div>

        <div 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};
