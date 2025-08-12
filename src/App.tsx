import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Grey-matter003</h1>
      <p>Vite + React + TS + SWC</p>
      <button onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </button>
    </div>
  )
}

export default App
