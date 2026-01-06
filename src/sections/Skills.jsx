import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJs, FaLinux, FaDocker, FaWindows, FaNetworkWired } from "react-icons/fa";
import { SiCplusplus, SiSolidity, SiDart, SiMysql, SiWireshark, SiBurpsuite, SiGnubash, SiPandas, SiNumpy, SiTableau, SiLatex, SiKalilinux, SiMetasploit } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";
import { BsHddNetwork } from "react-icons/bs";
import Section from "../components/Section";
import "./Skills.css";

const Skills = () => {
    const arsenal = [
        {
            category: "Programming Languages",
            items: [
                { name: "Python", icon: <FaPython /> },
                { name: "C/C++", icon: <SiCplusplus /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "SQL", icon: <SiMysql /> },
                { name: "Dart", icon: <SiDart /> },
                { name: "Solidity", icon: <SiSolidity /> },
                { name: "Bash", icon: <SiGnubash /> }
            ]
        },
        {
            category: "Blockchain & Web3",
            items: [
                { name: "Hardhat", icon: <SiSolidity /> },
                { name: "Truffle", icon: null },
                { name: "Ganache", icon: null },
                { name: "Web3.js", icon: <FaJs /> },
                { name: "Ethers.js", icon: <FaJs /> },
                { name: "Clarity", icon: null },
                { name: "Smart Contracts", icon: <SiSolidity /> }
            ]
        },
        {
            category: "Cybersecurity Tools",
            items: [
                { name: "Burp Suite", icon: <SiBurpsuite /> },
                { name: "Nmap", icon: <SiGnubash /> },
                { name: "Metasploit", icon: <SiMetasploit /> },
                { name: "Wireshark", icon: <SiWireshark /> },
                { name: "Recon-ng", icon: <FaNetworkWired /> },
                { name: "Kali Linux", icon: <SiKalilinux /> },
                { name: "Cisco Packet Tracer", icon: <BsHddNetwork /> }
            ]
        },
        {
            category: "Cyber Forensics",
            items: [
                { name: "Autopsy", icon: <VscTerminal /> },
                { name: "EnCase", icon: <BsHddNetwork /> }, // Using generic network/HDD icon
                { name: "FTK Imager", icon: <BsHddNetwork /> },
                { name: "Volatility", icon: <VscTerminal /> },
                { name: "Regshot", icon: <FaWindows /> },
                { name: "IDA Pro", icon: <VscTerminal /> },
                { name: "Ghidra", icon: <SiKalilinux /> }
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
        Technical Arsenal
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
