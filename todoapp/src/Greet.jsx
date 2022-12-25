export default function Greet(props) {
    return (<>
    <label htmlFor='name' >Your name: </label>      <br />
    <input type='text' value={props.name} onChange={props.onNameChange}
    autoFocus />
    <p>Hi {props.name}!</p>
    </>)
}