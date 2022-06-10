import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="About" id="about">
      <div className="title">
        <div></div>
        <p>About</p>
      </div>
      <div>
        <h1>Get a closer look at who i am</h1>
      </div>
      <article>
        <div className="about-container">
          <div className="title uno">
            <div></div>
            <p>Who am I</p>
          </div>
          <div className="span dos">
            <span>
              Front end developer with knowledge in HTML, CSS, Javascript and
              React I like programming and design, I am proactive, responsible,
              persistent and self-taught. I am passionate about technology in
              general. I like to experiment, innovate, solve problems
              effectively, keep learning new things and reinforce the ones I
              already have.
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
        <div className="about-container">
          <div className="title uno">
            <div></div>
            <p>Skill & Tools</p>
          </div>
          <div className="skills">
            <div class="chart">
              <span>
                <font>
                  <font>Node.js</font>
                </font>
              </span>
              <footer>
                <div data-width="95%" style={{ width: "75%" }}></div>
              </footer>
            </div>
            <div class="chart">
              <span>
                <font>
                  <font>React.js</font>
                </font>
              </span>
              <footer>
                <div data-width="95%" style={{ width: "80%" }}></div>
              </footer>
            </div>
            <div class="chart">
              <span>
                <font>
                  <font>Javascript</font>
                </font>
              </span>
              <footer>
                <div data-width="95%" style={{ width: "85%" }}></div>
              </footer>
            </div>
            <div class="chart">
              <span>
                <font>
                  <font>HTML / CSS</font>
                </font>
              </span>
              <footer>
                <div data-width="95%" style={{ width: "82%" }}></div>
              </footer>
            </div>
            <div class="chart">
              <span>
                <font>
                  <font>PostgresSQL</font>
                </font>
              </span>
              <footer>
                <div data-width="95%" style={{ width: "72%" }}></div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
