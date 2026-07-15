import React from 'react'

function Component2 ( {studentName, studentAge, studentCourse} ) {
  console.log (studentCourse)

  return (
    <>
      <p><b>Component 2: </b>Welcome to our class {studentName}, {studentAge}</p>
    </>
  )
}

export default Component2
