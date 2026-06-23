import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJs, FaNetworkWired, FaShieldAlt, FaGlobe, FaSearch } from "react-icons/fa";
import { SiC, SiCplusplus, SiSolidity, SiDart, SiMysql, SiWireshark, SiBurpsuite, SiLatex, SiKalilinux, SiMetasploit } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";
import { BsHddNetwork } from "react-icons/bs";
import Section from "../components/Section";
import "./Skills.css";

const Skills = () => {
    const arsenal = [
        {
            category: "Languages",
            items: [
                { name: "Python", icon: <FaPython /> },
                { name: "C", icon: <SiC /> },
                { name: "C++", icon: <SiCplusplus /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "SQL", icon: <SiMysql /> },
                { name: "Solidity", icon: <SiSolidity /> },
                { name: "Dart", icon: <SiDart /> },
                { name: "LaTeX", icon: <SiLatex /> }
            ]
        },
        {
            category: "Blockchain & Web3 Tools",
            items: [
                { name: "Hardhat", icon: <SiSolidity /> },
                { name: "Truffle", icon: <SiSolidity /> },
                { name: "Ganache", icon: <SiSolidity /> },
                { name: "Web3.js", icon: <FaJs /> },
                { name: "Ethers.js", icon: <FaJs /> },
                { name: "Clarity", icon: <SiSolidity /> }
            ]
        },
        {
            category: "Penetration Testing",
            items: [
                { name: "Web Application Security Testing", icon: <SiBurpsuite /> },
                { name: "Vulnerability Assessment", icon: <FaShieldAlt /> },
                { name: "OWASP Top 10", icon: <FaShieldAlt /> },
                { name: "Network Penetration Testing", icon: <FaNetworkWired /> },
                { name: "API Security Testing", icon: <FaShieldAlt /> },
                { name: "Secure Code Review", icon: <SiCplusplus /> },
                { name: "Threat Modeling", icon: <FaSearch /> }
            ]
        },
        {
            category: "Tools",
            items: [
                { name: "Kali Linux", icon: <SiKalilinux /> },
                { name: "Burp Suite", icon: <SiBurpsuite /> },
                { name: "Nmap", icon: <VscTerminal /> },
                { name: "Wireshark", icon: <SiWireshark /> },
                { name: "Metasploit", icon: <SiMetasploit /> },
                { name: "Recon-ng", icon: <FaNetworkWired /> },
                { name: "Autopsy", icon: <VscTerminal /> },
                { name: "Qualys VMDR", icon: <FaShieldAlt /> },
                { name: "Nuclei", icon: <FaSearch /> },
                { name: "Sqlmap", icon: <SiMysql /> },
                { name: "Ghidra", icon: <SiKalilinux /> },
                { name: "Hashcat", icon: <VscTerminal /> }
            ]
        },
        {
            category: "Network Security",
            items: [
                { name: "TCP/IP", icon: <FaNetworkWired /> },
                { name: "DNS", icon: <BsHddNetwork /> },
                { name: "HTTP/HTTPS", icon: <FaGlobe /> },
                { name: "Packet Analysis", icon: <SiWireshark /> },
                { name: "Firewall Concepts", icon: <FaShieldAlt /> }
            ]
        },
        {
            category: "Blue Team",
            items: [
                { name: "Threat Hunting", icon: <FaSearch /> },
                { name: "SIEM Fundamentals", icon: <VscTerminal /> },
                { name: "Incident Response", icon: <FaShieldAlt /> },
                { name: "OSINT", icon: <FaNetworkWired /> }
            ]
        }
    ];

  return (
    <Section id="skills" className="skills-section">
      <motion.h2 
        className="section-title center"
        initial={{ opacity: 0, letterSpacing: "5px" }}
        whileInView={{ opacity: 1, letterSpacing: "2px" }}
        viewport={{ once: true }}
      >
        Technical Expertise
      </motion.h2>

      <div className="arsenal-grid">
        {arsenal.map((group, index) => (
            <motion.div 
                key={index} 
                className="arsenal-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
                <div className="card-scanner-line"></div>
                <h3 className="arsenal-category">{group.category}</h3>
                <div className="arsenal-items">
                    {group.items.map((item, idx) => (
                        <span key={idx} className="arsenal-tag">
                            {item.icon && <span className="tag-icon">{item.icon}</span>}
                            {item.name}
                        </span>
                    ))}
                </div>
            </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
