import React from "react";
import "../styles/Intro.css";
import introImg from "../imgs/intro-img.png";

const Intro = ({ language }) => {
  return (
    <section className="Intro" id="intro">
      <div className="presentation">
        <div className="iam">
          <h1>
            Hey, I'm <b>Charles</b>
          </h1>
          <h3>
            a <b>self-taught</b> designer
          </h3>
          <h3>& front-end developer.</h3>
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
