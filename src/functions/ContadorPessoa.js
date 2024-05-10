import BtnReset from '../img/btn-reset.png';
import BtnAdd from '../img/btn-plus.png';
import BtnMinus from '../img/btn-minus.png';
import HomemIcon from '../img/m-icon.png';
import MulherIcon from '../img/f-icon.png';

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

export default function ContadorPessoa(){

    return (
        <div>
            <button onClick={Reset}>
                <img src={BtnReset} alt="Imagem do botão de Reset" className="img-btn" />
            </button>
            <div>
                <h3>Total</h3>
                <h3 className="contador" id="contador" >0</h3>
            </div>
            <div className="div-contador">
                <div id="div-homem">
                    <img src={HomemIcon} alt="Ícone contador Homem" className="img-icone" />
                    <h3>Homem</h3>
                    <h3 className="contador_m" id="contador_m">0</h3>
                    <div className="div-btn">
                        <button onClick={AddHomem}>
                            <img src={BtnAdd} alt="Imagem do botão de Adicionar Homem ao contador" className="img-btn" />
                        </button>
                        <button onClick={RemoveHomem}>
                            <img src={BtnMinus} alt="Imagem do botão de Retirar Homem ao contador" className="img-btn" />
                        </button>
                    </div>
                </div>
                <div id="div-mulher">
                    <img src={MulherIcon} alt="Ícone contador Mulher" className="img-icone" />
                    <h3>Mulher</h3>
                    <h3 className="contador_f" id="contador_f">0</h3>
                    <div className="div-btn">
                        <button onClick={AddMulher}>
                            <img src={BtnAdd} alt="Imagem do botão de Adicionar Mulher ao contador" className="img-btn" />
                        </button>
                        <button onClick={RemoveMulher}>
                            <img src={BtnMinus} alt="Imagem do botão de Retirar Mulher ao contador" className="img-btn" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}