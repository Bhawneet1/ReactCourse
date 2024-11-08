import React, { useState } from 'react'

const App3 = () => {
  const[num,setNum]=useState(0)
  const increment =()=>{
    setNum(num+1)
  }
  const decrement =()=>{
    setNum(num-1)
  }
  return (
    <div>
      <h1>Hello {num}</h1>
      {/* <button 
      onClick={increment}>Increment</button>
      <button
      onClick={decrement}>Decrement</button> */}

      <button
      onClick={()=>{setNum(num+1)}}>Increment</button>

      <button
      onClick={()=>{setNum(num-1)}}>Decrement</button>
    </div>
  )
}

export default App3