import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Section from "../components/Section";
import "./Publications.css";

const Publications = () => {
  const papers = [
    { 
        title: "Ephemeral Cryptographic Architecture for Blockchain-Based Software Licensing",
        conf: "IEEE",
        year: "2026",
        link: "https://ieeexplore.ieee.org/document/11518410"
    },
    { 
        title: "Design and Development of a Blockchain and IPFS-Based Credential Verifier with Custom Lightweight Encryption for Secure Storage",
        conf: "IEEE",
        year: "2025",
        link: "https://ieeexplore.ieee.org/abstract/document/11013795/"
    },
    { 
        title: "Blockchain-Enhanced Academic Certificate Verification: A Decentralized and Trustworthy Framework",
        conf: "IEEE",
        year: "2024",
        link: "https://ieeexplore.ieee.org/abstract/document/10499524/"
    },
    { 
        title: "RMT: A Lightweight Encryption Algorithm for Blockchain-Based Certificate Verification",
        conf: "IEEE",
        year: "2023",
        link: "https://ieeexplore.ieee.org/abstract/document/10456497/"
    },
    { 
        title: "Verifi-Chain: A Credentials Verifier Using Blockchain and IPFS",
        conf: "Springer Nature",
        year: "2023",
        link: "https://link.springer.com/chapter/10.1007/978-981-99-5166-6_24"
    },
    { 
        title: "CertiBlock: The Exemplary Utilization of Blockchain for the Rigorous Validation of Academic Certificates",
        conf: "IEEE",
        year: "2023",
        link: "https://ieeexplore.ieee.org/abstract/document/10441100/"
    },
    { 
        title: "Voice-Controlled Home Automation with Cloud-Based Environment Monitoring System",
        conf: "Springer Nature Singapore",
        year: "2022",
        link: "https://link.springer.com/chapter/10.1007/978-981-19-9638-2_21"
    }
  ];

  return (
    <Section id="publications" className="publications-section">
      <h2 className="section-title center">Research & Publications</h2>
      
      <div className="publications-timeline">
        {papers.map((paper, index) => (
          <motion.a 
            key={index} 
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="pub-card-header">
                <span className="pub-year">{paper.year}</span>
                <span className="pub-icon"><FiArrowUpRight /></span>
            </div>
            <div className="pub-content">
                <h3 className="pub-title">{paper.title}</h3>
                <p className="pub-conf">{paper.conf}</p>
            </div>
            <div className="pub-footer">
                <span className="pub-read-link">
                    Read Publication <FiArrowUpRight style={{ marginLeft: "4px" }} />
                </span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
