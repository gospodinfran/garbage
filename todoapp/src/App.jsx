import { useState } from 'react'
import './App.css'
import Greet from './Greet'
import TodoForm from './TodoForm'
import ListMap from './ListMap'

function App() {
  const [name, setName] = useState('')
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    if (task !== '') {
      setTodos([...todos, task])
    }
    setTask('')
  }

  function handleTaskChange(e) {
    setTask(e.target.value)
  }

  function handleButtonRemove(item) {
    setTodos(todos.filter(todo => todo !== item))
  }

  return (<>
    <Greet name={name} onNameChange={handleNameChange} />
    <TodoForm task={task} todos={todos} onFormSubmit={handleFormSubmit} 
    onTaskChange={handleTaskChange} />
    <ListMap todos={todos} onButtonRemove={handleButtonRemove}/>

  </>)
}

export default App
