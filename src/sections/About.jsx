import React from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import "./About.css";

const About = () => {
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
    <Section id="about" className="about-section">
      {/* Row 1: About Me (Full Width) */}
      <motion.div 
        className="bio-row"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="bio-text">
          I graduated with <span className="highlight">First Class Distinction</span> in my Master's degree and <span className="highlight">Magna Cum Laude</span> in my Bachelor's degree. I have authored seven peer-reviewed research publications, won multiple hackathons and academic competitions, and delivered blockchain workshops as a speaker and trainer.
        </p>
        <p className="bio-text">
          My research interests include <strong>cybersecurity</strong>, <strong>blockchain systems</strong>, <strong>applied cryptography</strong>, and <strong>vulnerability research</strong>, with a particular focus on identifying and mitigating security weaknesses in real-world systems.
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">7+</span>
            <span className="stat-label">Publications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">70+</span>
            <span className="stat-label">Citations</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Hackathon Wins</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Awards & Achievements</span>
          </div>
        </div>
      </motion.div>

      {/* Row 2: Two Columns (Education & Experience) */}
      <div className="background-grid">
        {/* Education Column */}
        <motion.div 
          className="education-column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">Education</h2>
          
          <div className="edu-cards-container">
            <div className="edu-card">
              <div className="edu-year">2024 - 2026</div>
              <h3 className="edu-degree">Master of Technology in Information Security and Cyber Forensics</h3>
              <h4 className="edu-school">SRM Institute of Science and Technology</h4>
              <p className="edu-detail">CGPA: 9.62/10.00 (First Class Distinction) • Founder's Scholarship</p>
            </div>

            <div className="edu-card">
              <div className="edu-year">2019 - 2023</div>
              <h3 className="edu-degree">Bachelor of Science in Computer Science and Engineering</h3>
              <h4 className="edu-school">University of Liberal Arts Bangladesh</h4>
              <p className="edu-detail">CGPA: 3.86/4.00 • Magna cum Laude Distinction</p>
            </div>
          </div>
        </motion.div>

        {/* Experience Column */}
        <motion.div 
          className="experience-column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="exp-cards-container">
            {jobs.map((job, index) => (
              <div key={index} className="exp-card">
                <div className="exp-header">
                  <span className="exp-period">{job.period}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
                <h3 className="exp-role">{job.role}</h3>
                <h4 className="exp-company">{job.company}</h4>
                <p className="exp-description">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
