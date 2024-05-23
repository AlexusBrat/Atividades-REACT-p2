import { sculptureList } from "../data/data";
import { useState } from "react";

export default function SculptureGalery() {

const [ index, setIndex ] = useState(0);

function FowardClick(){
    console.log(index)
    if(index < sculptureList.length){
        setIndex(index + 1);
    }
}
function BackwardClick(){
    if(index > 0){
        setIndex(index - 1);
    }
}

let sculpture = sculptureList[index];
return (
    <>
        <button onClick={ BackwardClick } disabled={index === 0}>
            Back
        </button>
        <button onClick={ FowardClick } disabled={index === sculptureList.length - 1}>
            Next
        </button>
        <h2>
            <li>{sculpture.name}</li>
            by: {sculpture.artist}
        </h2>
        <h3>
            ({ index + 1 } of { sculptureList.length })
        </h3>
        <img style={{width: '320px', height: '320px'}}
            src={sculpture.url}
            alt={sculpture.alt}
        />
        <div style={{margin: '1rem auto', width: '40rem', height: '5rem'}}>
            <p>
                {sculpture.description}
            </p>
        </div>
    </>
)
}


export function Galery(){
    const [ index, setIndex ] = useState(0);
    const [ showMore, setShowMore ] = useState(false);

    function handleNextClick(){
        setIndex(index + 1);
    }
    function handleBackClick(){
        setIndex(index - 1);
    }

    function handleMoreClick(){
        setShowMore(!showMore)

    }
    let sculpture = sculptureList[index];

    return(
        <>
            <button onClick={ handleBackClick } disabled={index === 0}>
                Back
            </button>
            <button onClick={handleNextClick} disabled={index === sculptureList.length - 1} >
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by: {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick} >
                {showMore ? 'Hide' : 'Show'} Details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <br /><br />
            <img style={{width: '320px', height: '320px'}}
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    )
}