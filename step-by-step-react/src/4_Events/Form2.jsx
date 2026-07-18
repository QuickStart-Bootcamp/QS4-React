import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Form2() {
  const [formData, setFormData] = useState ({
    firstName: "",
    lastName: "",
    email: ""
  })

  function handleChange (event) {
    console.log (formData)
    let name = event.target.name
    let value = event.target.value
    
    setFormData ({...formData, [name]:value})
    
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log (formData)
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Control
          required
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group >
        <Form.Control
          required
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group >
        <Form.Control
          required
          type="email"
          name="email"          
          placeholder="email"
          onChange={handleChange}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Form2
