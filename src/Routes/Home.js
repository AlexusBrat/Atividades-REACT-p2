import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <div>
            <h1>Página inicial</h1>
            <h4>Atividades:</h4>
            <nav id="menu-navegacao">
                <p id="item-menu">
                    <Link to="/Atividade1">Atividade 1</Link>
                </p>
                <p id="item-menu">
                    <Link to="/Atividade2">Atividade 2</Link>
                </p>
                {/* <p>
                    <Link to="/Atividade3">Atividade 3</Link>
                </p>
                <p>
                    <Link to="/Atividade4">Atividade 4</Link>
                </p>
                <p>
                    <Link to="/Atividade5">Atividade 5</Link>
                </p> */}
            </nav>
            <div id="creditos">
                <p>Feito por: Alexandre Albertino Bratifisch</p>
            </div>
        </div>
    )
} 
export default Home;