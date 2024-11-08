import React from 'react'
import Card from './Components/Card'
const App7 = () => {
  const user="Bhawneet"
  return (
    <>
      <div className='p-10'>
        <Card user="Bhawneet" age='20' city="Patiala"  />
      </div>
      {/* <Card username={user}/>
      {/* // props */}
      {/* <Card username="Bhaw"/> */} 
      
    </>
  )
}

export default App7