import React from 'react'
import Newcard from './Components/Newcard'
const App8 = () => {

  const users=[
    {
        "name": "Alice",
        "city": "New York",
        "age": 29,
        "profession": "Software Engineer",
        "profile_photo": "https://example.com/photos/alice.jpg"
    },
    {
        "name": "David",
        "city": "Los Angeles",
        "age": 34,
        "profession": "Graphic Designer",
        "profile_photo": "https://example.com/photos/david.jpg"
    },
    {
        "name": "Maria",
        "city": "Chicago",
        "age": 27,
        "profession": "Data Analyst",
        "profile_photo": "https://example.com/photos/maria.jpg"
    },
    {
        "name": "James",
        "city": "Houston",
        "age": 40,
        "profession": "Architect",
        "profile_photo": "https://example.com/photos/james.jpg"
    },
    {
        "name": "Sophia",
        "city": "San Francisco",
        "age": 31,
        "profession": "Marketing Specialist",
        "profile_photo": "https://example.com/photos/sophia.jpg"
    }
]

//JSON data
  // users.forEach(function(el){
  //   console.log(el);
    
  // })
  return (
    <div className='p-10 flex '>
     {users.map(function(el,key){
      return <Newcard key ={key} user={el.name} age={el.age} city={el.city} photo={el.profile_photo} prof={el.profession}/>
     })}
    </div>
  )
}

export default App8
// Data hamesha upar sai neeche