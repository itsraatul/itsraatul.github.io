import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./BootSequence.css";

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  
  const bootText = [
    "INITIALIZING KERNEL...",
    "LOADING MODULES: [ AUTH, CRYPTO, NET ]",
    "ESTABLISHING SECURE CONNECTION...",
    "BYPASSING FIREWALL...",
    "ACCESS GRANTED.",
    "WELCOME USER."
  ];

  useEffect(() => {
    let delay = 0;
    bootText.forEach((text, index) => {
      delay += Math.random() * 300 + 200;
      setTimeout(() => {
        setLines(prev => [...prev, text]);
        if (index === bootText.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <motion.div 
      className="boot-screen"
      exit={{ opacity: 0, y: -1000 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="boot-content">
        {lines.map((line, index) => (
          <div key={index} className="boot-line">
            <span className="boot-prefix">&gt;</span> {line}
          </div>
        ))}
        <div className="boot-cursor">_</div>
      </div>
    </motion.div>
  );
};

export default BootSequence;
