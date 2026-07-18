import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Form1() {
  const [firstName, setFirstName] = useState ("Andrew")
  const [lastName, setLastName] = useState ("Provost")
  const [email, setEmail] = useState("")

  function handleSubmit (event) {
    event.preventDefault()
    console.log (firstName, lastName, email)

  }

  function handleChangeFirstName (event) {
    console.log (event)
    console.log (event.target)
    console.log (event.target.name)
    console.log (event.target.value)
    setFirstName (event.target.value)
  }

  function handleChangeLastName (event) {
    setLastName (event.target.value)
  }

  function handleChangeEmail (event) {
    setEmail (event.target.value)
  }

  return (
    <>
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstname"
            value={firstName}
            onChange={(event)=>handleChangeFirstName(event)}
          />
        </Form.Group>
        <Form.Group >
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            value="lastname"
            onChange={handleChangeLastName}
          />
        </Form.Group>
       <Form.Group >
       <Form.Control
            required
            type="email"
            name="email"          
            placeholder="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  )
}

export default Form1
