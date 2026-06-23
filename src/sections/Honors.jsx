import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar, FaAward, FaCertificate } from "react-icons/fa";
import Section from "../components/Section";
import "./Honors.css";

const Honors = () => {
    // Determine appropriate icons based on the award title
    const getIcon = (title) => {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes("champion") || lowerTitle.includes("gold") || lowerTitle.includes("performer")) return <FaTrophy />;
        if (lowerTitle.includes("medal")) return <FaMedal />;
        if (lowerTitle.includes("scholarship")) return <FaStar />;
        if (lowerTitle.includes("finalist") || lowerTitle.includes("runner")) return <FaAward />;
        return <FaCertificate />;
    };

    const awards = [
        {
            title: "Best Performer",
            event: "Department of Computer Science and Engineering",
            issuer: "SRM Institute of Science and Technology",
            year: "2026",
            featured: true
        },
        {
            title: "Top Performer",
            event: "Department of Computer Science and Engineering",
            issuer: "SRM Institute of Science and Technology",
            year: "2026",
            featured: true
        },
        {
            title: "Champions",
            event: "SEED Global Hackathon",
            issuer: "George Washington University & Boston University",
            year: "2024",
            featured: true
        },
        {
            title: "Gold Medal",
            event: "International Research Day",
            issuer: "SRM Institute of Science Technology",
            year: "2026",
            featured: true
        },
        {
            title: "Gold Medal",
            event: "International Research Day",
            issuer: "SRM Institute of Science Technology",
            year: "2025",
            featured: true
        },
        {
            title: "Champions",
            event: "Cybersecurity Ideathon",
            issuer: "Department of NWC, SRM Institute of Science and Technology",
            year: "2026",
            featured: true
        },
        {
            title: "Champions",
            event: "CTF",
            issuer: "W3-CS, SRM Institute of Science and Technology",
            year: "2026",
            featured: true
        },
        {
            title: "Champions",
            event: "Security Infrastructure Design",
            issuer: "W3-CS, SRM Institute of Science and Technology",
            year: "2026",
            featured: true
        },
        {
            title: "Best Oral Presentation Award",
            event: "International Conference on Electronics and Informatics",
            issuer: "IEEE",
            year: "2024",
            featured: false
        },
        {
            title: "Champions",
            event: "Pitching Competition",
            issuer: "International Professional Activities Conference 2023, IEEE",
            year: "2023",
            featured: false
        },
        {
            title: "Vice-Chancellor's Honors Scholarship",
            event: "Academic Excellence Award",
            issuer: "ULAB",
            year: "Summer 2021",
            featured: false
        },
        {
            title: "Deans Honors Scholarship Awards",
            event: "Academic Excellence Award",
            issuer: "ULAB",
            year: "Fall 2022",
            featured: false
        },
        {
            title: "Founder's Scholarship",
            event: "Academic Excellence Award",
            issuer: "SRM Institute of Science and Technology",
            year: "2024",
            featured: false
        },
        {
            title: "Runners Up",
            event: "National Blockchain Olympiad Bangladesh",
            issuer: "Blockchain Olympiad",
            year: "2023",
            featured: false
        },
        {
            title: "Finalist",
            event: "CTOforum Hackathon",
            issuer: "CTO Forum",
            year: "2022",
            featured: false
        },
        {
            title: "1st Runners Up",
            event: "GP Academy Cisco Cybersecurity Quiz",
            issuer: "Grameenphone Academy & Cisco",
            year: "2024",
            featured: false
        }
    ];

    return (
        <Section id="honors" className="honors-section">
            <h2 className="section-title center">Awards & Achievements</h2>
            
            <div className="honors-container">
                {awards.map((award, index) => (
                    <motion.div 
                        key={index} 
                        className={`honor-card ${award.featured ? "featured" : "standard"}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: (index % 4) * 0.08, duration: 0.4 }}
                    >
                        <div className="honor-icon-wrapper">
                            {getIcon(award.title)}
                        </div>
                        <div className="honor-content">
                            <div className="honor-header">
                                <h3 className="honor-title">{award.title}</h3>
                                {award.featured && <span className="featured-badge">Major</span>}
                            </div>
                            {award.event && <h4 className="honor-event">{award.event}</h4>}
                            {award.issuer && <p className="honor-issuer">{award.issuer}</p>}
                            {award.year && <span className="honor-year">{award.year}</span>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Honors;

