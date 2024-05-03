import React, { useState, useEffect } from 'react';

export default function Relogio () {
    var horario = ''

    function Clock() {
        const [time, setTime] = useState(new Date().toLocaleTimeString());
        horario = time
        
        useEffect(() => {
            const interval = setInterval(() => {
                setTime(new Date().toLocaleTimeString());
            }, 1000); // Atualizar a cada segundo

        return () => clearInterval(interval); // Limpar o intervalo ao desmontar
        }, []);
    }
    Clock()
    return (
        <h3 id="relogio" style={{fontWeight: 'bold', color: 'black'}}>{horario}</h3>
    )
}