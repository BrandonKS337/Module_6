import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Emoji from '../Components/Emoji'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Exercise 3</h1>

     <Emoji/>
    </>
  )
}

export default App
