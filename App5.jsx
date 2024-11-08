import React from 'react'

const App5 = () => {
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Submitted");
    // kuch millisec kai liye dikhta hai kyoki page reload ho jata hai
  }
  return (
    <div>
      <form  
      onSubmit={(e)=>{
        submitHandler(e)

      }}>
        <input 
        value="Bhawneet"
        type="text" placeholder='Enter Your name' 
        className='px-4 py-3 rounded-lg mt-10 mx-2 text-black'/>
        <button
        className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded-lg mx-2 mt-10'>Submit</button>
      </form>
    </div>
  )
}

export default App5