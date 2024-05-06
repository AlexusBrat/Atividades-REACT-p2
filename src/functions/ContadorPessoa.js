import BtnReset from '../img/btn-reset.png';
import BtnAdd from '../img/btn-plus.png';
import BtnMinus from '../img/btn-minus.png';
import HomemIcon from '../img/m-icon.png';
import MulherIcon from '../img/f-icon.png';

export default function ContadorPessoa(){


    function AddHomem(){
        var contador_m = parseInt(document.getElementById("contador_m").textContent);
        console.log(contador_m);
        contador_m++;
        document.getElementById("contador_m").innerHTML = contador_m;
        Total();
    }

    function RemoveHomem(){
        var contador_m = parseInt(document.getElementById("contador_m").textContent);
        if(contador_m !== 0){
            contador_m--;
        }
        document.getElementById("contador_m").innerHTML = contador_m;
        Total();
    }

    function AddMulher(){
        var contador_f = parseInt(document.getElementById("contador_f").textContent);
        contador_f++;
        document.getElementById("contador_f").innerHTML = contador_f;
        Total();
    }

    function RemoveMulher(){
        var contador_f = parseInt(document.getElementById("contador_f").textContent);
        if(contador_f !== 0){
            contador_f--;
        }
        document.getElementById("contador_f").innerHTML = contador_f;
        Total();
    }

    function Reset(){
        alert("Reset selecionado");
        document.getElementById("contador_m").innerHTML = "0";
        document.getElementById("contador_f").innerHTML = "0";
        Total();
    }

    function Total(){
        var contador_m = parseInt(document.getElementById("contador_m").textContent);
        var contador_f = parseInt(document.getElementById("contador_f").textContent);
        console.log(contador_m + "\t" + contador_f);
        if(contador_m !== null && contador_f !== null){
            var resultado = contador_m + contador_f;
            document.getElementById("contador").innerHTML = resultado;
        }
    }


    return (
        <div>
            <button onClick={Reset}>
                <img src={BtnReset} alt="Imagem do botão de Reset" id="img-btn" />
            </button>
            <div>
                <h3>Total</h3>
                <h3 id="contador">0</h3>
            </div>
            <div id="div-contador">
                <div id="div-homem">
                    <img src={HomemIcon} alt="Ícone contador Homem" id="img-icone" />
                    <h3>Homem</h3>
                    <h3 id="contador_m">0</h3>
                    <div id="div-btn">
                        <button onClick={AddHomem}>
                            <img src={BtnAdd} alt="Imagem do botão de Adicionar Homem ao contador" id="img-btn" />
                        </button>
                        <button onClick={RemoveHomem}>
                            <img src={BtnMinus} alt="Imagem do botão de Retirar Homem ao contador" id="img-btn" />
                        </button>
                    </div>
                </div>
                <div id="div-mulher">
                    <img src={MulherIcon} alt="Ícone contador Mulher" id="img-icone" />
                    <h3>Mulher</h3>
                    <h3 id="contador_f">0</h3>
                    <div>
                        <button onClick={AddMulher}>
                            <img src={BtnAdd} alt="Imagem do botão de Adicionar Mulher ao contador" id="img-btn" />
                        </button>
                        <button onClick={RemoveMulher}>
                            <img src={BtnMinus} alt="Imagem do botão de Retirar Mulher ao contador" id="img-btn" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}