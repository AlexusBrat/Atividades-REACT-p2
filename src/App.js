import './App.css';
import Relogio from './functions/Relogio';
import Typewriter from './functions/Typewriter';

setInterval(() => {Relogio()});

function App() {
  return (
    <div className="App">
        <h3 id="relogio">00:00:00</h3>
        <Typewriter />
    </div>
  );
}

export default App;
