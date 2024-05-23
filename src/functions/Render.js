import { createRoot } from "react-dom/client";

function Image() {
    return (
        <img 
            src="https://i.imgur.com/ZF6s192.jpg"
            alt="'Floralis Genérica' by Eduardo Catalano"
        />
    )
}
export default function Render() {
    const root = createRoot(document.getElementById('root'))
    root.render(<Image />);
}