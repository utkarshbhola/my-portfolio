import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-bar">
        <span>Python</span>
        <div className="bar"><div className="progress" style={{width: '90%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>SQL</span>
        <div className="bar"><div className="progress" style={{width: '80%'}}></div></div>
      </div>
      <div className="skill-bar">
        <span>Web Design</span>
        <div className="bar"><div className="progress" style={{width: '65%'}}></div></div>
      </div>
    </section>
  );
};

export default Skills;
