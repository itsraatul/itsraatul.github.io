import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaGoogle, FaShieldAlt, FaAward, FaTerminal, FaCertificate, 
    FaUserShield, FaSkullCrossbones, FaLaptopCode, FaCheckDouble 
} from "react-icons/fa";
import Section from "../components/Section";
import "./Certifications.css";

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certs = [
        { 
            name: "Certified Ethical Hacker (CEH)", 
            issuer: "EC-Council", 
            date: "February 2025", 
            pdf: "/certification/ceh.pdf",
            icon: <FaSkullCrossbones />,
            color: "#ff0055",
            glow: "rgba(255, 0, 85, 0.2)"
        },
        { 
            name: "Best Performer", 
            issuer: "Department of Computer Science & Engineering, SRM Institute of Science and Technology", 
            date: "2026", 
            pdf: "/certification/Best_Performer.pdf",
            icon: <FaAward />,
            color: "#ffaa00",
            glow: "rgba(255, 170, 0, 0.2)"
        },
        { 
            name: "Top Performer", 
            issuer: "Department of Computer Science & Engineering, SRM Institute of Science and Technology", 
            date: "2026", 
            pdf: "/certification/Top_Performer.pdf",
            icon: <FaAward />,
            color: "#ffc800",
            glow: "rgba(255, 200, 0, 0.2)"
        },
        { 
            name: "Google Cybersecurity Professional Certificate", 
            issuer: "Google", 
            date: "July 2025", 
            pdf: "/certification/google_cybersecurity.pdf",
            icon: <FaGoogle />,
            color: "#4285f4",
            glow: "rgba(66, 133, 244, 0.2)"
        },
        { 
            name: "Blue Team Junior Analyst", 
            issuer: "Security Blue Team", 
            date: "July 2025", 
            pdf: "/certification/blue_team_junior_analyst.pdf",
            icon: <FaShieldAlt />,
            color: "#00d2ff",
            glow: "rgba(0, 210, 255, 0.2)"
        },
        { 
            name: "ISO/IEC 27001:2022 Lead Auditor", 
            issuer: "Mastermind Assurance", 
            date: "July 2025", 
            pdf: "/certification/iso_27001.pdf",
            icon: <FaCheckDouble />,
            color: "#ffaa00",
            glow: "rgba(255, 170, 0, 0.2)"
        },
        { 
            name: "ISO/IEC 42001:2023 Lead Auditor", 
            issuer: "Mastermind Assurance", 
            date: "June 2025", 
            pdf: "/certification/iso_42001.pdf",
            icon: <FaCertificate />,
            color: "#ffc800",
            glow: "rgba(255, 200, 0, 0.2)"
        },
        { 
            name: "Qualys Cybersecurity Asset Management", 
            issuer: "Qualys", 
            date: "June 2025", 
            pdf: "/certification/CyberSecurity_Asset_Management.pdf",
            icon: <FaTerminal />,
            color: "#00ffcc",
            glow: "rgba(0, 255, 204, 0.2)"
        },
        { 
            name: "Qualys Endpoint Detection and Response", 
            issuer: "Qualys", 
            date: "June 2025", 
            pdf: "/certification/Endpoint_Detection_Response.pdf",
            icon: <FaUserShield />,
            color: "#00ff88",
            glow: "rgba(0, 255, 136, 0.2)"
        },
        { 
            name: "Qualys Patch Management", 
            issuer: "Qualys", 
            date: "June 2025", 
            pdf: "/certification/Patch_Management.pdf",
            icon: <FaTerminal />,
            color: "#00e5ff",
            glow: "rgba(0, 229, 255, 0.2)"
        },
        { 
            name: "Best Presentation Award", 
            issuer: "International Conference on Electronics and Informatics", 
            date: "2024", 
            pdf: "/certification/Best_Presenter.pdf",
            icon: <FaAward />,
            color: "#ff00aa",
            glow: "rgba(255, 0, 170, 0.2)"
        },
        { 
            name: "SEEd Global Hackathon Certificate", 
            issuer: "George Washington University & Boston University", 
            date: "2024", 
            pdf: "/certification/George_Washington.pdf",
            icon: <FaLaptopCode />,
            color: "#bd00ff",
            glow: "rgba(189, 0, 255, 0.2)"
        }
    ];

    // Lock body scroll and block right-clicks/saving shortcuts when modal is open
    useEffect(() => {
      if (selectedCert) {
        document.body.style.overflow = "hidden";

        // Prevent right-click globally when modal is open
        const handleContextMenu = (e) => {
          e.preventDefault();
        };

        // Prevent print, save, copy, view-source and devtools keyboard shortcuts
        const handleKeyDown = (e) => {
          const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
          const metaOrCtrl = isMac ? e.metaKey : e.ctrlKey;

          // Ctrl+S (Save), Ctrl+P (Print), Ctrl+C (Copy), Ctrl+U (View Source)
          if (metaOrCtrl && ["s", "p", "c", "u"].includes(e.key.toLowerCase())) {
            e.preventDefault();
          }

          // F12 or Ctrl+Shift+I / Ctrl+Shift+J (DevTools)
          if (e.key === "F12" || (metaOrCtrl && e.shiftKey && ["i", "j"].includes(e.key.toLowerCase()))) {
            e.preventDefault();
          }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
          document.body.style.overflow = "auto";
          document.removeEventListener("contextmenu", handleContextMenu);
          document.removeEventListener("keydown", handleKeyDown);
        };
      } else {
        document.body.style.overflow = "auto";
      }
    }, [selectedCert]);

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
            onClick={() => setSelectedCert(cert)}
            style={{
              "--cert-color": cert.color,
              "--cert-color-glow": cert.glow,
              "--cert-color-border": cert.color + "30",
              "--cert-color-hover-border": cert.color + "80",
              "--cert-color-bg": cert.color + "05",
              "--cert-color-hover-bg": cert.color + "15"
            }}
          >
            <div className="cert-thumbnail-container">
              <div className="cert-icon" style={{ color: cert.color }}>
                {cert.icon}
              </div>
            </div>
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <span className="cert-date">{cert.date}</span>
            <div className="cert-card-hover-text" style={{ background: cert.color }}>Click to view</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              className="cert-modal-content"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-modal-btn" 
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
              >
                &times;
              </button>
              
              <div className="modal-header" style={{ borderBottomColor: `${selectedCert.color}30` }}>
                <h3 style={{ 
                  background: `linear-gradient(135deg, #ffffff 40%, ${selectedCert.color} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  display: "inline-block"
                }}>
                  {selectedCert.name}
                </h3>
                <p>{selectedCert.issuer} - {selectedCert.date}</p>
              </div>
              
              <div className="pdf-viewer-container">
                {/* Embedded PDF viewer. #toolbar=0&navpanes=0 helps hide defaults in supported browsers */}
                <iframe 
                  src={`${selectedCert.pdf}#toolbar=0&navpanes=0&scrollbar=0`} 
                  title={selectedCert.name}
                  className="pdf-iframe"
                  frameBorder="0"
                />
                
                {/* Invisible overlay trick to make right-clicking harder without disabling selection completely */}
                <div className="pdf-overlay" onContextMenu={(e) => e.preventDefault()}></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Certifications;
