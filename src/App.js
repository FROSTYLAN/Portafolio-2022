import "./App.css";
import { About, Connect, Intro, Work } from "./components";
import logo from "./imgs/logo.png";
import { Link } from "react-scroll";
import { useState } from "react";

function App() {
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState(false);
  return (
    <div className="App">
      <nav className="Nav">
        <figure>
          <Link className="Link" to="intro" smooth={true} duration={1000}>
            <img src={logo} alt="logo" width="70px" />
          </Link>
        </figure>

        <input
          type="checkbox"
          onClick={() => setNav(true)}
          id="menu"
          className={nav ? "menu-input menu2" : "menu-input"}
        />
        <label htmlFor="menu" id="menu">
          <i className="fa-solid fa-bars"></i>
        </label>

        <ul className="nav-principal">
          <li>
            <Link
              onClick={() => setNav(false)}
              className="Link"
              to="work"
              smooth={true}
              duration={1000}
            >
              {language ? "Work" : "Proyectos"}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              className="Link"
              to="about"
              smooth={true}
              duration={1000}
            >
              {language ? "About" : "Sobre mí"}
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setNav(false)}
              className="Link"
              to="connect"
              smooth={true}
              duration={1000}
            >
              {language ? "Connect" : "Contacto"}
            </Link>
          </li>
          <li className="btnLanguage">
            <label class="switch">
              <input type="checkbox" />
              <span
                onClick={() => setLanguage(!language)}
                class="slider round"
              ></span>
            </label>
          </li>
        </ul>
      </nav>

      <Intro language={language} />
      <Work language={language} />
      <About language={language} />
      <Connect language={language} />
    </div>
  );
}

export default App;
