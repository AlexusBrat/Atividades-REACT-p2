export default function Button() {

    function hancdleClick(){
        alert("You clicked me!");
    }
    return (
        <>
            <button onClick={hancdleClick}>I do nothing</button>
        </>
    )
}

function AlertButton({message, children}) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!!`);
    }

    return (
        <button onClick={handlePlayClick}>
            Play "{movieName}"
        </button>
    )
}

function UploadButton() {
    return (
        <button onClick={() => alert('Uploading!!')}>
            Upload Image
        </button>
    )
}

export function ButtonOnSmash({ onSmash, children }) {
    return(
        <button onClick={onSmash} >
            {children}
        </button>
    )
}

function GenericButton({ onSmash, children }) {
    return(
        <>
            <button onClick={onSmash}>
                {children}
            </button>
        </>
    )
}

function NoPropagationButton ({ onClick, children }) {
    return (
        <>
            <button onClick={e => {
                e.stopPropagation();
                onClick();
            }} >
                {children}
            </button>
        </>
    )
}

export function PropagationToolBar() {
    return (
        <div>
            <h3>Com propagação</h3>
            <div className="toolbar"  onClick={() => {
            alert("You Clicked on the toolbar!!")
            }}>
                <button onClick={() => alert('Playing!!!!')}>
                    Play Movie
                </button>
                <button onClick={() => alert('Uploading!!!!')}>
                    Upload Image
                </button>
            </div>

            <br />

            <h3>Sem propagação</h3>
            <div className="toolbar"  onClick={() => {
                alert("You Clicked on the toolbar!!")
            }}>
                <NoPropagationButton onClick={() => alert('Playing!!!!')}>
                    Play Movie
                </NoPropagationButton>
                <NoPropagationButton onClick={() => alert('Uploading!!!!')}>
                    Upload Image
                </NoPropagationButton>
                
            </div>
        </div>  
    )
}

export function GenericToolBar(){
    return(
        <div>
            <GenericButton onSmash={() => alert('Playing!!!!')}>
                Play Movie
            </GenericButton>
            <GenericButton onSmash={() => alert('Uploading!!!!')}>
                Upload Image
            </GenericButton>
        </div>
    )
}

export function ToolBar() {
    return (
        <>  
            <p>First type of Button</p>
            <AlertButton message='Playing!'>
                Play Movie    
            </AlertButton>
            <AlertButton message='Uploading!'>
                Upload Image    
            </AlertButton>

            <br />

            <p>Second type of Button</p>  
            <PlayButton movieName={`Kiki's Delivery`} />
            <UploadButton />
        </>
    )
}