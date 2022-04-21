import './App.css';
import { About, Connect, Intro, Nav, Work } from './components';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Work />
      <Connect />
    </div>
  );
}

export default App;
