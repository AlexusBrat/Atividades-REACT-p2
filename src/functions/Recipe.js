

function Cup({ guest }) {
    guest = guest + 1;
    return <h2>Tea cup for Guest #{guest}</h2>
}

export function TeaSet() {
    return(
        <>
            <Cup guest={2} />
            <Cup guest={4} />
            <Cup guest={6} />
        </>
    )
}



export default function Recipe({ drinkers }) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tean and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk and sugar to taste</li>
        </ol>
    )
}