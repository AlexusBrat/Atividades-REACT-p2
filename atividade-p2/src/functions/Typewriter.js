import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

export default function Typewriter(){
    const {text} = useTypewriter({
        words: ['Conheça'],
        loop: {}
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