import { Link } from "react-router-dom";
import ContadorPessoa from "../functions/ContadorPessoa";


export default function Contador (){
    return (
        <div>
            <h1>Atividade 2</h1>
            <h3>Contador</h3>
            <div className='corpo-atividade'>
                <ContadorPessoa />
            </div>

            <div className='btn-voltar'>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}