import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [running, setRunning] = useState(true)

  function handleButtonStart() {
    setRunning(prev => !prev)
  }

  function handleButtonStop() {
    setRunning(false)
    setCount(() => 0)
  }

  useEffect(() => {
    if (running) {
      const timerId = setTimeout(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000)
      return () => clearTimeout(timerId)
    }
  })

  return (<>
  <h1>{count}</h1>
  <button onClick={handleButtonStart}>Start/Pause</button>
  <button onClick={handleButtonStop}>Stop</button>
  </>)
}

export default App
