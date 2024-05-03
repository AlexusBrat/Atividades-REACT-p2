import Relogio from '../functions/Relogio';
import Letreiro from '../functions/Letreiro';
import { Link } from 'react-router-dom';

export default function Atividade1(){

    return(
        <div id="boas_vindas">
            <p>OI</p>
            <Relogio />
            <Letreiro />

            <Link to="/">Voltar</Link>
        </div>
    )
}