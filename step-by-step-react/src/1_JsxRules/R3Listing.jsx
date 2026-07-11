import React from 'react'

function R3Listing() {
  let studetns = ["Dustin", "Andrew", "Kelvin", "Miles"]

  function fun1() {}
  let func1 = function() {}
  let func3 = () => {}

  return (
    <>
      <h2>Listing Array</h2>
      <ul>
        {
          studetns.map ( (student) => { return <li>{student}</li>})
        }  
      </ul>
      {
          studetns.map ( (student) => { return <p>Welcome to our class: {student}</p>})
      }

      {
        studetns.map ( (student, index) => { return <h2>{index} - {student}</h2>})
      } 

    </>
  )
}

export default R3Listing;
