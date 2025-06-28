import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sumant Rai",
    age: 20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind Test</h1>
      <Card channel="chai aur code" someObj={myObj}  />
      <Card/>

          
    </>
  ) 
}

export default App
