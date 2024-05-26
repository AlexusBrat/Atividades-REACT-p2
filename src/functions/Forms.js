import { useState } from 'react';

export default function SingUp() {
    return (
        <form onSubmit={e => {
            e.preventDefault();
            alert('Submiting');
        }}>
            <label>Campo 1: </label>
            <input />
            <button>Send</button>
        </form>
    )
}

export function Form() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!!');

    if(isSent){
        return (
            <h1>Your message is on its way!!</h1>
        )
    }
    return (
        <form onSubmit={e => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message)
        }}>
            <textarea 
                placeholder='Message'
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <br />
            <button type="submit">Send</button>
        </form>
    )
}

function sendMessage( message ) {
    alert(`Your message is: \n${message}`);
}


export function DelayedForm() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`);
        }, 5000)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    To:{' '}
                    <select
                        value={to}
                        onChange={e => {setTo(e.target.value)}}
                    >
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                    <br />
                </label>
                <textarea 
                    placeholder='message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        </>
    )
}


export function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(event) {
        setPerson({
            firstName: event.target.value,
            lastName: person.lastName,
            email: person.email
        });
    }

    function handleLastNameChange(event) {
        setPerson({
            firstName: person.firstName,
            lastName: event.target.value,
            email: person.email
        });
    }

    function handleEmailChange(event) {
        setPerson({
            firstName: person.firstName,
            lastName: person.lastName,
            email: event.target.value
        });
    }

    return (
        <>
            <label>
                First Name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last Name:
                <input 
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                E-mail:
                <input 
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <br />
            <p>
                {person.firstName} <br />
                {person.lastName} <br />
                {person.email} <br />
            </p>
        </>
    )
}

export function Form3() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phaelle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg'
        }
    });

    function handleNameChange(event) {
        setPerson({
            name: event.target.value,
            artwork: {
                title: person.artwork.title,
                city: person.artwork.city,
                image: person.artwork.image
            }

        })
    }

    function handleTitleChange(event) {
        setPerson({
            name: person.name,
            artwork: {
                title: event.target.value,
                city: person.artwork.city,
                image: person.artwork.image
            }
        })
    }

    function handleCityChange(event) {
        setPerson({
            name: person.name,
            artwork: {
                title: person.artwork.title,
                city: event.target.value,
                image: person.artwork.image
            }
        })
    }

    function handleImageChange(event) {
        setPerson({
            name: person.name,
            artwork: {
                title: person.artwork.title,
                city: person.artwork.city,
                image: event.target.value
            }
        })
    }

    return(
        <>
            <label>
                Name:
                <input 
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input 
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input 
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Image:
                <input 
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>

            <p>
                <i>{person.artwork.title}</i><br />
                {'by: '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img 
                src={person.artwork.image}
                alt={person.name}
            />
        </>
    )
}