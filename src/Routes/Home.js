import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <div>
            <h1>Página inicial</h1>
            <nav>
                <p>
                    <Link to="/Atividade_1">Atividade 1</Link>
                </p>
                <p>
                    <Link to="">Atividade 2</Link>
                </p>
                    
            </nav>
        </div>
    )
} 
export default Home;