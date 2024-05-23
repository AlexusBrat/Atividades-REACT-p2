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