import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateUsers } from '../redux/action/action'

const FormAddNew = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const isCreatting = useSelector(state => state.user.isCreatting)

  const handleEmail = e => {
    let target = e.target.value
    setEmail(target)
  }
  const handlePassword = e => {
    let target = e.target.value
    setPassword(target)
  }
  const handleUsername = e => {
    let target = e.target.value
    setUsername(target)
  }

  const handleCreateUser = () => {
    dispatch(fetchCreateUsers(email, password, username))
    setEmail('')
    setPassword('')
    setUsername('')
  }
  return (
    <Form>
      <br />
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          onChange={e => handleEmail(e)}
          value={email}
        />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          onChange={e => handlePassword(e)}
          value={password}
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Username'
          onChange={e => handleUsername(e)}
          value={username}
        />
      </Form.Group>

      <Button
        variant='primary'
        type='button'
        onClick={() => {
          handleCreateUser()
        }}
        disabled={isCreatting}
      >
        Create
      </Button>
    </Form>
  )
}

export default FormAddNew
