export default function Greet({ name, onNameChange }) {
    return (<>
    <label htmlFor='name' >Your name: </label>      <br />
    <input type='text' value={name} onChange={onNameChange}
    autoFocus />
    <p>Hi {name}!</p>
    </>)
}