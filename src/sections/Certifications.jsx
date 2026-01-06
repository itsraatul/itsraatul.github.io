import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import "./Certifications.css";

const Certifications = () => {
    const certs = [
        { name: "Google Cybersecurity Professional", issuer: "Google", date: "July 2025" },
        { name: "Blue Team Junior Analyst", issuer: "Security Blue Team", date: "July 2025" },
        { name: "ISO/IEC 27001:2022 Lead Auditor", issuer: "Mastermind Assurance", date: "July 2025" },
        { name: "ISO/IEC 42001:2023 Lead Auditor", issuer: "Mastermind Assurance", date: "July 2025" },
        { name: "Vulnerability Management Detection & Response", issuer: "Qualys", date: "July 2025" },
        { name: "Web Application Scanning", issuer: "Qualys", date: "July 2025" },
        { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "Dec 2025 (Scheduled)" }
    ];

  return (
    <Section id="certifications" className="certifications-section">
      <h2 className="section-title center">Certifications</h2>
      
      <div className="certs-grid">
        {certs.map((cert, index) => (
          <motion.div 
            key={index} 
            className="cert-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="cert-icon"></div>
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-date">{cert.date}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
