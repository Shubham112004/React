import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0
  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log('clicked', counter);
  }
  const removeValue = () => {
    // counter = counter - 1
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue} style={{ marginRight: '20px' }}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
