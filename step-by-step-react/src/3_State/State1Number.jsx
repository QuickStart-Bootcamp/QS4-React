import React, {useState} from 'react'

function State1Number() {

const [total, setTotal] = useState (10)


  let counter = 1

 function handleClick () {
  counter = counter + 1
  console.log (counter)
  setTotal (total+1)
 }


  return (
    <>
      <h2>State: Number</h2>
      <p>Counter: {counter}</p>
      <p>Total: {total}</p>
      <button onClick={handleClick}>Increase</button>
    </>
  )
}

export default State1Number
