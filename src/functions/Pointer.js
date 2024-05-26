import { useState } from "react";

export default function MovingDot() {
    // useState para marcar com um ponto vermelho a posição do mouse
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    // useState para coletar as coordenadas do mouse
    const [mousePosition, setMousePosition] = useState({ 
        x: 0, 
        y: 0 
    });

    // Função responsável por coletar as coordenadas do mouse dentro da área determinada pela Div
    const handleMouseMove = (event) => {
        setMousePosition({
        x: event.clientX,
        y: event.clientY
        });
    };

    // Função responsável por posicionar o ponto vermelho em cima do mouse
    const mouseDot = (event) => {
        setPosition({
            x: mousePosition.x,
            y: mousePosition.y
        });
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            onPointerMove={mouseDot}

            style={{
                margin: '0 auto',
                position: 'relative',
                width: '78vw',
                height: '80vh',
                border: '1px solid #000000'
            }}>
                <p>Posição do Mouse</p>
                <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>


                <div style={{
                    position: 'absolute',
                    backgroundColor: '#ff0000a6',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: '-160px',
                    top: '-100px',
                    width: '20px',
                    height: '20px',
                }}>
                </div>
        </div>
    )
}