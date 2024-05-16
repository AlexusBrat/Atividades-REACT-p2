export default function Button() {

    function hancdleClick(){
        alert("OI");
    }
    return (
        <>
            <button onClick={hancdleClick}>I do nothing</button>
        </>
    )
}