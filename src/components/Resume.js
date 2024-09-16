import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="experience">
        <h2>Competitive Programming</h2>
        <ul>
          <li> Code chef rating - 1300</li>
          <li> Codeforces rating - </li>
        </ul>
      </div>
      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>Galgotias University - Computer Science (2026)</li>
          <li>Manav Rachna - high school(2021) </li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
