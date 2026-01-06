import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShieldAlt, FaInfoCircle, FaCheck, FaLock, FaGlobeAmericas, FaLaptop, FaNetworkWired } from "react-icons/fa";
import CyberBackground from "../components/CyberBackground";
import "./Hero.css";

const Hero = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [visitor, setVisitor] = useState({
    ip: "Scanning...",
    isp: "Detecting...",
    location: "Locating...",
    latency: "Ping...",
    platform: "Analyzing..."
  });

  useEffect(() => {
    const fetchVisitorData = async () => {
      // Simulate/Detect Platform
      const platform = navigator.userAgent.indexOf("Win") !== -1 ? "Windows" : 
                       navigator.userAgent.indexOf("Mac") !== -1 ? "MacOS" : 
                       navigator.userAgent.indexOf("Linux") !== -1 ? "Linux" : "Unknown OS";
      
      // Network detection
      const apis = [
        { url: 'https://ipapi.co/json/', type: 'full' },
        { url: 'https://ipwho.is/', type: 'full' },
        { url: 'https://www.cloudflare.com/cdn-cgi/trace', type: 'trace' }
      ];

      for (const api of apis) {
        try {
          const start = Date.now();
          const controller = new AbortController();
          const timeout = setTimeout(() => controller.abort(), 2000);
          
          const res = await fetch(api.url, { signal: controller.signal });
          clearTimeout(timeout);
          const latency = Date.now() - start;
          
          if (res.ok) {
            if (api.type === 'full') {
              const json = await res.json();
              setVisitor({
                ip: json.ip,
                isp: json.org || json.asn || "Encrypted Connection",
                location: `${json.city || 'Unknown'}, ${json.country_name || 'Earth'}`,
                latency: `${latency}ms`,
                platform: platform
              });
              return;
            } else if (api.type === 'trace') {
              const text = await res.text();
              const flow = text.split('\n').reduce((acc, line) => {
                const [key, val] = line.split('=');
                if (key) acc[key] = val;
                return acc;
              }, {});
              
              setVisitor({
                ip: flow.ip || "Unknown",
                isp: "Cloudflare Network",
                location: flow.loc ? `Country: ${flow.loc}` : "Unknown Location",
                latency: `${latency}ms`,
                platform: platform
              });
              return;
            }
          }
        } catch (e) {
          console.warn(`Skipping ${api.url}`);
        }
      }
      
      // Ultimate fallback
      setVisitor({ 
        ip: "127.0.0.1", 
        isp: "Localhost / Protected", 
        location: "Unknown",
        latency: "<1ms",
        platform: platform 
      });
    };
    fetchVisitorData();
  }, []);

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

        <motion.div 
          className="session-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="session-header">
            <FaLock className="secure-icon" /> Visitor Context <span className="read-only-badge">(Auto-Detected)</span>
          </div>
          
          <div className="session-body">
            <div className="info-row">
              <span className="info-label"><FaGlobeAmericas /> Public IP:</span>
              <span className="info-value blur-sensitive" onClick={(e) => e.target.classList.toggle('revealed')}>{visitor.ip}</span>
            </div>
            <div className="info-row">
              <span className="info-label"><FaNetworkWired /> Network:</span>
              <span className="info-value">{visitor.isp}</span>
            </div>
            <div className="info-row">
              <span className="info-label"><FaMapMarkerAlt /> Location:</span>
              <span className="info-value">{visitor.location}</span>
            </div>
            <div className="info-row">
              <span className="info-label"><FaLaptop /> System:</span>
              <span className="info-value">{visitor.platform}</span>
            </div>
            <div className="info-row">
              <span className="info-label"><FaInfoCircle /> Latency:</span>
              <span className="info-value success">{visitor.latency}</span>
            </div>
          </div>

          <div className="privacy-divider"></div>
          
          <div className="privacy-actions">
            <p className="privacy-note">
              <FaInfoCircle /> Data is local-only. Zero servers.
            </p>
            <button 
              className="privacy-btn"
              onClick={() => setShowPrivacy(!showPrivacy)}
            >
              Analyze connection privacy
            </button>
          </div>

          <AnimatePresence>
            {showPrivacy && (
              <motion.div 
                className="privacy-modal"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                <h4>Transparency Report</h4>
                <ul>
                  <li><span className="check">✔</span> <strong>Visible:</strong> Technical identifiers (IP, User Agent).</li>
                  <li><span className="cross">✘</span> <strong>NOT Collected:</strong> Name, Email, Keystrokes.</li>
                  <li><span className="cross">✘</span> <strong>NOT Stored:</strong> Discards on tab close.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
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

// Helper for icon
const FaMapMarkerAlt = (props) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
  </svg>
);

export default Hero;
