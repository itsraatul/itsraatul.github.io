import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "../components/Section";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Decentralized Identity-Bound Software Licensing",
      subtitle: "Using Modified NFTs and Polymorphic Cryptographic Vaults",
      tech: ["Solidity", "Ethereum Sepolia", "ERC-5192", "Cryptography"],
      description: "Built a decentralized licensing framework using ERC-5192 Tokens on Ethereum Sepolia. Developed a polymorphic cryptographic engine mutating key derivation logic achieving <1ms overhead.",
      link: "https://github.com/itsraatul/DIBSL"
    },
    {
      title: "CyberRecon",
      subtitle: "Automated Reconnaissance and Security Assessment Framework",
      tech: ["Python", "Nmap", "CVE Mapping", "SecOps"],
      description: "Modular tool for vulnerability scanning and security analysis integrating Nmap, CVE mapping and header analysis. Implemented automated false-positive filtering logic to refine scan accuracy.",
      link: "https://github.com/itsraatul/cyberrecon"
    },
    {
      title: "Academic Credentials Verifier",
      subtitle: "Blockchain-Based with Lightweight Encryption",
      tech: ["Ethereum", "Node.js", "MySQL", "IPFS", "Cryptography"],
      description: "Developed a secure verification system using Ethereum, JS, and MySQL with timestamp-based encryption. Focused on data confidentiality, integrity verification, and smart contract validation.",
      link: "https://github.com/itsraatul/Blockchain-Based-Certificate-Verification-System"
    },
    {
        title: "Kadamai",
        subtitle: "Decentralized Escrow Platform",
        tech: ["Solidity", "Security Auditing"],
        description: "Implemented Solidity smart contracts for milestone-based fund locking and release. Used auditing techniques to prevent re-entrancy attacks.",
        link: "https://github.com/itsraatul/Kadamai"
    },
    {
        title: "AidChain",
        subtitle: "Transparent Donation Ledger",
        tech: ["Blockchain", "Governance"],
        description: "Donation tracking system ensuring transparency and accountability. Reinforces positive security culture and trust in aid distribution.",
        link: "https://github.com/itsraatul/AidChain"
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project <FiArrowUpRight style={{ marginLeft: "4px" }} />
                </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
