import Relogio from '../functions/Relogio';
import Letreiro from '../functions/Letreiro';
import { Link } from 'react-router-dom';

export default function Atividade1(){

    return(
        <div>
            <h1>Atividade 1</h1>
            <h3>Letreiro/Relogio</h3>
            <div className="corpo-atividade">
                <Relogio />
                <Letreiro />
            </div>
            
            <div className="btn-voltar">
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}