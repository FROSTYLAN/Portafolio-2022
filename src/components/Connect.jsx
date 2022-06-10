import React, { useState } from "react";
import "../styles/Connect.css";
import emailjs from "emailjs-com";

const Connect = () => {
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
          <p>Connect</p>
        </div>
        <div>
          <h1>Interested in working with me</h1>
          <h1>or perhaps just talk?</h1>
        </div>
        <div className="space"></div>
        <div className="span">
          <span>Reach me on social media or by sending an</span>
        </div>
        <div className="span">
          <span>email to </span>
          <span className="red">castillo089frosty@gmail.com</span>
        </div>
        <div className="space"></div>
        <div className="button">
          <button onClick={() => setIsOpen(!isOpen)}>Get in touch</button>
        </div>

        <article className={`modal ${isOpen && "is-open"}`}>
          <form className="form-container" id="myForm" onSubmit={sendEmail}>
            <div onClick={() => buttonForm()} className="modal-close">
              <i className="fa-solid fa-circle-xmark"></i>
            </div>

            <div className="input-container">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="input-container">
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" id="phone" />
            </div>

            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div className="submit">
              <button type="submit" onClick={() => buttonForm()}>
                Submit
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
        <h3>Made by Charles Castillo</h3>
        <span>© Copyright 2022</span>
        <br />
      </div>
    </section>
  );
};

export default Connect;
