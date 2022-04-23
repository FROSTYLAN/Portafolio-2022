import './App.css';
import { About, Connect, Intro, Work } from './components';
import logo from './imgs/logo.png'

function App() {
  return (
    <div className="App">

      <nav className='Nav'>
        <figure>
          <a href="/">
            <img src={logo} alt="logo" width="70px" />
          </a>
        </figure>

        <input type="checkbox" id="menu" class="menu-input"/>
          <label for="menu" id="menu">
            <i class="fa-solid fa-bars"></i>
          </label>

        <ul className='nav-principal'>
          <li><a href="#Work">Work</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Connect">Connect</a></li>
        </ul>
      </nav>

      <Intro/>
      <Work id="Work"/>
      <About id="About"/>
      <Connect name="Connect"/>
    </div>
  );
}

export default App;
