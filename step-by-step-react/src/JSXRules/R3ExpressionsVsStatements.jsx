import React from 'react'

function R3ExpressionsVsStatements() {
  let studentName = "Farnaz"

  return (
    <>
      <h2>Rule 3: Expressions Vs Statements</h2>
      <div> {studentName = "Parinaz"} </div>
      <div> {studentName == "Tom"} </div>
    </>
  )
}

export default  R3ExpressionsVsStatements
