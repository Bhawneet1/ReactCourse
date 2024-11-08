import React, { useState } from 'react'

const App2 = () => {
  
  let[users,setUsers]=useState("Bhawneet")
  const changeName=()=>{
    setUsers("Hanji")
    
  }
  return (
    <div>
      <h1>Username is {users}</h1>
      <button
      onClick={changeName}>Change name</button>

    </div>
  )
}

export default App2


// hooks are special functions 

// when state change 

// eg a=0 to a=1

// to reflect in DOM we need useState