export default function Relogio () {
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    
    // Operadores Ternários para concatenar números a baixo de 10. Ex: 01, 02, 03 ... 09.
    // condição ? true : false
    hora < 10 ? hora = `0${data.getHours()}` : hora = data.getHours()
    minuto < 10 ? minuto = `0${data.getMinutes()}` : minuto = data.getMinutes() 
    segundo < 10 ? segundo = `0${data.getSeconds()}` : segundo = data.getSeconds()
    
    document.getElementById("relogio").innerHTML = `${hora}:${minuto}:${segundo}`

}