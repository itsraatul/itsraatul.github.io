import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import CyberWidget from './components/CyberWidget';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Certifications />
      <Contact />
      <CyberWidget />
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#666', borderTop: '1px solid #222' }}>
        <p>&copy; {new Date().getFullYear()} Arunangshu Mojumder Raatul. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
