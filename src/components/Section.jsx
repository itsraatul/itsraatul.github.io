import React from "react";

const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`section-container ${className}`} style={{
      padding: "80px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      position: "relative",
      width: "100%"
    }}>
      {children}
    </section>
  );
};

export default Section;
