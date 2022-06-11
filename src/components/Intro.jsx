import React from "react";
import "../styles/Intro.css";
import introImg from "../imgs/intro-img.png";

const Intro = ({ language }) => {
  return (
    <section className="Intro" id="intro">
      <div className="presentation">
        <div className="iam">
          <h1>
            {language ? "Hey, I'm " : "Hola soy "} <b>Charles</b>
          </h1>
          {language ? (
            <>
              <h3>
                a <b>web</b> development
              </h3>
              <h3>specialized in front-end</h3>
            </>
          ) : (
            <>
              <h3>
                un desarrollador <b>web</b>
              </h3>
              <h3>especializado en front-end</h3>
            </>
          )}
        </div>
        <div className="span">
          <span>
            {language
              ? "Stick around to see some of my work."
              : "Quédate para ver algunos de mis trabajos."}
          </span>
        </div>
        <div className="button">
          <a target="blank" href="https://github.com/FROSTYLAN">
            <button>{language ? "See my work" : "Mira mi trabajo"}</button>
          </a>
        </div>
      </div>
      <figure className="intro-img">
        <div>
          <img src={introImg} alt="intro" />
        </div>
      </figure>
    </section>
  );
};

export default Intro;
