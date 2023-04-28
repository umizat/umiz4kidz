import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import DerGrueneApfel from './components/DerGrueneApfel/DerGrueneApfel'
import DGAPreview from './components/DerGrueneApfel/1-Der gruene Apfel.jpeg'

import Manatee from './components/Manatee/Manatee';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to='/dga'>
          <div>
          <section className="bookPreview" id="dga">
            <a href=''>
              <img src={DGAPreview} />
            </a>
          </section>
        </div>
          </Link>
          <Routes>
              <Route path="/dga" element={<DerGrueneApfel />} />
          </Routes>
        </Router>
        
        <div className="wrapper">
          <h1>Marine Mammals</h1>
          <Router>
            <Link to='/manatee'>manatee</Link>
            <Link to='/narwhal'>narwhal</Link>
            <Link to='/whale">'>whale</Link>
            <Routes>
              <Route path="/manatee" element={<Manatee />} />
              <Route path="/narwhal" element={<Narwhal />} />
              <Route path="/whale" element={<Whale />} />
            </Routes>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
