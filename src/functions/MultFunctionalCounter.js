import { useState } from "react";
export default function MultFunctionalCounter() {
    const [valor, setValor] = useState(0);
    function somar() {
        setValor(valor + 1);
    }

    function subtrair() {
        setValor(valor - 1);
    }

    function multiplicar() {
        setValor(valor * 2);
    }

    function dividir() {
        setValor(valor / 2);
    }

    function aoQuadrado() {
        setValor(valor * valor);
    }

    function aoCubo() {
        setValor((valor * valor) * valor);
    }

    function zerar() {
        setValor(0);
    }

    return(
        <>
            <h2>Multi Functional Counter</h2>
            <p className="n-functionalCounter">{valor}</p>
            <div className="functional-btn-area">
                <button className="functional-btn" onClick={somar}>+</button>
                <button className="functional-btn" onClick={subtrair}>-</button>
                <button className="functional-btn" onClick={multiplicar}>*</button>
                <button className="functional-btn"onClick={dividir}>/</button>
                <button className="functional-btn" onClick={aoQuadrado}>x²</button>
                <button className="functional-btn" onClick={aoCubo}>x³</button>
                <button className="functional-btn" onClick={zerar}>0</button>
            </div>
        </>
    )
}