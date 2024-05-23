import { useEffect, useState } from "react"

export function ClockBody({ time }) {
    return (
        <>
            <h1>{time}</h1>
            <input />
        </>
    )
}

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

export default function Clock() {
    const time = useTime();
    return (
        <>
            <ClockBody time={time.toLocaleDateString()} />
            <ClockBody time={time.toLocaleTimeString()} />
        </>
    )
}

