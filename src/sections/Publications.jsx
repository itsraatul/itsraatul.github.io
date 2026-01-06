import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import "./Publications.css";

const Publications = () => {
  const papers = [
    { 
        title: "Design and Development of a Blockchain and IPFS-Based Credential Verifier with Custom Lightweight Encryption for Secure Storage",
        conf: "2025 International Conference on Electrical, Computer and Communication...",
        year: "2025"
    },
    { 
        title: "Blockchain-Enhanced Academic Certificate Verification: A Decentralized and Trustworthy Framework",
        conf: "2024 International Conference on Advances in Computing, Communication...",
        year: "2024"
    },
    { 
        title: "Verifi-chain: a credentials verifier using blockchain and IPFS",
        conf: "International Conference on Information, Communication and Computing...",
        year: "2023"
    },
    { 
        title: "Certiblock: the exemplary utilization of blockchain for the rigorous validation of academic certificates",
        conf: "2023 26th International Conference on Computer and Information Technology...",
        year: "2023"
    },
    { 
        title: "RMT: A Lightweight Encryption Algorithm for Blockchain-Based Certificate Verification",
        conf: "2023 IEEE 9th International Women in Engineering (WIE) Conference...",
        year: "2023"
    },
    { 
        title: "Voice Controlled Home Automation with Cloud-Based Environment Monitoring System",
        conf: "International Conference on Information and Communication Technology...",
        year: "2023"
    }
  ];

  return (
    <Section id="publications" className="publications-section">
      <h2 className="section-title center">Research & Publications</h2>
      
      <div className="publications-timeline">
        {papers.map((paper, index) => (
          <motion.div 
            key={index} 
            className="pub-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="pub-year">{paper.year}</div>
            <div className="pub-content">
                <h3 className="pub-title">{paper.title}</h3>
                <p className="pub-conf">{paper.conf}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;
