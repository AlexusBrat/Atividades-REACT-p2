export default function Relogio () {

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    
    hora < 10 ? hora = `0${data.getHours()}` : hora = data.getHours();
    minuto < 10 ? minuto = `0${data.getMinutes()}` : minuto = data.getMinutes();
    segundo < 10 ? segundo = `0${data.getSeconds()}` : segundo = data.getSeconds();
    setInterval(() => {});

    return (
        <h3 id="relogio">{ hora }:{ minuto }: {segundo} </h3>
    )
}