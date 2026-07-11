import React from 'react'

function Component1 (props) {
  console.log (props.studentName)
  console.log (props.studentAge)

  return (
    <>
      <h2>Component 1</h2>
      <p>Welcome to our Class, {props.studentName}, {props.studentAge}</p>
    </>
   
  )
}

export default Component1
