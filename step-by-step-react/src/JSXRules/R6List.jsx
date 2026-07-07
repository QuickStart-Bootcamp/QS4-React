import React from 'react'

function R6List() {
  let fruits = ["apple", "orange", "cherry"]
  let newFruits = fruits.map ((fruit)=>{
    return `<li> ${fruit} </li>`
  })

  console.log (newFruits)

  return (
    <ul>
      {
        fruits.map ((fruit)=>(<li>{fruit}</li>))
      }
    </ul>


  )
}

export default R6List


