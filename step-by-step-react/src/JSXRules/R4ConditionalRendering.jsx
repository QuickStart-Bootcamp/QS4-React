import React from 'react'

function R4ConditionalRendering() {
  let studentName = "Kelvin"
  let age = 20
  let message

  if (age > 18)
    message = "adult"
  else
    message = "not adult"


  return (
   <>
    <h2>Rule 4: Ternary Expression</h2>
    <div>student {studentName} is {message}</div>
    <div>student {studentName} is {age > 18 ? "adult" : "Not adult"}</div>
   </>
  )
}

export default  R4ConditionalRendering
