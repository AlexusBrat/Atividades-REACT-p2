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