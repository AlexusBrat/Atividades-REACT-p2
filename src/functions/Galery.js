/* Exemplo Exportação Padrão */
export default function Galery(){
    return(
        <section>
            <h1>Amazing Scientists</h1>
            <ProfileDefault />
            <ProfileDefault />
            <ProfileDefault />
        </section>
    )
}
/* ---------------------------------------------------------- */

/* Exemplo Exportação Nomeada */
export function ProfileDefault(){
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="imagem de uma cientista"
        />
    )
}
/* ---------------------------------------------------------- */

/* Exemplo Utilizando variáveis na img/Utilização de chaves */
export function AvatarGregorio(){
    const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";

    return (
        <>
            <img src={avatar} alt={description} />
        </>
    )
}
/* ---------------------------------------------------------- */

/* Exemplo Passando props para uma img */
export function AvatarLin() {
    return (
        <img 
            src="https://i.imgur.com/1bX5QH6.jpg" 
            alt="Lin Lanying"
            width={100}
            height={100}
        />
    )
}
/* ---------------------------------------------------------- */

/* Exemplo Passando props para funções */
export function Profile() {
    
    return (
        <div>
            <Avatar 
                person={{
                    name: "Katsuko Saruhashi",
                    imageId: "YfeOqp2"
                }}
                size={100}
            />

            <Avatar 
                person={{
                    name: "Aklilu Lemma",
                    imageId: "OKS67lh"
                }}
                size={80}
            />
            
            <Avatar
                person={{
                    name: "Lin Lanying",
                    imageId: "1bX5QH6"
                }}
                size={50}
            />
        </div>
    )
}

export function Avatar({person, size}) {

    return (
        <div>
            <p>{person.name}</p>
            <img 
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
            />
        </div>
    )
}

export function getImageUrl( person, size = "s") {
    return (
        'https://i.imgur.com/' +
        person.imageId + 
        size +
        '.jpg'
    )
}
/* ---------------------------------------------------------- */

