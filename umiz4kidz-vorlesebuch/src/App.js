import logo from './logo.svg';
import './App.css';
import DerGrueneApfel from './components/derGrueneApfel'
import DGAPreview from './components/derGrueneApfel/1-Der gruene Apfel.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <section className="bookPreview" id="dga">
            <a href=''>
              <img src={DGAPreview} />
            </a>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
