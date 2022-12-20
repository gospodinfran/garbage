export default function Greet(props) {
    return (<>
    <label htmlFor='name' >Your name: </label>      <br />
    <input type='text' value={props.name} onChange={props.onNameChange} />
    <p>Hi {props.name}!</p>
    </>)
}