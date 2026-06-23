import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

import { FaGithub, FaLinkedin, FaGoogle, FaEnvelope } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenResume = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsResumeOpen(true);
  };

  // Lock body scroll when resume modal is open
  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isResumeOpen]);

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
          <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
          <a href="#honors" onClick={() => setMobileMenuOpen(false)}>Awards & Achievements</a>
          
          <div className="social-icons-nav">
            <a href="mailto:its.raatul@gmail.com" aria-label="Email"><FaEnvelope /></a>
            <a href="https://github.com/itsraatul" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/raatul" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://scholar.google.com/citations?user=a4EGu4AAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Google Scholar"><FaGoogle /></a>
          </div>

          <a href="#" onClick={handleOpenResume} className="resume-btn">
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

      <AnimatePresence>
        {isResumeOpen && (
          <motion.div 
            className="resume-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
            style={{ zIndex: 3000 }}
          >
            <motion.div 
              className="resume-modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal-btn" 
                onClick={() => setIsResumeOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              
              <div className="modal-header" style={{ borderBottomColor: "var(--secondary-color)30" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingRight: '2.5rem', flexWrap: 'wrap', gap: '10px' }}>
                  <div>
                    <h3 style={{ 
                      background: `linear-gradient(135deg, #ffffff 40%, var(--secondary-color) 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                      display: "inline-block",
                      margin: 0
                    }}>
                      Curriculum Vitae / Resume
                    </h3>
                    <p style={{ margin: '4px 0 0 0' }}>Arunangshu Mojumder Raatul - Professional Resume</p>
                  </div>
                  
                  <a 
                    href="/resume/resume.pdf" 
                    download="Arunangshu_Mojumder_Raatul_Resume.pdf" 
                    className="btn primary" 
                    style={{ 
                      padding: '8px 16px', 
                      fontSize: '0.8rem', 
                      minWidth: 'auto',
                      height: 'auto',
                      display: 'inline-flex',
                      gap: '6px',
                      boxShadow: '0 0 10px rgba(0, 255, 65, 0.3)'
                    }}
                  >
                    Download PDF <HiDownload />
                  </a>
                </div>
              </div>
              
              <div className="pdf-viewer-container" style={{ pointerEvents: 'auto' }}>
                <iframe 
                  src="/resume/resume.pdf" 
                  title="Arunangshu Mojumder Raatul - Resume"
                  className="pdf-iframe"
                  frameBorder="0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
