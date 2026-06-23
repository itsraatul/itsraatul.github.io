import React from 'react';
import { Navbar } from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Certifications from './sections/Certifications';
import Honors from './sections/Honors';
import Contact from './sections/Contact';
import CyberWidget from './components/CyberWidget';
import Terminal from './components/Terminal';
import Cursor from './components/Cursor';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Certifications />
      <Honors />
      <Contact />
      <CyberWidget />
      <Terminal />
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#666', borderTop: '1px solid #222' }}>
        <p>&copy; {new Date().getFullYear()} Arunangshu Mojumder Raatul. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
