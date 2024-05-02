import './App.css';
import Relogio from './functions/Relogio';
import Letreiro from './functions/Letreiro';
setInterval(() => {Relogio()});

export default function App() {

  return (
    <div className="App">
        <h3 id="relogio">00:00:00</h3>
        <Letreiro />
    </div>
  );
}


