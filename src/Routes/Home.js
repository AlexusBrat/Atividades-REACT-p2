import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return (
        <div>
            <h1>Página inicial</h1>
            <h4>Atividades:</h4>
            <nav className="menu-navegacao">
                <p className="item-menu">
                    <Link to="/Atividade1">Atividade 1</Link>
                </p>
                <p className="item-menu">
                    <Link to="/Atividade2">Atividade 2</Link>
                </p>
                <p className="item-menu">
                    <Link to="/Atividade3">Atividade 3</Link>
                </p>
                <p className="item-menu">
                    <Link to="/Atividade4">Atividade 4</Link>
                </p>
                <p className="item-menu">
                    <Link to="/Atividade5">Atividade 5</Link>
                </p>
                {/* <p>
                    <Link to="/Atividade6">Atividade 6</Link>
                </p> */}
            </nav>
            <div className="creditos">
                <p>Feito por: Alexandre Albertino Bratifisch</p>
            </div>
        </div>
    )
} 
export default Home;