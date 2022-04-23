import './App.css';
import { About, Connect, Intro, Work } from './components';
import logo from './imgs/logo.png'
import { Link } from 'react-scroll';
import { useState } from 'react';

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div className="App">

      <nav className='Nav'>
        <figure>
          <Link className='Link' to="intro" smooth={true} duration={1000}>
            <img src={logo} alt="logo" width="70px" />
          </Link>
        </figure>

        <input type="checkbox" onClick={() => setNav(true)} id='menu' className={nav ? "menu-input menu2" : "menu-input"}/>
          <label htmlFor="menu" id="menu">
            <i className="fa-solid fa-bars"></i>
          </label>

        <ul className="nav-principal">
          <li><Link onClick={() => setNav(false)} className='Link' to="work" smooth={true} duration={1000}>Work</Link></li>
          <li><Link onClick={() => setNav(false)} className='Link' to="about" smooth={true} duration={1000}>About</Link></li>
          <li><Link onClick={() => setNav(false)} className='Link' to="connect" smooth={true} duration={1000}>Connect</Link></li>
        </ul>
      </nav>

      <Intro/>
      <Work/>
      <About/>
      <Connect/>
      
    </div>
  );
}

export default App;
