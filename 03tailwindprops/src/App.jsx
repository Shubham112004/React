import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <List username='chaiaurcode' someObj={{ username: 'shubham' }} someArr={[20, 'age']} />
      <hr />
      <List username='dummy name' newusername='whatsup' />
    </>
  )
}

export default App
