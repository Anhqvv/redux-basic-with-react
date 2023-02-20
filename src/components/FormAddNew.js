import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

function FormAddNew () {
  return (
      <Form>
          <br/>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text' placeholder='Username' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Create
      </Button>
    </Form>
  )
}

export default FormAddNew
