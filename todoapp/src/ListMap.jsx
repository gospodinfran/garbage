export default function ListMap(props) {
    return (<ul>
        {props.todos.map((todo, index) => <>
        <li key={index}>
            {todo}
        </li>
        <button onClick={() => props.onButtonRemove(todo)}>Remove</button>
        </>)}
      </ul>)
}