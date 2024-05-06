import { Link } from "react-router-dom";
import ContadorPessoa from "../functions/ContadorPessoa";


export default function teste (){
    return (
        <div>
            <h1>Atividade 2</h1>
            <h3>Contador</h3>
            <div id='corpo-atividade'>
                <ContadorPessoa />
            </div>

            <div id='btn-voltar'>
                <Link to="/">Voltar</Link>
            </div>
        </div>
    )
}