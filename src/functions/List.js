import { useState } from "react";

let initialArtists = [
    {id: 0, name: 'Marta Colvin Andrade'},
    {id: 1, name: 'Lamidi Olonade Fakeye'},
    {id: 2, name: 'Louise Nevelson'}
];
let initialShapes = [
    {id: 0, type: 'circle', x: 50, y: 100},
    {id: 1, type: 'square', x: 150, y: 100},
    {id: 2, type: 'circle', x: 250, y:100}
];
let initialCounters = [
    0, 0, 0
];
let initialList = [
    {id: 0,title: 'Big Bellies', seen: false},
    {id: 1,title: 'Lunar Landscape', seen: false},
    {id: 2,title: 'Terracota Army', seen: false}
]
let nextId = initialArtists.length++;


export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <>
            <h1>Inspiring Sculptors:</h1>
            <input 
                value={name}
                onChange={event => setName(event.target.value)}  
            />
            <button onClick={ () => {
                setArtists([
                    {
                        id: nextId++,
                        name: name
                    }
                ])
            }}>Add</button>
            <ul style={{listStyleType: 'none'}}>
                {artists.map(artists => (
                    <li key={artists.id}>{artists.name}</li>
                ))}
            </ul>
        </>
    )
}

export function List2 () {
    const [artists, setArtists] = useState(initialArtists);

    return(
        <>
            <h1>Inspiring Sculptors:</h1>
            <ul style={{listStyle: 'none'}}>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{' '}
                        <button onClick={() => {
                            setArtists(
                                artists.filter(a => 
                                    a.id !== artist.id
                                )
                            );
                        }}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export function List3() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);

    function handleClick() {
        const insertAt = 1; // could be any index
        const nextArtists = [
            // item before the insertion point
            ...artists.slice(0, insertAt),
            //new item
            {id: nextId++, name: name},
            // Itens after the insertion point
            ...artists.slice(insertAt, -1)
        ];
        console.log(nextArtists)
        console.log(name)
        setArtists(nextArtists);
        setName('')
    }
    return(
        <>
            <h1>Inspiring Sculptors:</h1>
            <input 
                value={name}
                onChange={event => setName(event.target.value)}  
            />
            <button onClick={handleClick}>Add</button>
            <ul style={{listStyleType: 'none'}}>
                {artists.map(artists => (
                    <li key={artists.id}>{artists.name}</li>
                ))}
            </ul>
        </>
    )
}

export function List4() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return(
        <>
            <button onClick={handleClick}>Reverse</button>
            <ul style={{listStyle: 'none'}}>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </>
    )
}


export function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(initialList);

    function handleToggleMyList( artworkId, nextSeen ) {
        setMyList(myList.map(artwork => {
            if(artwork.id === artworkId){
                return {...artwork, seen: nextSeen};
            }
            else{
                return artwork;
            }
        }));
    }

    function handleToggleYourList( artworkId, nextSeen ) {
        setYourList(yourList.map(artwork => {
            if(artwork.id === artworkId){
                return {...artwork, seen: nextSeen};
            }
            else{
                return artwork;
            }
        }));
    }

    return(
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList 
                artworks={myList}
                onToggle={handleToggleMyList}
            />
            <h2>YourList of art o see:</h2>
            <ItemList 
                artworks={yourList}
                onToggle={handleToggleYourList}
            />
        </>
    )
}


function ItemList({artworks, onToggle}) {
    return(
        <ul style={{listStyle: 'none'}}>
            {artworks.map( artwork => (
                <li key={artwork.id}>
                <label>
                    <input
                        type="checkbox"
                        checked={artwork.seen}
                        onChange={e => {onToggle(
                            artwork.id,
                            e.target.checked
                        );}}
                    />
                    {artwork.title}
                </label>
            </li>
            ))}
        </ul>
    )
}


export function ShapeEditor() {
    const [shapes, setShapes] = useState(initialShapes);

    function handleClick() {
        const nextShapes = shapes.map(shape => {
          if (shape.type === 'square') {
            return shape;
          } else {
            return {
              ...shape,
              y: shape.y + 50
            };
          }
        });
        setShapes(nextShapes);
      }

      return (
        <>
            <button onClick={handleClick}>
                Move circle down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        backgroundColor: 'purple',
                        display: 'flex',
                        margin: '20px auto',
                        left: shape.x,
                        top: shape.y,
                        borderRadius: 
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                }}/>
            ))}
        </>
      )
}

export function CounterList() {
    const [counters, setCounters] = useState(initialCounters);

    function handleIncrementClick(index) {
        const nextCounter = counters.map((c, i) => {
            if(i === index) {
                // incremente the clicked counter
                return c + 1;
            }
            else{
                // the last haven't changed
                return c;
            }
        });
        setCounters(nextCounter);
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i} style={{listStyle: 'none'}}>
                    {counter}
                    <button onClick={() => {
                        handleIncrementClick(i);
                    }}>1+</button>
                </li>
            ))}
        </ul>
    )
}