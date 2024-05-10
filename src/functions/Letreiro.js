import { Typewriter, Cursor} from "react-simple-typewriter";

export default function Letreiro() {

    return (
        <h1 style={{fontWeight: 'bold', color: 'red'}}>
          <span id="boas_vindas" style={{fontWeight: 'bold', color: 'red'}}>
            <Typewriter
            words={['Conheça a FATEC!']}
            loop={20}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000} />
          </span>
          <Cursor />
        </h1>
    )
}
