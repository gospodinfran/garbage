export default function TodoForm(props) {
    return (
        <form onSubmit={props.onFormSubmit}>
            <label htmlFor='todo' >To-Do: </label>
            <input type='text' id='todo' value={props.task}
            onChange={props.onTaskChange} /> 
        </form>
    )
}