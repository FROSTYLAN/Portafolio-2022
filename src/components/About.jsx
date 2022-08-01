import React from "react";
import "../styles/About.css";
import academlo from "../imgs/academlo-icon.png";
import platzi from "../imgs/platzi-icon.png";

const About = ({ language }) => {
  return (
    <section className="About" id="about">
      <div className="title">
        <div></div>
        <p>{language ? "About" : "Sobre mí"}</p>
      </div>
      <div>
        <h1>
          {language
            ? "Get a closer look at who i am"
            : "Conoce más de cerca quién soy"}
        </h1>
      </div>
      <article>
        <div className="about-container">
          <div className="title uno">
            <div></div>
            <p>{language ? "Who am I" : "Quién soy"}</p>
          </div>
          <div className="span dos">
            <span>
              {language
                ? "Full Stack Developer with knowledge in HTML, CSS, Bootstrap, Javascript and React on the front-end side and node.js, express, postgresSQL on the back-end side. I like programming and design, I am proactive, responsible, persistent and self-taught. I am passionate about technology in general. I like to experiment, innovate, solve problems effectively, keep learning new things and reinforce the ones I already have."
                : "Desarrollador Fullstack con conocimientos en HTML, CSS, Boostrap, Javascript y React en el lado del front-end  y node.js, express, postgresSQL en el lado del back-end. Me gusta la programación y el diseño, soy proactiva, responsable, persistente y autodidacta. Soy un apasionado de la tecnología en general. Me gusta experimentar, innovar, resolver problemas efectivamente, seguir aprendiendo cosas nuevas y reforzar las que ya tengo."}
            </span>
          </div>
          <div className="button-container">
            <div className="button">
              <a
                target="blank"
                href="https://drive.google.com/u/0/uc?id=11saS1y3QUBV0jCJryCpiDe09r2d35BUE&export=download"
              >
                <button>{language ? "download CV" : "descargar CV"}</button>
              </a>
            </div>
          </div>
          <div className="title uno">
            <div></div>
            <p>{language ? "Studies" : "Estudios"}</p>
          </div>
          <div className="studies">
            <a
              href="https://certificates.academlo.com/en/credentials/charlescastillo814004"
              target="_blank"
              rel="noreferrer"
            >
              <img src={academlo} alt="academlo-icon" />
            </a>
            <a
              href="https://platzi.com/p/FROSTY/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={platzi} alt="platzi-icon" />
            </a>
          </div>
        </div>
        <div className="about-container">
          <div className="title uno">
            <div></div>
            <p>{language ? "Skills & Tools" : "Habilidades"}</p>
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
                <div data-width="95%" style={{ width: "85%" }}></div>
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
                <div data-width="95%" style={{ width: "95%" }}></div>
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
            <div class="chart">
              <span>
                <font>
                  <font>Git y GitHub</font>
                </font>
              </span>
              <footer>
                <div data-width="95%" style={{ width: "90%" }}></div>
              </footer>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
