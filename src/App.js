import './App.css';
import Relogio from './functions/Relogio';
// import Typewriter from './functions/Typewriter';
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";


setInterval(() => {Relogio()});


function App() {
  const {text} = Typewriter({
    words: ['Conheça'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
    
})

  return (
    <div className="App">
        <h3 id="relogio">00:00:00</h3>
        <h1>
          <span>
            {text}
          </span>
        </h1>
    </div>
  );
}

export default App;
