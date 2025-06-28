import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  // let counter = 15

  const addValue = () => {
    console.log("click", counter);
    // counter = counter + 1
    setCounter(counter + 1)



  }
  const removeValue = ()=>{
  if(counter !== 0){
   
    setCounter(counter - 1)
  }else{
    setCounter = 0
  }

  }

  return (
    <div>
      <h1>Sumant Rai</h1>
      <h2>Counter value :{counter} </h2>

      <button
        onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}  >Decrese value {counter}  </button>
      <p>footer {counter} </p>
    </div>
  )
}

export default App
