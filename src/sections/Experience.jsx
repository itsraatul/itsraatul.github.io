import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import "./Experience.css";

const Experience = () => {
  const jobs = [
    {
      role: "Junior Research Assistant",
      company: "University of Liberal Arts Bangladesh",
      location: "Dhaka, Bangladesh",
      period: "March 2024 – August 2024",
      description: "Contributed to a Blockchain and Cryptography Project Funded by Ministry of Science and Technology."
    },
    {
        role: "Lab Assistant (Certified Ethical Hacker)",
        company: "IBCS-Primax",
        location: "Dhaka, Bangladesh",
        period: "June 2024 – July 2024",
        description: "Lab Assistant for CEH training to Government officials."
      },
      {
        role: "Teaching Assistant",
        company: "University of Liberal Arts Bangladesh",
        location: "Dhaka, Bangladesh",
        period: "February 2023 – April 2024",
        description: "Mentored students in AI, Computer Security, and Networking; supported labs and assessments."
      }
  ];

  return (
    <Section id="experience" className="experience-section">
      <h2 className="section-title center">Professional Experience</h2>
      
      <div className="timeline">
        {jobs.map((job, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <span className="job-period">{job.period}</span>
                <h3 className="job-role">{job.role}</h3>
                <h4 className="job-company">{job.company}</h4>
                <p className="job-location">{job.location}</p>
                <p className="job-description">{job.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
