import React, { useState } from "react";
import "../styles/Work.css";
import projects from "../proyects.json";

const Work = ({ language }) => {
  const [cont, setCont] = useState(0);
  const increment = () => {
    if (cont < 4) {
      setCont(cont + 1);
    }
  };
  const decrement = () => {
    if (cont > 0) {
      setCont(cont - 1);
    }
  };
  return (
    <section className="Work" id="work">
      <div className="title title-container__work">
        <div></div>
        <p>{language ? "Work" : "Proyectos"}</p>
      </div>
      <div className="projects-container">
        <div className="project-container">
          <div className="title-work">
            <h1>
              {language
                ? "Hand-picked projects for to see"
                : "Proyectos cuidadosamente seleccionados"}
            </h1>
          </div>
          <br />
          <div className="count">
            <button className="arrows" onClick={() => decrement()}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <span className="count">{`0${cont + 1}/05`}</span>
            <button className="arrows" onClick={() => increment()}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
          <br />
          <div className="project">
            <h3>{projects[cont].title}</h3>
            <div className="span">
              <span>{projects[cont].description}</span>
            </div>
            <br />
            <div className="button">
              <a target="blank" href={projects[cont].url}>
                <button>{language ? "View Project" : "Ver proyecto"}</button>
              </a>
            </div>
          </div>
        </div>
        <figure className="img-container">
          <img src={projects[cont].img} alt="" />
        </figure>
      </div>
    </section>
  );
};

export default Work;
