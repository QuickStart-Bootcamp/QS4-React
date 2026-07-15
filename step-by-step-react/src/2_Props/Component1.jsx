import React from 'react'

function Component1 (props) {

  console.log (props)
  console.log (props.studentName)
  console.log (props.studentAge)
  console.log (props.studentCourse)

  return (
    <>
      <p><b>Component 1: </b>Welcome to our Class, {props.studentName}, {props.studentAge}</p>
    </>
   
  )
}

export default Component1
