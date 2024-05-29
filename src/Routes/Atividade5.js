import { Link } from "react-router-dom";
import MultFunctionalCounter from "../functions/MultFunctionalCounter";
import CharacterCounter from "../functions/CharacterCounter";
export default function Atividade5() {

    return(
        <div>
            <h1>Atividade 5</h1>
            <h2>Projeto REGEX</h2>
            <div className="corpo-atividade">
                <MultFunctionalCounter />
                <hr />
                <CharacterCounter />
            </div>
            <div className='btn-voltar'>
                <Link to="/">Voltar</Link>    
            </div>
        </div>
    )
}