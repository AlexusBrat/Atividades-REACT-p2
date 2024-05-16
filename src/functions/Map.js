import { getImageUrl } from "./Galery";

const people = [
    'Creola Katherine Johnson: mathematician', 
    'Mario José Molina—PasqueI Henriquez: chemise',
    'Mohanunad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
]

const peopleData = [{
        id: 0,
        name:'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculation',
        imageId: 'MK3eW3A'
    } , {
        id: 1,
        name:'Mario José Molina—PasqueI Henriquez',
        profession: 'chemist',
        accomplishment: 'discover of Arctic ozone hole',
        imageId: 'mynHUSa'
    } , {
        id: 2,
        name: 'Mohanunad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
    } , {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids',
        imageId: 'IOjWm71'
    }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
    }];

export function AllDataList() {
        const ListItens = peopleData.map(person => 
            <li key={person.id} style={{display: 'flex'}}>
                <img style={{borderRadius: '100px', margin: '5px'}}
                    src={getImageUrl(person)}
                    alt={person.name}
                />
                <p style={{marginTop:'30px'}}>
                    <b>{person.name}:</b>
                    {' [' + person.profession + '] '}
                    <br />
                    kwnown for {person.accomplishment}
                </p>
            </li>
        )
    
        return (
            <ul>{ListItens}</ul>
        )
    }
 
export function DataList() {
    const chemists = peopleData.filter(person => person.profession === 'chemist')

    const ListItens = chemists.map(person => 
        <li key={person.id}>
            <img 
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' [' + person.profession + '] '}
                kwnown for {person.accomplishment}
            </p>
        </li>
    )

    return (
        <ul>{ListItens}</ul>
    )
}

export default function List() {
    const ListItens = people.map(person => <li>{person}</li>);
    return (
        <ul>{ListItens}</ul>
    )
}