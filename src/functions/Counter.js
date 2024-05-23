import { useState } from "react";

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={ () => {
                setNumber(number + 5);
                setTimeout(() => {
                    alert(number);
                }, 1000)
            }}> +5 </button>
        </>
    )
}

export function DelayedCounter() {
    const [ number, setNumber] = useState(0);

    return(
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setNumber(n => n + 1);
            }}>
                Increase the number
            </button>
        </>
    )
}