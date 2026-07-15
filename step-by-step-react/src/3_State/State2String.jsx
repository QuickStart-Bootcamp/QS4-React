import React, {useState} from 'react'

function State2String() {
  const [studentName, setStudentName] = useState ("Miles")

  function handleClick () {
    setStudentName ("Andrew")
  }

  return (
    <>
      <h2>State: String</h2>
      <p>Welcome to our Class {studentName} </p>
      <button onClick={handleClick}>Click here</button>
    </>
  )
}

export default State2String