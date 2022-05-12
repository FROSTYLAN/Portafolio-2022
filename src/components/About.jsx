import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="About" id="about">
      <div className="title">
        <div></div>
        <p>About</p>
      </div>
      <div className="about-container">
        <div>
          <h1>Get a closer look at who i am</h1>
        </div>
        <div className="title uno">
          <div></div>
          <p>Skill & Tools</p>
        </div>
        <div className="span">
          <span>
            HTML/CSS, JavaScript, React, NodeJS, Express, Postgress, Photoshop
          </span>
        </div>
        <div className="title uno">
          <div></div>
          <p>Who am I</p>
        </div>
        <div className="span dos">
          <span>
            Front end developer with knowledge in HTML, CSS, Javascript and
            React I like programming and design, I am proactive, responsible,
            persistent and self-taught. I am passionate about technology in
            general. I like to experiment, innovate, solve problems effectively,
            keep learning new things and reinforce the ones I already have.
          </span>
        </div>
        <div className="button-container">
          <div className="button">
            <a
              target="blank"
              href="https://drive.google.com/file/d/1oHl8FBiLrI_fAsBFpYRqjls3HrkI5cPN/view?usp=sharing"
            >
              <button>download CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
