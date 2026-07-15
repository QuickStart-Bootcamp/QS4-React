import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function State4Object() {
  const [firstName, setFirstName] = useState ("Andrew")
  const [lastName, setLastName] = useState ("Provost")


  function handleSubmit () {

  }

  return (
    <>
      <h2>State: Object</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="firstname"
            value= {firstName}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="lastName"
            value= {lastName}
          />
        </Form.Group>
       
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  )
}

export default State4Object