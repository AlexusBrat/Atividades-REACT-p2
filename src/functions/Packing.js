export function ItemChecked({ name, isPacked }) {
    if(isPacked){
        return (
            <li className="item">{name} ✔</li>
        )
    }
    else{
        return (
            <li className="item">{name}</li>
        )
    }
}

export function ItemNull({ name, isPacked }) {
    if(isPacked){
        return null
    }
    else{
        return (
            <li className="item">{name}</li>
        )
    }
}

export function ItemDel({ name, isPacked }) {
    // Operador Ternário para estrutura de decisão.
    return (
        <li className="item">
            {isPacked ? (
                <del>
                    {name + ' ✔'}
                </del>
            ) : (
                name
            )}
        </li>

    )
}

export function ItemAnd({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && ' ✔'}
        </li>
    )
}

export function PackingListAnd() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <ItemAnd 
                    isPacked={true}
                    name="Space Suit"
                />
                <ItemAnd 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <ItemAnd 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}

export function PackingListDel() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <ItemDel 
                    isPacked={true}
                    name="Space Suit"
                />
                <ItemDel 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <ItemDel 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}

export function PackingListNull() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <ItemNull 
                    isPacked={true}
                    name="Space Suit"
                />
                <ItemNull 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <ItemNull 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}

export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <ItemChecked 
                    isPacked={true}
                    name="Space Suit"
                />
                <ItemChecked 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <ItemChecked 
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}