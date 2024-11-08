import React, { useState } from 'react'
// App5 mai ham directly DOM sai interact kar rahe hai to App6

//Two way binding
//we do this the react knows what is happening
const App6 = () => {

  const[username,setUsername]=useState("")
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(username);
    setUsername('')
    // After submit clear input
    // kuch millisec kai liye dikhta hai kyoki page reload ho jata hai
  }
  return (
    <div>
      <form  
      onSubmit={(e)=>{
        submitHandler(e)

      }}>
        <input
        value={username} 
        onChange={(e)=>{
          // console.log(e.target.value);
          //target input element
          // print each character
          setUsername(e.target.value)
        }}
        // matlab koi letter input pai prints Hello
        type="text" placeholder='Enter Your name' 
        className='px-4 py-3 rounded-lg mt-10 mx-2 text-black'/>
        <button
        className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded-lg mx-2 mt-10'>Submit</button>
      </form>
    </div>
  )
}

export default App6