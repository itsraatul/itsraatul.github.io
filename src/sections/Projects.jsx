import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "CyberRecon",
      subtitle: "Automated Reconnaissance Framework",
      tech: ["Python", "Nmap", "CVE API"],
      description: "Modular tool for vulnerability scanning and security analysis integrating Nmap, CVE mapping and header analysis. Implemented automated false-positive filtering logic.",
      link: "#"
    },
    {
      title: "Academic Cert Verifier",
      subtitle: "Blockchain Based Credentials",
      tech: ["Ethereum", "JS", "MySQL"],
      description: "Secure verification system using Ethereum, JS, and MySQL with timestamp-based encryption. Focused on data confidentiality and integrity.",
      link: "#"
    },
    {
      title: "DecentraKey",
      subtitle: "SoulBound NFT Licensing",
      tech: ["Solidity", "NFT", "Smart Contracts"],
      description: "Non-transferable software licensing mechanism to prevent piracy. Integrated smart contract testing frameworks and secure backend.",
      link: "#"
    },
    {
        title: "Kadamai",
        subtitle: "Decentralized Escrow Platform",
        tech: ["Solidity", "Security Auditing"],
        description: "Implemented Solidity smart contracts for milestone-based fund locking and release. Audit techniques to prevent re-entrancy.",
        link: "#"
    },
    {
        title: "AidChain",
        subtitle: "Transparent Donation Ledger",
        tech: ["Blockchain", "Governance"],
        description: "Donation tracking system ensuring transparency and accountability. Reinforces positive security culture and trust.",
        link: "#"
    }
  ];

  return (
    <Section id="projects" className="projects-section">
      <h2 className="section-title center">Notable Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-subtitle">{project.subtitle}</span>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
                {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                ))}
            </div>
            
            <div className="card-footer">
                <a href={project.link} className="project-link">View Project &rarr;</a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
