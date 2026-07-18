import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
function Template() {

  function handleSubmit () {}
  return (
    <>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Control
            required
            type="text"
            name="firstName"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group >
          <Form.Control
            required
            type="text"
            name="lastName"
            placeholder="Last name"
          />
        </Form.Group>
        <Form.Group >
          <Form.Control
            required
            type="email"
            name="email"          
            placeholder="email"
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Template
