import React, { useState } from "react";
import "../styles/Connect.css";
import emailjs from "emailjs-com";

const Connect = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5dkhvas",
        "template_2dk552o",
        e.target,
        "oWHU7ZsQZ6c-jPzmL"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    e.target.reset();
  }
  const buttonForm = () => {
    setIsOpen(false);
  };
  return (
    <section className="Connect">
      <div className="connect-container" id="connect">
        <div className="title">
          <div></div>
          <p>{language ? "Connect" : "Contacto"}</p>
        </div>
        <div>
          {language ? (
            <>
              <h1>Interested in working with me</h1>
              <h1>or perhaps just talk?</h1>
            </>
          ) : (
            <>
              <h1>Estás interesado en trabajar conmigo</h1>
              <h1>o solo hablar?</h1>
            </>
          )}
        </div>
        <div className="space"></div>
        <div className="span">
          <span>
            {language
              ? "Reach me on social media or by sending an"
              : "Contáctame en las redes sociales o enviándome un"}
          </span>
        </div>
        <div className="span">
          <span>{language ? "email to" : "correo a"} </span>
          <span>
            <a className="red" href="mailto:castillo089frosty@gmail.com">
              castillo089frosty@gmail.com
            </a>
          </span>
        </div>
        <div className="space"></div>
        <div className="button">
          <button onClick={() => setIsOpen(!isOpen)}>
            {language ? "Get in touch" : "Contáctame"}
          </button>
        </div>

        <article className={`modal ${isOpen && "is-open"}`}>
          <form className="form-container" id="myForm" onSubmit={sendEmail}>
            <div onClick={() => buttonForm()} className="modal-close">
              <i className="fa-solid fa-circle-xmark"></i>
            </div>

            <div className="input-container">
              <label htmlFor="name">{language ? "Name" : "Nomb"}</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="input-container">
              <label htmlFor="email">{language ? "Email" : "correo"}</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="input-container">
              <label htmlFor="phone"> {language ? "Phone" : "teléfono"}</label>
              <input type="text" name="phone" id="phone" />
            </div>

            <div className="input-container">
              <label htmlFor="message">
                {language ? "Message" : "mensaje"}
              </label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div className="submit">
              <button type="submit" onClick={() => buttonForm()}>
                {language ? "Submit" : "Enviar"}
              </button>
            </div>
          </form>
        </article>

        <br />
        <div className="redes">
          <div className="red">
            <a target="blank" href="https://github.com/FROSTYLAN">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="red">
            <a
              target="blank"
              href="https://www.linkedin.com/in/charles-castillo-772968234/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="red">
            <a
              target="blank"
              href="https://www.youtube.com/channel/UCeEolCunsX0h3Q7W0-b8EoQ"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="redes">
          <div className="red"></div>
          <div className="red"></div>
        </div>
      </div>
      <div className="credit">
        <h3>
          {language ? "Made by Charles Castillo" : "Hecho por Charles Castillo"}
        </h3>
        <span>© Copyright 2022</span>
        <br />
      </div>
    </section>
  );
};

export default Connect;
