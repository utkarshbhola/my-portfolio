import React from "react";
import "./About.css";
import dp from './dp.jpeg';
const About = () => {
  return (
    <section id="about" className="about">
      <h2>I Create Digital Future</h2>
      <p>As a passionate computer scientist in my third year at Galgotias University, I'm eager to delve deeper into the fascinating world of technology. With each passing day, I'm honing my skills in programming, problem-solving, and innovation. I'm excited to contribute to the ever-evolving field of computer science and make a positive impact on the world.</p>
      <img src={dp} className="profile-pic"></img>
    </section>
  );
};

export default About;
