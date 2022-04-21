import './App.css';
import { About, Connect, Intro, Work } from './components';
import logo from './imgs/logo.jpg'

function App() {
  return (
    <div className="App">

      <nav className='Nav'>
        <figure>
          <img src={logo} alt="logo" width="100px" />
        </figure>
        <ul>
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
