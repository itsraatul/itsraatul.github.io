import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal } from "react-icons/fa";
import "./Terminal.css";

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to RaatulQS v1.0.0",
    "Type 'help' for available commands.",
  ]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [output, isOpen]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newOutput = [...output, ` visitor@raatul:~$ ${input}`];
      
      let response = "";
      switch (cmd) {
        case "help":
          response = "Available commands: help, whoami, ls, cat [file], clear, exit, contact";
          break;
        case "whoami":
            response = "visitor (unauthorized access level)";
            break;
        case "ls":
            response = "about.txt  skills.json  secrets.enc  contact.md";
            break;
        case "cat about.txt":
            response = "I am a Cyber Security Specialist focused on Blockchain and Forensics.";
            break;
        case "cat skills.json":
            response = "{ 'offensive': ['Nmap', 'Burp'], 'defensive': ['SIEM', 'IDS'], 'blockchain': ['Solidity'] }";
            break;
        case "cat secrets.enc":
            response = "ACCESS DENIED. Decryption key required.";
            break;
        case "contact":
            response = "Opening mail client...";
            window.location.href = "mailto:its.raatul@gmail.com";
            break;
        case "clear":
            setOutput([]);
            setInput("");
            return;
        case "exit":
            setIsOpen(false);
            return;
        default:
            if (cmd.startsWith("cat ")) {
                 response = `Error: File not found.`;
            } else if (cmd === "") {
                response = "";
            } else {
                response = `Command not found: ${cmd}`;
            }
      }
      
      if (response) newOutput.push(response);
      setOutput(newOutput);
      setInput("");
    }
  };

  return (
    <>
      <button 
        className="terminal-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Terminal"
      >
        <FaTerminal />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="terminal-overlay"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <div className="terminal-window">
              <div className="terminal-bar">
                <span className="terminal-bar-title">visitor@raatul: ~</span>
                <button onClick={() => setIsOpen(false)} className="terminal-close">x</button>
              </div>
              <div className="terminal-content" onClick={() => inputRef.current?.focus()}>
                {output.map((line, i) => (
                  <div key={i} className="terminal-line">{line}</div>
                ))}
                <div className="input-line">
                  <span className="prompt">visitor@raatul:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleCommand}
                    className="terminal-input"
                    autoFocus
                  />
                </div>
                <div ref={messagesEndRef} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
