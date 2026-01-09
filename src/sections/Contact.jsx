import { FaLinkedin, FaGithub, FaGoogle } from "react-icons/fa";
import Section from "../components/Section";
import "./Contact.css";

const Contact = () => {
  return (
    <Section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title center">Get In Touch</h2>
        <p className="contact-intro">
            Whether you want to discuss a project, security audit, or just say hi, my inbox is open.
        </p>
        
        <a href="mailto:its.raatul@gmail.com" className="contact-btn">
            Say Hello
        </a>

        <div className="social-links">
            <a href="https://linkedin.com/in/raatul" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/itsraatul" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={24} />
            </a>
            <a href="https://scholar.google.com/citations?user=a4EGu4AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                <FaGoogle size={24} />
            </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
