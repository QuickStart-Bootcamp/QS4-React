import React, {useState} from 'react'

function State3Array() {



  const [students, setStudents] = useState (["Kien", "Dustin", "Andrew"])
  let courses =  ["html", "css"]

  function handleClick () {
    setStudents ([...students, "Miles"])
    courses.push ("Miles")
    console.log (courses)
  }

  return (
    <>
      <h2>State: Array</h2>
      {students.map ((abc) =>
        {
          return <p>{abc}</p>
        })}


        {courses.map ((course) => <h2>{course}</h2>       )}

      <button onClick = {handleClick}>Insert New Value</button>  
    </>
  )
}

export default State3Array