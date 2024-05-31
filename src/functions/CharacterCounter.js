import { useState } from "react";
export default function CharacterCounter() {
    const [text, setText] = useState("");
    const [textLength, setTextLength] = useState(0);
    const [alphabets, setAlphabets] = useState(0);
    const [numbers, setNumbers] = useState(0);
    const [symbols, setSymbols] = useState(0);
    const [spaces, setSpaces] = useState(0);

    function TextChanger(event) {
        var text = event.target.value;
        var length = text.length;
        var alphabetsLength = text.split('').filter(char => /\p{L}/u.test(char)).length;
        var numbersLength = text.split('').filter(char => /[0-9]/.test(char)).length;
        var symbolsLength = text.split('').filter(char => /[^a-zA-Z0-9\s]/.test(char)).length;
        var spacesLength = text.split('').filter(char => /\s/.test(char)).length;

        setText(text);
        setTextLength(length);
        setAlphabets(alphabetsLength);
        setNumbers(numbersLength);
        setSymbols(symbolsLength);
        setSpaces(spacesLength);
    }

    return (
        <>
            <h2>Character Counter</h2>
            <input
                value={text}
                onChange={TextChanger}
            />
            <div className="character-counter-area">
                <p className="character-counter">Text Length: {textLength}</p>
                <p className="character-counter">Alphabets: {alphabets}</p>
                <p className="character-counter">Numbers: {numbers}</p>
                <p className="character-counter">Symbols: {symbols}</p>
                <p className="character-counter">Spaces: {spaces}</p>
            </div>
        </>
    )
}