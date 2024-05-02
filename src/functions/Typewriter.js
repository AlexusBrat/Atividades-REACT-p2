import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

export default function Letreiro() {
    const {text} = Typewriter({
        words: ['Conheça'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
        
    })

    return (
        <h1>
            <span>
                {text}
            </span>
            <Cursor />
        </h1>
    )
}